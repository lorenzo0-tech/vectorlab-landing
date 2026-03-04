/**
 * generate-favicons.mjs
 * Generates all favicon files from the VettoLab logo.
 *
 * Usage:  node scripts/generate-favicons.mjs
 */
import sharp from "sharp";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "..", "public");
const logoPath = resolve(publicDir, "images", "mock", "logo_vettolab.png");

/**
 * Create a square-cropped, centered version of the logo at a given size.
 * Adds slight padding so the icon breathes inside its bounding box.
 */
async function createIcon(size, padding = 0) {
  const innerSize = size - padding * 2;
  const resized = await sharp(logoPath)
    .resize(innerSize, innerSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  if (padding > 0) {
    return sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([{ input: resized, top: padding, left: padding }])
      .png()
      .toBuffer();
  }
  return resized;
}

/**
 * Build a minimal ICO file containing one or more PNG images.
 * ICO format: 6-byte header + 16-byte directory entries + image data.
 */
function buildIco(pngBuffers, sizes) {
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * pngBuffers.length;
  let dataOffset = headerSize + dirSize;

  // ICO header
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(pngBuffers.length, 4); // image count

  const dirEntries = [];
  for (let i = 0; i < pngBuffers.length; i++) {
    const entry = Buffer.alloc(dirEntrySize);
    const s = sizes[i] >= 256 ? 0 : sizes[i]; // 0 means 256
    entry.writeUInt8(s, 0); // width
    entry.writeUInt8(s, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(pngBuffers[i].length, 8); // image size
    entry.writeUInt32LE(dataOffset, 12); // offset
    dataOffset += pngBuffers[i].length;
    dirEntries.push(entry);
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers]);
}

async function main() {
  console.log("🎨 Generating favicons from VettoLab logo...\n");

  // 1. favicon.ico (contains 16x16, 32x32, 48x48 PNGs)
  const ico16 = await createIcon(16);
  const ico32 = await createIcon(32);
  const ico48 = await createIcon(48);
  const icoBuffer = buildIco([ico16, ico32, ico48], [16, 32, 48]);
  writeFileSync(resolve(publicDir, "favicon.ico"), icoBuffer);
  console.log("✅ favicon.ico  (16 + 32 + 48)");

  // 2. favicon-48x48.png
  const png48 = await createIcon(48);
  writeFileSync(resolve(publicDir, "favicon-48x48.png"), png48);
  console.log("✅ favicon-48x48.png");

  // 3. apple-icon.png (180x180)
  const apple = await createIcon(180, 10);
  writeFileSync(resolve(publicDir, "apple-icon.png"), apple);
  console.log("✅ apple-icon.png (180x180)");

  // 4. icon.png (512x512 for PWA / manifest)
  const icon512 = await createIcon(512, 24);
  writeFileSync(resolve(publicDir, "icon.png"), icon512);
  console.log("✅ icon.png (512x512)");

  // 5. favicon-32x32.png (used by many browsers)
  const png32 = await createIcon(32);
  writeFileSync(resolve(publicDir, "favicon-32x32.png"), png32);
  console.log("✅ favicon-32x32.png");

  // 6. favicon-16x16.png
  const png16 = await createIcon(16);
  writeFileSync(resolve(publicDir, "favicon-16x16.png"), png16);
  console.log("✅ favicon-16x16.png");

  // 7. icon-192x192.png (for web manifest)
  const icon192 = await createIcon(192, 10);
  writeFileSync(resolve(publicDir, "icon-192x192.png"), icon192);
  console.log("✅ icon-192x192.png");

  console.log("\n🎉 All favicons generated successfully!");
  console.log(
    "   Next step: deploy and request re-crawl in Google Search Console.",
  );
}

main().catch(console.error);

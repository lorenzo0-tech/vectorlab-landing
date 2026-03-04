/**
 * Generate a proper 1200×630 Open Graph image from the logo.
 * Dark background matching the site with centered logo and brand text.
 *
 * Usage: node scripts/generate-og-image.mjs
 * Requires: sharp
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");
const LOGO = path.join(PUBLIC, "images", "mock", "logo_vettolab.png");

const WIDTH = 1200;
const HEIGHT = 630;

// Site background color
const BG = "#070b14";

async function main() {
  // Load logo and resize to fit (max 280px tall, centered)
  const logoMeta = await sharp(LOGO).metadata();
  const maxH = 260;
  const maxW = 400;
  const scale = Math.min(maxW / logoMeta.width, maxH / logoMeta.height);
  const logoW = Math.round(logoMeta.width * scale);
  const logoH = Math.round(logoMeta.height * scale);

  const resizedLogo = await sharp(LOGO)
    .resize(logoW, logoH, { fit: "inside" })
    .png()
    .toBuffer();

  // Create the SVG text overlay for the brand name and tagline
  const svgText = `
  <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .brand { font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; font-size: 52px; font-weight: 700; fill: #e6edf7; letter-spacing: 0.04em; }
      .tagline { font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; font-size: 22px; font-weight: 400; fill: #94a3b8; letter-spacing: 0.02em; }
    </style>
    <text x="${WIDTH / 2}" y="${HEIGHT / 2 + logoH / 2 + 60}" text-anchor="middle" class="brand">VettoLab</text>
    <text x="${WIDTH / 2}" y="${HEIGHT / 2 + logoH / 2 + 98}" text-anchor="middle" class="tagline">Web Design Studio — Milano</text>
  </svg>`;

  const textOverlay = await sharp(Buffer.from(svgText)).png().toBuffer();

  // Compose: dark background + centered logo + text below
  const logoTop = Math.round(HEIGHT / 2 - logoH / 2 - 50);
  const logoLeft = Math.round(WIDTH / 2 - logoW / 2);

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: BG,
    },
  })
    .composite([
      { input: resizedLogo, top: logoTop, left: logoLeft },
      { input: textOverlay, top: 0, left: 0 },
    ])
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(PUBLIC, "images", "og-image.png"));

  console.log("✓ Generated public/images/og-image.png (1200×630)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

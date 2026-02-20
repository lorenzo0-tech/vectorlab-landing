"use client";

import { useEffect, useRef } from "react";

type OrbNode = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  glow: number;
};

function AmbientOrbsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (reduce?.matches) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const nodes: OrbNode[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = Math.max(26, Math.min(54, Math.floor(width / 34)));
      while (nodes.length < targetCount) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: 1.2 + Math.random() * 2.2,
          glow: 0,
        });
      }
      if (nodes.length > targetCount) {
        nodes.splice(targetCount, nodes.length - targetCount);
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const tick = () => {
      context.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < node.r || node.x > width - node.r) node.vx *= -1;
        if (node.y < node.r || node.y > height - node.r) node.vy *= -1;

        node.glow *= 0.93;
      }

      for (let index = 0; index < nodes.length; index += 1) {
        const a = nodes[index];
        if (!a) continue;

        for (let inner = index + 1; inner < nodes.length; inner += 1) {
          const b = nodes[inner];
          if (!b) continue;

          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.hypot(dx, dy);
          const radiusSum = a.r + b.r + 0.9;

          if (distance < radiusSum) {
            const swapX = a.vx;
            const swapY = a.vy;
            a.vx = b.vx;
            a.vy = b.vy;
            b.vx = swapX;
            b.vy = swapY;
            a.glow = 1;
            b.glow = 1;
          }

          if (distance < 120) {
            const lineAlpha = (1 - distance / 120) * 0.24;
            context.beginPath();
            context.strokeStyle = `rgba(103, 232, 249, ${lineAlpha})`;
            context.lineWidth = 0.9;
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const node of nodes) {
        const pulse = 0.24 + node.glow * 0.5;

        context.beginPath();
        context.fillStyle = `rgba(34, 211, 238, ${pulse})`;
        context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.fillStyle = `rgba(224, 242, 254, ${0.28 + node.glow * 0.4})`;
        context.arc(
          node.x,
          node.y,
          Math.max(0.8, node.r * 0.45),
          0,
          Math.PI * 2,
        );
        context.fill();
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="ambient-network-canvas"
      aria-hidden="true"
    />
  );
}

export function AmbientBackdrop() {
  return (
    <div className="ambient-motion" aria-hidden="true">
      <AmbientOrbsCanvas />
      <span className="ambient-orb ambient-orb-cyan" />
      <span className="ambient-orb ambient-orb-indigo" />
      <span className="ambient-orb ambient-orb-fuchsia" />
      <span className="ambient-line ambient-line-a" />
      <span className="ambient-line ambient-line-b" />
      <span className="ambient-particle ambient-particle-a" />
      <span className="ambient-particle ambient-particle-b" />
      <span className="ambient-particle ambient-particle-c" />
      <span className="ambient-particle ambient-particle-d" />
      <span className="ambient-particle ambient-particle-e" />
      <span className="ambient-particle ambient-particle-f" />
      <span className="ambient-particle ambient-particle-g" />
      <span className="ambient-particle ambient-particle-h" />
      <span className="ambient-particle ambient-particle-i" />
      <span className="ambient-particle ambient-particle-j" />
      <span className="ambient-particle ambient-particle-k" />
      <span className="ambient-particle ambient-particle-l" />
    </div>
  );
}

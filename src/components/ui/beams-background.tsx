"use client";

import React, { useEffect, useRef } from "react";

type Intensity = "subtle" | "medium" | "strong";

interface BeamsBackgroundProps {
  className?: string;
  intensity?: Intensity;
  children?: React.ReactNode;
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.08 + Math.random() * 0.12,
    hue: 190 + Math.random() * 50, // blue ocean hues
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.015 + Math.random() * 0.02,
  };
}

export function BeamsBackground({ className, intensity = "subtle", children }: BeamsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const MIN_BEAMS = 16;
    const opacityMap: Record<Intensity, number> = { subtle: 0.6, medium: 0.8, strong: 1 };

    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const total = Math.max(MIN_BEAMS, Math.floor(rect.width / 120));
      beamsRef.current = Array.from({ length: total }, () => createBeam(rect.width, rect.height));
    };

    updateCanvasSize();
    const ro = new ResizeObserver(updateCanvasSize);
    ro.observe(container);

    function resetBeam(beam: Beam) {
      const rect = container.getBoundingClientRect();
      const column = Math.floor(Math.random() * 3);
      const spacing = rect.width / 3;
      beam.y = rect.height + 100;
      beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 80 + Math.random() * 120;
      beam.speed = 0.4 + Math.random() * 0.5;
      beam.hue = 190 + Math.random() * 50;
      beam.opacity = 0.12 + Math.random() * 0.12;
    }

    function drawBeam(c: CanvasRenderingContext2D, beam: Beam) {
      c.save();
      c.translate(beam.x, beam.y);
      c.rotate((beam.angle * Math.PI) / 180);
      const pulsingOpacity = beam.opacity * (0.85 + Math.sin(beam.pulse) * 0.15) * opacityMap[intensity];
      const gradient = c.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
      gradient.addColorStop(0.15, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(0.45, `hsla(${beam.hue}, 85%, 60%, ${pulsingOpacity})`);
      gradient.addColorStop(0.7, `hsla(${beam.hue + 10}, 80%, 55%, ${pulsingOpacity * 0.9})`);
      gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);
      c.fillStyle = gradient;
      c.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      c.restore();
    }

    function animate() {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.filter = "blur(28px)";
      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) resetBeam(beam);
        drawBeam(ctx, beam);
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      ro.disconnect();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ backgroundColor: 'var(--ocean-bottom)' }}
    >
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default BeamsBackground;

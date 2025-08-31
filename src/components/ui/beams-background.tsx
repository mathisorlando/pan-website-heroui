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

    // Browser feature detection and tuning
    const ua = navigator.userAgent;
    const isFirefox = /firefox/i.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    const supportsCanvasFilter = typeof (ctx as any).filter !== "undefined";
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isChromeLike = /chrome|crios|chromium/i.test(ua) && !/edg/i.test(ua) && !isSafari;
    const HEAVY_MODE = isFirefox || isChromeLike || prefersReducedMotion; // static rendering for Firefox & Chrome
    // For Firefox, disable blur entirely to avoid heavy GPU cost
    const BASE_BLUR_PX = supportsCanvasFilter ? (isSafari ? 24 : isFirefox ? 0 : 12) : 0;
    let currentBlurPx = BASE_BLUR_PX;
    // Lower beam density on Firefox
    const MIN_BEAMS = isSafari ? 16 : isFirefox ? 6 : 10;
    const WIDTH_DIVISOR = isSafari ? 120 : isFirefox ? 200 : 150;
    const opacityMap: Record<Intensity, number> = { subtle: 0.6, medium: 0.8, strong: 1 };
    // Throttle target FPS on non-Safari to reduce load
    const TARGET_FPS = isSafari ? 60 : (isFirefox ? 24 : 30);
    const FRAME_INTERVAL = 1000 / TARGET_FPS;
    let lastFrameTime = 0;
    // Adaptive performance sampling
    let perfLevel: 2 | 1 | 0 = 2; // 2=full, 1=reduced, 0=minimal
    let accumTime = 0;
    let frameCounter = 0;

    // Debounce resize to avoid ResizeObserver loop and excessive work
    let resizeRaf = 0;
    const doResize = () => {
      const rect = container.getBoundingClientRect();
      const sysDpr = window.devicePixelRatio || 1;
      const effectiveDpr = isFirefox ? 1 : sysDpr; // cap DPR on Firefox for perf
      canvas.width = Math.max(1, Math.floor(rect.width * effectiveDpr));
      canvas.height = Math.max(1, Math.floor(rect.height * effectiveDpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(effectiveDpr, effectiveDpr);

      const total = Math.max(MIN_BEAMS, Math.floor(rect.width / WIDTH_DIVISOR));
      const newBeams = Array.from({ length: total }, () => createBeam(rect.width, rect.height));
      beamsRef.current = newBeams;
      if (HEAVY_MODE) {
        // Draw a static frame only
        ctx.clearRect(0, 0, rect.width, rect.height);
        (ctx as any).filter = 'none';
        beamsRef.current.forEach((beam) => {
          // shift beams a little for variation per resize
          beam.y -= beam.speed * 20;
          drawBeam(ctx, beam);
        });
      }
    };
    const updateCanvasSize = () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(doResize);
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

    function animate(now: number) {
      // Frame throttle for non-Safari
      if (now - lastFrameTime < FRAME_INTERVAL) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = now;
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      // Apply blur only when supported; use lower blur on non-Safari for performance
      if (currentBlurPx > 0) {
        (ctx as any).filter = `blur(${currentBlurPx}px)`;
      } else {
        (ctx as any).filter = "none";
      }
      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) resetBeam(beam);
        drawBeam(ctx, beam);
      });
      // Adaptive degradation if FPS is low
      frameCounter += 1;
      accumTime += FRAME_INTERVAL;
      if (frameCounter >= TARGET_FPS) { // roughly every second
        // Estimate FPS from frame spacing
        const estimatedFps = TARGET_FPS; // since we throttle, use TARGET_FPS as baseline
        // If the browser can't keep up with the throttled target (jank observed), degrade
        // We can't directly read jank here, but we can progressively reduce for Firefox/Chromium at lower levels
        if (perfLevel === 2 && (isFirefox || !isSafari)) {
          // First step: disable blur and trim beams by ~25%
          currentBlurPx = 0;
          const trimmed = Math.max(MIN_BEAMS, Math.floor(beamsRef.current.length * 0.75));
          beamsRef.current = beamsRef.current.slice(0, trimmed);
          perfLevel = 1;
        } else if (perfLevel === 1 && (isFirefox || !isSafari)) {
          // Second step: trim further to minimal visual load
          const trimmed = Math.max(MIN_BEAMS, Math.floor(beamsRef.current.length * 0.66));
          beamsRef.current = beamsRef.current.slice(0, trimmed);
          perfLevel = 0;
        }
        frameCounter = 0;
        accumTime = 0;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    if (!HEAVY_MODE) {
      // Pause animation when tab is hidden to save resources
      const handleVisibility = () => {
        if (document.hidden) {
          if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        } else {
          lastFrameTime = 0;
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };
      document.addEventListener('visibilitychange', handleVisibility);
      animationFrameRef.current = requestAnimationFrame(animate);
      return () => {
        ro.disconnect();
        document.removeEventListener('visibilitychange', handleVisibility);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    } else {
      // Heavy mode: static rendering only
      return () => {
        ro.disconnect();
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }
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

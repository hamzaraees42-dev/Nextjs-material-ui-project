"use client";

import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

interface ImageMarqueeProps {
  images: string[];
  height?: number;
  speed?: number;
  background?: string;
}

export default function ImageMarquee({
  images,
  height = 170,
  speed = 40,
  background,
}: ImageMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let x = 0;
    let rafId: number;

    const ensureEnoughContent = () => {
      const containerWidth = container.offsetWidth;
      while (track.scrollWidth < containerWidth * 2) {
        track.innerHTML += track.innerHTML;
      }
    };

    ensureEnoughContent();

    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      x -= (speed * delta) / 1000;

      const resetAt = track.scrollWidth / 2;
      if (Math.abs(x) >= resetAt) x = 0;

      track.style.transform = `translateX(${x}px)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [images, speed]);

  return (
    <Box
      ref={containerRef}
      sx={{
        overflow: "hidden",
        width: "100%",
        height,
        backgroundColor: background,
      }}
    >
      <Box
        ref={trackRef}
        sx={{
          display: "flex",
          width: "max-content",
          alignItems: "center",
          height: "100%",
        }}
      >
        {images.map((src, i) => (
          <MarqueeItem key={i} src={src} />
        ))}
      </Box>

      {/* ✅ STATIC ZIG-ZAG (CLONE SAFE) */}
      <style jsx global>{`
        .marquee-item:nth-child(odd) {
          transform: translateY(-12px);
        }

        .marquee-item:nth-child(even) {
          transform: translateY(12px);
        }
      `}</style>
    </Box>
  );
}

function MarqueeItem({ src }: { src: string }) {
  return (
    <Box
      component="img"
      src={src}
      alt=""
      className="marquee-item"
      sx={{
        width: { xs: 50, sm: 60, md: 125 },
        height: { xs: 50, sm: 60, md: 125 },
        marginRight: "20px",
        flexShrink: 0,
      }}
    />
  );
}

"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollProgress = (scrollTop / docHeight) * 100;

      setProgress(scrollProgress);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 1200,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 300ms ease",
      }}
    >
      <Box
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          backgroundColor: "#E53935", // theme red
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
          position: "relative",
          transition: "transform 200ms ease",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        {/* Progress Ring */}
        <svg
          width="64"
          height="64"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#FFD54F" // theme yellow
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 120ms linear",
            }}
          />
        </svg>

        <KeyboardArrowUpIcon
          sx={{
            color: "#fff",
            fontSize: "2rem",
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
}

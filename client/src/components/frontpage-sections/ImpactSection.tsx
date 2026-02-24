"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

/* ------------------ DATA ------------------ */
const items = [
  {
    icon: <StorefrontIcon fontSize="inherit" />,
    value: 21574,
    label: "Independent\nStores",
  },
  {
    icon: <ShoppingCartIcon fontSize="inherit" />,
    value: 33,
    suffix: "%",
    label: "Of the Retail Grocery\nIndustry Sales",
  },
  {
    icon: <BarChartIcon fontSize="inherit" />,
    value: 253.6,
    prefix: "$",
    label: "Billion In\nAnnual Sales",
  },
  {
    icon: <TrendingUpIcon fontSize="inherit" />,
    value: 1.2,
    suffix: "%",
    label: "Of the United\nStates GDP",
  },
];

/* ------------------ COUNT UP HOOK ------------------ */
const useCountUp = (
  end: number,
  start: boolean,
  duration: number = 2000
): string | number => {
  const [count, setCount] = useState<string | number>(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const current = progress * end;

      setCount(end % 1 === 0 ? Math.floor(current) : current.toFixed(1));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return count;
};

/* ------------------ COMPONENT ------------------ */
export default function ImpactSection() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  /* Scroll detection */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#D90429",
        backgroundImage: `
          radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "22px 22px",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
        <Typography
          sx={{
            fontFamily: "var(--font-fredoka)",
            fontSize: {
              xs: "2.6rem",
              sm: "3.4rem",
              md: "4.2rem", // ⬅ 900–1023
              lg: "5rem", // ⬅ desktop
              xl: "5.2rem",
            },
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "0.04em",
          }}
        >
          Our Impact
        </Typography>

        <Box
          sx={{
            width: 48,
            height: 4,
            bgcolor: "#0B2C6F",
            mx: "auto",
            mt: 2,
            borderRadius: 999,
          }}
        />
      </Box>

      {/* Stats */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 6, md: 4 },
          textAlign: "center",
        }}
      >
        {items.map((item, index) => {
          const count = useCountUp(item.value, startCount);

          return (
            <Box key={index}>
              {/* Icon */}
              <Box
                sx={{
                  width: {
                    xs: 110,
                    md: 120, // ⬅ compact desktop
                    lg: 140,
                  },
                  height: {
                    xs: 110,
                    md: 120,
                    lg: 140,
                  },
                  fontSize: {
                    xs: 48,
                    md: 56,
                    lg: 64,
                  },
                  mx: "auto",
                  mb: 3,
                  borderRadius: "50%",
                  border: "2px dashed rgba(255,255,255,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                {item.icon}
              </Box>

              {/* Counter */}
              <Typography
                sx={{
                  fontFamily: "var(--font-fredoka)",
                  fontSize: {
                    xs: "2.6rem",
                    md: "3.4rem", // ⬅ 900–1023
                    lg: "4.1rem", // ⬅ desktop
                  },
                  fontWeight: 900,
                  color: "#fff",
                  mb: 1,
                }}
              >
                {item.prefix || ""}
                {count}
                {item.suffix || ""}
              </Typography>

              {/* Label */}
              <Typography
                sx={{
                  whiteSpace: "pre-line",
                  fontSize: {
                    xs: "1rem",
                    md: "1.1rem", // ⬅ compact desktop
                    lg: "1.25rem",
                  },
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* CTA */}
      <Box sx={{ textAlign: "center", mt: { xs: 8, md: 10 } }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#0B2C6F",
            color: "#fff",
            fontSize: {
              xs: "1.1rem",
              md: "1.2rem", // ⬅ 900–1023
              lg: "1.35rem",
            },
            py: {
              xs: 1.6,
              md: 1.5,
              lg: 1.9,
            },
            px: {
              xs: 5,
              md: 5.5,
              lg: 6,
            },
            borderRadius: "999px",
            fontWeight: 700,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#08235A",
            },
          }}
        >
          Learn More →
        </Button>
      </Box>
    </Box>
  );
}

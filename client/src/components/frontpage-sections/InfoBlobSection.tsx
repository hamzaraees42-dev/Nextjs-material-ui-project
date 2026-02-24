"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

type HeadingDecorPosition = "default" | "centered";

interface InfoBlobSectionProps {
  title: {
    line1: string;
    line2: string;
  };
  description: string;
  image: string;
  bgColor: string;
  reverse?: boolean;
  textColor?: string;
  showHeadingDecor?: boolean;
  headingDecorSvg?: string;
  headingDecorPosition?: HeadingDecorPosition;
}

export default function InfoBlobSection({
  title,
  description,
  image,
  bgColor,
  reverse = false,
  textColor = "#000",
  showHeadingDecor = false,
  headingDecorSvg,
  headingDecorPosition = "default",
}: InfoBlobSectionProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [overlapProgress, setOverlapProgress] = useState(0);

  /* ---------- Active card detection ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.intersectionRatio > 0.6);
      },
      { threshold: [0.6] }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      /**
       * Progress starts when card is in sticky position
       * and increases as next card overlaps it
       */
      const progress = Math.min(
        Math.max((windowHeight * 0.5 - rect.top) / (windowHeight * 0.5), 0),
        1
      );

      setOverlapProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stickerHeadingSx = {
    position: "relative",
    fontFamily: "var(--font-passion)", // Passion One
    fontWeight: 700,
    color: "#000",

    WebkitTextStroke: "0.2em #fff",
    paintOrder: "stroke fill",

    filter:
      "drop-shadow(0px clamp(2px, 1vw, 10px) clamp(1px, 0.2vw, 5px) rgba(0,0,0,0.55))",

    padding: "0 0.25em",
  };

  return (
    /* STICKY STACK SECTION */
    <Box
      sx={{
        minHeight: "100vh",
        height: "100vh",
        position: "sticky",
        top: 0,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        px: { xs: 2, md: 6 },
        // py: { xs: 6, md: 0 },
        pb: { xs: 25, md: 8 },
        pt: { xs: 18, md: 0 },

        // backgroundImage:
        //   "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
        // backgroundSize: "20px 20px",
        // backgroundPosition: isActive ? "50% 40%" : "50% 50%",
        // transition: "background-position 600ms ease",

        /* 🌸 ADD: slow spin keyframes */
        "@keyframes slowSpin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      }}
    >
      {/* CARD */}
      <Box
        ref={cardRef}
        sx={{
          width: "100%",
          maxWidth: 1200,
          // minHeight: { xs: "auto", md: "calc(90vh - 96px)" },
          bgcolor: bgColor,

          // p: { xs: 5, sm: 4, md: 8 },
          padding: {
            xs: "clamp(30px, 10vw, 150px)",
            md: "clamp(30px, 4vw, 150px)",
          },

          display: "flex",
          flexDirection: {
            xs: "column",
            md: reverse ? "row-reverse" : "row",
          },
          alignItems: "center",
          justifyContent: "flex-start",
          gap: { xs: 4, md: 6 },

          transform: isActive
            ? `
    translateY(${overlapProgress * 6}px)
    rotate(${overlapProgress * -3}deg)
    scale(${1 - overlapProgress * 0.03})
  `
            : "translateY(22px) rotate(-2.2deg) scale(0.96)",

          boxShadow: isActive
            ? "0 28px 80px rgba(0,0,0,0.45)"
            : "0 18px 40px rgba(0,0,0,0.25)",

          opacity: isActive ? 1 : 0.85,

          filter: isActive ? "blur(0)" : "blur(0.3px)",

          transition:
            "transform 600ms cubic-bezier(.22,.61,.36,1), box-shadow 500ms ease, opacity 400ms ease, filter 400ms ease",

          "&:hover": {
            transform: isActive
              ? "scale(1.02)"
              : "translateY(18px) rotate(-2deg) scale(0.98)",
          },

          maskImage: {
            xs: "url(/assets/images/micha-about-card-mask.svg)",
            md: "url(/assets/images/micha-about-card-mask.svg)",
          },
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "cover",

          WebkitMaskImage: {
            xs: "url(/assets/images/micha-about-card-mask.svg)",
            md: "url(/assets/images/micha-about-card-mask.svg)",
          },
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "cover",

          borderRadius: { xs: 4, md: 0 },
        }}
      >
        {/* IMAGE */}
        {/* IMAGE — size locked, no mask */}
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "48%", // FIX
              lg: "52%",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {/* Size container (locks zoom behavior) */}
          <Box
            sx={{
              width: {
                xs: 160,
                sm: 200,
                md: 300,
                lg: 480,
              },
              aspectRatio: "1 / 1",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={`${title.line1} ${title.line2}`}
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",

                borderRadius: "50% 45% 55% 50% / 55% 50% 50% 45%",
                boxShadow: "0 18px 40px rgba(0,0,0,0.35)",

                /* keep your animations */
                transform: isActive ? "translateY(-6px)" : "translateY(0)",
                transition: "transform 500ms ease",

                "&:hover": {
                  transform: { md: "translateY(-12px) scale(1.04)" },
                },
              }}
            />
          </Box>
        </Box>

        {/* TEXT */}
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              md: 480, // FIX: less squeeze at md
              lg: 560,
            },
          }}
        >
          {/* 🔒 Heading wrapper added (NO removal) */}
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* 🌸 SVG BEHIND HEADING */}
            {showHeadingDecor && headingDecorSvg && (
              <Box
                component="img"
                src={headingDecorSvg}
                alt=""
                sx={{
                  position: "absolute",

                  ...(headingDecorPosition === "default"
                    ? {
                        /* 🟢 ORIGINAL positioning — first card stays same */
                        top: "-30%",
                        right: "-0%",
                        transform: "translateY(-60%)",
                      }
                    : {
                        /* 🟣 CENTERED positioning — second card fix */
                        top: "0%",
                        left: "70%",
                        transform: "translate(-50%, -50%)",
                      }),

                  width: { xs: 80, sm: 110, md: 150 },
                  opacity: 0.85,

                  animation: "slowSpin 10s linear infinite",

                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
            )}

            <Typography
              component="h2"
              sx={{
                ...stickerHeadingSx,
                fontSize: {
                  xs: "2.2rem",
                  sm: "2.8rem",
                  md: "3.4rem",
                  lg: "4.8rem",
                },
                lineHeight: 1,
                marginBottom: "0.25em",
                zIndex: 1,
              }}
            >
              {/* FIRST LINE */}
              <Box component="span" sx={{ display: "block" }}>
                {title.line1}
              </Box>

              {/* SECOND LINE — tilted */}
              <Box
                component="span"
                sx={{
                  display: "block",
                  fontSize: {
                    xs: "2.6rem",
                    sm: "3.4rem",
                    md: "4.1rem",
                    lg: "5.6rem",
                  },
                  transform: {
                    xs: "rotate(-4deg) translate(0%, 0%)",
                    md: "rotate(-5deg) translate(1%, -2%)",
                    lg: "rotate(-6deg) translate(2%, -4%)",
                  },
                  transformOrigin: "top left",
                }}
              >
                {title.line2}
              </Box>
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "clamp(14px, 1.15vw, 28px)",
              lineHeight: {
                xs: 1.6,
                md: 1.55,
              },
              fontWeight: 700,
              color: textColor,
              maxWidth: 520,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

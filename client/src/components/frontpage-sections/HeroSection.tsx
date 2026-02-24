"use client";

import { useState } from "react";
import { Box, Container, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SparkleSVG from "@/components/SparkleSVG";
import MichaButtonSVG from "@/components/MichaButtonSVG";

/**
 * Slides configuration
 * Each slide controls:
 * - image
 * - background color
 */
const slides = [
  // ================= YELLOW BACKGROUND =================
  {
    image: "/assets/images/2152003889.jpg",
    bg: "secondary.main", // Yellow background

    // Arrows
    arrowBg: "info.main", // Purple
    arrowIcon: "info.contrastText", // White icon
    arrowHover: "primary.main", // Red on hover

    // Button (SVG ribbon uses currentColor)
    buttonBg: "info.main", // Purple ribbon
    buttonText: "info.contrastText", // White text
    buttonHover: "primary.main", // Red on hover
  },

  // ================= GREEN BACKGROUND =================
  {
    image: "/assets/images/369.jpg",
    bg: "success.main", // Green background

    // Arrows
    arrowBg: "secondary.main", // Yellow
    arrowIcon: "#2d8c40", // ✅ Green text/icon
    arrowHover: "#2d8c40", // Green hover bg
    arrowHoverIcon: "secondary.main", // ✅ Yellow on hover

    // Button
    buttonBg: "secondary.main", // Yellow ribbon
    buttonText: "#2d8c40", // ✅ Green text
    buttonHover: "#2d8c40", // Green hover bg
    buttonHoverText: "secondary.main", // ✅ Yellow text on hover
  },
];

const stickerStyles = {
  display: "block",
  width: "100%",
  position: "relative",

  fontFamily: "var(--font-passion)", // Passion One
  fontWeight: 700,
  color: "#000",

  /* OUTLINE */
  WebkitTextStroke: "0.2em #fff",
  paintOrder: "stroke fill",

  /* SHADOW */
  filter:
    "drop-shadow(0px clamp(2px, 1vw, 10px) clamp(1px, 0.2vw, 5px) rgba(0,0,0,0.55))",

  padding: "0 0.25em",
};

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 3,
        overflow: "hidden",
        bgcolor: slides[activeIndex].bg,
        transition: "background-color 600ms ease",
        py: { xs: 12, md: 12, lg: 18 },
        pb: { xs: 10, md: 12, lg: 15 },
      }}
    >
      {/* DOT BACKGROUND */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
      radial-gradient(
        rgba(0, 0, 0, 0.14) 1px,
        transparent 1px
      )
    `,
          backgroundSize: "20px 20px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Sparkle SVG */}
        {/* ================= HEADING ================= */}
        <Box
          sx={{
            position: "relative",
            display: "table", // 👈 key change
            mx: "auto", // 👈 centers the heading
            textAlign: "center",
          }}
        >
          {/* Sparkle BACKGROUND */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,

              width: { xs: 50, md: 70 },
              aspectRatio: "101 / 87",

              transform: "translate(-40%, -60%)", // 🎯 top-left offset

              color: slides[activeIndex].arrowBg,
              opacity: 0.9,

              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <SparkleSVG />
          </Box>

          {/* Heading text */}
          <Typography
            component="h1"
            sx={{
              position: "relative",
              zIndex: 1, // 👈 text above sparkle
              fontSize: {
                xs: "2.8rem",
                sm: "3.8rem",
                md: "clamp(36px, 6vw, 100px)",
              },
              lineHeight: 0.9,
            }}
          >
            <Box component="span" sx={stickerStyles}>
              Grocer, Together We Grow
            </Box>
          </Typography>
        </Box>

        {/* ================= SLIDER AREA ================= */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: { xs: 1, md: 0 },
          }}
        >
          {/* LEFT ARROW */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: -12, md: 150 },
              width: { md: 72 },
              height: { md: 72 },
              bgcolor: slides[activeIndex].arrowBg,
              color: slides[activeIndex].arrowIcon,
              boxShadow: 4,
              transition: "all 300ms ease",

              "& svg": {
                fontSize: { md: "2.4rem" },
              },

              "&:hover": {
                bgcolor: slides[activeIndex].arrowHover,
                color: slides[activeIndex].arrowHoverIcon,
                transform: "scale(1.08)",
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* IMAGE WRAPPER */}
          <Box
            component="img"
            src={slides[activeIndex].image}
            alt="Community spotlight"
            sx={{
              width: { xs: 260, md: 380 },
              maxWidth: "100%",
              borderRadius: 4,
              zIndex: 1,

              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",

              /* 🔥 FLIP ANIMATION */
              transform: isAnimating
                ? "rotateY(90deg) scale(0.95)"
                : "rotateY(0deg) scale(1)",

              opacity: isAnimating ? 0 : 1,

              transition: "transform 500ms ease, opacity 500ms ease",

              boxShadow: "0 20px 40px rgba(0,0,0,0.25)",

              "&:hover": {
                transform: "scale(1.05) rotate(-1deg)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
              },
            }}
          />

          {/* RIGHT ARROW */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: -12, md: 150 },
              width: { md: 72 },
              height: { md: 72 },
              bgcolor: slides[activeIndex].arrowBg,
              color: slides[activeIndex].arrowIcon,
              boxShadow: 4,
              transition: "all 300ms ease",

              "& svg": {
                fontSize: { md: "2.4rem" },
              },

              "&:hover": {
                bgcolor: slides[activeIndex].arrowHover,
                color: slides[activeIndex].arrowHoverIcon,
                transform: "scale(1.08)",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* ================= CTA ================= */}
        <Box textAlign="center" mt={3}>
          <Button
            disableRipple
            disableFocusRipple
            href="/onboarding"
            disableTouchRipple
            sx={{
              position: "relative",
              py: { xs: 3, md: 3.5 },
              px: { xs: 6, md: 9 },
              minHeight: { xs: 80, md: 90 },

              backgroundColor: "transparent",
              boxShadow: "none",
              textTransform: "none",

              fontWeight: 800,
              fontSize: { xs: "1rem", md: "1.3rem" },

              /* 🔥 CRITICAL: kill MUI background everywhere */
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:active": {
                backgroundColor: "transparent",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "transparent",
              },
            }}
          >
            {/* SVG BACKGROUND */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                width: "115%",
                height: "100%",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%) scaleX(1)", // 👈 important
                zIndex: -1,
                pointerEvents: "none",

                color: slides[activeIndex].buttonBg,

                transition: "transform 500ms ease, color 300ms ease", // 👈 match sample

                ".MuiButton-root:hover &": {
                  transform: "translate(-50%, -50%) scaleX(0.85)", // 👈 squeeze
                  color: slides[activeIndex].buttonHover,
                },

                filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.25))",
              }}
            >
              <MichaButtonSVG />
            </Box>

            {/* TEXT */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                color: slides[activeIndex].buttonText,

                ".MuiButton-root:hover &": {
                  color: slides[activeIndex].buttonHoverText,
                },
              }}
            >
              Join as Store
            </Box>
          </Button>
        </Box>
      </Container>

      {/* ================= IMAGE TRANSITION KEYFRAMES ================= */}
      <style jsx global>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </Box>
  );
}

"use client";

import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";

/* FAQ CONTENT */
const faqs = [
  {
    question: "What is this product, exactly?",
    answer:
      "This is placeholder text. The product is thoughtfully made and designed to fit easily into everyday routines.",
  },
  {
    question: "What is actually inside the product?",
    answer:
      "Dummy content here. Ingredients are selected carefully with balance and quality in mind.",
  },
  {
    question: "Do you offer wholesale or bulk pricing?",
    answer:
      "Yes — placeholder answer. Wholesale and partnership options are available upon request.",
  },
  {
    question: "What makes this different from similar products?",
    answer:
      "This is sample text. The focus is on simplicity, consistency, and a great overall experience.",
  },
];

const FaqSideShape = ({
  side = "left",
  isOpen,
}: {
  side?: "left" | "right";
  isOpen: boolean;
}) => {
  const theme = useTheme();
  const topValue =
    side === "left" ? (isOpen ? "0%" : "0%") : isOpen ? "-5%" : "-13%";
  const fillColor = isOpen
    ? theme.palette.info.main // Purple
    : theme.palette.secondary.main; // Yellow

  return (
    <Box
      sx={{
        position: "absolute",
        top: topValue,
        left: side === "left" ? "-14px" : "auto",
        right: side === "right" ? "-14px" : "auto",
        transform: side === "right" ? "rotate(180deg)" : "none",
        width: 20,
        height: 60,
        zIndex: 2,
        pointerEvents: "none",
      }}
    >
      <svg
        viewBox="0 0 34 89"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <path
          d="M0 39.3C0 41.13 0.39 42.94 1.14 44.5C2.86 48.24 5.66 48.77 5.66 48.77C10.54 50.27 21.74 47.55 25.61 46.55C25.98 46.43 26.35 46.79 26.4 47.31C26.44 47.51 26.46 47.72 26.49 47.91C26.59 48.43 26.33 48.96 25.92 49.03C21.73 49.72 10.97 51.77 6.83 55.11H6.81C6.81 55.11 4.28 56.78 3.54 61.04C3.1 63.4 3.32 65.91 4.2 68.05V68.1L4.22 68.12C5.13 70.24 6.63 71.84 8.36 72.6C9.19 72.98 9.99 73.13 10.69 73.13C12.61 73.13 13.91 72.08 13.91 72.08C18.34 69.12 25.64 57.66 28.16 53.58C28.4 53.18 28.82 53.13 29.12 53.46C29.47 53.82 29.53 54.42 29.27 54.82C26.61 58.78 19.29 70.15 17.81 76.42C17.81 76.42 16.74 79.9 18.33 83.76C19.91 87.62 23.15 88.97 24.79 88.97H33.72V0H24.79C23.15 0 19.91 1.35 18.33 5.21C16.74 9.07 17.81 12.55 17.81 12.55C19.29 18.82 26.61 30.19 29.27 34.15C29.53 34.55 29.47 35.15 29.12 35.51C28.82 35.84 28.4 35.79 28.16 35.39C25.64 31.31 18.34 19.85 13.91 16.89C13.91 16.89 12.61 15.84 10.69 15.84C9.99 15.84 9.19 15.99 8.36 16.37C6.63 17.13 5.13 18.73 4.22 20.85L4.2 20.87C3.32 23.01 3.1 25.52 3.54 27.88C4.28 32.14 6.81 33.81 6.81 33.81H6.83C10.97 37.15 21.73 39.2 25.92 39.89C26.33 39.96 26.59 40.49 26.49 41.01C26.46 41.2 26.44 41.41 26.4 41.61C26.35 42.13 25.98 42.49 25.61 42.37C21.74 41.37 10.54 38.65 5.66 40.15C5.66 40.15 2.86 40.68 1.14 44.42C0.39 45.98 0 47.79 0 49.62V39.3Z"
          fill={fillColor}
        />
      </svg>
    </Box>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const theme = useTheme();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // 20% visibility
      }
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
        backgroundColor: isInView
          ? theme.palette.error.main // Red when in view
          : theme.palette.common.white, // White initially

        transition: "background-color 1000ms ease",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        py: { xs: 12, md: 18 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ================= HEADING ================= */}
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 8, md: 12 },
          position: "relative",
          width: "fit-content",
          margin: "auto",
        }}
      >
        {/* First SVG with clockwise rotation */}
        <Box
          component="img"
          src="/assets/images/micha-faq-shape1.svg"
          alt=""
          sx={{
            position: "absolute",
            top: { xs: "50%", md: "50%" },
            left: { xs: "10px", md: "5%" },
            width: { xs: "60px", md: "100px" },
            height: "auto",
            animation: "spin 10s linear infinite",
            "@keyframes spin": {
              "0%": {
                transform: "rotate(0deg)",
              },
              "100%": {
                transform: "rotate(360deg)",
              },
            },
            zIndex: 1,
            opacity: 0.7,
          }}
        />

        {/* Second SVG with counter-clockwise rotation */}
        <Box
          component="img"
          src="/assets/images/micha-faq-shape2.svg"
          alt=""
          sx={{
            position: "absolute",
            bottom: { xs: "0px", md: "70px" },
            right: { xs: "-0px", md: "0%" },
            width: { xs: "120px", md: "200px" },
            height: "auto",
            animation: "spinReverse 10s linear infinite",
            "@keyframes spinReverse": {
              "0%": {
                transform: "rotate(0deg)",
              },
              "100%": {
                transform: "rotate(-360deg)",
              },
            },
            zIndex: 1,
            opacity: 0.7,
          }}
        />

        <Typography
          component="div"
          sx={{
            fontFamily: "var(--font-passion)",
            fontWeight: 700,
            fontSize: { xs: "3rem", md: "6.5rem" },
            color: "#000",
            WebkitTextStroke: "0.18em #fff",
            paintOrder: "stroke fill",
            filter:
              "drop-shadow(0px clamp(2px,1vw,10px) clamp(1px,0.2vw,5px) rgba(0,0,0,0.55))",
            display: "inline-block",
            lineHeight: 0.9,
            px: 2,
            position: "relative",
            zIndex: 2,
          }}
        >
          Frequently Asked
        </Typography>
        <br />
        <Typography
          component="div"
          sx={{
            mt: 1,
            fontFamily: "var(--font-passion)",
            fontWeight: 700,
            fontSize: { xs: "3.2rem", md: "7rem" },
            color: "#000",
            WebkitTextStroke: "0.18em #fff",
            paintOrder: "stroke fill",
            filter:
              "drop-shadow(0px clamp(2px,1vw,10px) clamp(1px,0.2vw,5px) rgba(0,0,0,0.55))",
            display: "inline-block",
            transform: "rotate(-6deg)",
            lineHeight: 0.9,
            px: 2,
            position: "relative",
            zIndex: 2,
          }}
        >
          Questions
        </Typography>
      </Box>

      {/* ================= FAQ LIST ================= */}
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          px: { xs: 2, md: 0 },
          position: "relative",
          zIndex: 3,
        }}
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <Box
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              sx={{
                position: "relative",
                cursor: "pointer",
                backgroundColor: isOpen
                  ? theme.palette.info.main
                  : theme.palette.secondary.main,
                borderRadius: "7px",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                px: { xs: 4, md: 6 },
                py: { xs: 1, md: 1 },
                boxShadow: "0 6px 0 rgba(0,0,0,0.25)",
                transition:
                  "background-color 300ms ease, box-shadow 300ms ease",
                overflow: "visible",
              }}
            >
              {/* LEFT SVG */}
              <FaqSideShape side="left" isOpen={isOpen} />

              {/* RIGHT SVG */}

              <FaqSideShape side="right" isOpen={isOpen} />

              {/* QUESTION */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.05rem", md: "1.45rem" },
                    fontFamily: "var(--font-fredoka)",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    color: isOpen
                      ? theme.palette.secondary.main
                      : theme.palette.error.main,
                  }}
                >
                  {faq.question}
                </Typography>

                <IconButton
                  sx={{
                    backgroundColor: isOpen
                      ? theme.palette.secondary.main // ✅ Yellow background
                      : theme.palette.error.main, // Red when closed

                    color: isOpen
                      ? theme.palette.info.main // ✅ Purple arrow
                      : theme.palette.common.white, // White arrow

                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",

                    transition:
                      "background-color 300ms ease, color 300ms ease, transform 300ms ease",

                    "&:hover": {
                      backgroundColor: isOpen
                        ? theme.palette.secondary.main
                        : theme.palette.error.main,
                    },
                    mt: 0.5,
                  }}
                >
                  <KeyboardArrowDownRoundedIcon fontSize="medium" />
                </IconButton>
              </Box>

              {/* ANSWER (MERGED BODY) */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition:
                    "grid-template-rows 450ms cubic-bezier(0.4, 0, 0.2, 1)",
                  mt: isOpen ? 2 : 0,
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(-8px)",
                    transition: "opacity 300ms ease, transform 300ms ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.95rem", md: "1.15rem" },
                      lineHeight: 1.8,
                      fontFamily: "var(--font-jakarta)",
                      color: theme.palette.secondary.main,
                      fontWeight: 500,
                      pb: 2,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

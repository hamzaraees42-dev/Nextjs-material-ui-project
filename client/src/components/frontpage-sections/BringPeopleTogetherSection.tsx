"use client";

import { Box, Typography } from "@mui/material";
import { useRef } from "react";

export default function BringPeopleTogetherSection() {
  const imageRef = useRef<HTMLDivElement | null>(null);

  const stickerBase = {
    display: "inline-block",
    position: "relative",
    fontFamily: "var(--font-passion)",
    fontWeight: 700,
    color: "#000",
    WebkitTextStroke: "0.2em #fff",
    paintOrder: "stroke fill",
    filter:
      "drop-shadow(0px clamp(2px, 1vw, 10px) clamp(1px, 0.2vw, 5px) rgba(0,0,0,0.55))",
    px: "0.35em",
    lineHeight: 1,
  };

  /* ===== IMAGE TILT ===== */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -8;
    const rotateY = (x / rect.width - 0.5) * 8;

    imageRef.current.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <Box
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        backgroundColor: "#FDECEC",
        backgroundImage: `
          radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
          radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "16px 16px, 32px 32px",
        backgroundPosition: "0 0, 8px 8px",
        pt: { xs: 4, md: 6 },
        pb: { xs: 10, md: 24 },
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: "auto", textAlign: "center" }}>
        {/* ===== MAIN HEADING ===== */}
        <Typography
          component="h2"
          sx={{
            width: "fit-content",
            mx: "auto",
            transform: "translateY(12%)",
            fontSize: {
              xs: "clamp(28px, 8.5vw, 150px)",
              md: "clamp(28px, 6.2vw, 150px)",
            },
          }}
        >
          <Box
            component="span"
            sx={{
              ...stickerBase,
              fontSize: {
                xs: "clamp(32px, 10vw, 160px)",
                md: "clamp(32px, 7vw, 160px)",
              },
              transform: "rotate(-3deg)",
            }}
          >
            Grocer Connect
          </Box>

          <Box
            component="span"
            sx={{
              ...stickerBase,
              transform: "rotate(-4deg) translate(-35%, 45%)",
            }}
          >
            Brings
          </Box>

          <br />

          <Box
            component="span"
            sx={{
              ...stickerBase,
              transform: "rotate(3deg) translate(20%, 10%)",
            }}
          >
            People Together
          </Box>
        </Typography>

        {/* ===== IMAGE OUTER WRAPPER (allows overflow) ===== */}
        <Box
          ref={imageRef}
          sx={{
            maxWidth: 900,
            mx: "auto",
            mt: 6,
            position: "relative",
            transition: "transform 300ms ease-out",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {/* ===== IMAGE MASK (clips image only) ===== */}
          <Box
            sx={{
              borderRadius: "48px",
              overflow: "hidden",
              boxShadow: "0 40px 90px rgba(0,0,0,0.35)",
            }}
          >
            <Box
              component="img"
              src="/assets/images/144500.jpg"
              alt="People enjoying drinks together"
              sx={{ width: "100%", display: "block" }}
            />
          </Box>

          {/* ===== LEFT STICKER (OUTSIDE IMAGE) ===== */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: -24, sm: -32, md: -60 },
              left: { xs: 0, sm: -32, md: -60 },
              width: { xs: 110, sm: 140, md: 170 },
              height: { xs: 110, sm: 140, md: 170 },
              cursor: "pointer",
              "&:hover .shape": {
                transform: "rotate(180deg)",
              },
              "&:hover .text": {
                transform: "rotate(-6deg) scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src="/assets/images/grab-and-go-shape.svg"
              className="shape"
              sx={{
                width: "100%",
                transition: "transform 600ms cubic-bezier(.22,.61,.36,1)",
              }}
            />
            <Typography
              className="text"
              sx={{
                ...stickerBase,
                position: "absolute",
                right: { xs: "-5%", md: "-10%" },
                bottom: { xs: "5%", md: "0%" },
                fontSize: {
                  xs: "clamp(14px, 4vw, 20px)",
                  sm: "clamp(16px, 3vw, 26px)",
                  md: "clamp(22px, 3vw, 40px)",
                },
                transform: "rotate(-10deg)",
                transition: "transform 300ms ease",
                textAlign: "center",
              }}
            >
              GRAB & GO!
            </Typography>
          </Box>

          {/* ===== RIGHT STICKER (OUTSIDE IMAGE) ===== */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: -24, sm: -32, md: -60 },
              right: { xs: -0, sm: -32, md: -60 },
              width: { xs: 120, sm: 155, md: 190 },
              height: { xs: 120, sm: 155, md: 190 },
              cursor: "pointer",
              "&:hover .shape": {
                transform: "rotate(-180deg)",
              },
              "&:hover .text": {
                transform: "rotate(6deg) scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src="/assets/images/shake-up-your-tastebuds-shape.svg"
              className="shape"
              sx={{
                width: "100%",
                transition: "transform 600ms cubic-bezier(.22,.61,.36,1)",
              }}
            />
            <Typography
              className="text"
              sx={{
                ...stickerBase,
                position: "absolute",
                top: "50%",
                left: { xs: "15%", md: "30%" },
                fontSize: {
                  xs: "clamp(13px, 3.5vw, 18px)",
                  sm: "clamp(15px, 2.8vw, 22px)",
                  md: "clamp(20px, 2vw, 30px)",
                },
                transform: "rotate(10deg)",
                transition: "transform 300ms ease",
                textAlign: "center",
              }}
            >
              SHAKE UP
              <br />
              YOUR
              <br />
              TASTEBUDS!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

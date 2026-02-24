"use client";

import { Box, Typography } from "@mui/material";

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    author: "John Doe",
    bg: "#F56B82",
    color: "#5A0F1E",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    author: "John Doe",
    bg: "#2F8F46",
    color: "#E8F56B",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    author: "John Doe",
    bg: "#9E1B1B",
    color: "#FFECEC",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    author: "John Doe",
    bg: "#DCE75A",
    color: "#2F6B2F",
  },
];

// duplicate ONCE
const loopItems = [...testimonials, ...testimonials];

export default function TestimonialMarqueeSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#FDECEC",
        backgroundImage: `
          radial-gradient(rgba(0,0,0,0.09) 1px, transparent 1px),
          radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)
        `,
        backgroundSize: "16px 16px, 32px 32px",
        backgroundPosition: "0 0, 8px 8px",
        pt: { xs: 4, md: 4 },
        pb: { xs: 10, md: 14 },
        overflow: "hidden",
      }}
    >
      {/* TRACK */}
      <Box
        sx={{
          display: "flex",
          width: "200%", // 🔑 FORCE exact width
          animation: "marquee 32s linear infinite",

          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" }, // 🔑 NOW CORRECT
          },
        }}
      >
        {loopItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              minWidth: {
                xs: 300,
                md: 330, // ⬅ compact desktop
                lg: 380,
              },
              p: {
                xs: 8,
                md: 7, // ⬅ slightly tighter
                lg: 10,
              },
              mx: 2,
              borderRadius: "20px",
              backgroundColor: item.bg,
              color: item.color,
              boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
              transform: "rotate(-1deg)",
              transition: "transform 300ms ease",

              "&:hover": {
                transform: "rotate(0deg) scale(1.05)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1.05rem",
                  md: "1.25rem", // ⬅ 900–1023
                  lg: "1.45rem",
                },
                lineHeight: {
                  xs: 1.5,
                  md: 1.55,
                  lg: 1.6,
                },
                fontWeight: 700,
                mb: 3,
              }}
            >
              “{item.quote}”
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  md: "1rem", // ⬅ compact desktop
                  lg: "1.1rem",
                },
                letterSpacing: {
                  xs: "0",
                  md: "0.02em",
                  lg: "0.04em",
                },
                fontWeight: 800,
                opacity: 0.9,
              }}
            >
              {item.author}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

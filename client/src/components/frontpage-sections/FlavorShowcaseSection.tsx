"use client";

import { Box, Typography } from "@mui/material";

const flavors = [
  {
    title: "Basmati Rice",
    color: "#6D4C41",
    image: "/assets/images/8251404.jpg",
  },
  {
    title: "Olive Oil",
    color: "#2E7D32",
    image: "/assets/images/25745503.jpg",
  },
  {
    title: "Pure Honey",
    color: "#F9A825",
    image: "/assets/images/11284590.jpg",
  },
  {
    title: "Green Tea",
    color: "#33691E",
    image: "/assets/images/5501118.jpg",
  },
];

export default function FlavorShowcaseSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#FDECEC",

        backgroundImage: `
        radial-gradient(rgba(0,0,0,0.09) 1px, transparent 1px),
        radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)`,
        backgroundSize: "16px 16px, 32px 32px",
        backgroundPosition: "0 0, 8px 8px",

        py: { xs: 12, md: 18 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // mobile
            md: "repeat(2, 1fr)", // tablets & 1024px
            lg: "repeat(4, 1fr)", // large desktop
          },
          gap: { xs: 4, md: 4 },
          alignItems: "flex-end",
        }}
      >
        {flavors.map((flavor) => (
          <Box
            key={flavor.title}
            sx={{
              textAlign: "center",
              transition: "transform 350ms ease",
              willChange: "transform",

              "&:hover": {
                transform: "translateY(-12px) scale(1.06)",
              },

              /* 👇 THIS scopes hover to THIS card only */
              "&:hover .flavor-desc": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            {/* IMAGE WRAPPER */}
            <Box
              sx={{
                width: {
                  xs: 250,
                  md: 260, // ⬅ 900–1023
                  lg: 300, // ⬅ desktop
                },
                height: {
                  xs: 380,
                  md: 400, // ⬅ compact desktop
                  lg: 460,
                },
                mx: "auto",
                borderRadius: 4,
                overflow: "hidden",
                filter: "drop-shadow(0 22px 45px rgba(0,0,0,0.35))",
              }}
            >
              <Box
                component="img"
                src={flavor.image}
                alt={flavor.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                mt: 3,
                fontFamily: "var(--font-passion)",
                fontSize: {
                  xs: "1.2rem",
                  md: "1.4rem",
                  lg: "1.9rem",
                },
                letterSpacing: {
                  xs: "0.06em",
                  md: "0.08em",
                  lg: "0.12em",
                },
                fontWeight: 700,
                color: flavor.color,
              }}
            >
              {flavor.title.toUpperCase()}
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              className="flavor-desc"
              sx={{
                mt: 2,
                fontFamily: "var(--font-jakarta)",
                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                  lg: "1.1rem",
                },
                lineHeight: 1.7,
                maxWidth: 260,
                mx: "auto",
                color: "#333",
                opacity: { xs: 1, md: 0 },
                transform: { xs: "none", md: "translateY(10px)" },
                transition: {
                  md: "opacity 280ms ease, transform 280ms ease",
                },
                minHeight: 70,
                pointerEvents: "none",
              }}
            >
              Raw Kombucha made with carefully selected ingredients. Dummy
              content for now until final copy is ready.
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

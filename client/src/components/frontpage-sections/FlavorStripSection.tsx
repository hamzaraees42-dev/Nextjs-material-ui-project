"use client";

import { Box, Typography } from "@mui/material";

const flavors = [
  {
    title: "Western Canada",
    bg: "#7f4e9f",
    color: "#fbef43",
    hoverBg: "#fbef43",
    hoverColor: "#7f4e9f",
  },
  {
    title: "Ontario",
    bg: "#f29396",
    color: "#eb373e",
    hoverBg: "#eb373e",
    hoverColor: "#f29396",
  },
  {
    title: "Atlantic Provinces",
    bg: "#f6a221",
    color: "#2d8c40",
    hoverBg: "#6db54e",
    hoverColor: "#ffba50",
  },
  {
    title: "Northern Canada",
    bg: "#fbef43",
    color: "#eb373e",
    hoverBg: "#eb373e",
    hoverColor: "#fbef43",
  },
];

export default function FlavorStripSection() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        },
        width: "100%",
        overflow: "hidden",
      }}
    >
      {flavors.map((flavor, index) => (
        <Box
          key={index}
          sx={{
            height: {
              xs: 100,
              sm: 100,
              md: 120,
              lg: 120,
            },
            bgcolor: flavor.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",
            transition: "background-color 350ms ease, transform 350ms ease",

            "&:hover": {
              bgcolor: flavor.hoverBg,
              transform: "translateY(-4px)",
            },

            "&:hover .flavor-title": {
              color: flavor.hoverColor,
            },
          }}
        >
          <Typography
            className="flavor-title"
            sx={{
              fontFamily: "var(--font-be-vietnam)",
              fontSize: "clamp(20px, 1.565vw, 42px)",
              lineHeight: 1.3,
              textTransform: "uppercase",
              fontWeight: 900,
              letterSpacing: "0.035em",
              color: flavor.color,
              whiteSpace: "pre-line",
              textShadow: "0.5px 0 0 currentColor",
              transition: "color 350ms ease",
            }}
          >
            {flavor.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

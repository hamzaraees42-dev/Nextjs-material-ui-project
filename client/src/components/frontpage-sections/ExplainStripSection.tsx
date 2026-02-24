"use client";

import { Box, Typography } from "@mui/material";

const rows = [
  {
    text: "Independent, Not Alone",
    bg: "#EF3A3A",
    color: "#FFFFFF",
    hoverBg: "#F29396",
    hoverColor: "#EB373E",
  },
  {
    text: "A Connected Grocery Network",
    bg: "#7F4E9F",
    color: "#FBEF43",
    hoverBg: "#FBEF43",
    hoverColor: "#7F4E9F",
  },
  {
    text: "Built to Grow Together",
    bg: "#6DB54E",
    color: "#2D8C40",
    hoverBg: "#2D8C40",
    hoverColor: "#6DB54E",
  },
];

export default function ExplainStripSection() {
  return (
    <Box>
      {rows.map((row, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: row.bg,
            color: row.color,
            py: { xs: 6, md: 8 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",

            transition: "background-color 300ms ease, color 300ms ease",

            "&:hover": {
              backgroundColor: row.hoverBg,
              color: row.hoverColor,
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-passion)",
              fontWeight: 900,
              letterSpacing: "3px",
              textTransform: "Uppercase",
              textShadow: "0 6px 0 rgba(0,0,0,0.15)",
              fontSize: {
                xs: "1.6rem", // mobile
                sm: "3.2rem", // tablets
                md: "4.1rem", // ⬅ 900–1023 (compact desktop)
                lg: "5.2rem", // ⬅ desktop
                xl: "5.9rem", // ⬅ large screens
              },
              lineHeight: 1.05,
              px: { xs: 1, md: 0 },
            }}
          >
            {row.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

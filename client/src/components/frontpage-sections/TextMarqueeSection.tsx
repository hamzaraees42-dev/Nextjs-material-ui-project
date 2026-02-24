"use client";

import { Box, Typography } from "@mui/material";

const TEXT = "National Grocers Association";
const WORDS = TEXT.split(" ");

const gifStyle = {
  width: { xs: 40, md: 64 },
  height: "auto",
  borderRadius: "12px",
};

export default function TextMarqueeSection() {
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
        overflow: "hidden",
        py: { xs: 4, md: 6 },
      }}
    >
      {/* TRACK */}
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "marquee 150s linear infinite",

          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {[...Array(2)].map((_, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
            {[...Array(8)].map((_, j) => (
              <Box
                key={j}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: { xs: 3, md: 5 },
                  gap: { xs: 2, md: 3 },
                }}
              >
                {WORDS.map((word, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                  >
                    {/* WORD */}
                    <Typography
                      sx={{
                        fontSize: { xs: "2.2rem", md: "8rem" },
                        fontWeight: 900,
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                        color: "#E53935",
                        letterSpacing: "0.1em",
                        opacity: 0.9,
                      }}
                    >
                      {word}
                    </Typography>

                    {/* GIF AFTER EACH WORD */}
                    <Box
                      component="img"
                      src={
                        index % 2 === 0
                          ? "/assets/images/shopping-cart.gif"
                          : "/assets/images/grocery.gif"
                      }
                      alt="icon"
                      sx={gifStyle}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

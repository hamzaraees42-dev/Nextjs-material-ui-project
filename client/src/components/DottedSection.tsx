"use client";

import { Box } from "@mui/material";

interface DottedSectionProps {
  children: React.ReactNode;
}

export default function DottedSection({ children }: DottedSectionProps) {
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
      }}
    >
      {children}
    </Box>
  );
}

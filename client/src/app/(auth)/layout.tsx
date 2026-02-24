"use client";

import { Box } from "@mui/material";
import DottedSection from "@/components/DottedSection";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DottedSection>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        {children}
      </Box>
    </DottedSection>
  );
}

"use client";

import { Card, Box } from "@mui/material";

export default function OnboardingCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card
      sx={{
        p: { xs: 3, sm: 4 },
        borderRadius: 4,
        boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
        backgroundColor: "background.paper",
      }}
    >
      {children}
    </Card>
  );
}

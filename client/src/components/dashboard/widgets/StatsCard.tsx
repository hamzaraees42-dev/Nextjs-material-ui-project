"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface StatsCardProps {
  label: string;
  value: string | number;
  color?: "primary" | "secondary" | "success" | "warning" | "info";
}

export default function StatsCard({
  label,
  value,
  color = "primary",
}: StatsCardProps) {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid #e6e6e6",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        bgcolor: `${theme.palette[color].main}10`,
      }}
    >
      {/* Left accent bar */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 6,
          height: "100%",
          bgcolor: theme.palette[color].main,
        }}
      />

      <CardContent sx={{ pl: 3 }}>
        <Typography
          sx={{
            fontSize: "0.95rem", // slightly bigger than body2
            fontWeight: 600,
            color: "text.secondary",
            letterSpacing: 0.2,
          }}
          gutterBottom
        >
          {label}
        </Typography>

        <Typography
          variant="h4"
          fontWeight={800}
          sx={{ color: theme.palette[color].main }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

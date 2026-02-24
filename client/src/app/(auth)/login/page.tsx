"use client";

import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 0, md: 2 },
        width: "100%",
      }}
    >
      {/* FIXED BACK BUTTON (TOP-LEFT OF PAGE) */}
      <Box
        sx={{
          position: "fixed",
          top: 24,
          left: 24,
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={() => router.push("/")}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 1,
            borderRadius: 999,
            backgroundColor: "background.paper",
            boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
            color: "text.primary",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.06)",
            },
          }}
        >
          <ArrowBackIcon fontSize="small" />
          <Typography fontSize={14} fontWeight={600}>
            Back
          </Typography>
        </IconButton>
      </Box>

      {/* LOGIN CARD */}
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: 420, md: 760 }, // 👈 WIDER DESKTOP CARD
          backgroundColor: "background.paper",
          borderRadius: { xs: 4, md: 6 },
          boxShadow: "0 35px 100px rgba(0,0,0,0.18)",
          p: { xs: 3, sm: 4, md: 7 }, // 👈 generous padding
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          color="primary.main"
          textAlign="center"
          mb={1}
          fontSize={{ xs: "1.5rem", sm: "2.3rem" }}
        >
          Welcome back
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mb={4}
          fontSize={{ xs: "0.9rem", sm: "1rem" }}
        >
          Log in to manage your store and orders
        </Typography>

        <LoginForm />
      </Box>
    </Box>
  );
}

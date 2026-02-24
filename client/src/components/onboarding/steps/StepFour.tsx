"use client";

import {
  Box,
  Typography,
  Button,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";

interface StepFourProps {
  email: string;
}

export default function StepFour({ email }: StepFourProps) {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);

  /* =========================
     VERIFY OTP
     ========================= */
  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setError("Please enter the 6-digit verification code");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      await authService.verifyOtp({
        email,
        otp: Number(otp),
      });

      setVerified(true);

      // ✅ After verification → go to login
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Invalid verification code. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     RESEND OTP
     ========================= */
  const handleResendOtp = async () => {
    try {
      setResending(true);
      setError(null);

      await authService.resendOtp({ email });
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Failed to resend code. Please try again."
      );
    } finally {
      setResending(false);
    }
  };

  /* =========================
     VERIFIED SUCCESS STATE
     ========================= */
  if (verified) {
    return (
      <Box textAlign="center" maxWidth={600} mx="auto">
        <CheckCircleRoundedIcon
          sx={{ fontSize: 90, color: "success.main", mb: 2 }}
        />

        <Typography variant="h3" fontWeight={700} mb={1}>
          Account verified 🎉
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Your email has been successfully verified.
        </Typography>

        <Typography color="text.secondary">
          Redirecting you to the login page…
        </Typography>
      </Box>
    );
  }

  /* =========================
     OTP FORM
     ========================= */
  return (
    <Box textAlign="center" maxWidth={480} mx="auto" px={2}>
      <Typography variant="h3" fontWeight={700} mb={1}>
        Verify your email
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Enter the 6-digit code sent to <strong>{email}</strong>
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <TextField
        label="Verification code"
        placeholder="123456"
        fullWidth
        value={otp}
        onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
        sx={{ mb: 3 }}
      />

      <Button
        variant="contained"
        size="large"
        fullWidth
        disabled={loading}
        onClick={handleVerifyOtp}
        sx={{ height: 48 }}
      >
        {loading ? (
          <CircularProgress size={22} color="inherit" />
        ) : (
          "Verify email"
        )}
      </Button>

      <Box mt={3}>
        <Typography variant="body2" color="text.secondary">
          Didn’t receive the code?
        </Typography>

        <Button variant="text" onClick={handleResendOtp} disabled={resending}>
          {resending ? "Resending..." : "Resend code"}
        </Button>
      </Box>
    </Box>
  );
}

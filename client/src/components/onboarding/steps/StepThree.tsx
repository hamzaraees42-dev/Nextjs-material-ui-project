"use client";

import { Box, TextField, Typography, Button, Alert } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { authService } from "@/services/auth.service";

interface StepThreeProps {
  data: any;
  setData: (data: any) => void;
  onBack: () => void;
  onFinish: () => void;
}

export default function StepThree({
  data,
  setData,
  onBack,
  onFinish,
}: StepThreeProps) {
  const [errors, setErrors] = useState<{
    phone?: string;
    registeredName?: string;
    tradingName?: string;
  }>({});

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleFinish = async () => {
    const newErrors: typeof errors = {};

    if (!data.phone) {
      newErrors.phone = "Please enter a telephone number";
    } else if (!isValidCanadaPhone(data.phone)) {
      newErrors.phone = "Enter a valid Canadian phone number";
    }

    if (!data.registeredName?.trim()) {
      newErrors.registeredName = "Registered business name is required";
    }

    if (!data.tradingName?.trim()) {
      newErrors.tradingName = "Trading name is required";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);
      setApiError(null);

      await authService.signup({
        email: data.email,
        password: data.password,
        fullName: data.ownerName,
        phoneNumber: data.phone,
        businessName: data.businessName,
        businessReg: data.registeredName,
        tradingName: data.tradingName,
        storeAddress: data.address,
      });

      // ✅ success → go to verification step
      onFinish();
    } catch (err: any) {
      setApiError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const formatCanadaPhone = (value: string) => {
    let digits = value.replace(/\D/g, "");

    // Remove leading 1 if user types it
    if (digits.startsWith("1")) {
      digits = digits.slice(1);
    }

    // Limit to 10 digits
    digits = digits.slice(0, 10);

    if (digits.length === 0) return "+1 (";
    if (digits.length <= 3) return `+1 (${digits}`;
    if (digits.length <= 6)
      return `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`;

    return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(
      6
    )}`;
  };

  const isValidCanadaPhone = (value: string) => {
    return /^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(value);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
        gap: { xs: 4, md: 6 },
        alignItems: "center",
        maxWidth: 1100,
        mx: "auto",
        width: "100%",
      }}
    >
      {/* LEFT — FORM */}
      <Box>
        <Typography
          variant="h3"
          color="primary.main"
          fontWeight={700}
          sx={{ mb: 1 }}
        >
          Final details
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          We just need a few final details to complete your setup.
        </Typography>

        {apiError && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {apiError}
          </Alert>
        )}

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Telephone Number"
            placeholder="+1 (416) 555-1234"
            fullWidth
            value={data.phone || ""}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            inputProps={{ inputMode: "tel" }}
            onChange={(e) => {
              const formatted = formatCanadaPhone(e.target.value);
              setData({ ...data, phone: formatted });
            }}
          />

          <TextField
            label="Registered Business Name"
            fullWidth
            value={data.registeredName || ""}
            error={Boolean(errors.registeredName)}
            helperText={errors.registeredName}
            onChange={(e) =>
              setData({ ...data, registeredName: e.target.value })
            }
          />

          <TextField
            label="Trading Name"
            fullWidth
            value={data.tradingName || ""}
            error={Boolean(errors.tradingName)}
            helperText={errors.tradingName}
            onChange={(e) => setData({ ...data, tradingName: e.target.value })}
          />

          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button variant="outlined" size="large" onClick={onBack}>
              Back
            </Button>

            <Button
              variant="contained"
              size="large"
              sx={{ px: 5 }}
              onClick={handleFinish}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Finish setup"}
            </Button>
          </Box>
        </Box>
      </Box>

      {/* RIGHT — IMAGE */}
      <Box
        sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
      >
        <Image
          src="/assets/images/11667077.png"
          alt="Final details"
          width={400}
          height={400}
        />
      </Box>
    </Box>
  );
}

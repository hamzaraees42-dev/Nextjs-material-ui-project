"use client";

import { Box, TextField, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface StepOneProps {
  data: any;
  setData: (data: any) => void;
  onNext: () => void;
}

export default function StepOne({ data, setData, onNext }: StepOneProps) {
  const [errors, setErrors] = useState<{
    businessName?: string;
    ownerName?: string;
    email?: string;
    password?: string;
  }>({});

  const handleContinue = () => {
    const newErrors: typeof errors = {};

    if (!data.businessName?.trim()) {
      newErrors.businessName = "Please enter your business name";
    }

    if (!data.ownerName?.trim()) {
      newErrors.ownerName = "Please enter the owner’s name";
    }

    if (!data.email?.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.password || data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
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
          sx={{ mb: 1, fontSize: { xs: "1.8rem", md: "2.5rem" } }}
        >
          Let’s get started
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Tell us a bit about your business to begin.
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Business Name"
            placeholder="e.g. Fresh Mart Ltd"
            fullWidth
            value={data.businessName || ""}
            error={Boolean(errors.businessName)}
            helperText={errors.businessName}
            onChange={(e) => setData({ ...data, businessName: e.target.value })}
          />

          <TextField
            label="Owner Name"
            placeholder="e.g. John Smith"
            fullWidth
            value={data.ownerName || ""}
            error={Boolean(errors.ownerName)}
            helperText={errors.ownerName}
            onChange={(e) => setData({ ...data, ownerName: e.target.value })}
          />

          <TextField
            label="Email Address"
            placeholder="e.g. john@freshmart.com"
            type="email"
            fullWidth
            value={data.email || ""}
            error={Boolean(errors.email)}
            helperText={errors.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={data.password || ""}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <Button
            size="large"
            variant="contained"
            sx={{ mt: 2, alignSelf: "flex-start", px: 5 }}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </Box>
      </Box>

      {/* RIGHT — ILLUSTRATION */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-12px)" },
              "100%": { transform: "translateY(0)" },
            },
          }}
        >
          <Image
            src="/assets/images/12468696.png"
            alt="Business onboarding illustration"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

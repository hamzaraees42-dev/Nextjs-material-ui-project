"use client";

import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";

export default function LoginForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    const newErrors: typeof errors = {};

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.password) {
      newErrors.password = "Please enter your password";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);
      setErrors({});

      const response = await authService.loginStore(form);

      const token = response.data?.data?.token;
      const backendRole = response.data?.data?.user?.role;

      if (!token || !backendRole) {
        throw new Error("Invalid login response");
      }

      // 🔁 MAP BACKEND ROLE → FRONTEND ROLE
      const userRole = backendRole === "ADMIN" ? "admin" : "store";

      // ✅ STORE AUTH (for middleware + UI)
      document.cookie = `auth_token=${token}; path=/`;
      document.cookie = `userRole=${userRole}; path=/`;

      localStorage.setItem("auth_token", token);
      localStorage.setItem("userRole", userRole);

      router.push("/dashboard");
    } catch (err: any) {
      setErrors({
        general:
          err?.response?.data?.message ||
          "Invalid email or password. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {errors.general && (
        <Typography color="error" fontSize={14}>
          {errors.general}
        </Typography>
      )}

      <TextField
        label="Email address"
        type="email"
        fullWidth
        value={form.email}
        error={Boolean(errors.email)}
        helperText={errors.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        fullWidth
        value={form.password}
        error={Boolean(errors.password)}
        helperText={errors.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        size="large"
        fullWidth
        disabled={loading}
        onClick={handleSubmit}
        sx={{ mt: 1, height: 48 }}
      >
        {loading ? <CircularProgress size={22} color="inherit" /> : "Log in"}
      </Button>

      <Box textAlign="center" mt={1}>
        <Typography variant="body2" color="text.secondary">
          Don’t have an account?{" "}
          <Typography
            component="span"
            color="primary.main"
            fontWeight={700}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/onboarding")}
          >
            Sign up
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

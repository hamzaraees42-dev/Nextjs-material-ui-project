import axios from "axios";

export const authService = {
  signup: (data: any) => axios.post("/api/auth/signup", data),

  verifyOtp: (data: { email: string; otp: number }) =>
    axios.post("/api/auth/verify-otp", data),

  resendOtp: (data: { email: string }) =>
    axios.post("/api/auth/resend-otp", data),

  loginStore: (data: { email: string; password: string }) =>
    axios.post("/api/auth/login", data),

  loginAdmin: (data: { email: string; password: string }) =>
    axios.post("/api/auth/admin/login", data),

  logout: () => axios.post("/api/auth/logout"),
};

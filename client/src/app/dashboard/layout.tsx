"use client";

import { Box, CircularProgress } from "@mui/material";
import Sidebar from "@/components/dashboard/layout/Sidebar";
import Topbar from "@/components/dashboard/layout/Topbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    const role = localStorage.getItem("userRole");

    if (!token || !role) {
      router.replace("/login");
      return;
    }

    setCheckingAuth(false);
  }, [router]);

  // ⏳ Prevent UI flash while checking auth
  if (checkingAuth) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#e7e7e7ff", // keep theme background
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#e7e7e7ff", // ✅ MiCha Yellow
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Topbar */}
        <Topbar />

        {/* Page content */}
        <Box
          sx={{
            p: { xs: 2, md: 4 },
            flexGrow: 1,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

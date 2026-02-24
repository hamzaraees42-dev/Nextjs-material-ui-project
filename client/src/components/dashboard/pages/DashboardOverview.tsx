"use client";

import { Typography, Box } from "@mui/material";
import { useState } from "react";
import StoresTable from "../tables/StoresTable";
import OrdersTable from "@/components/dashboard/tables/OrdersTable";

export default function DashboardOverview() {
  const [userRole] = useState<"admin" | "store">("store");

  return (
    <Box>
      {/* ADMIN VIEW */}
      {userRole === "admin" && (
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 3,
            p: { xs: 2, md: 4 },
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="h4" fontWeight={700} mb={1}>
            Grocery Stores
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            List of grocery stores registered on the platform
          </Typography>

          <StoresTable />
        </Box>
      )}

      {/* STORE VIEW */}
      {userRole === "store" && (
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 3,
            p: { xs: 2, md: 4 },
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="h4" fontWeight={700} mb={1}>
            My Orders
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Orders you have placed with suppliers
          </Typography>

          <OrdersTable />
        </Box>
      )}
    </Box>
  );
}

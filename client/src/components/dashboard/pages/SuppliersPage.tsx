"use client";

import { Box, Button, Typography } from "@mui/material";
import SuppliersTable from "@/components/dashboard/tables/SuppliersTable";

export default function SuppliersPage() {
  return (
    <>
      {/* Page Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Suppliers
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Manage supplier listings and availability
          </Typography>
        </Box>

        <Button variant="contained" color="primary">
          Add Supplier
        </Button>
      </Box>

      {/* Table */}
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 3,
          border: "1px solid #e6e6e6",
          p: 2,
        }}
      >
        <SuppliersTable />
      </Box>
    </>
  );
}

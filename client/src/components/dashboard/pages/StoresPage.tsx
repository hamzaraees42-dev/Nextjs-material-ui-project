"use client";

import { Box, Button, Typography } from "@mui/material";
import StoresTable from "../tables/StoresTable";
import StoresFilters from "../pages/StoresFilters";

export default function StoresPage() {
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
            Stores
          </Typography>

          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Manage store memberships and approvals
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: 2,
            px: 3,
            py: 1,
          }}
        >
          Add Store
        </Button>
      </Box>

      {/* Filters */}
      <StoresFilters />

      {/* Content placeholder (table comes next) */}
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 3,
          border: "1px solid #e6e6e6",
          p: 2,
        }}
      >
        <StoresTable />
      </Box>
    </>
  );
}

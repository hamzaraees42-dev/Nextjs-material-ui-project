"use client";

import { Box, Typography } from "@mui/material";

export default function ReportsPage() {
  return (
    <>
      {/* Page Header */}
      <Box mb={3}>
        <Typography variant="h4" fontWeight={700}>
          Reports
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={0.5}>
          View insights and performance reports
        </Typography>
      </Box>

      {/* Placeholder Card */}
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 3,
          border: "1px solid #e6e6e6",
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight={600} mb={1}>
          Reports Coming Soon
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Sales, supplier performance, and subscription reports will appear
          here.
        </Typography>
      </Box>
    </>
  );
}

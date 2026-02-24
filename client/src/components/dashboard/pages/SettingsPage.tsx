"use client";

import { Box, Typography, Switch, Divider } from "@mui/material";

export default function SettingsPage() {
  return (
    <>
      {/* Page Header */}
      <Box mb={3}>
        <Typography variant="h4" fontWeight={700}>
          Settings
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={0.5}>
          Manage application preferences and configurations
        </Typography>
      </Box>

      {/* Settings Card */}
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 3,
          border: "1px solid #e6e6e6",
          p: 3,
          maxWidth: 700,
        }}
      >
        {/* General Settings */}
        <Typography fontWeight={600} mb={2}>
          General
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Box>
            <Typography fontWeight={500}>Enable Notifications</Typography>
            <Typography variant="body2" color="text.secondary">
              Receive system notifications and alerts
            </Typography>
          </Box>

          <Switch defaultChecked />
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Security Settings */}
        <Typography fontWeight={600} mb={2}>
          Security
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography fontWeight={500}>Two-Factor Authentication</Typography>
            <Typography variant="body2" color="text.secondary">
              Add an extra layer of account security
            </Typography>
          </Box>

          <Switch />
        </Box>
      </Box>
    </>
  );
}

"use client";

import { Drawer, Box, Typography, Divider, Button } from "@mui/material";
import StatusChip from "./StatusChip";
import { useSnackbar } from "@/components/dashboard/common/SnackbarProvider";

interface StoreDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  store: {
    name: string;
    location: string;
    status: "approved" | "pending" | "rejected";
    subscription: string;
  } | null;
}

export default function StoreDetailsDrawer({
  open,
  onClose,
  store,
}: StoreDetailsDrawerProps) {
  const { showSnackbar } = useSnackbar();

  if (!store) return null;

  const handleApprove = () => {
    showSnackbar("Store approved successfully", "success");
    onClose();
  };

  const handleReject = () => {
    showSnackbar("Store rejected successfully", "error");
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 360, p: 3 }}>
        <Typography variant="h5" fontWeight={700} mb={1}>
          Store Details
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          View store information
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box mb={2}>
          <Typography variant="caption" color="text.secondary">
            Store Name
          </Typography>
          <Typography fontWeight={600}>{store.name}</Typography>
        </Box>

        <Box mb={2}>
          <Typography variant="caption" color="text.secondary">
            Location
          </Typography>
          <Typography>{store.location}</Typography>
        </Box>

        <Box mb={2}>
          <Typography variant="caption" color="text.secondary">
            Status
          </Typography>
          <Box mt={0.5}>
            <StatusChip status={store.status} />
          </Box>
        </Box>

        <Box mb={3}>
          <Typography variant="caption" color="text.secondary">
            Subscription
          </Typography>
          <Typography>{store.subscription}</Typography>
        </Box>

        {store.status === "pending" && (
          <Box display="flex" gap={1}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={handleApprove}
            >
              Approve
            </Button>

            <Button
              variant="outlined"
              color="error"
              fullWidth
              onClick={handleReject}
            >
              Reject
            </Button>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}

"use client";

import { Chip } from "@mui/material";

interface StatusChipProps {
  status: "approved" | "pending" | "rejected";
}

export default function StatusChip({ status }: StatusChipProps) {
  const config = {
    approved: { label: "Approved", color: "success" },
    pending: { label: "Pending", color: "warning" },
    rejected: { label: "Rejected", color: "error" },
  } as const;

  const { label, color } = config[status];

  return (
    <Chip label={label} color={color} size="small" sx={{ fontWeight: 600 }} />
  );
}

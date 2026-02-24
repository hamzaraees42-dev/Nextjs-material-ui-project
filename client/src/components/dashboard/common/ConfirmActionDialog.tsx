"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface ConfirmActionDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmText: string;
  confirmColor?: "success" | "error";
  onConfirm: () => void;
  onClose: () => void;
}

export default function ConfirmActionDialog({
  open,
  title,
  description,
  confirmText,
  confirmColor = "success",
  onConfirm,
  onClose,
}: ConfirmActionDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle fontWeight={700}>{title}</DialogTitle>

      <DialogContent>
        <Typography color="text.secondary">{description}</Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>

        <Button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          variant="contained"
          color={confirmColor}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

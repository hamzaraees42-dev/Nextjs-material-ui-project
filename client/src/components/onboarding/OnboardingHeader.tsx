"use client";

import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function OnboardingHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleExit = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmExit = () => {
    router.push("/");
  };

  return (
    <>
      {/* HEADER */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 72,
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "background.paper",
          zIndex: 10,
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}
      >
        <Typography fontWeight={800} fontSize="1.2rem" color="primary.main">
          GrocerConnect
        </Typography>

        <IconButton onClick={handleExit}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* EXIT DIALOG */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 1,
          },
        }}
      >
        <DialogContent>
          <Stack spacing={2} textAlign="center">
            <Typography variant="h6" fontWeight={700}>
              Leave onboarding?
            </Typography>

            <Typography color="text.secondary">
              You’re just getting started. If you leave now, your progress won’t
              be saved — but you can always come back later.
            </Typography>
          </Stack>
        </DialogContent>

        <Box
          sx={{
            px: 3,
            pb: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack direction="row" spacing={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClose}
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: 99,
                boxShadow: "none",
              }}
            >
              Continue onboarding
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={handleConfirmExit}
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: 99,
              }}
            >
              Exit anyway
            </Button>
          </Stack>
        </Box>
      </Dialog>
    </>
  );
}

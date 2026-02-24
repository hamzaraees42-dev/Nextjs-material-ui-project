"use client";

import { IconButton, Menu, MenuItem, ListItemIcon } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

interface RowActionsMenuProps {
  status: "approved" | "pending" | "rejected";
  onView: () => void;
  onApprove?: () => void;
  onReject?: () => void;
}

export default function RowActionsMenu({
  status,
  onView,
  onApprove,
  onReject,
}: RowActionsMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton size="small" onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {/* View */}
        <MenuItem
          onClick={() => {
            handleClose();
            onView();
          }}
        >
          <ListItemIcon>
            <VisibilityIcon fontSize="small" />
          </ListItemIcon>
          View Details
        </MenuItem>

        {/* Pending-only actions */}
        {status === "pending" && (
          <MenuItem
            onClick={() => {
              handleClose();
              onApprove?.();
            }}
          >
            <ListItemIcon>
              <CheckCircleIcon color="success" fontSize="small" />
            </ListItemIcon>
            Approve
          </MenuItem>
        )}

        {status === "pending" && (
          <MenuItem
            onClick={() => {
              handleClose();
              onReject?.();
            }}
          >
            <ListItemIcon>
              <CancelIcon color="error" fontSize="small" />
            </ListItemIcon>
            Reject
          </MenuItem>
        )}
      </Menu>
    </>
  );
}

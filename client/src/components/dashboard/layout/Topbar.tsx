"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Avatar,
  ListItemIcon,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { useUserRole } from "@/components/dashboard/common/useUserRole";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const userRole = useUserRole();

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditProfile = () => {
    handleClose();
    console.log("Edit profile clicked");
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 64,
          px: { xs: 2, sm: 4 },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left title */}
        <Typography
          variant="h6"
          fontWeight={800}
          sx={{ letterSpacing: "-0.3px", color: "#333" }}
        >
          Dashboard
        </Typography>

        {/* Right profile */}
        <Box
          display="flex"
          alignItems="center"
          gap={1.5}
          sx={{
            pl: 2,
            borderLeft: "1px solid #E5E7EB",
          }}
        >
          {/* Role label */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {userRole === "admin" ? "Admin" : "Grocery Store"}
          </Typography>

          <IconButton onClick={handleOpen}>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                width: 36,
                height: 36,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              {userRole === "admin" ? "A" : "S"}
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 200,
                borderRadius: 2,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)",
              },
            }}
          >
            <MenuItem disabled>
              <Typography variant="body2" fontWeight={600}>
                {userRole === "admin" ? "Admin Account" : "Store Account"}
              </Typography>
            </MenuItem>

            <Divider />

            <MenuItem onClick={handleEditProfile} sx={{ py: 1.2 }}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              Edit Profile
            </MenuItem>

            <MenuItem
              onClick={handleLogout}
              sx={{ color: "error.main", py: 1.2 }}
            >
              <ListItemIcon>
                <LogoutIcon fontSize="small" color="error" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

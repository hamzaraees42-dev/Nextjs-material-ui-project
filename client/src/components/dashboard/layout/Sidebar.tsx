"use client";

import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserRole } from "@/components/dashboard/common/useUserRole";

// KEEP all routes in code (do NOT delete)
const navItems = [
  { label: "Dashboard", href: "/dashboard", roles: ["admin", "store"] },
  { label: "Stores", href: "/dashboard/stores", roles: ["admin"] },
  { label: "Suppliers", href: "/dashboard/suppliers", roles: ["admin"] },
  { label: "Reports", href: "/dashboard/reports", roles: ["admin"] },
  { label: "Settings", href: "/dashboard/settings", roles: ["admin"] },
];

export default function Sidebar() {
  const pathname = usePathname();
  const userRole = useUserRole(); // ✅ SINGLE SOURCE OF TRUTH

  return (
    <Box
      sx={{
        width: 240,
        borderRight: "1px solid #e6e6e6",
        bgcolor: "#F4FAF6",
        p: 2,
      }}
    >
      <List>
        {navItems
          .filter((item) => item.roles.includes(userRole)) // ✅ ROLE FILTER
          .map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <ListItemButton
                key={item.href}
                component={Link}
                href={item.href}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  bgcolor: isActive ? "#E6F4EA" : "transparent",
                  "&:hover": {
                    bgcolor: "#E6F4EA",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 600 : 500,
                  }}
                />
              </ListItemButton>
            );
          })}
      </List>
    </Box>
  );
}

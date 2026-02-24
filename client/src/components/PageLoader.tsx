"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);

      // 🔥 Notify pages that loader is done
      document.dispatchEvent(new Event("page:ready"));
    }, 1400);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,

        backgroundColor: "#FDECEC",

        backgroundImage: `
          radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
          radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "16px 16px, 32px 32px",
        backgroundPosition: "0 0, 8px 8px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        animation: "fadeOut 1s ease forwards",
        animationDelay: "1s",

        "@keyframes fadeOut": {
          to: { opacity: 0, visibility: "hidden" },
        },
      }}
    >
      {/* LOADER */}
      <Box
        sx={{
          width: 90,
          height: 90,
          position: "relative",
        }}
      >
        {/* OUTER RING */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            border: "6px solid transparent",
            borderTopColor: "#E53935",
            borderRadius: "50%",
            animation: "spin 2.4s linear infinite",
          }}
        />

        {/* MIDDLE RING */}
        <Box
          sx={{
            position: "absolute",
            inset: 10,
            border: "6px solid transparent",
            borderBottomColor: "#7E57C2",
            borderRadius: "50%",
            animation: "spinReverse 1.4s linear infinite",
          }}
        />

        {/* INNER RING */}
        <Box
          sx={{
            position: "absolute",
            inset: 22,
            border: "6px solid transparent",
            borderTopColor: "#43A047",
            borderRadius: "50%",
            animation: "spin 3s linear infinite",
          }}
        />

        {/* KEYFRAMES */}
        <Box
          sx={{
            "@keyframes spin": {
              to: { transform: "rotate(360deg)" },
            },
            "@keyframes spinReverse": {
              to: { transform: "rotate(-360deg)" },
            },
          }}
        />
      </Box>
    </Box>
  );
}

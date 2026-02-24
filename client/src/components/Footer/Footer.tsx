"use client";

import { Box, Typography, Link, Stack } from "@mui/material";
import NextLink from "next/link";
import { useRouter, usePathname } from "next/navigation";

const contactScrollOptions = {
  offset: -90,
  duration: 2.6, // 👈 slower, smooth scroll
  easing: (t: number) => 1 - Math.pow(1 - t, 3), // ease-out
};

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = () => {
    if (pathname === "/") {
      window.lenis?.scrollTo("#contact", contactScrollOptions);
    } else {
      router.push("/");

      setTimeout(() => {
        window.lenis?.scrollTo("#contact", contactScrollOptions);
      }, 700);
    }
  };
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#FDECEC",
        backgroundImage: `
          radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
          radial-gradient(rgba(0,0,0,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "16px 16px, 32px 32px",
        backgroundPosition: "0 0, 8px 8px",
        pt: { xs: 10, md: 14 },
      }}
    >
      {/* TOP CONTENT */}
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          px: { xs: 3, md: 6 },
          pb: { xs: 8, md: 10 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.4fr 1fr 1fr 1fr",
          },
          gap: { xs: 6, md: 8 },
        }}
      >
        {/* LOGO COLUMN */}
        <Box>
          {/* LOGO - Already has homepage link ✅ */}
          <Typography
            variant="h6"
            fontWeight={700}
            component={Link}
            href="/"
            sx={{
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
              fontFamily: "var(--font-fredoka)",
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                md: "1.8rem",
                lg: "2rem", // 👈 compact desktop
                xl: "2.6rem", // 👈 big screens only
              },
            }}
          >
            GrocerConnect
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.05rem", md: "1.3rem" },
              lineHeight: { xs: 1.6, md: 1.7 },
              fontWeight: 700,
              color: "#111",
              maxWidth: 260,
            }}
          >
            Power in Numbers – Connecting Retailers and Suppliers
          </Typography>
        </Box>

        {/* COMPANY */}
        <FooterColumn
          title="Company"
          links={[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
          ]}
        />

        {/* HOME */}
        <FooterColumn
          title="Home"
          links={[
            { label: "About GrocerConnect", href: "/about" },
            { label: "Membership", href: "#" },
            { label: "Join GrocerConnect", href: "/onboarding" },
            { label: "Login", href: "/login" },
            { label: "Contact" },
          ]}
          onContactClick={handleContactClick}
        />

        {/* CONNECT */}
        {/* CONNECT */}
        <FooterColumn
          title="Connect"
          links={[
            {
              label: "Instagram",
              href: "https://www.instagram.com/GrocerConnectCanada",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/grocerconnectcanada",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/GrocerConnectCanada",
            },
          ]}
        />
      </Box>

      {/* BOTTOM BAR */}
      <Box sx={{ backgroundColor: "#E53935", py: 2.5 }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: { xs: "0.95rem", md: "1.1rem" },
          }}
        >
          © Copyright by Grocer Connect. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

/* ---------------- HELPERS ---------------- */

function FooterColumn({
  title,
  links,
  onContactClick,
}: {
  title: string;
  links: { label: string; href?: string }[];
  onContactClick?: () => void;
}) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "1.2rem", md: "1.9rem" },
          fontFamily: "var(--font-passion)",
          letterSpacing: "0.03em",
          fontWeight: 900,
          mb: 2.5,
          color: "#111",
          mt: { xs: 0, md: 2 },
        }}
      >
        {title}
      </Typography>

      <Stack spacing={1.8} alignItems="flex-start">
        {links.map((link) => (
          <Link
            key={link.label}
            component={link.href ? NextLink : "button"}
            href={link.href}
            onClick={() => {
              if (link.label === "Contact") {
                onContactClick?.();
              }
            }}
            underline="none"
            sx={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: { xs: "var(--font-jakarta)" },
              fontSize: { xs: "1.05rem", md: "1.25rem" },
              fontWeight: 700,
              color: "#111",
              transition: "all 250ms ease",
              "&:hover": {
                color: "#E53935",
                transform: "translateX(4px)",
              },
            }}
          >
            {link.label}
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

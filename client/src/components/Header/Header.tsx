"use client";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  Dialog,
  DialogContent,
  TextField,
  InputAdornment,
  Divider,
  alpha,
  styled,
  ListItemIcon,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

// const topBarLinks = ["Technical Assistance Center", "Foundation"];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Contact" }, // 🔑 NO href
  { label: "Membership", href: "#" },
  { label: "How It Works", href: "#" },
];

const contactScrollOptions = {
  offset: -90,
  duration: 2.6, // 👈 controls speed (2–2.4 is ideal)
  easing: (t: number) => 1 - Math.pow(1 - t, 3), // smooth ease-out
};

// Styled components - KEEPING 0.8 opacity
const AnimatedDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 320,
    background: `linear-gradient(135deg, ${
      theme.palette.background.paper
    } 0%, ${alpha(theme.palette.primary.main, 0.8)} 100%)`,
    boxShadow: `0 10px 40px ${alpha(theme.palette.common.black, 0.15)}`,
    borderLeft: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  },
}));

const MenuHeader = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  padding: theme.spacing(3, 2),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    opacity: 0.5,
  },
}));

// ✅ FIXED: Added typing to accept href and other Next.js Link props
const StyledListItemButton = styled(ListItemButton)<any>(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(0.5, 2),
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

  "& .MuiListItemText-primary": {
    fontFamily: "var(--font-jakarta)", // ✅ MOBILE MENU FONT
    fontWeight: 500,
    transition: "all 0.3s ease",
    textTransform: "capitalize",
  },

  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    transform: "translateX(8px)",
    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.15)}`,

    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.main,
      transform: "scale(1.1)",
    },

    "& .MuiListItemText-primary": {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  },

  "& .MuiListItemIcon-root": {
    minWidth: 40,
    transition: "all 0.3s ease",
  },
}));

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  /* ================= SCROLL DETECTION ================= */
  useEffect(() => {
    const onScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fix for drawer close issue
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ================= MAIN NAV ================= */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.primary.main,
          top: 0,
          py: { lg: 1.5, xl: 2 },
          boxShadow: isFixed ? 4 : 0,
          transition: "box-shadow 300ms ease",
          zIndex: theme.zIndex.drawer,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: {
                xs: 56,
                lg: 60, // ✅ desktop
                xl: 60, // ✅ large desktop
              },
              alignItems: "center",
            }}
          >
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

            {/* DESKTOP NAV */}
            {!isMobile && (
              <Box
                display="flex"
                alignItems="center"
                gap={{ lg: 1.25, xl: 2 }}
                sx={{
                  whiteSpace: "nowrap",
                  minWidth: 0, // 🔑 allows flex shrink
                }}
              >
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    color="inherit"
                    onClick={(e: React.MouseEvent) => {
                      if (link.label !== "Contact") return;

                      e.preventDefault();

                      // If already on home → scroll
                      if (pathname === "/") {
                        window.lenis?.scrollTo(
                          "#contact",
                          contactScrollOptions
                        );
                      }
                      // If on another page → go home, then scroll
                      else {
                        router.push("/");

                        setTimeout(() => {
                          window.lenis?.scrollTo(
                            "#contact",
                            contactScrollOptions
                          );
                        }, 600);
                      }
                    }}
                    component={link.href ? Link : "button"}
                    href={link.href}
                    sx={{
                      fontWeight: 600,
                      fontFamily: "var(--font-jakarta)",
                      textTransform: "capitalize",
                      px: { lg: 0.75, xl: 0.2 },
                      py: { lg: 0.4, xl: 0.2 },
                      fontSize: {
                        xs: "0.9rem",
                        md: "0.95rem",
                        lg: "1.05rem", // 👈 compact desktop
                        xl: "1.25rem", // 👈 wide screens
                      },
                      position: "relative",
                      "&:hover": {
                        color: theme.palette.secondary.main, // ✅ YELLOW
                        backgroundColor: "transparent", // keeps it clean
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
                {/* JOIN GROCERCONNECT BUTTON */}
                <Button
                  component={Link}
                  href="/onboarding"
                  variant="contained"
                  color="secondary"
                  startIcon={<GroupAddIcon />}
                  sx={{
                    ml: 1,
                    fontFamily: "var(--font-jakarta)",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: 3,
                    fontSize: {
                      md: "1rem",
                      lg: "1.1rem", // 👈 compact desktop
                      xl: "1.35rem", // 👈 wide screens
                    },
                    px: { lg: 1.25, xl: 2.25 },
                    py: { lg: 0.45, xl: 0.7 },
                    boxShadow: `0 4px 12px ${alpha(
                      theme.palette.secondary.main,
                      0.3
                    )}`,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.dark,
                      boxShadow: `0 6px 18px ${alpha(
                        theme.palette.secondary.main,
                        0.5
                      )}`,
                    },
                  }}
                >
                  Join GrocerConnect
                </Button>

                {/* LOGIN BUTTON */}
                <Button
                  component={Link}
                  href="/login"
                  variant="outlined"
                  startIcon={<PersonOutlineIcon />}
                  sx={{
                    ml: 1,
                    fontFamily: "var(--font-jakarta)",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: 3,
                    fontSize: {
                      md: "1rem",
                      lg: "1.1rem", // 👈 compact desktop
                      xl: "1.35rem", // 👈 wide screens
                    },
                    px: { lg: 1.25, xl: 2.25 },
                    py: { lg: 0.45, xl: 0.7 },

                    // ✅ YELLOW from theme
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.main,

                    "&:hover": {
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.text.primary,
                      borderColor: theme.palette.secondary.main,
                      boxShadow: `0 4px 12px ${alpha(
                        theme.palette.secondary.main,
                        0.4
                      )}`,
                    },
                  }}
                >
                  Login
                </Button>
                <IconButton
                  onClick={() => setSearchOpen(true)}
                  sx={{
                    color: theme.palette.secondary.main,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      backgroundColor: alpha(theme.palette.secondary.main, 0.2),
                    },
                    p: { lg: 0.5, xl: 0.75 }, // 🔥 BIG FIX
                    flexShrink: 0,
                  }}
                >
                  <SearchIcon
                    sx={{
                      color: theme.palette.secondary.main,
                      fontSize: {
                        md: "1.6rem",
                        lg: "1.8rem",
                        xl: "2.1rem",
                      },
                    }}
                  />
                </IconButton>
              </Box>
            )}

            {/* MOBILE NAV */}
            {isMobile && (
              <>
                <IconButton
                  color="inherit"
                  onClick={() => setOpen(true)}
                  sx={{
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      backgroundColor: alpha(theme.palette.common.white, 0.1),
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>

                <AnimatedDrawer
                  anchor="right"
                  open={open}
                  onClose={handleDrawerClose}
                >
                  {/* Menu Header with Logo - Now with homepage link */}
                  <MenuHeader sx={{ pb: 4, pt: 2 }}>
                    <Box
                      component={Link}
                      href="/"
                      onClick={handleDrawerClose}
                      sx={{
                        textDecoration: "none",
                        display: "block",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        sx={{
                          color: theme.palette.common.white,
                          fontFamily: "var(--font-fredoka)",
                          "&:hover": {
                            opacity: 0.9,
                          },
                          transition: "opacity 0.2s ease",
                        }}
                      >
                        GrocerConnect
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha(theme.palette.common.white, 0.9),
                        }}
                      >
                        National Grocers Association
                      </Typography>
                    </Box>

                    <IconButton
                      onClick={handleDrawerClose}
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        color: theme.palette.common.white,
                        backgroundColor: alpha(theme.palette.common.black, 0.2),
                        "&:hover": {
                          backgroundColor: alpha(
                            theme.palette.common.black,
                            0.3
                          ),
                          transform: "rotate(90deg)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </MenuHeader>

                  {/* Add Home link at the top of navigation */}
                  <Box sx={{ px: 2, mt: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.text.secondary,
                        textTransform: "uppercase",
                        fontWeight: 800,
                        letterSpacing: 1,
                      }}
                    >
                      Navigation
                    </Typography>
                  </Box>

                  <List sx={{ px: 1, pb: 2 }}>
                    {/* Other Navigation Links */}
                    {navLinks.map((link) => (
                      <ListItem key={link.label} disablePadding>
                        <StyledListItemButton
                          component={link.href ? Link : "button"}
                          href={link.href}
                          onClick={() => {
                            handleDrawerClose();

                            if (link.label !== "Contact") return;

                            if (pathname === "/") {
                              setTimeout(() => {
                                window.lenis?.scrollTo(
                                  "#contact",
                                  contactScrollOptions
                                );
                              }, 300);
                            } else {
                              router.push("/");

                              setTimeout(() => {
                                window.lenis?.scrollTo(
                                  "#contact",
                                  contactScrollOptions
                                );
                              }, 800);
                            }
                          }}
                        >
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={link.label}
                            primaryTypographyProps={{
                              fontSize: "1rem",
                              fontWeight: 500,
                            }}
                          />
                        </StyledListItemButton>
                      </ListItem>
                    ))}
                  </List>

                  <Divider sx={{ mx: 2, my: 1 }} />

                  {/* Quick Links */}
                  {/* <Box sx={{ px: 2, mt: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.text.secondary,
                        textTransform: "uppercase",
                        fontWeight: 800,
                        letterSpacing: 1,
                      }}
                    >
                      Quick Links
                    </Typography>
                  </Box> */}

                  {/* <List sx={{ px: 1 }}>
                    {topBarLinks.map((text) => (
                      <ListItem key={text} disablePadding>
                        <StyledListItemButton onClick={handleDrawerClose}>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={text}
                            primaryTypographyProps={{
                              fontSize: "0.95rem",
                            }}
                          />
                        </StyledListItemButton>
                      </ListItem>
                    ))}
                  </List> */}

                  {/* Action Buttons - ADDED SOLID BACKGROUNDS */}
                  <Box sx={{ mt: 2, px: 2 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      href="/onboarding"
                      startIcon={<GroupAddIcon />}
                      onClick={handleDrawerClose}
                      sx={{
                        mb: 1,
                        borderRadius: 2,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: "none",
                        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                        color: theme.palette.common.white,
                        boxShadow: `0 4px 12px ${alpha(
                          theme.palette.secondary.main,
                          0.3
                        )}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: `0 8px 20px ${alpha(
                            theme.palette.secondary.main,
                            0.5
                          )}`,
                          background: `linear-gradient(135deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
                        },
                      }}
                    >
                      Join NGA
                    </Button>

                    <Button
                      fullWidth
                      variant="outlined"
                      href="/login"
                      startIcon={<PersonOutlineIcon />}
                      onClick={handleDrawerClose}
                      sx={{
                        borderRadius: 2,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: "none",
                        border: `2px solid ${theme.palette.primary.dark}`,
                        color: theme.palette.primary.contrastText,
                        backgroundColor: theme.palette.primary.main,
                        boxShadow: `0 4px 12px ${alpha(
                          theme.palette.primary.main,
                          0.2
                        )}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: theme.palette.primary.dark,
                          backgroundColor: theme.palette.primary.dark,
                          transform: "translateY(-2px)",
                          boxShadow: `0 6px 20px ${alpha(
                            theme.palette.primary.main,
                            0.4
                          )}`,
                        },
                      }}
                    >
                      Member Login
                    </Button>
                  </Box>

                  {/* Search Button at Bottom - ADDED SOLID BACKGROUND */}
                  <Box
                    sx={{
                      p: 2,
                      borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Button
                      fullWidth
                      startIcon={<SearchIcon />}
                      onClick={() => {
                        handleDrawerClose();
                        setTimeout(() => setSearchOpen(true), 300);
                      }}
                      sx={{
                        color: theme.palette.common.white,
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: 2,
                        border: `2px solid ${theme.palette.info.main}`,
                        py: 1.5,
                        backgroundColor: theme.palette.info.main,
                        boxShadow: `0 4px 12px ${alpha(
                          theme.palette.info.main,
                          0.3
                        )}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          border: `2px solid ${theme.palette.info.dark}`,
                          backgroundColor: theme.palette.info.dark,
                          transform: "translateY(-2px)",
                          boxShadow: `0 6px 20px ${alpha(
                            theme.palette.info.main,
                            0.5
                          )}`,
                        },
                      }}
                    >
                      Search GrocerConnect
                    </Button>
                  </Box>
                </AnimatedDrawer>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= SEARCH POPUP ================= */}
      <Dialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: "hidden",
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Box
            sx={{
              height: 6,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />

          <Box sx={{ p: 4, position: "relative" }}>
            <IconButton
              onClick={() => setSearchOpen(false)}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                color: "text.secondary",
                backgroundColor: alpha(theme.palette.text.secondary, 0.1),
                "&:hover": {
                  backgroundColor: alpha(theme.palette.text.secondary, 0.2),
                  transform: "rotate(90deg)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <CloseIcon />
            </IconButton>

            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: "inherit",
                textDecoration: "none",
                fontFamily: "var(--font-fredoka)",
                mb: 1,
              }}
            >
              GrocerConnect
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Find programs, resources, education, and more.
            </Typography>

            <TextField
              autoFocus
              fullWidth
              placeholder="Search GrocerConnect..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 2,
                  bgcolor: "background.paper",
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 0 0 3px ${alpha(
                      theme.palette.primary.main,
                      0.1
                    )}`,
                  },
                  "&.Mui-focused": {
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 0 0 3px ${alpha(
                      theme.palette.primary.main,
                      0.2
                    )}`,
                  },
                },
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

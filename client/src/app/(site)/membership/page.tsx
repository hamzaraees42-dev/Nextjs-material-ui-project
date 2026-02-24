"use client";

import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Fade,
  Slide,
  IconButton,
} from "@mui/material";
import DottedSection from "@/components/DottedSection";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";

/* ================= PLANS ================= */
const plans = [
  {
    title: "Starter",
    priceMonthly: 29,
    priceAnnual: 29 * 12 * 0.8,
    description: "For independent and small grocery stores",
    cta: "Start Onboarding",
    features: [
      "Access to supplier marketplace",
      "Basic order aggregation",
      "Community pricing insights",
      "Monthly purchase reports",
    ],
  },
  {
    title: "Professional",
    priceMonthly: 79,
    priceAnnual: 79 * 12 * 0.8,
    description: "For growing grocery businesses",
    highlight: true,
    cta: "Subscribe",
    features: [
      "Access to supplier marketplace",
      "Advanced order aggregation",
      "Pricing negotiation support",
      "Priority customer support",
      "Supplier recommendations",
      "Analytics dashboard",
    ],
  },
  {
    title: "Enterprise",
    description: "For multi-location stores & wholesalers",
    cta: "Contact Sales",
    custom: true,
    features: [
      "All Professional features",
      "Dedicated account manager",
      "Custom supplier contracts",
      "System integrations (API)",
      "Early access to new features",
    ],
  },
];

/* ================= FAQS ================= */
const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade your subscription at any time.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No long-term commitments. You can cancel anytime.",
  },
  {
    q: "Do you offer annual discounts?",
    a: "Yes, annual billing includes a discounted rate compared to monthly.",
  },
  {
    q: "What support is included?",
    a: "All plans include support. Professional and Enterprise include priority assistance.",
  },
];

export default function MembershipPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [pageReady, setPageReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const midCtaRef = useRef<HTMLDivElement | null>(null);
  const [midCtaVisible, setMidCtaVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const theme = useTheme();

  useEffect(() => {
    const handleReady = () => setPageReady(true);

    document.addEventListener("page:ready", handleReady);

    return () => {
      document.removeEventListener("page:ready", handleReady);
    };
  }, []);

  useEffect(() => {
    if (!pageReady) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [pageReady]);

  useEffect(() => {
    if (!pageReady) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMidCtaVisible(true);
          observer.disconnect(); // animate once
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -120px 0px", // 👈 KEY FIX
      }
    );
    if (midCtaRef.current) observer.observe(midCtaRef.current);

    return () => observer.disconnect();
  }, [pageReady]);

  return (
    <Box>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "#fff",
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{ fontFamily: "var(--font-passion)", mb: 2 }}
          >
            Membership Plans
          </Typography>

          <Typography sx={{ maxWidth: 720, mx: "auto", fontSize: "1.1rem" }}>
            Simple, flexible subscriptions designed to help independent grocers
            grow, save, and compete effectively.
          </Typography>
        </Container>
      </Box>

      <DottedSection>
        {/* ================= BILLING TOGGLE ================= */}
        <Fade in={pageReady} timeout={600}>
          <Box sx={{ display: "flex", justifyContent: "center", pt: 6 }}>
            <Box
              sx={{
                display: "flex",
                bgcolor: "background.paper",
                borderRadius: 3,
                p: 0.5,
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
              }}
            >
              {["monthly", "annual"].map((type) => (
                <Button
                  key={type}
                  onClick={() => setBilling(type as any)}
                  variant={billing === type ? "contained" : "text"}
                  sx={{
                    px: { xs: 2.5, md: 4 },
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 700,
                    textTransform: "none",
                  }}
                >
                  {type === "monthly" ? "Monthly" : "Annual (Save 20%)"}
                </Button>
              ))}
            </Box>
          </Box>
        </Fade>

        {/* ================= PLANS ================= */}
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
          <Box
            ref={sectionRef}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 4,
            }}
          >
            {plans.map((plan, i) => (
              <Slide
                key={plan.title}
                direction="up"
                in={pageReady && visible}
                timeout={600 + i * 200}
                mountOnEnter
              >
                {/* NON-TRANSFORM WRAPPER (prevents Slide conflict) */}
                <Box sx={{ height: "100%" }}>
                  {/* HOVER SCALE WRAPPER */}
                  <Box
                    sx={{
                      height: "100%",
                      transition: "transform 350ms cubic-bezier(.4,0,.2,1)",
                      willChange: "transform",
                      transformOrigin: "center",

                      "@media (hover: hover)": {
                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                      },
                    }}
                  >
                    <Paper
                      sx={{
                        p: 4,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 4,
                        position: "relative",

                        bgcolor: plan.highlight
                          ? "secondary.main"
                          : "background.paper",

                        color: plan.highlight ? "#fff" : "text.primary",

                        boxShadow: plan.highlight
                          ? "0 16px 40px rgba(240,140,0,0.4)"
                          : "0 12px 30px rgba(0,0,0,0.12)",

                        transition: "box-shadow 350ms cubic-bezier(.4,0,.2,1)",

                        "@media (hover: hover)": {
                          "&:hover": {
                            boxShadow: plan.highlight
                              ? "0 30px 70px rgba(240,140,0,0.55)"
                              : "0 24px 60px rgba(0,0,0,0.28)",
                          },
                        },
                      }}
                    >
                      {/* POPULAR BADGE */}
                      {plan.highlight && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: -14,
                            right: 20,
                            bgcolor: "warning.main",
                            color: "#000",
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <StarIcon fontSize="small" />
                          Most Popular
                        </Box>
                      )}

                      {/* TITLE */}
                      <Typography variant="h4" fontWeight={700} mb={1}>
                        {plan.title}
                      </Typography>

                      {/* DESCRIPTION */}
                      <Typography sx={{ opacity: 0.9, mb: 2 }}>
                        {plan.description}
                      </Typography>

                      {/* PRICE */}
                      <Typography variant="h5" fontWeight={700} mb={3}>
                        {plan.custom
                          ? "Custom Pricing"
                          : billing === "monthly"
                          ? `$${plan.priceMonthly} / month`
                          : `$${Math.round(plan.priceAnnual ?? 0)} / year`}
                      </Typography>

                      {/* FEATURES */}
                      <Box sx={{ flexGrow: 1 }}>
                        {plan.features.map((feature) => (
                          <Box
                            key={feature}
                            sx={{
                              display: "flex",
                              gap: 1.5,
                              mb: 1.2,
                              alignItems: "center",
                            }}
                          >
                            <CheckCircleIcon fontSize="small" />
                            <Typography>{feature}</Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* CTA */}
                      <Button
                        fullWidth
                        size="large"
                        variant={plan.highlight ? "contained" : "outlined"}
                        sx={{
                          mt: 3,
                          borderRadius: 3,
                          py: 1.4,
                          fontWeight: 600,
                          textTransform: "none",
                        }}
                      >
                        {plan.cta}
                      </Button>
                    </Paper>
                  </Box>
                </Box>
              </Slide>
            ))}
          </Box>
        </Container>

        {/* ================= MID CTA ================= */}
        <Container maxWidth="md" sx={{ pb: { xs: 6, md: 10 } }}>
          <Box ref={midCtaRef}>
            <Slide
              direction="up"
              in={pageReady && midCtaVisible}
              timeout={700}
              mountOnEnter
            >
              <Fade in={pageReady && midCtaVisible} timeout={900}>
                <Paper
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: 4,
                    textAlign: "center",

                    bgcolor: "info.main",
                    color: "info.contrastText",

                    boxShadow: "0 18px 40px rgba(0,0,0,0.3)",

                    transform: "translateZ(0) scale(1)",
                    willChange: "transform, background-color, box-shadow",

                    transition:
                      "transform 500ms cubic-bezier(.22,1,.36,1), " +
                      "background-color 450ms cubic-bezier(.22,1,.36,1), " +
                      "box-shadow 500ms cubic-bezier(.22,1,.36,1)",

                    "@media (hover: hover)": {
                      "&:hover": {
                        transform: "translateZ(0) scale(1.035)",
                        bgcolor: "secondary.main",
                        boxShadow: "0 32px 80px rgba(240,140,0,0.5)",
                      },
                    },

                    /* TEXT SMOOTHING */
                    "& h4, & p": {
                      transition: "color 350ms ease 80ms",
                    },

                    /* PRIMARY BUTTON */
                    "& .primary-cta": {
                      transition:
                        "background-color 350ms ease, color 350ms ease, transform 350ms ease",
                    },

                    "&:hover .primary-cta": {
                      transform: "translateY(-1px)",
                      bgcolor: "#fff",
                      color: "secondary.main",
                    },

                    /* SECONDARY BUTTON */
                    "& .secondary-cta": {
                      transition:
                        "border-color 350ms ease, color 350ms ease, background-color 350ms ease",
                    },

                    "&:hover .secondary-cta": {
                      borderColor: "#fff",
                      color: "#fff",
                      backgroundColor: "rgba(255,255,255,0.12)",
                    },
                  }}
                >
                  <Typography variant="h4" fontWeight={700} mb={2}>
                    Not sure which plan fits your store?
                  </Typography>

                  <Typography sx={{ mb: 3, opacity: 0.95 }}>
                    Start onboarding or speak with our team to find the best
                    membership option for your business.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Button
                      size="large"
                      variant="contained"
                      className="primary-cta"
                      sx={{
                        borderRadius: 3,
                        py: 1.4,
                        px: 5,
                        fontWeight: 600,
                        textTransform: "none",
                        bgcolor: "#fff",
                        color: "info.main",
                        transition: "all 300ms ease",
                      }}
                    >
                      Start Onboarding
                    </Button>

                    <Button
                      size="large"
                      variant="outlined"
                      className="secondary-cta"
                      sx={{
                        borderRadius: 3,
                        py: 1.4,
                        px: 5,
                        fontWeight: 600,
                        textTransform: "none",
                        color: "#fff",
                        borderColor: "#fff",
                        transition: "all 300ms ease",
                      }}
                    >
                      Contact Sales
                    </Button>
                  </Box>
                </Paper>
              </Fade>
            </Slide>
          </Box>
        </Container>

        {/* ================= FAQS ================= */}
        <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
          {/* HEADING */}
          <Fade in={pageReady} timeout={800}>
            <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
              <Typography
                textAlign="center"
                sx={{
                  fontFamily: "var(--font-passion)",
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  color: "primary.main",
                  mb: 4,
                }}
              >
                FAQs
              </Typography>
            </Box>
          </Fade>

          {/* FAQ LIST */}
          <Box
            sx={{
              maxWidth: 900,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              px: { xs: 2, md: 0 },
            }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <Box
                  key={faq.q}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  sx={{
                    cursor: "pointer",
                    backgroundColor: isOpen
                      ? theme.palette.info.main
                      : theme.palette.warning.main,

                    borderRadius: "32px",
                    px: { xs: 3, md: 5 },
                    py: isOpen ? { xs: 3, md: 4 } : { xs: 2.5, md: 1.5 },

                    boxShadow: "0 6px 0 rgba(0,0,0,0.25)",
                    transition:
                      "background-color 300ms ease, padding 300ms ease",

                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* QUESTION ROW */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "1.05rem", md: "1.2rem" },
                        fontWeight: 900,
                        color: isOpen
                          ? theme.palette.warning.main
                          : theme.palette.error.main,
                      }}
                    >
                      {faq.q}
                    </Typography>

                    <IconButton
                      sx={{
                        color: isOpen
                          ? theme.palette.warning.main
                          : theme.palette.error.main,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 300ms ease",
                      }}
                    >
                      <KeyboardArrowDownRoundedIcon />
                    </IconButton>
                  </Box>

                  {/* ANSWER — SMOOTH ANIMATION */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition:
                        "grid-template-rows 450ms cubic-bezier(.4,0,.2,1)",
                    }}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        opacity: isOpen ? 1 : 0,
                        transition: "opacity 300ms ease",
                        mt: isOpen ? 2 : 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          lineHeight: 1.7,
                          color: theme.palette.warning.main,
                          fontWeight: 500,
                        }}
                      >
                        {faq.a}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </DottedSection>
    </Box>
  );
}

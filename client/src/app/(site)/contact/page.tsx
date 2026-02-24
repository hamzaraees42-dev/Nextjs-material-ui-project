"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Slide,
  Fade,
  Alert,
  CircularProgress,
  Divider,
} from "@mui/material";
import DottedSection from "@/components/DottedSection";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useRef, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  /* ================= ANIMATION OBSERVER ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors: Partial<FormState> = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";

    if (!form.subject.trim()) newErrors.subject = "Subject is required";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    setSuccess(false);
    setSubmitError("");

    if (!validate()) return;

    try {
      setSubmitting(true);

      // 🔧 API integration goes here later
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
            Contact GrocerConnect
          </Typography>

          <Typography sx={{ maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}>
            Have a question or want to connect with our team? We’re here to
            help.
          </Typography>
        </Container>
      </Box>

      <DottedSection>
        {/* ================= CONTACT ================= */}
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
          <Box
            ref={sectionRef}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6,
              overflow: "hidden",
            }}
          >
            {/* LEFT INFO */}
            <Slide direction="right" in={visible} timeout={800} mountOnEnter>
              <Paper
                sx={{
                  p: { xs: 3, md: 4 },
                  bgcolor: "secondary.main",
                  color: "#fff",
                  borderRadius: 4,
                  boxShadow: "0 14px 34px rgba(240,140,0,0.4)",
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Get in Touch
                </Typography>

                <Typography sx={{ mb: 4, opacity: 0.95 }}>
                  Reach out to GrocerConnect for partnerships, support, or
                  general inquiries.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                  <EmailIcon />
                  <Typography>info@grocerconnect.ca</Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                  <PhoneIcon />
                  <Typography>Phone number coming soon</Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <LocationOnIcon />
                  <Typography>Alberta, Canada</Typography>
                </Box>

                <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.3)" }} />

                <Typography variant="subtitle1" fontWeight={700}>
                  Support Hours
                </Typography>

                <Typography sx={{ opacity: 0.9 }}>
                  Monday – Friday
                  <br />
                  9:00 AM – 5:00 PM
                </Typography>
              </Paper>
            </Slide>

            {/* RIGHT FORM */}
            <Slide direction="left" in={visible} timeout={800} mountOnEnter>
              <Paper
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  boxShadow: "0 14px 34px rgba(0,0,0,0.15)",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: "primary.main" }}
                >
                  Send Us a Message
                </Typography>

                {success && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Your message has been sent successfully!
                  </Alert>
                )}

                {submitError && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {submitError}
                  </Alert>
                )}

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                    gap: 3,
                  }}
                >
                  <TextField
                    label="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    error={!!errors.name}
                    helperText={errors.name}
                  />

                  <TextField
                    label="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    error={!!errors.email}
                    helperText={errors.email}
                  />

                  <Box sx={{ gridColumn: "1 / -1" }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      error={!!errors.subject}
                      helperText={errors.subject}
                    />
                  </Box>

                  <Box sx={{ gridColumn: "1 / -1" }}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      error={!!errors.message}
                      helperText={errors.message}
                    />
                  </Box>

                  <Box sx={{ gridColumn: "1 / -1" }}>
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      disabled={submitting}
                      endIcon={
                        submitting ? (
                          <CircularProgress size={18} color="inherit" />
                        ) : (
                          <SendIcon />
                        )
                      }
                      onClick={handleSubmit}
                      sx={{
                        py: 1.4,
                        borderRadius: 3,
                        "&:hover": {
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Slide>
          </Box>
        </Container>

        {/* ================= MAP ================= */}
        <Container maxWidth="xl" sx={{ pb: { xs: 6, md: 10 } }}>
          <Fade in={visible} timeout={1000}>
            <Box
              sx={{
                mt: 6,
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
              }}
            >
              <iframe
                title="GrocerConnect Alberta HQ"
                src="https://www.google.com/maps?q=Alberta,Canada&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
              />
            </Box>
          </Fade>
        </Container>
      </DottedSection>
    </Box>
  );
}

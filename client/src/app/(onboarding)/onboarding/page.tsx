"use client";

import {
  Box,
  Container,
  Typography,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DottedSection from "@/components/DottedSection";
import StepOne from "@/components/onboarding/steps/StepOne";
import StepTwo from "@/components/onboarding/steps/StepTwo";
import StepThree from "@/components/onboarding/steps/StepThree";
import StepFour from "@/components/onboarding/steps/StepFour";

const HEADER_HEIGHT = 72;

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    password: "",

    phone: "",
    storeAddress: "",
    city: "",
    country: "Canada",
    postalCode: "",

    registeredName: "",
    tradingName: "",
  });

  const STEPS = [
    { id: 1, label: "Store details" },
    { id: 2, label: "Location & preferences" },
    { id: 3, label: "Contact person" },
    { id: 4, label: "Verification" },
  ];

  const goToStep = (nextStep: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setStep(nextStep);
      setIsTransitioning(false);
    }, 250); // matches fade duration
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const currentIndex = step - 1;
  const progressPercent = (currentIndex / (STEPS.length - 1)) * 100;

  return (
    <Box sx={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* HEADER */}
      <OnboardingHeader />

      {/* DOTTED BACKGROUND */}
      <DottedSection>
        <Box
          sx={{
            minHeight: "100vh",
            pt: `${HEADER_HEIGHT}px`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* PROGRESS */}
          <Box
            sx={{
              width: "100%",
              maxWidth: 900,
              mx: "auto",
              mt: 3,
              mb: 6,
              px: 2,
            }}
          >
            {/* MOBILE PROGRESS */}
            {isMobile ? (
              <Box display="flex" alignItems="center" gap={2}>
                <Box position="relative" display="inline-flex">
                  <CircularProgress
                    variant="determinate"
                    value={(step / STEPS.length) * 100}
                    size={56}
                    thickness={5}
                    color="primary"
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {step}/{STEPS.length}
                  </Box>
                </Box>

                <Box>
                  <Typography fontWeight={700}>
                    {STEPS[currentIndex].label}
                  </Typography>
                  {STEPS[currentIndex + 1] && (
                    <Typography variant="body2" color="text.secondary">
                      Next: {STEPS[currentIndex + 1].label}
                    </Typography>
                  )}
                </Box>
              </Box>
            ) : (
              /* DESKTOP PROGRESS */
              <Box>
                {/* Step labels */}
                <Box display="flex" justifyContent="space-between" mb={1}>
                  {STEPS.map((s, i) => (
                    <Typography
                      key={s.id}
                      fontSize={15}
                      fontWeight={i <= currentIndex ? 600 : 400}
                      color={
                        i <= currentIndex ? "primary.main" : "text.secondary"
                      }
                    >
                      {s.label}
                    </Typography>
                  ))}
                </Box>

                {/* Progress bar */}
                <Box
                  sx={{
                    position: "relative",
                    height: 10,
                    borderRadius: 999,
                    backgroundColor: "rgba(0,0,0,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: `${progressPercent}%`,
                      background:
                        "linear-gradient(90deg, #2E7D32 0%, #43A047 100%)",
                      transition: "width 500ms ease",
                    }}
                  />
                </Box>

                {/* Step dots */}
                <Box display="flex" justifyContent="space-between" mt={1.5}>
                  {STEPS.map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        backgroundColor:
                          i <= currentIndex
                            ? "primary.main"
                            : "rgba(0,0,0,0.25)",
                        transition: "background-color 300ms ease",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Box>

          {/* CENTERED STEP CONTENT */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 2,
              pb: 4,
            }}
          >
            <Container maxWidth="lg">
              <Box
                sx={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "scale(0.99)" : "scale(1)",
                  transition: "opacity 250ms ease, transform 250ms ease",
                }}
              >
                {step === 1 && (
                  <StepOne
                    data={formData}
                    setData={setFormData}
                    onNext={() => goToStep(2)}
                  />
                )}

                {step === 2 && (
                  <StepTwo
                    data={formData}
                    setData={setFormData}
                    onNext={() => goToStep(3)}
                    onBack={() => goToStep(1)}
                  />
                )}

                {step === 3 && (
                  <StepThree
                    data={formData}
                    setData={setFormData}
                    onBack={() => goToStep(2)}
                    onFinish={() => goToStep(4)}
                  />
                )}

                {step === 4 && <StepFour email={formData.email} />}
              </Box>
            </Container>
          </Box>
        </Box>
      </DottedSection>
    </Box>
  );
}

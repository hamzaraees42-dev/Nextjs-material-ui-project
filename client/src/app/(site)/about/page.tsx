"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Fade,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import DottedSection from "@/components/DottedSection";

import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/css";
import "swiper/css/navigation";
import { keyframes } from "@mui/system";

import { Slide } from "@mui/material";
import { useEffect, useRef, useState } from "react";

/* ================= TEAM DATA ================= */
const teamMembers = [
  {
    id: 1,
    name: "Muhammad Kamran Riaz",
    role: "Chief Operating Officer",
    gender: "male",
    socials: {
      linkedin: null,
    },
  },
  {
    id: 2,
    name: "Naveed Mehmood",
    role: "Head of Projects",
    gender: "male",
    socials: {
      linkedin: null,
    },
  },
  {
    id: 3,
    name: "Atika Atif",
    role: "Head of Marketing",
    gender: "female",
    socials: {
      linkedin: null,
    },
  },
  {
    id: 4,
    name: "Khawaja Osman Ali",
    role: "Head of Finance",
    gender: "male",
    socials: {
      linkedin: null,
    },
  },
  {
    id: 5,
    name: "Samira Sohail Saadan",
    role: "Chief Product Officer",
    gender: "female",
    socials: {
      linkedin: null,
    },
  },
];

/* ================= FLIP CARD ================= */
function TeamFlipCard({ member }: any) {
  return (
    <Box sx={{ perspective: "1200px", height: 360 }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 700ms cubic-bezier(0.4,0,0.2,1)",
          "&:hover": {
            transform: "rotateY(180deg)",
          },
        }}
      >
        {/* FRONT */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: 4,
            bgcolor: "background.paper",
            boxShadow: "0 14px 34px rgba(0,0,0,0.12)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={
              member.gender === "female"
                ? "/assets/images/woman.png"
                : "/assets/images/man.png"
            }
            alt={member.name}
            width={120}
            height={120}
            style={{
              borderRadius: "50%",
              border: "4px solid #F08C00",
              marginBottom: 16,
            }}
          />

          <Typography variant="h6" fontWeight={700}>
            {member.name}
          </Typography>
        </Box>

        {/* BACK */}
        {/* BACK */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 4,
            bgcolor: "primary.main",
            color: "#fff",
            p: 4,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* NAME */}
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ letterSpacing: "0.02em" }}
          >
            {member.name}
          </Typography>

          {/* DESIGNATION */}
          <Typography
            sx={{
              opacity: 0.85,
              fontSize: "0.95rem",
              mb: 2,
            }}
          >
            {member.role}
          </Typography>

          {/* DESCRIPTION (optional) */}
          {member.description && (
            <Typography sx={{ mb: 3, opacity: 0.9 }}>
              {member.description}
            </Typography>
          )}

          {/* SOCIAL ICONS */}
          <Box>
            {member.socials?.linkedin && (
              <IconButton href={member.socials.linkedin} sx={{ color: "#fff" }}>
                <LinkedInIcon />
              </IconButton>
            )}
            {member.socials?.twitter && (
              <IconButton href={member.socials.twitter} sx={{ color: "#fff" }}>
                <TwitterIcon />
              </IconButton>
            )}
            {member.socials?.github && (
              <IconButton href={member.socials.github} sx={{ color: "#fff" }}>
                <GitHubIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function AboutPage() {
  const [pageReady, setPageReady] = useState(false);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const [missionVisible, setMissionVisible] = useState(false);

  useEffect(() => {
    const onReady = () => setPageReady(true);
    document.addEventListener("page:ready", onReady);

    return () => {
      document.removeEventListener("page:ready", onReady);
    };
  }, []);

  const missionCards = [
    {
      title: "Our Mission",
      text: "A membership platform that aggregates orders, negotiates pricing, and simplifies supplier access for local retailers.",
      bg: "primary.main",
      icon: <TrackChangesIcon fontSize="large" />,
    },
    {
      title: "Our Vision",
      text: "Built and operated in Canada, connecting local retailers and suppliers starting in Albert and Western Canada.",
      bg: "info.main",
      icon: <VisibilityIcon fontSize="large" />,
    },
    {
      title: "Our Values",
      text: "GrocerConnect provides real-time insights that support smarter procurement decisions\nand improved profitability.",
      bg: "success.main",
      icon: <FavoriteIcon fontSize="large" />,
    },
  ];

  const whoWeAreRef = useRef<HTMLDivElement | null>(null);
  const [whoWeAreVisible, setWhoWeAreVisible] = useState(false);

  useEffect(() => {
    if (!pageReady) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhoWeAreVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (whoWeAreRef.current) {
      observer.observe(whoWeAreRef.current);
    }

    return () => observer.disconnect();
  }, [pageReady]);

  useEffect(() => {
    if (!pageReady) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMissionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (missionRef.current) observer.observe(missionRef.current);

    return () => observer.disconnect();
  }, [pageReady]);

  const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

  return (
    <Box>
      <DottedSection>
        <Container sx={{ py: { xs: 8, md: 20 } }}>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: "var(--font-passion)",
                fontWeight: 700,
                fontSize: {
                  xs: "clamp(28px, 10vw, 150px)",
                  md: "clamp(28px, 5.5vw, 150px)",
                },
                lineHeight: 1,
                color: "#000",
                WebkitTextStroke: "0.2em #fff",
                paintOrder: "stroke fill",
                filter:
                  "drop-shadow(0px clamp(2px, 1vw, 10px) clamp(1px, 0.2vw, 5px) rgba(0,0,0,0.55))",
                px: "0.25em",
              }}
            >
              About GrocerConnect
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: 900,
                mx: "auto",
                fontSize: { xs: "1.05rem", md: "1.25rem" },
                fontFamily: "var(--font-jakarta)",
                color: "text.secondary",
              }}
            >
              Helping independent grocery and convenience stores gain collective
              buying power by bringing them together on one digital platform to
              negotiate better pricing, simplify ordering, and strengthen
              supplier relationships.
            </Typography>
          </Box>
          <Box
            ref={whoWeAreRef}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6,
              alignItems: "center",
            }}
          >
            {/* LEFT: TEXT */}
            <Slide
              direction="right"
              in={pageReady && whoWeAreVisible}
              timeout={800}
              mountOnEnter
            >
              <Box sx={{ perspective: "1200px" }}>
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    color: "#fff",
                    p: { xs: 3, md: 5 },
                    borderRadius: 4,

                    boxShadow: "0 14px 34px rgba(224,49,49,0.35)",

                    transform: "rotateX(0deg) rotateY(0deg) scale(1)",
                    transition:
                      "transform 500ms cubic-bezier(.4,0,.2,1), box-shadow 400ms ease",
                    willChange: "transform",

                    "@media (hover: hover)": {
                      "&:hover": {
                        transform: "rotateX(4deg) rotateY(-4deg) scale(1.03)",
                        boxShadow: "0 30px 70px rgba(224,49,49,0.55)",
                      },
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { sm: "1.5rem", md: "2.6rem" },
                      fontFamily: "var(--font-passion)",
                      letterSpacing: "0.02em",
                    }}
                    variant="h4"
                    gutterBottom
                  >
                    Understanding GrocerConnect
                  </Typography>

                  <Typography
                    sx={{
                      lineHeight: 1.8,
                      opacity: 0.95,
                      fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1.1rem" },
                      fontFamily: "var(--font-jakarta)",
                    }}
                  >
                    GrocerConnect is an innovative digital platform built to
                    modernize how small and independent grocery stores across
                    Canada and North America engage with suppliers. Anchored in
                    the principles of collective purchasing power, operational
                    efficiency, and community empowerment, the platform
                    addresses the longstanding challenges faced by smaller
                    retailers such as limited bargaining leverage, fragmented
                    supplier networks, and high overhead costs. Through
                    GrocerConnect, store owners gain access to an intuitive,
                    centralized platform that enables them to negotiate better
                    deals, diversify their supply options, and streamline
                    inventory operations.
                  </Typography>

                  <Typography
                    sx={{
                      lineHeight: 1.8,
                      opacity: 0.95,
                      pt: 2,
                      fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1.1rem" },
                      fontFamily: "var(--font-jakarta)",
                    }}
                  >
                    At the core of GrocerConnect is a dynamic group-buying model
                    that allows multiple small-format retailers to pool their
                    purchasing power, unlocking bulk discounts and preferential
                    terms typically reserved for large chains. Through a
                    user-friendly interface, grocers can place orders, monitor
                    fulfillment, compare suppliers, and collaborate with peer
                    stores in real time. The system also fosters community
                    through digital forums and data-sharing features that
                    promote knowledge exchange and peer-driven solutions.
                  </Typography>
                </Box>
              </Box>
            </Slide>

            {/* RIGHT: IMAGE */}
            <Slide
              direction="left"
              in={pageReady && whoWeAreVisible}
              timeout={800}
              mountOnEnter
            >
              <Box sx={{ perspective: "1200px" }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 630 },
                    borderRadius: 4,
                    overflow: "hidden",

                    boxShadow: "0 18px 40px rgba(0,0,0,0.25)",

                    transform: "rotateX(0deg) rotateY(0deg) scale(1)",
                    transition:
                      "transform 500ms cubic-bezier(.4,0,.2,1), box-shadow 400ms ease",

                    willChange: "transform",

                    "@media (hover: hover)": {
                      "&:hover": {
                        transform: "rotateX(-4deg) rotateY(4deg) scale(1.04)",
                        boxShadow: "0 34px 80px rgba(0,0,0,0.45)",
                      },
                    },
                  }}
                >
                  <Image
                    src="/assets/images/15866.jpg"
                    alt="Independent grocers"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>
            </Slide>
          </Box>
        </Container>

        {/* ================= MISSION / VISION / VALUES ================= */}
        <Container
          ref={missionRef}
          maxWidth="xl"
          sx={{ py: { xs: 6, md: 10 } }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 4,
            }}
          >
            {missionCards.map((item, i) => {
              const hoverTransforms = [
                "scale(1.04) rotateX(4deg) rotateY(-4deg)",
                "scale(1.04) rotateX(-4deg) rotateY(0deg)",
                "scale(1.04) rotateX(4deg) rotateY(4deg)",
              ];

              return (
                <Slide
                  direction="up"
                  in={pageReady && missionVisible}
                  timeout={600 + i * 200}
                  mountOnEnter
                  key={i}
                >
                  <Card
                    sx={{
                      height: "100%",
                      backgroundColor: item.bg,
                      color: "#fff",
                      borderRadius: 4,

                      boxShadow: "0 12px 28px rgba(0,0,0,0.2)",

                      /* 🌊 Idle float (different speed per card) */
                      animation: `${float} ${
                        4 + i * 0.7
                      }s ease-in-out infinite`,

                      transform: "scale(1) rotateX(0deg) rotateY(0deg)",
                      transition:
                        "transform 500ms cubic-bezier(.4,0,.2,1), box-shadow 400ms ease",

                      willChange: "transform",

                      "@media (hover: hover)": {
                        "&:hover": {
                          animationPlayState: "paused",
                          transform: hoverTransforms[i],
                          boxShadow: "0 32px 70px rgba(0,0,0,0.45)",
                        },
                      },

                      px: { xs: 1, sm: 2 },
                      py: { xs: 2, sm: 4 },
                    }}
                  >
                    <CardContent>
                      {item.icon}

                      {/* <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "var(--font-passion)",
                          fontSize: { xs: "1.5rem", md: "2.2rem" },
                          letterSpacing: "0.02em",
                        }}
                        fontWeight={700}
                        mt={2}
                      >
                        {item.title}
                      </Typography> */}

                      <Typography
                        sx={{
                          opacity: 0.95,
                          fontSize: { xs: "0.9rem", md: "1.1rem" },
                          fontFamily: "var(--font-jakarta)",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Slide>
              );
            })}
          </Box>
        </Container>

        {/* ================= TEAM CAROUSEL ================= */}
        <Container maxWidth={false} sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            textAlign="center"
            sx={{
              fontFamily: "var(--font-passion)",
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              color: "info.main",
            }}
          >
            Meet Our Team
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              mb: 6,
              maxWidth: 700,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.05rem", md: "1.4rem" },
            }}
          >
            The people behind GrocerConnect.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* LEFT ARROW */}
            <IconButton
              className="team-prev"
              sx={{
                mr: 2,
                width: 52,
                height: 52,
                bgcolor: "error.main",
                color: "#fff",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                "&:hover": { bgcolor: "error.dark" },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            {/* SLIDER */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Swiper
                modules={[Autoplay, Navigation]}
                loop
                speed={900}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={32}
                slidesPerView={1}
                breakpoints={{
                  600: { slidesPerView: 2 },
                  900: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
                navigation={{
                  prevEl: ".team-prev",
                  nextEl: ".team-next",
                }}
                style={{
                  width: "100%", // 🔥 THIS FIXES EVERYTHING
                  padding: "40px 0",
                }}
              >
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={`${member.name}-${index}`}>
                    <TeamFlipCard member={member} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            {/* RIGHT ARROW */}
            <IconButton
              className="team-next"
              sx={{
                ml: 2,
                width: 52,
                height: 52,
                bgcolor: "info.main",
                color: "#fff",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                "&:hover": { bgcolor: "info.dark" },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Container>
      </DottedSection>
    </Box>
  );
}

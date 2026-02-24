import type { Metadata } from "next";
import "./globals.css";

import {
  Fredoka,
  Passion_One,
  Plus_Jakarta_Sans,
  Be_Vietnam_Pro,
} from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry";
import PageLoader from "@/components/PageLoader";
import { SnackbarProvider } from "@/components/dashboard/common/SnackbarProvider";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollToTop from "@/components/ScrollToTop";
export const metadata: Metadata = {
  title: "GrocerConnect",
  description: "GrocerConnect frontend application",
};

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fredoka",
});

const passion = Passion_One({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-passion",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${passion.variable} ${jakarta.variable} ${beVietnam.variable}`}
        style={{ overflowX: "hidden" }}
      >
        <ThemeRegistry>
          <SnackbarProvider>
            <SmoothScrollProvider>
              <PageLoader />
              <ScrollToTop />

              {/* 🔑 SINGLE LENIS SCROLL FLOW */}
              <div id="lenis-scroll-content">
                {children}

                {/* 🔑 SCROLL BUFFER (INSIDE FLOW) */}
                <div
                  aria-hidden
                  style={{
                    height: "0vh",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </SmoothScrollProvider>
          </SnackbarProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}

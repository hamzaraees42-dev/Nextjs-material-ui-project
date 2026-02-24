import ThemeRegistry from "@/components/ThemeRegistry";
import PageLoader from "@/components/PageLoader";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeRegistry>
      <PageLoader />
      {children}
    </ThemeRegistry>
  );
}

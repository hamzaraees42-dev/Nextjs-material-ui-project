"use client";

import { Box, Container, Typography, Divider } from "@mui/material";
import DottedSection from "@/components/DottedSection";

export default function PrivacyPolicyPage() {
  return (
    <Box>
      {/* ✅ SAME BACKGROUND AS ABOUT PAGE */}
      <DottedSection>
        <Container sx={{ py: { xs: 8, md: 20 }, pb: { xs: 8, md: 2 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
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
              Privacy Policy
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: 750,
                mx: "auto",
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                fontFamily: "var(--font-jakarta)",
                color: "text.secondary",
              }}
            >
              How GrocerConnect collects, uses, and protects your information.
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "0.95rem",
              color: "text.secondary",
              mb: 4,
            }}
          >
            <strong>Last Updated:</strong> 2025/12/31
          </Typography>

          <Typography paragraph>
            <strong>GROCERCONNECT LIMITED</strong> (“GrocerConnect,” “we,” “us,”
            or “our”) is committed to protecting the privacy and confidentiality
            of personal and business information collected through our website
            and digital platform. This Privacy Policy outlines how information
            is collected, used, disclosed, stored, and protected in accordance
            with applicable Canadian privacy laws, including the{" "}
            <em>
              Personal Information Protection and Electronic Documents Act
              (PIPEDA)
            </em>{" "}
            and relevant provincial legislation.
          </Typography>

          {/* 1 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            1. Scope and Application
          </Typography>
          <Typography paragraph>
            <strong>1.a</strong> This Privacy Policy applies to all users of the
            GrocerConnect website, platform, and related services, including
            grocery retailers, suppliers, and other business partners (“Users”).
          </Typography>
          <Typography paragraph>
            <strong>1.b</strong> By accessing or using our services, Users
            consent to the collection, use, and disclosure of information as
            described in this Policy.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* 2 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            2. Information We Collect
          </Typography>

          <Typography fontWeight={600}>
            2.a Personal and Business Information
          </Typography>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Telephone number</li>
            <li>Business name and trade name</li>
            <li>Business address</li>
          </ul>

          <Typography fontWeight={600}>
            2.b Operational and Platform Data
          </Typography>
          <ul>
            <li>Store supply requirements and ordering information</li>
            <li>Communications submitted through the platform</li>
            <li>Account activity and usage data</li>
          </ul>

          <Typography fontWeight={600}>2.c Technical Information</Typography>
          <ul>
            <li>IP address</li>
            <li>Browser type and device information</li>
            <li>
              Website usage data collected through cookies or similar
              technologies
            </li>
          </ul>

          <Typography fontWeight={600}>2.d Financial Information</Typography>
          <Typography paragraph>
            GrocerConnect does not collect, store, or process sensitive banking,
            credit card, or payment credentials. All such information is handled
            directly by third-party payment processors.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* 3 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            3. Purpose of Collection and Use
          </Typography>
          <Typography paragraph>
            <strong>3.a</strong> Information is collected and used solely for
            legitimate business purposes, including:
          </Typography>
          <ul>
            <li>Registering and administering user accounts</li>
            <li>
              Facilitating order aggregation, supplier coordination, and
              fulfillment
            </li>
            <li>Communicating operational updates and service notices</li>
            <li>
              Internal analytics, reporting, research, and platform improvement
            </li>
            <li>
              Internal marketing and communications relating only to
              GrocerConnect services
            </li>
          </ul>

          <Typography paragraph>
            <strong>3.b</strong> GrocerConnect does not sell, rent, or license
            personal or business information to third parties.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* 4 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            4. Payments and Third-Party Processors
          </Typography>
          <Typography paragraph>
            <strong>4.a</strong> GrocerConnect utilizes reputable third-party
            payment processors to handle all payment transactions securely and
            in compliance with applicable standards, including PCI DSS.
          </Typography>
          <Typography paragraph>
            <strong>4.b</strong> Payment credentials are submitted directly to
            the payment processor, and GrocerConnect does not store or have
            access to full banking or card details.
          </Typography>
          <Typography paragraph>
            <strong>4.c</strong> GrocerConnect may receive limited
            transaction-related information necessary for operational,
            accounting, or reconciliation purposes.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* 5 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            5. Disclosure of Information to Third Parties
          </Typography>
          <Typography paragraph>
            <strong>5.a</strong> GrocerConnect does not disclose information for
            third-party marketing or advertising purposes.
          </Typography>
          <Typography paragraph>
            <strong>5.b</strong> Information may be disclosed on a limited,
            need-to-know basis where reasonably necessary to operate the
            platform, including disclosure to:
          </Typography>
          <ul>
            <li>Payment processors</li>
            <li>
              Wholesalers, suppliers, or distributors for order fulfillment
            </li>
            <li>
              Technology and infrastructure service providers supporting
              platform operations
            </li>
          </ul>
          <Typography paragraph>
            <strong>5.c</strong> Any such disclosure is limited to what is
            reasonably required, and third parties are expected to maintain
            appropriate confidentiality and data protection standards.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* 6 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            6. Third-Party Links and External Platforms
          </Typography>
          <Typography paragraph>
            <strong>6.a</strong> The GrocerConnect website and platform may
            contain links to third-party websites, portals, or systems,
            including supplier platforms or payment services.
          </Typography>
          <Typography paragraph>
            <strong>6.b</strong> GrocerConnect does not control and is not
            responsible for the privacy practices, content, or security of
            third-party websites.
          </Typography>
          <Typography paragraph>
            <strong>6.c</strong> This Privacy Policy applies only to information
            collected directly by GrocerConnect, and Users are encouraged to
            review the privacy policies of any third-party sites they access.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* 7 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            7. Marketing Communications
          </Typography>
          <Typography paragraph>
            <strong>7.a</strong> GrocerConnect may use contact information to
            send service-related notices, platform updates, and marketing
            communications related to GrocerConnect’s own services.
          </Typography>
          <Typography paragraph>
            <strong>7.b</strong> Users may opt out of non-essential marketing
            communications at any time by following unsubscribe instructions or
            contacting GrocerConnect directly.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* 8 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            8. Data Security
          </Typography>
          <Typography paragraph>
            <strong>8.a</strong> GrocerConnect maintains reasonable
            administrative, technical, and organizational safeguards designed to
            protect information against unauthorized access, loss, misuse, or
            disclosure.
          </Typography>
          <Typography paragraph>
            <strong>8.b</strong> Access to information is restricted to
            authorized personnel with a legitimate business need.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* 9 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            9. Data Retention
          </Typography>
          <Typography paragraph>
            <strong>9.a</strong> Information is retained only for as long as
            necessary to fulfill the purposes outlined in this Policy or to meet
            legal and regulatory requirements.
          </Typography>
          <Typography paragraph>
            <strong>9.b</strong> When information is no longer required, it is
            securely deleted or anonymized.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* 10 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            10. Access, Accuracy, and User Rights
          </Typography>
          <Typography paragraph>
            <strong>10.a</strong> Users may request access to their personal
            information or request corrections to inaccurate or incomplete
            information.
          </Typography>
          <Typography paragraph>
            <strong>10.b</strong> Users may withdraw consent for certain uses of
            information, subject to legal or operational requirements.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* 11 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            11. Changes to This Privacy Policy
          </Typography>
          <Typography paragraph>
            <strong>11.a</strong> GrocerConnect may update this Privacy Policy
            from time to time.
          </Typography>
          <Typography paragraph>
            <strong>11.b</strong> Any changes will be posted on this page with
            an updated revision date, and continued use of the platform
            constitutes acceptance of the revised Policy.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* 12 */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            12. Contact Information
          </Typography>
          <Typography paragraph>
            For questions or concerns regarding this Privacy Policy or our data
            practices, please contact:
          </Typography>
          <Typography>
            <strong>GrocerConnect</strong>
            <br />
            Email: contact@grocerconnect.ca
            <br />
            7070E Farrell Rd SE Calgary, AB T2H0T2
          </Typography>
        </Container>
      </DottedSection>
    </Box>
  );
}

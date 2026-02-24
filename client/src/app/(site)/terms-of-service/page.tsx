"use client";

import { Box, Container, Typography, Divider } from "@mui/material";
import DottedSection from "@/components/DottedSection";

export default function TermsOfServicePage() {
  return (
    <Box>
      {/* ================= CONTENT ================= */}
      <DottedSection>
        <Container
          maxWidth="md"
          sx={{ py: { xs: 8, md: 20 }, pb: { xs: 8, md: 2 } }}
        >
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
              Terms of Service
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
              The terms and conditions governing the use of the GrocerConnect
              platform.
            </Typography>
          </Box>
          {/* ===== INTRO ===== */}
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
            These Terms of Service (the “Terms”) govern your access to and use
            of the GrocerConnect website, applications, and related services
            (collectively, the “Platform”). By creating an account, clicking “I
            agree,” or using the Platform, you agree to be bound by these Terms.
          </Typography>

          {/* ===== 1 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            1. Parties
          </Typography>
          <Typography paragraph>
            <strong>1.a</strong> GrocerConnect means{" "}
            <strong>GROCERCONNECT LIMITED</strong>, a corporation incorporated
            under the laws of Canada and licensed in Alberta, with its
            registered office at 7070E Farrell Rd SE PMB 827, Calgary, AB T2H
            0T2 (or such other address we notify you of).
          </Typography>
          <Typography paragraph>
            <strong>1.b</strong> You means the business entity using the
            Platform and any individual acting on its behalf.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 2 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            2. Platform Purpose and Role
          </Typography>
          <Typography paragraph>
            <strong>2.a</strong> GrocerConnect provides a membership-based
            digital platform designed to help independent grocery and
            convenience retailers aggregate demand, streamline procurement, and
            engage suppliers more efficiently.
          </Typography>
          <Typography paragraph>
            <strong>2.b</strong> GrocerConnect is not a wholesaler, distributor,
            merchant of record, or seller of goods. Unless expressly stated
            otherwise in a separate written agreement, GrocerConnect facilitates
            connections and processes; it does not take title to goods and does
            not guarantee product availability, supplier performance, delivery,
            or pricing.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 3 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            3. Eligibility and Business Use Only
          </Typography>
          <Typography paragraph>
            <strong>3.a</strong> The Platform is intended for business use only,
            not personal or household use.
          </Typography>
          <Typography paragraph>
            <strong>3.b</strong> You confirm that each person who opens an
            account or uses the Platform on your behalf is at least 18 years old
            and has authority to bind your business.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 4 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            4. Accounts, Authorized Users, and Security
          </Typography>
          <Typography paragraph>
            <strong>4.a</strong> To use certain features, you must register for
            an account and provide accurate business information (including
            contact information, business address, and trade name).
          </Typography>
          <Typography paragraph>
            <strong>4.b</strong> You may permit employees or contractors
            (“Authorized Users”) to access your account. You are responsible for
            their actions and compliance with these Terms.
          </Typography>
          <Typography paragraph>
            <strong>4.c</strong> You must safeguard login credentials and
            promptly notify us of any suspected unauthorized access.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 5 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            5. Membership, Services, and Changes
          </Typography>
          <Typography paragraph>
            <strong>5.a</strong> Membership may be offered on free or paid tiers
            as described on the Platform or in a written schedule.
          </Typography>
          <Typography paragraph>
            <strong>5.b</strong> We may modify, suspend, or discontinue Platform
            features from time to time, and may introduce product-specific terms
            for certain services. Platforms commonly reserve these rights and
            incorporate related documents by reference.
          </Typography>

          <Divider sx={{ my: 4 }} />
          {/* ===== 6 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            6. How Ordering and Collective Purchasing Works
          </Typography>

          <Typography paragraph>
            <strong>6.a</strong> Order Requests: Retailers submit replenishment
            requirements and order requests through the Platform.
          </Typography>

          <Typography paragraph>
            <strong>6.b</strong> Aggregation: GrocerConnect may aggregate
            requests across multiple retailers and present consolidated demand
            to suppliers for pricing or fulfillment proposals.
          </Typography>

          <Typography paragraph>
            <strong>6.c</strong> Supplier Confirmation: Suppliers may accept,
            reject, or modify proposed pricing, quantities, or terms. No order
            is binding until confirmed by the supplier and accepted by the
            retailer under the supplier’s applicable terms.
          </Typography>

          <Typography paragraph>
            <strong>6.d</strong> No Guarantee: GrocerConnect does not guarantee
            that aggregation will result in reduced pricing or improved terms in
            every instance.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 7 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            7. Supplier Marketplace and Listings
          </Typography>

          <Typography paragraph>
            <strong>7.a</strong> Supplier and product listings may include
            information provided by suppliers or third parties.
          </Typography>

          <Typography paragraph>
            <strong>7.b</strong> We may vet suppliers at our discretion, but we
            do not warrant that any supplier, product, or listing is error-free,
            compliant, or suitable for your business.
          </Typography>

          <Typography paragraph>
            <strong>7.c</strong> You are responsible for verifying product
            specifications, regulatory requirements, and suitability for your
            store.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 8 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            8. Payments and Payment Processors
          </Typography>

          <Typography paragraph>
            <strong>8.a</strong> GrocerConnect may integrate with third-party
            payment processors to facilitate payments.
          </Typography>

          <Typography paragraph>
            <strong>8.b</strong> GrocerConnect does not store or process full
            payment card details or sensitive banking credentials; payment
            processing is handled by the payment processor under its own terms
            and privacy practices.
          </Typography>

          <Typography paragraph>
            <strong>8.c</strong> We may receive limited transaction and
            reconciliation data (e.g., payment status, amounts, partial
            identifiers) to operate the Platform and support accounting.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 9 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            9. Fees, Billing, and Taxes
          </Typography>

          <Typography paragraph>
            <strong>9.a</strong> Fees (including subscription fees, service
            fees, or other charges) will be as displayed on the Platform or set
            out in a written schedule.
          </Typography>

          <Typography paragraph>
            <strong>9.b</strong> Unless stated otherwise, fees are exclusive of
            applicable taxes (including GST/HST), which will be charged where
            required.
          </Typography>

          <Typography paragraph>
            <strong>9.c</strong> Overdue amounts may result in suspension or
            restricted access until balances are paid.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 10 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            10. Acceptable Use
          </Typography>

          <Typography paragraph>
            <strong>10.a</strong> You agree not to:
          </Typography>

          <ul>
            <li>
              use the Platform unlawfully or in violation of any applicable
              regulations;
            </li>
            <li>upload malware or attempt to disrupt the Platform;</li>
            <li>
              scrape, crawl, or use automated tools to extract data without
              written permission;
            </li>
            <li>reverse engineer or bypass technical limitations;</li>
            <li>
              misuse supplier or retailer contact information obtained through
              the Platform.
            </li>
          </ul>

          <Divider sx={{ my: 4 }} />
          {/* ===== 11 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            11. Your Responsibilities (Retailers and Suppliers)
          </Typography>

          <Typography paragraph>
            <strong>11.a</strong> Retailers are responsible for order accuracy,
            receiving procedures, payment obligations, and compliance with
            applicable laws (including food safety, labeling, and local
            licensing).
          </Typography>

          <Typography paragraph>
            <strong>11.b</strong> Suppliers/Distributors are responsible for
            product quality, inventory accuracy, delivery performance,
            invoicing, refunds/returns (if any), and legal compliance.
          </Typography>

          <Typography paragraph>
            <strong>11.c</strong> Any contract of sale, where applicable, is
            directly between the retailer and the supplier unless explicitly
            stated otherwise in writing.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 12 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            12. Data, Privacy, and Confidentiality
          </Typography>

          <Typography paragraph>
            <strong>12.a</strong> Our collection and use of personal and
            business information is described in our Privacy Policy, which is
            incorporated by reference.
          </Typography>

          <Typography paragraph>
            <strong>12.b</strong> We may use your information for internal
            purposes, including analytics, service improvement, and
            GrocerConnect’s own marketing, as described in the Privacy Policy.
          </Typography>

          <Typography paragraph>
            <strong>12.c</strong> You agree that supplier pricing, negotiated
            terms, platform analytics, and non-public operational details may
            constitute confidential information and must not be disclosed except
            as necessary for legitimate business operations.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 13 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            13. Third-Party Services and Links
          </Typography>

          <Typography paragraph>
            <strong>13.a</strong> The Platform may include links or integrations
            to third-party websites or portals (including supplier systems and
            payment processors).
          </Typography>

          <Typography paragraph>
            <strong>13.b</strong> We are not responsible for third-party
            content, availability, security, or privacy practices, and your use
            of third-party services is at your own risk.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 14 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            14. Intellectual Property
          </Typography>

          <Typography paragraph>
            <strong>14.a</strong> GrocerConnect and its licensors own all rights
            in the Platform, including software, design, branding, and content
            (excluding user-provided materials).
          </Typography>

          <Typography paragraph>
            <strong>14.b</strong> You are granted a limited, non-exclusive,
            non-transferable right to use the Platform during your membership
            for your internal business operations.
          </Typography>

          <Typography paragraph>
            <strong>14.c</strong> You may not copy, resell, sublicense, or
            commercially exploit the Platform without written permission.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 15 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            15. Disclaimers
          </Typography>

          <Typography paragraph>
            <strong>15.a</strong> The Platform is provided “as is” and “as
            available.”
          </Typography>

          <Typography paragraph>
            <strong>15.b</strong> To the maximum extent permitted by law, we
            disclaim all warranties, express or implied, including
            merchantability, fitness for a particular purpose, and
            non-infringement.
          </Typography>

          <Typography paragraph>
            <strong>15.c</strong> We do not warrant uninterrupted access,
            error-free operation, or that any transaction will achieve specific
            savings, pricing, or supply outcomes.
          </Typography>

          <Divider sx={{ my: 4 }} />
          {/* ===== 16 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            16. Limitation of Liability
          </Typography>

          <Typography paragraph>
            <strong>16.a</strong> To the maximum extent permitted by law,
            GrocerConnect will not be liable for indirect, incidental, special,
            consequential, exemplary, or punitive damages, or for lost profits,
            lost revenue, lost data, or business interruption.
          </Typography>

          <Typography paragraph>
            <strong>16.b</strong> Without limiting 16.a, GrocerConnect will not
            be liable for supplier performance, delivery issues, product
            defects, recalls, chargebacks, or disputes between retailers and
            suppliers.
          </Typography>

          <Typography paragraph>
            <strong>16.c</strong> Where liability cannot be excluded,
            GrocerConnect’s total aggregate liability in any 12-month period
            will not exceed the fees you paid to GrocerConnect in that period
            (or CAD $[insert] if you paid no fees), except where prohibited by
            law.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 17 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            17. Indemnity
          </Typography>

          <Typography paragraph>
            <strong>17.a</strong> You agree to indemnify and hold harmless
            GrocerConnect from claims, losses, and expenses arising out of:
          </Typography>

          <ul>
            <li>your breach of these Terms;</li>
            <li>your misuse of the Platform;</li>
            <li>
              your transactions, products, operations, or regulatory
              non-compliance;
            </li>
            <li>disputes with suppliers, retailers, or third parties.</li>
          </ul>

          <Divider sx={{ my: 4 }} />

          {/* ===== 18 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            18. Suspension and Termination
          </Typography>

          <Typography paragraph>
            <strong>18.a</strong> We may suspend or terminate access immediately
            if we reasonably believe there is fraud, security risk, unlawful
            activity, or material breach.
          </Typography>

          <Typography paragraph>
            <strong>18.b</strong> You may cancel your membership in accordance
            with the cancellation process shown on the Platform or your written
            schedule.
          </Typography>

          <Typography paragraph>
            <strong>18.c</strong> On termination:
          </Typography>

          <ul>
            <li>access may be revoked;</li>
            <li>outstanding fees become immediately due;</li>
            <li>
              provisions intended to survive (including confidentiality,
              limitations, indemnities) will survive.
            </li>
          </ul>

          <Divider sx={{ my: 4 }} />

          {/* ===== 19 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            19. Disputes and Resolution
          </Typography>

          <Typography paragraph>
            <strong>19.a</strong> Disputes between retailers and suppliers must
            be resolved directly between those parties.
          </Typography>

          <Typography paragraph>
            <strong>19.b</strong> If you have a dispute with GrocerConnect, you
            agree to first contact us in good faith to resolve it informally.
          </Typography>

          <Typography paragraph>
            <strong>19.c</strong> If unresolved, either party may pursue
            mediation in Alberta, and if still unresolved, litigation as set out
            below.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 20 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            20. Governing Law and Jurisdiction
          </Typography>

          <Typography paragraph>
            <strong>20.a</strong> These Terms are governed by the laws of
            Alberta and the federal laws of Canada applicable therein, without
            regard to conflict of laws principles.
          </Typography>

          <Typography paragraph>
            <strong>20.b</strong> The parties submit to the exclusive
            jurisdiction of the courts located in Calgary, Alberta, unless a
            non-excludable right requires otherwise.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 21 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            21. General
          </Typography>

          <Typography paragraph>
            <strong>21.a</strong> Assignment: You may not assign these Terms
            without our written consent; we may assign to an affiliate or
            successor.
          </Typography>

          <Typography paragraph>
            <strong>21.b</strong> Force Majeure: We are not liable for delays
            caused by events beyond reasonable control.
          </Typography>

          <Typography paragraph>
            <strong>21.c</strong> Severability: If a provision is unenforceable,
            it will be severed and the remainder will continue.
          </Typography>

          <Typography paragraph>
            <strong>21.d</strong> Entire Agreement: These Terms, plus
            incorporated policies and schedules, form the entire agreement.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* ===== 22 ===== */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            22. Contact
          </Typography>

          <Typography paragraph>
            <strong>22.a</strong> Legal notices and support inquiries:
            contact@grocerconnect.ca
          </Typography>

          <Typography paragraph>
            <strong>22.b</strong> Mailing address: 7070E Farrell Rd SE PMB 827,
            Calgary, AB T2H 0T2
          </Typography>
        </Container>
      </DottedSection>
    </Box>
  );
}

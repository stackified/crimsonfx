"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main className="relative">
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Legal Documentation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Last updated: February 2, 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  RestroFX collects information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Financial information for account verification</li>
                  <li>Trading activity and transaction history</li>
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Comply with legal obligations and regulations</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Cookies and Tracking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@restrofx.com" className="text-primary hover:underline">
                    privacy@restrofx.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

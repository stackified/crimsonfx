"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Legal Documentation
                </span>
              </div>

              {/* Main Heading with Gradient */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                  Terms & Conditions
                </span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Last updated: February 2, 2026
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Section */}
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the RestroFX website and trading platform, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Account Registration
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To use our services, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Trading Rules
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All trading activities are subject to our trading rules and regulations. You agree to comply with all applicable laws and regulations when using our platform.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>You must be at least 18 years old to trade</li>
                  <li>You must comply with all local trading regulations</li>
                  <li>You are responsible for all taxes on your trading profits</li>
                  <li>Market manipulation and insider trading are strictly prohibited</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Risk Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trading in financial instruments carries a high level of risk and may not be suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite before trading. You could lose some or all of your initial investment.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  RestroFX shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on the RestroFX platform, including but not limited to text, graphics, logos, icons, images, and software, is the property of RestroFX and is protected by international copyright laws.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes to these terms via email or through our platform. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms & Conditions, please contact us at{" "}
                  <a href="mailto:legal@restrofx.com" className="text-primary hover:underline">
                    legal@restrofx.com
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

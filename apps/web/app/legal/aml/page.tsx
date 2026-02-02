"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function AMLPage() {
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
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Legal Documentation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                  AML Policy
                </span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Anti-Money Laundering & Counter-Terrorist Financing
              </p>
              <p className="text-sm text-muted-foreground mt-2">
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
                  Our Commitment
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  RestroFX is committed to preventing money laundering and terrorist financing. We have implemented comprehensive policies and procedures to ensure compliance with all applicable anti-money laundering (AML) and counter-terrorist financing (CTF) regulations.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Customer Due Diligence
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We conduct thorough customer due diligence (CDD) on all clients, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Identity verification using government-issued documents</li>
                  <li>Address verification through utility bills or bank statements</li>
                  <li>Source of funds and wealth verification</li>
                  <li>Ongoing monitoring of customer transactions</li>
                  <li>Enhanced due diligence for high-risk customers</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Know Your Customer (KYC)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All clients must complete our KYC process before trading. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Providing valid identification documents</li>
                  <li>Proof of address (not older than 3 months)</li>
                  <li>Completing a risk assessment questionnaire</li>
                  <li>Declaring the source of funds</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Transaction Monitoring
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We employ sophisticated transaction monitoring systems to detect and prevent suspicious activities. All transactions are screened against international sanctions lists and monitored for unusual patterns that may indicate money laundering or terrorist financing.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Suspicious Activity Reporting
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If we identify suspicious activity, we are obligated to report it to the relevant authorities. We maintain strict confidentiality and will not inform clients if their activities are being reported.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Prohibited Activities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following activities are strictly prohibited on our platform:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Money laundering or terrorist financing</li>
                  <li>Transactions involving sanctioned individuals or entities</li>
                  <li>Use of proceeds from illegal activities</li>
                  <li>Structuring transactions to avoid reporting requirements</li>
                  <li>Providing false or misleading information</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Record Keeping
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain comprehensive records of all customer information and transactions for a minimum of 5 years, or as required by applicable regulations. These records are available to regulatory authorities upon request.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Staff Training
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All RestroFX employees receive regular training on AML/CTF policies and procedures to ensure they can identify and report suspicious activities effectively.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Contact Our Compliance Team
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our AML policy, please contact our compliance team at{" "}
                  <a href="mailto:compliance@restrofx.com" className="text-primary hover:underline">
                    compliance@restrofx.com
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

"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function RiskDisclosurePage() {
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
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Legal Documentation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                  Risk Disclosure
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
              <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-primary/20">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold font-heading mb-2 text-foreground">
                      Important Warning
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Trading in financial instruments carries a high level of risk and may not be suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite before trading.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  General Risk Warning
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Trading forex, CFDs, and other leveraged products involves significant risk of loss and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You could lose some or all of your initial investment. Do not invest money that you cannot afford to lose.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Leverage Risk
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Leverage allows you to control a large position with a small amount of capital. While this can magnify profits, it can also magnify losses. A small price movement against your position can result in substantial losses, potentially exceeding your initial investment.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Market Volatility
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Financial markets can be extremely volatile. Prices can move rapidly and unpredictably, especially during major economic announcements or geopolitical events. This volatility can result in significant gains or losses in a short period of time.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Technical Risks
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Trading platforms rely on technology and internet connectivity. Technical issues may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Internet connection failures</li>
                  <li>Platform downtime or technical glitches</li>
                  <li>Delays in order execution</li>
                  <li>Data feed interruptions</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Past Performance
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Past performance is not indicative of future results. Historical returns, expected returns, and probability projections are provided for informational purposes only and should not be construed as investment advice.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  No Guarantee of Profit
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  RestroFX does not guarantee profits or protection from losses. All trading decisions are made at your own risk. We recommend seeking advice from an independent financial advisor if you have any doubts.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Regulatory Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  RestroFX operates in accordance with applicable financial regulations. However, regulatory protection may vary depending on your jurisdiction. Please ensure you understand the regulatory framework that applies to you.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these risk disclosures, please contact us at{" "}
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

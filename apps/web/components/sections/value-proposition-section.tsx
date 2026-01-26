"use client";

import { GlowCard } from "@/components/ui/glow-card";
import { Card, CardContent, CardHeader, CardTitle } from "@crimsonfx/ui";
import { TrendingUp, Monitor, Eye } from "lucide-react";
import { motion } from "framer-motion";

const valueProps = [
  {
    icon: TrendingUp,
    title: "Tight Spreads & Fast Execution",
    description:
      "Competitive spreads and lightning-fast order execution to maximize your trading potential.",
  },
  {
    icon: Monitor,
    title: "Advanced Trading Platforms",
    description:
      "Access professional-grade trading platforms with powerful tools and seamless experience.",
  },
  {
    icon: Eye,
    title: "Transparent Trading Conditions",
    description:
      "Clear, upfront pricing with no hidden fees. Know exactly what you're paying for.",
  },
];

export function ValuePropositionSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-foreground mb-4">
            Why Traders Choose Restro FX
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            RESTRO FX is committed to transforming your trading experience by integrating expert financial guidance with advanced technology, ensuring that your investment goals are not only achieved but surpassed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="h-full"
              >
                <GlowCard className="flex flex-col h-full flex-1">
                  <Card className="flex flex-col border-2 border-border transition-all duration-300 group overflow-hidden relative hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-600/10 h-full backdrop-blur-sm bg-background/50">
                    <CardHeader className="relative z-10 pt-6 pb-0 px-6 flex-shrink-0">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <prop.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-red-600 transition-colors duration-300 mb-2 min-h-[2rem] font-bold">
                        {prop.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 px-6 pt-2 pb-6 flex-grow flex flex-col justify-start">
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{prop.description}</p>
                    </CardContent>

                    {/* Subtle bottom accent */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full" />
                  </Card>
                </GlowCard>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

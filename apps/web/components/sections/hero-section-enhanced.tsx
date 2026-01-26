"use client";

import { Button } from "@crimsonfx/ui";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export function HeroSectionEnhanced({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden bg-transparent pt-14 md:pt-32 pb-8">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[70%_50%] sm:object-center"
        >
          <source src="/Hero.mp4" type="video/mp4" />
        </video>

        {/* Mobile-only Red Glassmorphic Overlay */}
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm sm:hidden z-[5]" />

        {/* Top Fade for Navbar */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent z-10" />
        {/* Bottom Fade for Next Section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />

        <div className="hero-glow-1 animate-pulse-slow opacity-20" />
        <div className="hero-glow-2 animate-pulse-slow opacity-20" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-start text-left max-w-2xl">

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold mb-8 backdrop-blur-md"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.2] md:leading-[1.1] mb-6"
            >
              {title.split(":").map((part, i) => (
                <span key={i} className={part.includes("Restro FX") ? "text-primary block md:inline" : ""}>
                  {part}{i === 0 && part.includes("Restro FX") ? "" : i === 0 ? " :" : ""}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-white/90 sm:text-muted-foreground mb-10 leading-relaxed max-w-2xl drop-shadow-md"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-start"
            >
              <Button size="lg" className="rounded-xl px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300" asChild>
                <Link href={ctaHref}>
                  {ctaLabel} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-10 h-14 text-lg font-semibold border-2 hover:bg-muted/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300" asChild>
                <Link href={secondaryCtaHref}>
                  <Play className="mr-2 h-4 w-4 fill-current" /> {secondaryCtaLabel}
                </Link>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:flex gap-6 md:gap-8 items-center justify-start opacity-70"
            >
              <div className="flex flex-col group cursor-default items-start">
                <span className="text-xl md:text-2xl font-bold text-white sm:text-foreground group-hover:text-primary transition-colors drop-shadow-md">50k+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-white/80 sm:text-muted-foreground group-hover:text-foreground transition-colors drop-shadow-md">Active Traders</span>
              </div>
              <div className="w-px h-8 bg-border hidden lg:block" />
              <div className="flex flex-col group cursor-default items-start">
                <span className="text-xl md:text-2xl font-bold text-white sm:text-foreground group-hover:text-primary transition-colors drop-shadow-md">$10B+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-white/80 sm:text-muted-foreground group-hover:text-foreground transition-colors drop-shadow-md">Volume Traded</span>
              </div>
              <div className="w-px h-8 bg-border hidden lg:block" />
              <div className="flex flex-col group cursor-default items-start">
                <span className="text-xl md:text-2xl font-bold text-white sm:text-foreground group-hover:text-primary transition-colors drop-shadow-md">4.9/5</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-white/80 sm:text-muted-foreground group-hover:text-foreground transition-colors drop-shadow-md">User Rating</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

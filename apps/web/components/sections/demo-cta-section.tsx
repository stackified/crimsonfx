"use client";

import Link from "next/link";
import { Button } from "@crimsonfx/ui";
import { motion } from "framer-motion";

export function DemoCTASection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-foreground mb-6">
            Test Our Platform with a Free Demo Account
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            No risk. No obligation. Start trading in minutes.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              className="rounded-xl px-10 h-auto py-4 whitespace-normal text-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform bg-primary text-white hover:bg-primary/90 w-[90%] sm:w-auto"
              asChild
            >
              <Link href="/demo">Create Demo Account</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

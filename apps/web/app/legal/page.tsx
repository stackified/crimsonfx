"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { motion } from "framer-motion";
import { FileText, Shield, AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
    const legalDocuments = [
        {
            title: "Terms & Conditions",
            description: "Our terms of service and user agreement",
            icon: FileText,
            href: "/legal/terms",
            gradient: "from-blue-500/10 to-primary/10"
        },
        {
            title: "Privacy Policy",
            description: "How we collect, use, and protect your data",
            icon: Shield,
            href: "/legal/privacy",
            gradient: "from-green-500/10 to-primary/10"
        },
        {
            title: "Risk Disclosure",
            description: "Important information about trading risks",
            icon: AlertTriangle,
            href: "/legal/risk-disclosure",
            gradient: "from-orange-500/10 to-primary/10"
        },
        {
            title: "AML Policy",
            description: "Anti-Money Laundering and compliance",
            icon: ShieldCheck,
            href: "/legal/aml",
            gradient: "from-purple-500/10 to-primary/10"
        }
    ];

    return (
        <>
            <BackgroundScroll />
            <Navbar />
            <main className="relative">
                <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <span className="text-primary animate-spin">✱</span>
                                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                                    Legal Documentation
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
                                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                                    Legal Documents
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Review our legal documentation to understand our policies, terms, and compliance standards.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {legalDocuments.map((doc, index) => (
                                <motion.div
                                    key={doc.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={doc.href}
                                        className="group block p-8 rounded-2xl bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full"
                                    >
                                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${doc.gradient} mb-4 group-hover:scale-110 transition-all duration-300`}>
                                            <doc.icon className="h-8 w-8 text-primary" />
                                        </div>

                                        <h2 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                                            {doc.title}
                                        </h2>

                                        <p className="text-muted-foreground leading-relaxed">
                                            {doc.description}
                                        </p>

                                        <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            <span className="text-sm font-semibold">Read more</span>
                                            <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-primary/20"
                        >
                            <div className="flex items-start gap-4">
                                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold font-heading mb-2 text-foreground">
                                        Important Notice
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Please read all legal documents carefully before using our services. By accessing and using RestroFX, you agree to be bound by these terms and policies. If you have any questions, please{" "}
                                        <Link href="/contact" className="text-primary hover:underline font-semibold">
                                            contact us
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

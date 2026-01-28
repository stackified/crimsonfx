import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import {
    Sparkles,
    Brain,
    TrendingUp,
    BarChart3,
    Target,
    Zap,
    Shield,
    ArrowRight,
    Check,
    Bot
} from "lucide-react";
import { AetherFlow } from "@/components/ui/aether-flow";

export default function AITradingJournalPage() {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Analysis",
            description: "Advanced machine learning algorithms analyze your trading patterns and identify opportunities for improvement."
        },
        {
            icon: TrendingUp,
            title: "Performance Tracking",
            description: "Comprehensive metrics and KPIs to monitor your trading performance across all instruments and timeframes."
        },
        {
            icon: Target,
            title: "Pattern Recognition",
            description: "Automatically detect winning and losing patterns in your trading behavior to optimize your strategy."
        },
        {
            icon: BarChart3,
            title: "Advanced Analytics",
            description: "Deep dive into your trading data with interactive charts, heatmaps, and statistical analysis."
        },
        {
            icon: Zap,
            title: "Real-Time Insights",
            description: "Get instant feedback and actionable recommendations as you trade throughout the day."
        },
        {
            icon: Shield,
            title: "Risk Management",
            description: "AI-driven risk analysis helps you maintain optimal position sizing and risk-reward ratios."
        }
    ];

    const benefits = [
        "Identify and eliminate costly trading mistakes",
        "Discover your most profitable trading setups",
        "Optimize entry and exit timing",
        "Improve risk management discipline",
        "Track emotional patterns affecting performance",
        "Compare performance across different markets"
    ];

    const howItWorks = [
        {
            step: "01",
            title: "Connect Your Account",
            description: "Securely link your trading account to automatically import all your trades and positions."
        },
        {
            step: "02",
            title: "AI Analyzes Your Data",
            description: "Our advanced AI engine processes your trading history to identify patterns and insights."
        },
        {
            step: "03",
            title: "Receive Personalized Insights",
            description: "Get actionable recommendations tailored to your unique trading style and goals."
        },
        {
            step: "04",
            title: "Improve & Grow",
            description: "Implement the insights and watch your trading performance improve over time."
        }
    ];

    return (
        <>
            <BackgroundScroll />
            <Navbar />
            <main className="min-h-screen">
                {/* Hero Section - Animated Particles Background */}
                <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 pt-32 pb-20">
                    <AetherFlow />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 border border-primary/20">
                                <Sparkles className="h-4 w-4" />
                                <span>AI-Powered Trading Intelligence</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-tight">
                                Your Personal
                                <span className="block text-primary mt-2">AI Trading Mentor</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Transform your trading with AI-powered insights. Our intelligent journal analyzes every trade,
                                identifies patterns, and provides personalized recommendations to elevate your performance.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                <Button size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                    <Link href="/register">
                                        Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-lg font-bold border-2" asChild>
                                    <Link href="/demo">
                                        Watch Demo
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                                Intelligent Features for Smarter Trading
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Leverage cutting-edge AI to gain a competitive edge in the markets
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-background/50 backdrop-blur-sm"
                                >
                                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                                How It Works
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Get started in minutes and see results immediately
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {howItWorks.map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                                    Unlock Your Trading Potential
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Our AI Trading Journal helps you become a better trader by providing insights
                                    that would take years to discover on your own.
                                </p>
                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <Check className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="text-foreground">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 p-8 flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <Bot className="h-24 w-24 text-primary mx-auto" />
                                        <p className="text-lg font-semibold text-foreground">AI-Powered Insights</p>
                                        <p className="text-muted-foreground">Continuously learning from your trading patterns</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 text-center border-2 border-primary/20">
                            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
                                Ready to Trade Smarter?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Join thousands of traders using AI to improve their performance
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                    <Link href="/register">
                                        Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-lg font-bold border-2" asChild>
                                    <Link href="/contact">
                                        Talk to Sales
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

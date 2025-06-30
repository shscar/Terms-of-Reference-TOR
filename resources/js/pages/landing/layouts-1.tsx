import React from 'react';
import { Button } from '@/components/ui/button';
import LandingLayout from "@/pages/welcome"
import { ArrowRight, Play, Star, CheckCircle } from 'lucide-react';

const HeroSection = () => {
    return (
        <LandingLayout>
            {/* <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"> */}

                {/* Hero Content */}
                <div className="container mx-auto px-6 pt-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
                        {/* Left Column - Text Content */}
                        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                            {/* Badge */}
                            {/* <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                                <Star className="w-4 h-4 fill-current" />
                                <span>Trusted by 10,000+ companies</span>
                            </div> */}

                            {/* Main Headline */}
                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                                Build amazing
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> products </span>
                                faster than ever
                            </h1>

                            {/* Subheading */}
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
                                Transform your ideas into reality with our powerful platform. Join thousands of teams who trust us to deliver exceptional results.
                            </p>

                            {/* Feature Points */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 text-slate-600 dark:text-slate-300">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Free 14-day trial</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>No credit card required</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Cancel anytime</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group">
                                    Get Started Free
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 group">
                                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                    Watch Demo
                                </Button>
                            </div>
                        </div>

                        {/* Right Column - Visual */}
                        <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
                            <div className="relative">
                                {/* Main Card */}
                                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">A</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-slate-900 dark:text-white">Dashboard Overview</h3>
                                                <p className="text-slate-500 dark:text-slate-400 text-sm">Real-time analytics</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-600 dark:text-slate-300">Revenue</span>
                                                <span className="text-green-600 font-semibold">+12.5%</span>
                                            </div>
                                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-3/4"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                                                <div className="text-2xl font-bold text-slate-900 dark:text-white">2.4k</div>
                                                <div className="text-slate-500 dark:text-slate-400 text-sm">Users</div>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                                                <div className="text-2xl font-bold text-slate-900 dark:text-white">99.9%</div>
                                                <div className="text-slate-500 dark:text-slate-400 text-sm">Uptime</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                                    <Star className="w-8 h-8 text-white fill-current" />
                                </div>

                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Demo Content to show dark mode working */}
                <div className="min-h-screen bg-background text-foreground p-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-6">Welcome to Our Platform</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-6 border rounded-lg bg-card">
                                <h2 className="text-xl font-semibold mb-3">Analytics</h2>
                                <p className="text-muted-foreground">Get comprehensive insights into your data with our powerful analytics tools.</p>
                            </div>
                            <div className="p-6 border rounded-lg bg-card">
                                <h2 className="text-xl font-semibold mb-3">Automation</h2>
                                <p className="text-muted-foreground">Streamline your workflow with intelligent automation features.</p>
                            </div>
                            <div className="p-6 border rounded-lg bg-card">
                                <h2 className="text-xl font-semibold mb-3">Reports</h2>
                                <p className="text-muted-foreground">Generate detailed reports to track your progress and performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}

        </LandingLayout>
    );
};

export default HeroSection;

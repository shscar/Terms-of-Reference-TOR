// import React, { useState, useEffect } from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { scrollToSection } from "@/utils/scrollToSection";


const Footer = () => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Company data - easily customizable
    const companyData = {
        name: "InnovateTech Solutions",
        tagline: "Transforming Ideas into Digital Reality",
        hero: {
            title: "Build the Future with Cutting-Edge Technology",
            subtitle: "We deliver innovative software solutions that drive business growth and digital transformation for companies worldwide.",
            cta: "Get Started Today"
        },
        about: {
            mission: "To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.",
            vision: "To be the leading technology partner for businesses seeking digital transformation and sustainable growth.",
            values: ["Innovation", "Quality", "Integrity", "Collaboration"],
            stats: [
                { number: "500+", label: "Projects Completed" },
                { number: "150+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "50+", label: "Team Members" }
            ]
        },
        services: [
            {
                title: "Web Development",
                description: "Custom web applications built with modern technologies and best practices.",
                icon: "💻"
            },
            {
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications for iOS and Android.",
                icon: "📱"
            },
            {
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and migration services for modern businesses.",
                icon: "☁️"
            },
            {
                title: "AI & Machine Learning",
                description: "Intelligent solutions powered by artificial intelligence and data analytics.",
                icon: "🤖"
            }
        ],
        portfolio: [
            {
                title: "E-commerce Platform",
                description: "Modern online shopping platform with advanced features",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
                category: "Web Development"
            },
            {
                title: "Mobile Banking App",
                description: "Secure and user-friendly banking application",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
                category: "Mobile App"
            },
            {
                title: "AI Dashboard",
                description: "Analytics dashboard with machine learning insights",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
                category: "AI Solutions"
            }
        ],
        testimonials: [
            {
                name: "Sarah Johnson",
                position: "CEO, TechStart Inc.",
                content: "InnovateTech delivered exactly what we needed. Their expertise in modern web technologies helped us launch our platform ahead of schedule.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
            },
            {
                name: "Michael Chen",
                position: "CTO, DataFlow Systems",
                content: "The mobile app they developed exceeded our expectations. Great communication, professional team, and outstanding results.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
            },
            {
                name: "Emily Rodriguez",
                position: "Founder, GreenTech Solutions",
                content: "Their AI solution transformed our business operations. We saw 40% improvement in efficiency within the first month.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
            }
        ],
        articles: [
            {
                title: "The Future of Web Development in 2025",
                excerpt: "Exploring emerging trends and technologies shaping the future of web development.",
                date: "2024-12-15",
                category: "Technology",
                readTime: "5 min read"
            },
            {
                title: "AI Integration in Modern Business",
                excerpt: "How artificial intelligence is revolutionizing business processes and decision-making.",
                date: "2024-12-10",
                category: "AI & ML",
                readTime: "7 min read"
            },
            {
                title: "Mobile-First Development Strategy",
                excerpt: "Best practices for building mobile-optimized applications that deliver great user experience.",
                date: "2024-12-05",
                category: "Mobile",
                readTime: "6 min read"
            }
        ],
        contact: {
            email: "hello@innovatetech.com",
            phone: "+1 (555) 123-4567",
            whatsapp: "+1555123456",
            address: "123 Innovation Street, Tech City, TC 12345",
            social: {
                facebook: "https://facebook.com/innovatetech",
                twitter: "https://twitter.com/innovatetech",
                instagram: "https://instagram.com/innovatetech",
                linkedin: "https://linkedin.com/company/innovatetech"
            }
        }
    };

    const navigation = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Portfolio', id: 'portfolio' },
        { name: 'Testimonials', id: 'testimonials' },
        { name: 'Articles', id: 'articles' },
        { name: 'Contact', id: 'contact' }
    ];

    return (

        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">{companyData.name}</h3>
                        <p className="text-gray-300 mb-4 max-w-md">
                            {companyData.tagline}. We're passionate about creating innovative solutions that drive business success.
                        </p>
                        <div className="flex gap-4">
                            <a href={companyData.contact.social.facebook} className="text-gray-300 hover:text-white transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href={companyData.contact.social.twitter} className="text-gray-300 hover:text-white transition-colors">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href={companyData.contact.social.instagram} className="text-gray-300 hover:text-white transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href={companyData.contact.social.linkedin} className="text-gray-300 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navigation.slice(1).map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            {companyData.services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-gray-300">{service.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-300 text-sm">
                        © 2025 {companyData.name}. All rights reserved.
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;

import React from 'react';
import LandingLayout from "@/pages/welcome"

import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    Play,
    Star,
    CheckCircle,
    Lightbulb,
    Target,
    Calendar,
    User,
    ExternalLink,
    MessageCircle,
    Phone,
    Mail,
    MapPin
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';


// Mock data
const company = {
    name: "TechSolutions Pro",
    tagline: "Transforming Ideas into Digital Reality",
    description: "We are a leading technology company specializing in innovative digital solutions that drive business growth and success.",
    email: "hello@techsolutions.com",
    phone: "+1 (555) 123-4567",
    whatsapp: "+1555123456",
    address: "123 Tech Street, Innovation City, IC 12345",
    social: {
        twitter: "https://twitter.com/techsolutions",
        linkedin: "https://linkedin.com/company/techsolutions",
        github: "https://github.com/techsolutions"
    }
};

const openWhatsApp = () => {
    window.open(`https://wa.me/${company.whatsapp}`, '_blank');
};

// Layanan / Produk
const services = [
    {
        title: "Web Development",
        description: "Custom web applications built with modern technologies and best practices.",
        icon: "🌐"
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: "📱"
    },
    {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment solutions.",
        icon: "☁️"
    },
    {
        title: "UI/UX Design",
        description: "Beautiful, user-centered design that enhances user experience.",
        icon: "🎨"
    }
];

// Portofolio
const portfolio = [
    {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        tech: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Healthcare App",
        description: "Mobile app for patient management and telemedicine",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
        tech: ["Flutter", "Firebase", "AI/ML"]
    },
    {
        title: "Financial Dashboard",
        description: "Real-time analytics dashboard for financial institutions",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        tech: ["Vue.js", "Python", "PostgreSQL"]
    }
];

// Testimoni
const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, StartupCorp",
        content: "TechSolutions Pro delivered exceptional results. Their expertise and dedication transformed our digital presence completely.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c5a2?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Michael Chen",
        role: "CTO, InnovateInc",
        content: "Outstanding technical skills and professional service. They understood our vision and brought it to life perfectly.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Emily Rodriguez",
        role: "Founder, GrowthCo",
        content: "The team's attention to detail and commitment to quality is unmatched. Highly recommend their services.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
    }
];

// Artikel/blog
const articles = [
    {
        title: "The Future of Web Development in 2025",
        excerpt: "Exploring emerging trends and technologies shaping the web development landscape.",
        date: "2025-06-15",
        author: "John Doe",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
        readTime: "5 min read"
    },
    {
        title: "Building Scalable Mobile Applications",
        excerpt: "Best practices for creating mobile apps that can grow with your business.",
        date: "2025-06-10",
        author: "Jane Smith",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        readTime: "7 min read"
    },
    {
        title: "Cloud Migration Strategies for Small Businesses",
        excerpt: "A comprehensive guide to moving your business operations to the cloud.",
        date: "2025-06-05",
        author: "Mike Johnson",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        readTime: "6 min read"
    }
];
const Home = () => {

    return (
        <LandingLayout>
            {/* Hero Content */}
            <div className="container mx-auto px-6 lg:px-8 py-10">
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

            {/* Mission & Vision */}
            <section id="about" className="py-20 bg-slate-200 dark:bg-slate-800">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                                Our Mission
                            </Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                Empowering businesses through technology
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                We believe technology should amplify human potential, not replace it. Our mission
                                is to create solutions that make businesses more efficient, more connected, and
                                more capable of achieving their goals.
                            </p>
                            <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                                <Target className="w-5 h-5 text-blue-600" />
                                <span>Focused on measurable results</span>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-blue-100 leading-relaxed">
                                    To become the world's most trusted technology partner, known for innovation,
                                    reliability, and exceptional customer experiences. We envision a future where
                                    every business, regardless of size, has access to enterprise-grade technology
                                    solutions.
                                </p>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-2xl flex items-center justify-center">
                                <Lightbulb className="w-12 h-12 text-yellow-800" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {portfolio.map((project, index) => (
                                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
                                    <div className="flex items-center">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full mr-4"
                                        />
                                        <div>
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Section */}
            <section id="articles" className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12">Latest Articles</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article, index) => (
                                <article key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            {new Date(article.date).toLocaleDateString()}
                                            <span className="mx-2">•</span>
                                            <User className="h-4 w-4 mr-1" />
                                            {article.author}
                                            <span className="mx-2">•</span>
                                            {article.readTime}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                                        <button className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                                            Read More <ExternalLink className="h-4 w-4" />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                                        <span>{company.email}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                                        <span>{company.phone}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                                        <span>{company.address}</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={openWhatsApp}
                                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                                        >
                                            <MessageCircle className="h-5 w-5" />
                                            WhatsApp
                                        </button>
                                        <a
                                            href={`mailto:${company.email}`}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                                        >
                                            <Mail className="h-5 w-5" />
                                            Email Us
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <textarea
                                        placeholder="Your Message"
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold mb-6">Find Us</h3>
                            <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500 dark:text-gray-400">Interactive Google Map</p>
                                    <p className="text-sm text-gray-400 dark:text-gray-500">
                                        Replace this with actual Google Maps iframe
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </LandingLayout>
    );
};

export default Home;

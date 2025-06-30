import React, { useState, useEffect } from 'react';
import {
    Menu,
    X,
    ChevronRight,
    Star,
    MapPin,
    Phone,
    Mail,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    ArrowRight,
    //   Users,
    Target,
    Award,
    Calendar,
    ExternalLink,
    MessageCircle
} from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';

const CompanyLandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) =>
                (prev + 1) % companyData.testimonials.length
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [companyData.testimonials.length]);

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
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
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {companyData.name}
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id
                                                ? 'bg-blue-50 text-blue-700'
                                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                            {navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            {companyData.hero.title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            {companyData.hero.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                {companyData.hero.cta}
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scrollToSection('portfolio')}
                                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                            >
                                View Our Work
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {companyData.tagline}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Target className="w-6 h-6 text-blue-600" />
                                Our Mission
                            </h3>
                            <p className="text-gray-600 mb-6">{companyData.about.mission}</p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Award className="w-6 h-6 text-purple-600" />
                                Our Vision
                            </h3>
                            <p className="text-gray-600">{companyData.about.vision}</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {companyData.about.values.map((value, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                                        <div className="text-lg font-semibold text-gray-900">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {companyData.about.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We offer comprehensive technology solutions to help your business thrive in the digital age.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {companyData.services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Take a look at some of our recent projects and success stories.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {companyData.portfolio.map((project, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                                        Learn More <ExternalLink className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our clients have to say about working with us.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <blockquote className="text-lg text-gray-700 mb-6">
                                "{companyData.testimonials[currentTestimonial].content}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <img
                                    src={companyData.testimonials[currentTestimonial].avatar}
                                    alt={companyData.testimonials[currentTestimonial].name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900">
                                        {companyData.testimonials[currentTestimonial].name}
                                    </div>
                                    <div className="text-gray-600">
                                        {companyData.testimonials[currentTestimonial].position}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial indicators */}
                        <div className="flex justify-center gap-2 mt-6">
                            {companyData.testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles/Blog Section */}
            <section id="articles" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Stay updated with the latest trends, insights, and best practices in technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {companyData.articles.map((article, index) => (
                            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(article.date).toLocaleDateString()}
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <div className="text-sm text-blue-600 font-medium mb-2">{article.category}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                                        Read More <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ready to start your next project? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-700">{companyData.contact.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-700">{companyData.contact.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MessageCircle className="w-5 h-5 text-green-600" />
                                        <a
                                            href={`https://wa.me/${companyData.contact.whatsapp}`}
                                            className="text-gray-700 hover:text-green-600 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            WhatsApp: {companyData.contact.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                                        <span className="text-gray-700">{companyData.contact.address}</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
                                    <div className="flex gap-4">
                                        <a href={companyData.contact.social.facebook} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href={companyData.contact.social.twitter} className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a href={companyData.contact.social.instagram} className="p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href={companyData.contact.social.linkedin} className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps Embed */}
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <div className="text-center text-gray-500">
                                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                                        <p>Google Maps Integration</p>
                                        <p className="text-sm">Replace with actual Google Maps embed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
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

            {/* Floating WhatsApp Button */}
            <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello! I'm interested in your services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50"
                title="Chat with us on WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </a>

            {/* Scroll to Top Button */}
            <button
                onClick={() => scrollToSection('home')}
                className="fixed bottom-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-50"
                title="Back to top"
            >
                <ChevronRight className="w-5 h-5 rotate-[-90deg]" />
            </button>
        </div>
    );
};

export default CompanyLandingPage;

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Phone, Mail, MapPin, ArrowRight, Star, Calendar, User, ExternalLink, MessageCircle } from 'lucide-react';

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

export default function CompanyLandingPage() {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const openWhatsApp = () => {
        window.open(`https://wa.me/${company.whatsapp}`, '_blank');
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                {/* Header */}
                <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                {company.name}
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex space-x-8">
                                {['home', 'about', 'services', 'portfolio', 'testimonials', 'articles', 'contact'].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item)}
                                        className="capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {item === 'home' ? 'Home' : item.replace(/([A-Z])/g, ' $1').trim()}
                                    </button>
                                ))}
                            </nav>

                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={toggleDarkMode}
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                                </button>

                                <button
                                    className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {mobileMenuOpen && (
                            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex flex-col space-y-4 pt-4">
                                    {['home', 'about', 'services', 'portfolio', 'testimonials', 'articles', 'contact'].map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => scrollToSection(item)}
                                            className="text-left capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            {item === 'home' ? 'Home' : item.replace(/([A-Z])/g, ' $1').trim()}
                                        </button>
                                    ))}
                                </div>
                            </nav>
                        )}
                    </div>
                </header>

                {/* Hero Section */}
                <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                {company.tagline}
                            </h1>
                            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                {company.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                                >
                                    Get Started <ArrowRight className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => scrollToSection('portfolio')}
                                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    View Our Work
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-16 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        We are a passionate team of developers, designers, and innovators dedicated to creating
                                        cutting-edge digital solutions. With over 10 years of combined experience, we've helped
                                        hundreds of businesses transform their digital presence.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        Our mission is to bridge the gap between technology and business goals, delivering
                                        solutions that not only meet but exceed expectations. We believe in the power of
                                        collaboration, innovation, and continuous learning.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">150+</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                                        </div>
                                        <div className="text-center p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                        alt="Team"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
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
                <section id="portfolio" className="py-16 bg-white dark:bg-gray-900">
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
                <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-800">
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
                <section id="articles" className="py-16 bg-white dark:bg-gray-900">
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
                <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
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

                {/* Footer */}
                <footer className="bg-gray-900 dark:bg-black text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-4 gap-8">
                                <div className="col-span-2">
                                    <h3 className="text-2xl font-bold mb-4 text-blue-400">{company.name}</h3>
                                    <p className="text-gray-300 mb-4">{company.description}</p>
                                    <div className="flex space-x-4">
                                        <a
                                            href={company.social.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            Twitter
                                        </a>
                                        <a
                                            href={company.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            LinkedIn
                                        </a>
                                        <a
                                            href={company.social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                                    <ul className="space-y-2">
                                        {['About', 'Services', 'Portfolio', 'Articles', 'Contact'].map((item) => (
                                            <li key={item}>
                                                <button
                                                    onClick={() => scrollToSection(item.toLowerCase())}
                                                    className="text-gray-400 hover:text-white transition-colors"
                                                >
                                                    {item}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                                    <div className="space-y-2 text-gray-400">
                                        <p>{company.email}</p>
                                        <p>{company.phone}</p>
                                        <p>{company.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                                <p>&copy; 2025 {company.name}. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Users,
    Target,
    Award,
    TrendingUp,
    Globe,
    Heart,
    Lightbulb,
    Shield,
    ArrowRight,
    Quote,
    MapPin,
    Calendar,
    Mail,
    Phone,
    Linkedin,
    Twitter,
    Github,
    Play,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [activeValue, setActiveValue] = useState(0);

    const companyStats = [
        { icon: Users, label: "Team Members", value: "150+", color: "text-blue-600" },
        { icon: Globe, label: "Global Offices", value: "12", color: "text-green-600" },
        { icon: Award, label: "Awards Won", value: "25+", color: "text-purple-600" },
        { icon: TrendingUp, label: "Years Experience", value: "8", color: "text-orange-600" }
    ];

    const coreValues = [
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
            color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
        },
        {
            icon: Heart,
            title: "Customer-Centric",
            description: "Our customers are at the heart of everything we do. Their success is our success.",
            color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
        },
        {
            icon: Shield,
            title: "Integrity",
            description: "We build trust through transparency, reliability, and ethical business practices.",
            color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "We believe in the power of teamwork and diverse perspectives to achieve greatness.",
            color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
        }
    ];

    const teamMembers = [
        {
            name: "Sarah Chen",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            bio: "Former tech executive with 15+ years experience building scalable products.",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Marcus Rodriguez",
            role: "CTO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            bio: "Engineering leader passionate about clean code and innovative architecture.",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Emily Watson",
            role: "Head of Design",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            bio: "Award-winning designer focused on creating intuitive user experiences.",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "David Kim",
            role: "VP of Sales",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            bio: "Results-driven sales leader with a track record of building high-performing teams.",
            linkedin: "#",
            twitter: "#"
        }
    ];

    const testimonials = [
        {
            quote: "Working with this team has been transformative for our business. Their expertise and dedication are unmatched.",
            author: "Jessica Miller",
            role: "CEO, TechStart Inc.",
            company: "TechStart"
        },
        {
            quote: "The level of innovation and attention to detail they bring to every project is remarkable.",
            author: "Robert Thompson",
            role: "CTO, InnovaCorp",
            company: "InnovaCorp"
        },
        {
            quote: "They don't just deliver solutions; they deliver results that exceed expectations every time.",
            author: "Maria Garcia",
            role: "Founder, GrowthLab",
            company: "GrowthLab"
        }
    ];

    const timeline = [
        { year: "2016", title: "Company Founded", description: "Started with a vision to transform digital experiences" },
        { year: "2018", title: "First Major Client", description: "Secured partnership with Fortune 500 company" },
        { year: "2020", title: "Global Expansion", description: "Opened offices in 5 countries" },
        { year: "2022", title: "Industry Recognition", description: "Won 'Innovation Award' at Tech Summit" },
        { year: "2024", title: "AI Integration", description: "Launched AI-powered solutions platform" }
    ];

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <span className="text-xl font-bold text-slate-900 dark:text-white">Acme Corp</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">About</a>
                            <a href="#team" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Team</a>
                            <a href="#values" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Values</a>
                            <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Contact</a>
                            <Button size="sm">Get In Touch</Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge className="mb-6 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2">
                            About Our Company
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            We're building the
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> future </span>
                            of digital innovation
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            Founded in 2016, we've grown from a small startup to a global technology company
                            serving thousands of clients worldwide. Our mission is to empower businesses
                            through cutting-edge solutions and exceptional service.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
                                Our Story <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                                <Play className="w-5 h-5 mr-2" />
                                Watch Video
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white dark:bg-slate-800">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {companyStats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                                <div className="text-slate-600 dark:text-slate-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="about" className="py-20">
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

            {/* Core Values */}
            <section id="values" className="py-20 bg-white dark:bg-slate-800">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                            Our Values
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            What drives us forward
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Our core values shape every decision we make and guide us in building
                            meaningful relationships with our clients and team members.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <Card
                                key={index}
                                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${activeValue === index ? 'ring-2 ring-blue-500' : ''
                                    }`}
                                onClick={() => setActiveValue(index)}
                            >
                                <CardHeader className="text-center">
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${value.color}`}>
                                        <value.icon className="w-8 h-8" />
                                    </div>
                                    <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-center leading-relaxed">
                                        {value.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                            Our Journey
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Milestones that shaped us
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                                        <Card className="inline-block max-w-md">
                                            <CardHeader>
                                                <div className="flex items-center space-x-2">
                                                    <Calendar className="w-5 h-5 text-blue-600" />
                                                    <Badge variant="outline">{item.year}</Badge>
                                                </div>
                                                <CardTitle className="text-lg">{item.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription>{item.description}</CardDescription>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="relative flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 z-10"></div>
                                    <div className="flex-1"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 bg-white dark:bg-slate-800">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                            Our Team
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Meet the people behind our success
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Our diverse team of experts brings together decades of experience
                            and a shared passion for innovation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <CardHeader className="text-center">
                                    <div className="relative mx-auto mb-4">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-24 h-24 rounded-full object-cover mx-auto"
                                        />
                                        <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mx-auto group-hover:opacity-0 transition-opacity"></div>
                                    </div>
                                    <CardTitle className="text-xl">{member.name}</CardTitle>
                                    <Badge variant="secondary" className="mt-2">{member.role}</Badge>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardDescription className="mb-4 leading-relaxed">
                                        {member.bio}
                                    </CardDescription>
                                    <div className="flex justify-center space-x-2">
                                        {member.linkedin && (
                                            <Button variant="ghost" size="sm" className="p-2">
                                                <Linkedin className="w-4 h-4" />
                                            </Button>
                                        )}
                                        {member.twitter && (
                                            <Button variant="ghost" size="sm" className="p-2">
                                                <Twitter className="w-4 h-4" />
                                            </Button>
                                        )}
                                        {member.github && (
                                            <Button variant="ghost" size="sm" className="p-2">
                                                <Github className="w-4 h-4" />
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                            Testimonials
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            What our clients say
                        </h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border-0 shadow-xl">
                            <CardContent className="p-8 lg:p-12 text-center">
                                <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                                <blockquote className="text-xl lg:text-2xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-8">
                                    "{testimonials[activeTestimonial].quote}"
                                </blockquote>
                                <div className="flex items-center justify-center space-x-4">
                                    <div className="text-center">
                                        <div className="font-semibold text-slate-900 dark:text-white">
                                            {testimonials[activeTestimonial].author}
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-300">
                                            {testimonials[activeTestimonial].role}
                                        </div>
                                        <Badge variant="outline" className="mt-2">
                                            {testimonials[activeTestimonial].company}
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-center items-center mt-8 space-x-4">
                            <Button variant="outline" size="sm" onClick={prevTestimonial}>
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <div className="flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-colors ${index === activeTestimonial ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'
                                            }`}
                                        onClick={() => setActiveTestimonial(index)}
                                    />
                                ))}
                            </div>
                            <Button variant="outline" size="sm" onClick={nextTestimonial}>
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to work with us?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help transform your business with innovative solutions
                        and exceptional service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
                            <Mail className="w-5 h-5 mr-2" />
                            Get In Touch
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                            <Phone className="w-5 h-5 mr-2" />
                            Schedule a Call
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">A</span>
                                </div>
                                <span className="text-xl font-bold">Acme Corp</span>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                Building the future of digital innovation through cutting-edge technology
                                and exceptional service.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <div className="space-y-2 text-slate-400">
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>San Francisco, CA</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4" />
                                    <span>hello@acmecorp.com</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Phone className="w-4 h-4" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                        <p>&copy; 2024 Acme Corp. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutUsLanding;

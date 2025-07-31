
import React from 'react';
import LandingLayout from "@/pages/welcome"

import { Button } from '@/components/ui/button';
import {
    Calendar,
    User,
    ExternalLink,
} from 'lucide-react';

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

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/landing/navbar"
import Footer from "@/components/landing/footer"

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    const [isDarkMode] = useState(false);

    // Apply dark mode to document
    useEffect(() => {
        // Mengatur tema saat komponen dirender
        document.documentElement.classList = isDarkMode ? 'dark' : 'light';
    }, [isDarkMode]);

    return (
        <>
            <div className={isDarkMode ? 'dark' : ''}>
                <Navbar />
                <main className="min-h-screen">{children}</main>
                <Footer />
            </div>
        </>
    )
}

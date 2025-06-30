import React, { useState, useEffect } from 'react';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import {
    Menu,
    X,
    // Search,
    Bell,
    ChevronDown,
    Moon,
    Sun
} from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {

    const { auth } = usePage<SharedData>().props;

    const [isOpen, setIsOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
    const toggleMobile = () => setIsOpen(!isOpen);

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('appearance');
        return savedTheme === 'dark';
    });

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('appearance', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

    // Apply dark mode to document
    useEffect(() => {
        // Mengatur tema saat komponen dirender
        document.documentElement.classList = isDarkMode ? 'dark' : 'light';
    }, [isDarkMode]);

    const toggleMobileItem = (title: string) => {
        setExpandedItems(prev => ({
            ...prev,
            [title]: !prev[title]
        }));
    };

    const navItems = [
        {
            title: "Products",
            items: [
                { title: "Analytics", description: "Get insights into your data" },
                { title: "Automation", description: "Streamline your workflow" },
                { title: "Reports", description: "Generate detailed reports" },
            ]
        },
        {
            title: "Solutions",
            items: [
                { title: "Enterprise", description: "Scale for large organizations" },
                { title: "Small Business", description: "Perfect for growing teams" },
                { title: "Startups", description: "Get started quickly" },
            ]
        },
        {
            title: "Resources",
            items: [
                { title: "Documentation", description: "Learn how to use our platform" },
                { title: "API Reference", description: "Integrate with our APIs" },
                { title: "Tutorials", description: "Step-by-step guides" },
            ]
        }
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">L</span>
                            </div>
                            <span className="font-bold text-xl text-foreground">Logo</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuTrigger className="h-10">
                                            {item.title}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="grid w-[400px] gap-3 p-4">
                                                {item.items.map((subItem) => (
                                                    <NavigationMenuLink
                                                        key={subItem.title}
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            {subItem.title}
                                                        </div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            {subItem.description}
                                                        </p>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ))}
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
                                        Pricing
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Search Bar */}
                    {/* <div className="hidden md:flex flex-1 max-w-sm mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                placeholder="Search..."
                                className="pl-10 w-full"
                            />
                        </div>
                    </div> */}

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleDarkMode}
                            className="h-9 w-9"
                        >
                            {isDarkMode ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </Button>

                        {/* Auth Buttons or User Menu */}
                        {auth.user ? (
                            <div className="flex items-center space-x-4">
                                {/* Notifications */}
                                {/* <Button variant="ghost" size="icon" className="h-9 w-9 relative">
                                    <Bell className="h-4 w-4" />
                                    <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center">
                                        3
                                    </Badge>
                                </Button> */}

                                <Button
                                    variant="default"
                                    onClick={() => {
                                        (window.location.href = route('dashboard'))
                                    }}
                                    // className="h-9 border border-primary text-primary"
                                    className={`h-9 border ${isDarkMode ? 'border-white' : 'border-black'}`}
                                >
                                    Dashboard
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        (window.location.href = route('login'))
                                    }}
                                    className="h-9 border border-primary text-primary"
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="default"
                                    onClick={() => {
                                        (window.location.href = route('register'))
                                    }}
                                    className={`h-9 border ${isDarkMode ? 'border-white' : 'border-black'}`}
                                >
                                    Register
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMobile}
                            className="h-9 w-9"
                        >
                            {isOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 border-t">
                            {/* Mobile Search */}
                            {/* <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="Search..."
                                    className="pl-10 w-full"
                                />
                            </div> */}

                            {/* Mobile Navigation Items */}
                            {navItems.map((item) => (
                                <div key={item.title} className="space-y-1">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-between h-10"
                                        onClick={() => toggleMobileItem(item.title)}
                                    >
                                        {item.title}
                                        <ChevronDown className={`h-4 w-4 transition-transform ${expandedItems[item.title] ? 'rotate-180' : ''
                                            }`} />
                                    </Button>

                                    {expandedItems[item.title] && (
                                        <div className="pl-4 space-y-1 animate-in slide-in-from-top-1">
                                            {item.items.map((subItem) => (
                                                <Button
                                                    key={subItem.title}
                                                    variant="ghost"
                                                    className="w-full justify-start h-auto p-3"
                                                >
                                                    <div className="text-left">
                                                        <div className="text-sm font-medium">{subItem.title}</div>
                                                        <div className="text-xs text-muted-foreground">
                                                            {subItem.description}
                                                        </div>
                                                    </div>
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <Button variant="ghost" className="w-full justify-start h-10">
                                Pricing
                            </Button>

                            {/* Mobile Auth/User Actions */}
                            <div className="border-t pt-4 mt-4 space-y-1">
                                {/* Theme Toggle */}
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start h-10"
                                    onClick={toggleDarkMode}
                                >
                                    {isDarkMode ? (
                                        <>
                                            <Sun className="mr-2 h-4 w-4" />
                                            Light Mode
                                        </>
                                    ) : (
                                        <>
                                            <Moon className="mr-2 h-4 w-4" />
                                            Dark Mode
                                        </>
                                    )}
                                </Button>

                                {auth.user ? (
                                    <div className="space-x-4">
                                        {/* Notifications */}
                                        <Button variant="ghost" size="icon" className="h-9 w-9 relative">
                                            <Bell className="h-4 w-4" />
                                            <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center">
                                                3
                                            </Badge>
                                        </Button>

                                        <Button
                                            variant="ghost"
                                            onClick={() => {
                                                (window.location.href = route('dashboard'))
                                            }}
                                            className="w-full h-10"
                                        >
                                            Dashboard
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        {/* <Button variant="ghost" className="w-full justify-start h-10">
                                            <Bell className="mr-2 h-4 w-4" />
                                            Notifications
                                            <Badge className="ml-auto">3</Badge>
                                        </Button> */}

                                        <div className="space-x-2">
                                            <Button
                                                variant="ghost"
                                                onClick={() => {
                                                    (window.location.href = route('login'))
                                                }}
                                                className="w-full h-10"
                                            >
                                                Login
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    (window.location.href = route('register'))
                                                }}
                                                className="w-full h-10"
                                            >
                                                Register
                                            </Button>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>

    );
};

export default Navbar;

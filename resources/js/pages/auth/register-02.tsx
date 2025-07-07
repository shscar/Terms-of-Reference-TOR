import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, ArrowRight } from 'lucide-react';
import LandingLayout from "@/pages/welcome"

// Form Input Component
type FormInputProps = {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    icon?: React.ElementType;
    showPasswordToggle?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    icon: Icon,
    showPasswordToggle = false
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = showPasswordToggle
        ? (showPassword ? 'text' : 'password')
        : type;

    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
            </label>
            <div className="relative">
                {Icon && (
                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                )}
                <input
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full px-4 py-3 ${Icon ? 'pl-12' : ''} ${showPasswordToggle ? 'pr-12' : ''}
                        border rounded-lg bg-white dark:bg-gray-800
                        border-gray-300 dark:border-gray-600
                        text-gray-900 dark:text-white
                        placeholder-gray-500 dark:placeholder-gray-400
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition-all duration-200
                        ${error ? 'border-red-500 focus:ring-red-500' : ''}
                    `}
                />
                {showPasswordToggle && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                )}
            </div>
            {error && (
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            )}
        </div>
    );
};

// Registration Page
type RegisterPageProps = {
    onSwitchToLogin: () => void;
    onRegister: (formData: { name: string; email: string; password: string; confirmPassword: string }) => void;
};

const RegisterPage: React.FC<RegisterPageProps> = ({ onSwitchToLogin, onRegister }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    interface FormData {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }

    interface FormErrors {
        name?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
        [key: string]: string | undefined;
    }

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev: FormData) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev: FormErrors) => ({ ...prev, [field]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formData.name) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {

        if (!validateForm()) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            onRegister(formData);
        }, 1000);
    };

    return (
        <LandingLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <div className="mx-auto h-16 w-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                            <User className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Create account
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Join us and start your journey
                        </p>
                    </div>

                    <div className="mt-8 space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                        <div className="space-y-4">
                            <FormInput
                                label="Full Name"
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                error={errors.name}
                                icon={User}
                            />

                            <FormInput
                                label="Email Address"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                error={errors.email}
                                icon={Mail}
                            />

                            <FormInput
                                label="Password"
                                type="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
                                error={errors.password}
                                icon={Lock}
                                showPasswordToggle={true}
                            />

                            <FormInput
                                label="Confirm Password"
                                type="password"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                error={errors.confirmPassword}
                                icon={Lock}
                                showPasswordToggle={true}
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                required
                            />
                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                I agree to the{' '}
                                <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                                    Privacy Policy
                                </a>
                            </span>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent
                                text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                                disabled:opacity-50 disabled:cursor-not-allowed
                                transition-all duration-200 transform hover:scale-[1.02]"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    Create account
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>

                        <div className="text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Already have an account?{' '}
                                <button
                                    type="button"
                                    onClick={onSwitchToLogin}
                                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
                                >
                                    Sign in
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
};

// Success Page
type SuccessPageProps = {
    user: { name?: string; email?: string };
    onLogout: () => void;
};

const SuccessPage: React.FC<SuccessPageProps> = ({ user, onLogout }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                    <div className="mx-auto h-16 w-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                        <User className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Welcome, {user.name || user.email}!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        You have successfully {user.name ? 'registered' : 'signed in'}.
                    </p>
                    <button
                        onClick={onLogout}
                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

// // Main App Component
// const App = () => {
//     const [currentPage, setCurrentPage] = useState('login');
//     const [user, setUser] = useState(null);

//     const handleLogin = (userData) => {
//         setUser(userData);
//         setCurrentPage('success');
//     };

//     const handleRegister = (userData) => {
//         setUser(userData);
//         setCurrentPage('success');
//     };

//     const handleLogout = () => {
//         setUser(null);
//         setCurrentPage('login');
//     };

//     return (
//         <>
//             <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">

//                 {currentPage === 'login' && (
//                     <LoginPage
//                         onSwitchToRegister={() => setCurrentPage('register')}
//                         onLogin={handleLogin}
//                     />
//                 )}

//                 {currentPage === 'register' && (
//                     <RegisterPage
//                         onSwitchToLogin={() => setCurrentPage('login')}
//                         onRegister={handleRegister}
//                     />
//                 )}

//                 {currentPage === 'success' && (
//                     <SuccessPage
//                         user={user}
//                         onLogout={handleLogout}
//                     />
//                 )}
//             </div>
//         </>
//     );
// };

export default RegisterPage;

// hooks/useAuth.js
import { useState, useEffect } from 'react';
import { loginUser, registerUser, logoutUser } from '@/api/api'; // Adjust the import path as necessary

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Check if user is already logged in (from memory state)
    useEffect(() => {
        // In a real app, you might check for stored tokens here
        // For now, we'll just maintain state in memory
    }, []);

    // Login function
    const login = async (credentials) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await loginUser(credentials);
            if (response.success) {
                setUser(response.user);
                // In a real app, you might store the token
                // localStorage.setItem('token', response.token);
                return { success: true, user: response.user };
            }
        } catch (err) {
            setError(err.message);
            return { success: false, error: err.message };
        } finally {
            setIsLoading(false);
        }
    };

    // Register function
    const register = async (userData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await registerUser(userData);
            if (response.success) {
                setUser(response.user);
                // In a real app, you might store the token
                // localStorage.setItem('token', response.token);
                return { success: true, user: response.user };
            }
        } catch (err) {
            setError(err.message);
            return { success: false, error: err.message };
        } finally {
            setIsLoading(false);
        }
    };

    // Logout function
    const logout = async () => {
        setIsLoading(true);
        setError(null);

        try {
            await logoutUser();
            setUser(null);
            // In a real app, you might clear stored tokens
            // localStorage.removeItem('token');
            return { success: true };
        } catch (err) {
            setError(err.message);
            return { success: false, error: err.message };
        } finally {
            setIsLoading(false);
        }
    };

    // Clear error function
    const clearError = () => {
        setError(null);
    };

    return {
        user,
        isLoading,
        error,
        login,
        register,
        logout,
        clearError,
        isAuthenticated: !!user
    };
};

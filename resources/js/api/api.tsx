
const API_BASE_URL = 'http://localhost:8000/api';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Login API call
export const loginUser = async (credentials) => {
    try {
        // Simulate API call
        await delay(1000);

        // Replace with actual API call
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;

        // // Mock success response
        // return {
        //   success: true,
        //   user: {
        //     id: 1,
        //     email: credentials.email,
        //     name: 'John Doe'
        //   },
        //   token: 'mock-jwt-token'
        // };
    } catch (error) {
        throw new Error('Login failed. Please try again.');
    }
};

// Register API call
export const registerUser = async (userData) => {
    try {
        // Simulate API call
        await delay(1000);

        // Replace with actual API call
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const data = await response.json();
        return data;

        // // Mock success response
        // return {
        //   success: true,
        //   user: {
        //     id: 1,
        //     email: userData.email,
        //     name: userData.name
        //   },
        //   token: 'mock-jwt-token'
        // };
    } catch (error) {
        throw new Error('Registration failed. Please try again.');
    }
};

// Logout API call
export const logoutUser = async () => {
    try {
        // Simulate API call
        await delay(500);

        // Replace with actual API call
        const response = await fetch(`${API_BASE_URL}/auth/logout`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Logout failed');
        }

        return { success: true };
    } catch (error) {
        throw new Error('Logout failed. Please try again.');
    }
};

// Get user profile
export const getUserProfile = async (token) => {
    try {
        // Replace with actual API call
        const response = await fetch(`${API_BASE_URL}/user/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user profile');
        }

        const data = await response.json();
        return data;

        // // Mock response
        // return {
        //   id: 1,
        //   email: 'user@example.com',
        //   name: 'John Doe',
        //   avatar: null
        // };
    } catch (error) {
        throw new Error('Failed to fetch user profile');
    }
};

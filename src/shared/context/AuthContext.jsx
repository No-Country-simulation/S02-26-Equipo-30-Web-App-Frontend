import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('token');
            const storedUser = localStorage.getItem('user');

            if (token && storedUser) {
                try {
                    const userData = JSON.parse(storedUser);
                    setUser(userData);
                } catch (e) {
                    console.error('Error parsing stored user', e);
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('refreshToken');
        setUser(null);
    };

    useEffect(() => {
        const handleAuthError = () => {
            console.warn('AuthContext: Auth error detected, logging out...');
            logout();

            // Rutas que no deben forzar redirección al login
            const PUBLIC_ROUTES = [
                '/',
                '/explorar',
                '/detalle',
                '/como-funciona',
                '/sobre-nosotros',
                '/contacto',
                '/confianza-seguridad',
                '/verificar'
            ];

            const isPublicRoute = PUBLIC_ROUTES.some(path => {
                if (path === '/') return location.pathname === '/';
                return location.pathname.startsWith(path);
            });

            // Redirect to login if not a public route and not already there
            if (!isPublicRoute && location.pathname !== '/login' && location.pathname !== '/registro') {
                navigate('/login', { state: { from: location } });
            }
        };

        window.addEventListener('auth-error', handleAuthError);
        return () => window.removeEventListener('auth-error', handleAuthError);
    }, [navigate, location]);

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;

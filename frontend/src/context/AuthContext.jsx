import React, { createContext, useState, useEffect } from 'react';
import api from '../api/axios';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        
        try {
          const response = await api.get('/auth/me');
          const freshUser = { ...response.data, token: parsedUser.token };
          setUser(freshUser);
          localStorage.setItem('user', JSON.stringify(freshUser));
        } catch (error) {
          console.error('Failed to refresh user data:', error);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      toast.success('Logged in successfully!');
      return userData;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      const newUserData = response.data;
      setUser(newUserData);
      localStorage.setItem('user', JSON.stringify(newUserData));
      toast.success('Registered successfully!');
      return newUserData;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

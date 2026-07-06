import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black text-slate-800 flex items-center gap-2 tracking-tight group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shadow-md transform group-hover:rotate-6 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          Volun<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">System</span>
        </Link>
        <div className="space-x-8 flex items-center font-semibold text-sm">
          <Link to="/" className="text-slate-500 hover:text-primary transition-colors">Home</Link>
          {user ? (
            <>
              {user.role === 'admin' ? (
                <Link to="/admin" className="text-slate-500 hover:text-primary transition-colors">Admin Dashboard</Link>
              ) : (
                <Link to="/dashboard" className="text-slate-500 hover:text-primary transition-colors">Dashboard</Link>
              )}
              <button onClick={handleLogout} className="text-slate-500 hover:text-red-500 transition-colors">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-slate-600 hover:text-primary transition">Login</Link>
              <Link to="/register" className="bg-primary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

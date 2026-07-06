import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const user = await login(data.email, data.password);
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100 space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
        <div>
          <h2 className="text-center text-3xl font-bold text-slate-800">Welcome Back</h2>
          <p className="mt-2 text-center text-sm text-slate-500">Sign in to your volunteer account</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
              <input type="email" {...register('email', { required: true })} className="block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" placeholder="you@example.com" />
              {errors.email && <span className="text-red-500 text-xs mt-1 block font-medium">Email is required</span>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
              <input type="password" {...register('password', { required: true })} className="block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" placeholder="••••••••" />
              {errors.password && <span className="text-red-500 text-xs mt-1 block font-medium">Password is required</span>}
            </div>
          </div>
          <button type="submit" className="w-full py-3 px-4 rounded-xl shadow-md text-sm font-bold text-white bg-primary hover:bg-blue-700 transition transform hover:-translate-y-0.5">
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-slate-600 font-medium">
          Don't have an account? <Link to="/register" className="text-primary hover:text-blue-800 transition">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

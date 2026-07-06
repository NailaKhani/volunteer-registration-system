import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const VolunteerForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { register: registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
          <input {...register('name', { required: true })} className="block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" placeholder="John Doe" />
          {errors.name && <span className="text-red-500 text-xs mt-1 block font-medium">Name is required</span>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
          <input type="email" {...register('email', { required: true })} className="block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" placeholder="john@example.com" />
          {errors.email && <span className="text-red-500 text-xs mt-1 block font-medium">Email is required</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
          <input type="password" {...register('password', { required: true, minLength: 6 })} className="block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" placeholder="••••••••" />
          {errors.password && <span className="text-red-500 text-xs mt-1 block font-medium">At least 6 characters</span>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
          <input {...register('phone')} className="block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" placeholder="(555) 123-4567" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">City</label>
          <input {...register('city')} className="block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" placeholder="New York" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Availability</label>
          <select {...register('availability')} className="block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition outline-none">
            <option value="">Select availability</option>
            <option value="weekends">Weekends Only</option>
            <option value="weekdays">Weekdays Only</option>
            <option value="anytime">Anytime</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Skills (comma separated)</label>
        <input {...register('skills')} placeholder="e.g. Teaching, First Aid, Driving, Event Planning" className="block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" />
      </div>

      <div className="pt-2">
        <button type="submit" className="w-full py-3 px-4 rounded-xl shadow-md text-sm font-bold text-white bg-secondary hover:bg-green-700 transition transform hover:-translate-y-0.5">
          Complete Registration
        </button>
      </div>
    </form>
  );
};

export default VolunteerForm;

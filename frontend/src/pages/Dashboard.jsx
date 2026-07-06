import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Welcome back, {user.name}!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Availability</p>
            <p className="text-xl font-bold text-slate-800 capitalize">{user.availability || 'Anytime'}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 text-secondary rounded-full flex items-center justify-center">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Location</p>
            <p className="text-xl font-bold text-slate-800">{user.city || 'Not specified'}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-100 text-accent rounded-full flex items-center justify-center">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Status</p>
            <p className="text-xl font-bold text-slate-800">Active Volunteer</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-2xl overflow-hidden border border-slate-100">
        <div className="px-6 py-5 bg-gradient-to-r from-primary to-blue-500 text-white border-b border-slate-200">
          <h3 className="text-lg font-semibold">Profile Information</h3>
          <p className="text-blue-100 text-sm mt-1">Your registered details and skills.</p>
        </div>
        <div className="p-0">
          <dl className="divide-y divide-slate-100">
            <div className="px-6 py-4 grid grid-cols-3 gap-4 hover:bg-slate-50 transition">
              <dt className="text-sm font-medium text-slate-500">Full Name</dt>
              <dd className="text-sm text-slate-800 col-span-2 font-medium">{user.name}</dd>
            </div>
            <div className="px-6 py-4 grid grid-cols-3 gap-4 hover:bg-slate-50 transition">
              <dt className="text-sm font-medium text-slate-500">Email Address</dt>
              <dd className="text-sm text-slate-800 col-span-2">{user.email}</dd>
            </div>
            <div className="px-6 py-4 grid grid-cols-3 gap-4 hover:bg-slate-50 transition">
              <dt className="text-sm font-medium text-slate-500">Phone</dt>
              <dd className="text-sm text-slate-800 col-span-2">{user.phone || 'Not provided'}</dd>
            </div>
            <div className="px-6 py-4 grid grid-cols-3 gap-4 hover:bg-slate-50 transition">
              <dt className="text-sm font-medium text-slate-500">Skills</dt>
              <dd className="text-sm text-slate-800 col-span-2">
                {user.skills ? (
                  <div className="flex flex-wrap gap-2">
                    {user.skills.split(',').map((skill, index) => (
                      <span key={index} className="bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold border border-blue-100">
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                ) : 'Not provided'}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

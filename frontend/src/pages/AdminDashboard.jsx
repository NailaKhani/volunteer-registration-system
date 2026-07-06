import React from 'react';
import VolunteerList from '../components/VolunteerList';

const AdminDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
        <p className="mt-2 text-sm text-slate-600">Manage all registered volunteers in the system.</p>
      </div>
      <VolunteerList />
    </div>
  );
};

export default AdminDashboard;

import React from 'react';
import VolunteerForm from '../components/VolunteerForm';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <h2 className="text-center text-3xl font-bold text-slate-800">Become a Volunteer</h2>
        <p className="mt-2 text-center text-sm text-slate-500">
          Already part of the team? <Link to="/login" className="font-semibold text-primary hover:text-blue-800 transition">Log in here</Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-6 shadow-xl border border-slate-100 sm:rounded-2xl sm:px-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
          <VolunteerForm />
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-auto border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-50 hover:opacity-100 transition-opacity">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          <h3 className="text-xl font-bold text-white tracking-tight">VolunSystem</h3>
        </div>
        <p className="mb-8 max-w-md mx-auto text-sm leading-relaxed">Connecting passionate individuals with meaningful opportunities to create positive change in our communities.</p>
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-center items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Volunteer Registration System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-[90vh] bg-slate-50 flex flex-col overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-multiply animate-float"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl mix-blend-multiply animate-float-delayed"></div>
        <div className="absolute -bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl mix-blend-multiply animate-float"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 flex-grow flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-left z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-primary font-bold text-xs uppercase tracking-wider mb-6 border border-blue-200 shadow-sm">
            ✨ Join our volunteer community
          </span>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Difference</span> Today.
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
            Connect with passionate individuals and help us create positive change in our city. Share your skills, find opportunities, and track your impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
              Start Volunteering
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <Link to="/login" className="bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 border border-slate-200 transition shadow-sm hover:shadow-md flex items-center justify-center">
              Log In to Dashboard
            </Link>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="lg:w-1/2 relative z-10 w-full">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition duration-500 bg-slate-200 aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
            <img src="/hero-image.avif" alt="Volunteers working together" className="w-full h-full object-cover" />
          </div>
          
          {/* Floating stats card */}
          <div className="absolute -bottom-8 -left-8 glass-panel p-5 rounded-2xl shadow-xl z-20 animate-float hidden md:flex items-center gap-4 border-white/50">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-secondary rounded-full flex items-center justify-center text-white shadow-inner">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Community Impact</p>
              <p className="text-3xl font-black text-slate-800 leading-none">10k+ <span className="text-lg text-slate-500 font-semibold">Hours</span></p>
            </div>
          </div>
        </div>

      </div>
      
      {/* Feature grid */}
      <div className="container mx-auto px-4 py-16 pb-24 z-10 relative">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass-panel p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Join the Community</h3>
            <p className="text-slate-600 font-medium">Connect with like-minded individuals who are passionate about giving back to society.</p>
          </div>
          <div className="glass-panel p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-green-50 text-secondary rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-green-100">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Make an Impact</h3>
            <p className="text-slate-600 font-medium">Contribute your unique skills to projects that truly matter and leave a lasting mark.</p>
          </div>
          <div className="glass-panel p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-amber-50 text-accent rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-amber-100">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Flexible Schedule</h3>
            <p className="text-slate-600 font-medium">Choose opportunities that seamlessly fit your availability, whether weekdays or weekends.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

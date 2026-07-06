import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import toast from 'react-hot-toast';

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchVolunteers = async () => {
    try {
      const response = await api.get('/volunteers');
      setVolunteers(response.data);
    } catch (error) {
      toast.error('Failed to fetch volunteers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this volunteer?')) {
      try {
        await api.delete(`/volunteers/${id}`);
        setVolunteers(volunteers.filter(v => v._id !== id));
        toast.success('Volunteer deleted successfully');
      } catch (error) {
        toast.error('Failed to delete volunteer');
      }
    }
  };

  const handleExport = async () => {
    try {
      const response = await api.get('/volunteers/export', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'volunteers.csv');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      toast.error('Failed to export volunteers');
    }
  };

  const filteredVolunteers = volunteers.filter(volunteer => 
    volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    volunteer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (volunteer.skills && volunteer.skills.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) return <div className="flex justify-center py-10"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div></div>;

  return (
    <div className="bg-white shadow-md border border-slate-100 rounded-2xl p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Registered Volunteers</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search volunteers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
            />
            <svg className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <button onClick={handleExport} className="bg-accent text-white px-5 py-2 rounded-xl hover:bg-yellow-600 transition font-semibold whitespace-nowrap flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Export CSV
          </button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold">Name & Email</th>
              <th className="p-4 font-semibold">City</th>
              <th className="p-4 font-semibold">Skills</th>
              <th className="p-4 font-semibold">Availability</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredVolunteers.map(volunteer => (
              <tr key={volunteer._id} className="hover:bg-slate-50 transition">
                <td className="p-4">
                  <div className="font-bold text-slate-800">{volunteer.name}</div>
                  <div className="text-sm text-slate-500">{volunteer.email}</div>
                </td>
                <td className="p-4 text-slate-700">{volunteer.city || '-'}</td>
                <td className="p-4">
                  {volunteer.skills ? (
                    <div className="flex flex-wrap gap-1">
                      {volunteer.skills.split(',').slice(0, 3).map((skill, i) => (
                         <span key={i} className="text-xs bg-blue-50 text-primary px-2 py-1 rounded-md">{skill.trim()}</span>
                      ))}
                      {volunteer.skills.split(',').length > 3 && <span className="text-xs text-slate-400">+{volunteer.skills.split(',').length - 3}</span>}
                    </div>
                  ) : <span className="text-slate-400">-</span>}
                </td>
                <td className="p-4 text-slate-700 capitalize">
                  <span className={`px-2 py-1 rounded-md text-xs font-semibold ${volunteer.availability === 'anytime' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                    {volunteer.availability || 'Anytime'}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button onClick={() => handleDelete(volunteer._id)} className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition" title="Delete Volunteer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </td>
              </tr>
            ))}
            {filteredVolunteers.length === 0 && (
              <tr>
                <td colSpan="5" className="p-8 text-center text-slate-500">
                  <svg className="w-12 h-12 mx-auto text-slate-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  No volunteers found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VolunteerList;

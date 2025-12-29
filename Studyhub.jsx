import React from 'react';
import { BookOpen, Video, FileText, HelpCircle, Play, ArrowRight } from 'lucide-react';


const StudyHub = () => {
  const categories = [
    { title: 'Video Courses', count: '120+ Lessons', icon: <Video className="text-blue-500" />, bg: 'bg-blue-50' },
    { title: 'Study Notes', count: '450+ PDFs', icon: <FileText className="text-red-500" />, bg: 'bg-red-50' },
    { title: 'Practice Tests', count: '80+ Tests', icon: <BookOpen className="text-green-500" />, bg: 'bg-green-50' },
    { title: 'Doubts Forum', count: 'Active Now', icon: <HelpCircle className="text-purple-500" />, bg: 'bg-purple-50' },
  ];


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Study Hub</h1>
          <p className="text-gray-600">Welcome back! Continue your preparation where you left off.</p>
        </header>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Main Content (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Resume Learning Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white flex justify-between items-center shadow-lg">
              <div>
                <span className="bg-blue-400/30 px-3 py-1 rounded-full text-sm font-medium">Last Studied: Current Affairs</span>
                <h2 className="text-2xl font-semibold mt-2">Daily News Analysis - Dec 29</h2>
                <button className="mt-4 bg-white text-blue-700 px-6 py-2 rounded-lg font-bold flex items-center hover:bg-gray-100 transition">
                  <Play size={18} className="mr-2 fill-current" /> Resume Video
                </button>
              </div>
              <div className="hidden md:block opacity-20"><Video size={100} /></div>
            </div>


            {/* 2. Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition cursor-pointer flex items-center space-x-4">
                  <div className={`${item.bg} p-4 rounded-lg`}>{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.count}</p>
                  </div>
                </div>
              ))}
            </div>


            {/* 3. Subject Selector */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold mb-4">Subjects for You</h3>
              <div className="space-y-3">
                {['Quantitative Aptitude', 'Reasoning Ability', 'General Awareness'].map((subject) => (
                  <div key={subject} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group cursor-pointer">
                    <span className="font-medium text-gray-700">{subject}</span>
                    <ArrowRight size={18} className="text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition" />
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* RIGHT: Sidebar/Activity Feed */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">Daily Targets</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                  <span className="ml-3 text-gray-600">Attempt 1 Mock Test</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                  <span className="ml-3 text-gray-600">Read Dec 29 News</span>
                </div>
              </div>
            </div>


            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
              <h3 className="font-bold text-yellow-800 mb-2">Live Classes</h3>
              <p className="text-sm text-yellow-700 mb-4">3 sessions starting in the next 2 hours.</p>
              <button className="w-full bg-yellow-600 text-white py-2 rounded-lg text-sm font-bold">View Schedule</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};


export default StudyHub;


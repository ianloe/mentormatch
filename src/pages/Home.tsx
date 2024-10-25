import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Sparkles, Target } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Find Your Perfect Mentor</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with experienced professionals who can guide you on your journey to success
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Users className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Expert Mentors</h2>
          <p className="text-gray-600">Access a diverse network of experienced professionals ready to share their knowledge.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Sparkles className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Personalized Matching</h2>
          <p className="text-gray-600">Find mentors that align with your goals, interests, and career aspirations.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Target className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Goal Achievement</h2>
          <p className="text-gray-600">Get guidance and support to reach your professional development goals.</p>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <Link
          to="/search"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Find a Mentor
        </Link>
        <Link
          to="/register"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition"
        >
          Become a Mentor
        </Link>
      </div>
    </div>
  );
}

export default Home;
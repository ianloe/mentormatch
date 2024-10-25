import React, { useState } from 'react';
import { User, Mail, Briefcase, Clock, Award } from 'lucide-react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Thompson",
    email: "alex.thompson@example.com",
    title: "Senior Software Engineer",
    experience: "8 years",
    expertise: ["React", "Node.js", "TypeScript", "System Design"],
    bio: "Passionate about helping others grow in their tech careers. Specialized in web development and system architecture.",
    availability: "3-5 hours/week"
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-indigo-600 h-32"></div>
        <div className="px-6 pb-6">
          <div className="relative">
            <div className="absolute -top-16">
              <div className="bg-white p-2 rounded-full">
                <div className="bg-indigo-100 rounded-full p-4">
                  <User className="h-16 w-16 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
              <div className="flex items-center space-x-2 text-gray-600 mt-1">
                <Mail className="h-4 w-4" />
                <span>{profile.email}</span>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-2 text-indigo-600 mb-4">
            <Briefcase className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Professional Info</h2>
          </div>
          {isEditing ? (
            <div className="space-y-4">
              <input
                type="text"
                value={profile.title}
                onChange={(e) => setProfile({...profile, title: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
              <input
                type="text"
                value={profile.experience}
                onChange={(e) => setProfile({...profile, experience: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-gray-600">{profile.title}</p>
              <p className="text-gray-600">{profile.experience} experience</p>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-2 text-indigo-600 mb-4">
            <Award className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Expertise</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.expertise.map(skill => (
              <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-2 text-indigo-600 mb-4">
            <Clock className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Availability</h2>
          </div>
          {isEditing ? (
            <select
              value={profile.availability}
              onChange={(e) => setProfile({...profile, availability: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="1-2">1-2 hours/week</option>
              <option value="3-5">3-5 hours/week</option>
              <option value="5+">5+ hours/week</option>
            </select>
          ) : (
            <p className="text-gray-600">{profile.availability}</p>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Bio</h2>
        {isEditing ? (
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({...profile, bio: e.target.value})}
            className="w-full px-3 py-2 border rounded-lg"
            rows={4}
          />
        ) : (
          <p className="text-gray-600">{profile.bio}</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
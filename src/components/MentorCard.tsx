import { Calendar, Github, Linkedin, MapPin } from 'lucide-react';
import type { Profile } from '../types';

interface MentorCardProps {
  mentor: Profile;
}

export default function MentorCard({ mentor }: MentorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={mentor.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
          alt={mentor.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
          <p className="text-gray-600">{mentor.title}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {mentor.expertise.map((skill) => (
              <span 
                key={skill.id}
                className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
          
          <p className="mt-4 text-gray-600 line-clamp-3">{mentor.bio}</p>
          
          <div className="mt-4 flex items-center space-x-4">
            {mentor.availability && (
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {mentor.availability}
              </div>
            )}
            
            <div className="flex space-x-2">
              {mentor.linkedIn && (
                <a 
                  href={mentor.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {mentor.github && (
                <a 
                  href={mentor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
          Connect
        </button>
      </div>
    </div>
  );
}
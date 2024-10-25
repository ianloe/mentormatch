import { useState } from 'react';
import MentorCard from './MentorCard';
import SearchFilters from './SearchFilters';
import type { Profile } from '../types';

// Sample data moved to a separate component
const SAMPLE_MENTORS: Profile[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    title: 'Senior Frontend Engineer at TechCorp',
    bio: 'Passionate about web development and helping others grow in their career. Specialized in React and modern JavaScript.',
    expertise: [
      { id: '1', name: 'React' },
      { id: '2', name: 'TypeScript' },
      { id: '3', name: 'Frontend Architecture' }
    ],
    isMentor: true,
    yearsOfExperience: 8,
    availability: 'Weekly',
    linkedIn: 'https://linkedin.com',
    github: 'https://github.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    email: 'marcus@example.com',
    title: 'Tech Lead at StartupX',
    bio: 'Full-stack developer with a focus on scalable architectures. Love mentoring and sharing knowledge about system design.',
    expertise: [
      { id: '4', name: 'Node.js' },
      { id: '5', name: 'System Design' },
      { id: '6', name: 'AWS' }
    ],
    isMentor: true,
    yearsOfExperience: 10,
    availability: 'Bi-weekly',
    linkedIn: 'https://linkedin.com',
    github: 'https://github.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export default function MentorList() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Find Your Mentor</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search mentors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <SearchFilters />
        </div>
        
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {SAMPLE_MENTORS.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
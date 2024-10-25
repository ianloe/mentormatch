import { useState } from 'react';
import type { Expertise } from '../types';

const SAMPLE_EXPERTISE: Expertise[] = [
  { id: '1', name: 'Frontend Development' },
  { id: '2', name: 'Backend Development' },
  { id: '3', name: 'DevOps' },
  { id: '4', name: 'UI/UX Design' },
  { id: '5', name: 'Machine Learning' },
];

export default function SearchFilters() {
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Expertise
          </label>
          <div className="space-y-2">
            {SAMPLE_EXPERTISE.map((expertise) => (
              <label key={expertise.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={selectedExpertise.includes(expertise.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedExpertise([...selectedExpertise, expertise.id]);
                    } else {
                      setSelectedExpertise(selectedExpertise.filter(id => id !== expertise.id));
                    }
                  }}
                />
                <span className="ml-2 text-gray-700">{expertise.name}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Years of Experience
          </label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option>Any</option>
            <option>1-3 years</option>
            <option>3-5 years</option>
            <option>5-10 years</option>
            <option>10+ years</option>
          </select>
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Availability
          </label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option>Any</option>
            <option>Weekly</option>
            <option>Bi-weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>
      
      <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
        Apply Filters
      </button>
    </div>
  );
}
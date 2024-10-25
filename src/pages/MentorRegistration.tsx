import React, { useState } from 'react';

function MentorRegistration() {
  const [expertise, setExpertise] = useState('');
  const [expertiseList, setExpertiseList] = useState<string[]>([]);

  const addExpertise = () => {
    if (expertise && !expertiseList.includes(expertise)) {
      setExpertiseList([...expertiseList, expertise]);
      setExpertise('');
    }
  };

  const removeExpertise = (item: string) => {
    setExpertiseList(expertiseList.filter(exp => exp !== item));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Become a Mentor</h1>
        <p className="mt-2 text-gray-600">Share your expertise and help others grow</p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Professional Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g. Senior Software Engineer"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            min="1"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Areas of Expertise</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Add your expertise"
            />
            <button
              type="button"
              onClick={addExpertise}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {expertiseList.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full flex items-center"
              >
                {item}
                <button
                  type="button"
                  onClick={() => removeExpertise(item)}
                  className="ml-2 text-indigo-600 hover:text-indigo-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            placeholder="Tell us about yourself and your mentoring style"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Availability</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select availability</option>
            <option value="1-2">1-2 hours/week</option>
            <option value="3-5">3-5 hours/week</option>
            <option value="5+">5+ hours/week</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          Register as Mentor
        </button>
      </form>
    </div>
  );
}

export default MentorRegistration;
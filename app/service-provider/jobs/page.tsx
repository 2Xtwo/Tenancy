'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ServiceProviderJobs() {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Fix Leaky Faucet', location: 'Apartment A101', budget: 100, status: 'Open' },
    { id: 2, title: 'Paint Living Room', location: 'House B202', budget: 500, status: 'In Progress' },
    { id: 3, title: 'Replace AC Unit', location: 'Condo C303', budget: 1000, status: 'Open' },
  ]);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 neon-text text-center">Job Requests</h1>
      <div className="glassmorphism p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-bg text-transparent bg-clip-text">Available Jobs</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Location</th>
                <th className="py-2 px-4 text-left">Budget</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-gray-700">
                  <td className="py-2 px-4">{job.title}</td>
                  <td className="py-2 px-4">{job.location}</td>
                  <td className="py-2 px-4">${job.budget}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded ${
                      job.status === 'Open' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    {job.status === 'Open' && (
                      <button className="bg-primary text-background px-3 py-1 rounded hover:bg-secondary transition-all">
                        Bid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link href="/service-provider" className="block text-center neon-text hover:underline">
        Back to Dashboard
      </Link>
    </div>
  );
}
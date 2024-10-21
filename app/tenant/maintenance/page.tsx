'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function TenantMaintenance() {
  const [requests, setRequests] = useState([
    { id: 1, date: '2023-05-15', issue: 'Leaky faucet', status: 'In Progress' },
    { id: 2, date: '2023-06-10', issue: 'Broken window', status: 'Completed' },
    { id: 3, date: '2023-07-05', issue: 'AC not working', status: 'Pending' },
  ]);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 neon-text text-center">Maintenance Requests</h1>
      <div className="glassmorphism p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-bg text-transparent bg-clip-text">Request History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Issue</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b border-gray-700">
                  <td className="py-2 px-4">{request.date}</td>
                  <td className="py-2 px-4">{request.issue}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded ${
                      request.status === 'Completed' ? 'bg-green-500' :
                      request.status === 'In Progress' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="glassmorphism p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-bg text-transparent bg-clip-text">Submit New Request</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="issue" className="block mb-2">Issue Description</label>
            <textarea id="issue" className="w-full p-2 bg-gray-800 rounded" rows={4} placeholder="Describe the issue"></textarea>
          </div>
          <div>
            <label htmlFor="priority" className="block mb-2">Priority</label>
            <select id="priority" className="w-full p-2 bg-gray-800 rounded">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-primary text-background p-3 rounded font-bold hover:bg-secondary transition-all">
            Submit Request
          </button>
        </form>
      </div>
      <Link href="/tenant" className="block text-center neon-text hover:underline">
        Back to Dashboard
      </Link>
    </div>
  );
}
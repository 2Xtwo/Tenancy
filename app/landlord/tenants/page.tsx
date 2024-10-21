'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LandlordTenants() {
  const [tenants, setTenants] = useState([
    { id: 1, name: 'John Doe', unit: 'A101', rentAmount: 1000, status: 'Active' },
    { id: 2, name: 'Jane Smith', unit: 'B202', rentAmount: 1200, status: 'Late' },
    { id: 3, name: 'Bob Johnson', unit: 'C303', rentAmount: 950, status: 'Active' },
  ]);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 neon-text text-center">Tenant Management</h1>
      <div className="glassmorphism p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-bg text-transparent bg-clip-text">Tenant List</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Unit</th>
                <th className="py-2 px-4 text-left">Rent Amount</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant) => (
                <tr key={tenant.id} className="border-b border-gray-700">
                  <td className="py-2 px-4">{tenant.name}</td>
                  <td className="py-2 px-4">{tenant.unit}</td>
                  <td className="py-2 px-4">${tenant.rentAmount}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded ${
                      tenant.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {tenant.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link href="/landlord" className="block text-center neon-text hover:underline">
        Back to Dashboard
      </Link>
    </div>
  );
}
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AdminAnalytics() {
  const [stats, setStats] = useState({
    totalUsers: 1000,
    activeRentals: 750,
    completedJobs: 500,
    revenue: 100000,
  });

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 neon-text text-center">Platform Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glassmorphism p-6">
          <h2 className="text-2xl font-bold mb-4 gradient-bg text-transparent bg-clip-text">Total Users</h2>
          <p className="text-4xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="glassmorphism p-6">
          <h2 className="text-2xl font-bold mb-4 gradient-bg text-transparent bg-clip-text">Active Rentals</h2>
          <p className="text-4xl font-bold">{stats.activeRentals}</p>
        </div>
        <div className="glassmorphism p-6">
          <h2 className="text-2xl font-bold mb-4 gradient-bg text-transparent bg-clip-text">Completed Jobs</h2>
          <p className="text-4xl font-bold">{stats.completedJobs}</p>
        </div>
        <div className="glassmorphism p-6">
          <h2 className="text-2xl font-bold mb-4 gradient-bg text-transparent bg-clip-text">Total Revenue</h2>
          <p className="text-4xl font-bold">${stats.revenue.toLocaleString()}</p>
        </div>
      </div>
      <Link href="/admin" className="block text-center neon-text hover:underline">
        Back to Dashboard
      </Link>
    </div>
  );
}
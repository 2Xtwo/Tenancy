'use client';
import Link from 'next/link';
import { useAppContext } from './context/AppContext';

const tiles = [
  {
    href: "/tenant",
    icon: "🏠",
    title: "Tenant Dashboard",
    description: "Manage your rent, maintenance requests, and more",
    stat: "5 Active Requests",
    color: "from-blue-500 to-blue-700"
  },
  {
    href: "/landlord",
    icon: "🔑",
    title: "Landlord Dashboard",
    description: "Oversee properties, tenants, and finances",
    stat: "10 Properties Managed",
    color: "from-green-500 to-green-700"
  },
  {
    href: "/service-provider",
    icon: "🛠️",
    title: "Service Provider",
    description: "Manage job requests and track your performance",
    stat: "15 Jobs Completed",
    color: "from-yellow-500 to-yellow-700"
  },
  {
    href: "/admin",
    icon: "⚙️",
    title: "Admin Dashboard",
    description: "Control and analyze the entire platform",
    stat: "100+ Users",
    color: "from-purple-500 to-purple-700"
  }
];

export default function Home() {
  const { user } = useAppContext();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <h1 className="text-5xl font-bold mb-12 neon-text text-center">Welcome to TenantLord</h1>
        <p className="text-xl mb-8">Please log in to access the dashboards.</p>
        <Link href="/auth" className="bg-primary text-background px-6 py-3 rounded-lg font-bold hover:bg-secondary transition-all">
          Login / Register
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h1 className="text-5xl font-bold mb-12 neon-text text-center">Welcome to TenantLord</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {tiles.map((tile, index) => (
          <Link key={index} href={tile.href} className="group">
            <div className={`glassmorphism p-6 h-full flex flex-col justify-between transition-all duration-300 group-hover:neon-border group-hover:scale-105 bg-gradient-to-br ${tile.color}`}>
              <div>
                <div className="text-5xl mb-4">{tile.icon}</div>
                <h2 className="text-2xl font-bold mb-2 text-white">{tile.title}</h2>
                <p className="text-gray-200 mb-4">{tile.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-semibold text-white">{tile.stat}</span>
                <span className="text-white group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
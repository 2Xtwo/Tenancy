'use client';
import { useAppContext } from '../context/AppContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardCard from '../components/DashboardCard';
import NotificationBell from '../components/NotificationBell';

const tenantTiles = [
  {
    href: "/tenant/payments",
    icon: "💳",
    title: "Payments",
    description: "View and manage your rent payments",
    stat: "Next payment: $1000 due in 5 days"
  },
  {
    href: "/tenant/maintenance",
    icon: "🛠️",
    title: "Maintenance Requests",
    description: "Submit and track maintenance requests",
    stat: "2 open requests"
  },
  {
    href: "/tenant/notifications",
    icon: "🔔",
    title: "Notifications",
    description: "Stay updated with important alerts",
    stat: "3 new notifications"
  },
  {
    href: "/tenant/profile",
    icon: "👤",
    title: "Profile",
    description: "Manage your personal information",
    stat: "Last updated: 2 weeks ago"
  }
];

export default function TenantDashboard() {
  const { user } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-8 neon-text">Tenant Dashboard</h1>
        <NotificationBell />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tenantTiles.map((tile, index) => (
          <DashboardCard
            key={index}
            href={tile.href}
            icon={tile.icon}
            title={tile.title}
            description={tile.description}
            stat={tile.stat}
          />
        ))}
      </div>
    </div>
  );
}
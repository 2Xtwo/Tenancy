import DashboardCard from '../components/DashboardCard';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 neon-text text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DashboardCard
          href="/admin/users"
          icon="👥"
          title="User Management"
          description="Oversee all platform users"
        />
        <DashboardCard
          href="/admin/analytics"
          icon="📈"
          title="Analytics"
          description="View platform performance and insights"
        />
        <DashboardCard
          href="/admin/services"
          icon="🛠️"
          title="Service Requests"
          description="Monitor and manage service operations"
        />
        <DashboardCard
          href="/admin/profile"
          icon="🔧"
          title="Profile"
          description="Update your admin account settings"
        />
      </div>
    </div>
  );
}
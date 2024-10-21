import DashboardCard from '../components/DashboardCard';

export default function ServiceProviderDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 neon-text text-center">Service Provider Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DashboardCard
          href="/service-provider/jobs"
          icon="🧑‍🔧"
          title="Job Requests"
          description="View and bid on available jobs"
        />
        <DashboardCard
          href="/service-provider/tracking"
          icon="📊"
          title="Job Tracking"
          description="Monitor your ongoing and completed jobs"
        />
        <DashboardCard
          href="/service-provider/ratings"
          icon="⭐"
          title="Ratings"
          description="Check your performance and feedback"
        />
        <DashboardCard
          href="/service-provider/profile"
          icon="🔧"
          title="Profile"
          description="Manage your account and skills"
        />
      </div>
    </div>
  );
}
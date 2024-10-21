import DashboardCard from '../components/DashboardCard';

export default function LandlordDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 neon-text text-center">Landlord Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DashboardCard
          href="/landlord/tenants"
          icon="🏠"
          title="Tenant Management"
          description="Oversee your tenants and properties"
        />
        <DashboardCard
          href="/landlord/payments"
          icon="💵"
          title="Payments"
          description="Track rent payments and financial data"
        />
        <DashboardCard
          href="/landlord/services"
          icon="🛠️"
          title="Service Requests"
          description="Manage and assign maintenance tasks"
        />
        <DashboardCard
          href="/landlord/profile"
          icon="🗂️"
          title="Profile"
          description="Update your account information"
        />
      </div>
    </div>
  );
}
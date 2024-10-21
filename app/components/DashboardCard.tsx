import Link from 'next/link';

interface DashboardCardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
}

export default function DashboardCard({ href, icon, title, description }: DashboardCardProps) {
  return (
    <Link href={href} className="glassmorphism p-6 flex flex-col items-center text-center transition-all hover:neon-border float">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-2 gradient-bg text-transparent bg-clip-text">{title}</h2>
      <p>{description}</p>
    </Link>
  );
}
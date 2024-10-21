'use client';
import { useAppContext } from '../context/AppContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UserMenu() {
  const { user, setUser } = useAppContext();
  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
    router.push('/');
  };

  if (!user) {
    return (
      <Link href="/auth" className="neon-border px-4 py-2 rounded transition-all hover:bg-primary hover:text-background">
        Login / Register
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className="neon-border px-4 py-2 rounded transition-all hover:bg-primary hover:text-background">
        {user.phoneNumber}
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-background border border-gray-700 rounded shadow-lg hidden group-hover:block">
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 hover:bg-gray-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
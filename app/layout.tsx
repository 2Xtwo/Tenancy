import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { AppProvider } from './context/AppContext';
import UserMenu from './components/UserMenu';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tenant-Landlord App',
  description: 'Modern app for tenants, landlords, service providers, and admins',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏠</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <AppProvider>
          <header className="glassmorphism p-4 mb-8">
            <nav className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold neon-text">TenantLord</Link>
              <div className="flex items-center space-x-4">
                <Suspense fallback={<div>Loading...</div>}>
                  <UserMenu />
                </Suspense>
              </div>
            </nav>
          </header>
          <main className="container mx-auto flex-grow p-4">
            <Suspense fallback={<div>Loading...</div>}>
              {children}
            </Suspense>
          </main>
          <footer className="glassmorphism p-4 mt-8">
            <div className="container mx-auto text-center">
              <p>&copy; 2023 TenantLord App</p>
            </div>
          </footer>
        </AppProvider>
      </body>
    </html>
  );
}
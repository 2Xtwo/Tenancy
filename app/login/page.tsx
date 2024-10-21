'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../context/AppContext';
import FormInput from '../components/FormInput';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { setUser } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    // Mock authentication
    if (email === 'user@example.com' && password === 'password') {
      setUser({ email });
      router.push('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 glassmorphism p-8">
      <h2 className="text-3xl font-bold mb-6 neon-text text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-primary text-background p-3 rounded font-bold hover:bg-secondary transition-all">
          Login
        </button>
      </form>
    </div>
  );
}
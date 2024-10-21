'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4 neon-text">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-primary text-background px-4 py-2 rounded hover:bg-secondary transition-all"
      >
        Try again
      </button>
    </div>
  );
}
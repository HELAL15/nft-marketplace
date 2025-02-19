'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error occurred:', error);
  }, [error]);

  return (
    <div className="flex h-screen items-center justify-center text-center">
      <h1 className="text-2xl font-semibold text-red-500">
        Something went wrong!
      </h1>
      <button
        onClick={() => reset()} // Try to recover
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
}

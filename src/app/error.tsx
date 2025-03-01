'use client';

import Button from '@/components/common/Button';
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
    <div className="flex h-[90vh] items-center justify-center text-center flex-col gap-4">
      <h1 className="text-2xl font-semibold text-red-500">
        Something went wrong!
      </h1>
      <Button onClick={() => reset()}>
        <span> Try Again</span>
      </Button>
    </div>
  );
}

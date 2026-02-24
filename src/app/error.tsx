'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <ErrorMessage
        pageTitle='Slug'
        contentTitle='ERROR'
        content={
          <button type='button' onClick={reset}>
            Tentar novamente
          </button>
        }
      />
    </>
  );
}

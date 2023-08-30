'use client';

import { useEffect } from 'react';
import { A } from '@/basic/A';
import { H2 } from '@/basic/typography/H2';
import { P } from '@/basic/typography/P';
import { Card } from '@/entities/Card';

type ErrorProps = { error: Error & { digest?: string }; reset: () => void };

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-screen items-center justify-center'>
      <Card>
        <H2>{error.message || 'Что-то пошло не так...'}</H2>
        <P>
          Но это исключительный случай!
          <br />
          Может поможет{' '}
          <A href='' onClick={() => reset()} className='underline'>
            перезагрузка
          </A>
          ?
        </P>
      </Card>
    </div>
  );
};
export default Error;

'use client';

import { A } from '@/basic/A';
import { H2 } from '@/basic/typography/H2';
import { P } from '@/basic/typography/P';
import { Card } from '@/entities/Card';

type ErrorProps = { reset: () => void };

const Error = ({ reset }: ErrorProps) => (
  <div className='flex h-screen items-center justify-center'>
    <Card>
      <H2>Что-то пошло не так...</H2>
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
export default Error;

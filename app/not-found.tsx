import { A } from '@/basic/A';
import { H2 } from '@/basic/typography/H2';
import { P } from '@/basic/typography/P';
import { Card } from '@/entities/Card';

const Page404 = () => (
  <div className='flex h-screen items-center justify-center'>
    <Card>
      <div className='text-center text-9xl font-extrabold text-slate-200'>404</div>
      <H2>Такой страницы тут нет</H2>
      <P>
        Видимо где-то свернули не туда...
        <br />
        Попробуйте начать заново с{' '}
        <A href='/' className='underline'>
          главной страницы
        </A>
        .
      </P>
    </Card>
  </div>
);
export default Page404;

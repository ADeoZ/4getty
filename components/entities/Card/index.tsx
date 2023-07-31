import { Paper } from '@/basic/Paper';

type CardProps = {
  children?: React.ReactNode;
};

export const Card = ({ children }: CardProps) => (
  <Paper as='article' className='p-6'>
    {children}
  </Paper>
);

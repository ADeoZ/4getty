import { H4 } from '@/basic/typography/H4';

export type ListProps = {
  title?: string;
  children?: React.ReactNode;
};

export const List = ({ title, children }: ListProps) => (
  <div className='my-10'>
    {title && <H4 className='border-t-2 border-dashed border-zinc-200 pl-6 pt-2'>{title}</H4>}
    <ul>{children}</ul>
  </div>
);

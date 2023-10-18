import { MemoTypes } from 'services/memo/models';
import { ArrowRightIcon } from '@/basic/icons/ArrowRightIcon';

type BreadcrumbsProps = {
  type: MemoTypes;
  children?: React.ReactNode;
};

type TypeLabels = {
  [key in MemoTypes]: string;
};

const typeLabels: TypeLabels = {
  todo: 'To-Do',
  list: 'Перечень',
};

export const Breadcrumbs = ({ type, children }: BreadcrumbsProps) => (
  <div className='mb-1 flex items-center gap-2'>
    <div className='font-semibold'>{typeLabels[type]}</div>
    <ArrowRightIcon className='m-auto' />
    {children}
  </div>
);

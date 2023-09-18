import { MemoItem } from 'services/memo/models';
import { H2 } from '@/basic/typography/H2';

export type CardTitleProps = Pick<MemoItem, 'title'>;

export const CardTitle = ({ title }: CardTitleProps) => <H2>{title}</H2>;

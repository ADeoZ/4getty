import { CardEdit } from '@/widgets/CardEdit';

const Page = () => (
  <CardEdit
    id={''}
    category={{ id: 'new', name: 'Выберите категорию' }}
    type={'todo'}
    tagList={[]}
    author={'Гость'}
    timestamps={{ created: new Date().toISOString() }}
    title={'Новая заметка'}
    list={[]}
    rating={{ value: 0, hasMark: false }}
  />
);
export default Page;

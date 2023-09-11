'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { CardHeaderProps } from '..';
import { makeMark } from './controllers';

export type CardRatingProps = Pick<CardHeaderProps, 'rating' | 'hasMark'>;

export const CardRating = ({ rating, hasMark }: CardRatingProps) => {
  const [mark, setMark] = useState<boolean>(hasMark);

  // делаем POST запрос на изменение рейтинга на rest с id карточки
  // в ответ получаем статус голоса для текущего пользователя
  // по статусу меняем отметку на рейтинге и прибавляем единицу к рейтингу
  // общее количество рейтинга не меняем до перезагрузки карточки
  const markHandler = async () => {
    const makeMarkRes = await makeMark({ memoId: '17' });
    if (makeMarkRes) setMark(true);
  };

  const keyHandler = (event: React.KeyboardEvent<HTMLElement>) =>
    event.key === 'Enter' && markHandler();

  return (
    <div
      className={twMerge(
        'bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=fde047")] px-2 py-4 text-2xl font-bold hover:bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-4&color=15803d")]',
        mark &&
          'bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-4&color=15803d")] hover:bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=fde047")]',
      )}
      onClick={markHandler}
      onKeyDown={keyHandler}
      role='button'
      tabIndex={0}
    >
      {rating}
    </div>
  );
};

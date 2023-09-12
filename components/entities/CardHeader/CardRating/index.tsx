import { twMerge } from 'tailwind-merge';
import { CardHeaderProps } from '..';

export type CardRatingProps = Pick<CardHeaderProps, 'rating' | 'hasMark'> & {
  clickHandler: () => void;
};

export const CardRating = ({ rating, hasMark, clickHandler }: CardRatingProps) => {
  const keyHandler = (event: React.KeyboardEvent<HTMLElement>) =>
    event.key === 'Enter' && clickHandler();

  return (
    <div
      className={twMerge(
        'bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=fde047")] px-2 py-4 text-2xl font-bold hover:bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-4&color=15803d")]',
        hasMark &&
          'bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-4&color=15803d")] hover:bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=fde047")]',
      )}
      onClick={clickHandler}
      onKeyDown={keyHandler}
      role='button'
      tabIndex={0}
    >
      {rating}
    </div>
  );
};

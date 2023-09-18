import { MemoRating } from 'services/memo/models';
import { twMerge } from 'tailwind-merge';

export type CardRatingProps = {
  ratingValue: MemoRating['value'];
  ratingHasMark: MemoRating['hasMark'];
  clickHandler: () => void;
};

export const CardRating = ({
  ratingValue = 0,
  ratingHasMark = false,
  clickHandler,
}: CardRatingProps) => {
  const keyHandler = (event: React.KeyboardEvent<HTMLElement>) =>
    event.key === 'Enter' && clickHandler();

  return (
    <div
      className={twMerge(
        'bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=fde047")] px-2 py-4 text-2xl font-bold hover:bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-4&color=15803d")]',
        ratingHasMark &&
          'bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-4&color=15803d")] hover:bg-[url("//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=fde047")]',
      )}
      onClick={clickHandler}
      onKeyDown={keyHandler}
      role='button'
      tabIndex={0}
    >
      {ratingValue}
    </div>
  );
};

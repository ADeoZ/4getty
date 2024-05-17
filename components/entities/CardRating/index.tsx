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
        'border-yellow-300 px-2 py-4 text-2xl font-bold border-4 hover:bg-green-700 hover:border-transparent rounded-lg transition-colors',
        ratingHasMark &&
          'bg-green-700 border-transparent hover:border-yellow-300 hover:bg-yellow-200',
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

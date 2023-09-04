type DateStringProps = { date: string; showTime?: boolean };

export const DateString = ({ date, showTime = false }: DateStringProps) => {
  const mappedDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...(showTime ? { hour: '2-digit', minute: '2-digit' } : {}),
  };

  return <span>{mappedDate.toLocaleDateString('ru-RU', options)}</span>;
};

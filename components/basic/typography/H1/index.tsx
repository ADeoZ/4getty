import classnames from 'classnames';

type H1Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H1 = ({ children, className }: H1Props) => (
  <h1 className={classnames('mb-5 text-5xl', className)}>{children}</h1>
);

import classnames from 'classnames';

type H3Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H3 = ({ children, className }: H3Props) => (
  <h3
    className={classnames('mb-4 mt-0 text-2xl font-bold leading-tight text-slate-800', className)}
  >
    {children}
  </h3>
);

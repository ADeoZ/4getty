import classnames from 'classnames';

type H4Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H4 = ({ children, className }: H4Props) => (
  <h4 className={classnames('mb-4 mt-0 text-xl font-bold leading-tight text-slate-800', className)}>
    {children}
  </h4>
);

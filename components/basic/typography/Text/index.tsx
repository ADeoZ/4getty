import classnames from 'classnames';

type TextProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Text = ({ children, className }: TextProps) => (
  <p className={classnames('mb-6 leading-relaxed text-black', className)}>{children}</p>
);

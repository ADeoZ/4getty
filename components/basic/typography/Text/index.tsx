type TextProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Text = ({ children, className }: TextProps) => {
  return <p className={className}>{children}</p>;
};

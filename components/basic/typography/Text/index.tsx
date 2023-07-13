type TextProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Text = ({ children, className }: TextProps) => <p className={className}>{children}</p>;

type H4Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H4 = ({ children, className }: H4Props) => <h4 className={className}>{children}</h4>;

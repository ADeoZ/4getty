type H2Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H2 = ({ children, className }: H2Props) => {
  return <h2 className={className}>{children}</h2>;
};

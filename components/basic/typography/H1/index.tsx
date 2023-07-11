type H1Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H1 = ({ children, className }: H1Props) => {
  return <h1 className={className}>{children}</h1>;
};

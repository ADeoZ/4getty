type H3Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H3 = ({ children, className }: H3Props) => <h3 className={className}>{children}</h3>;

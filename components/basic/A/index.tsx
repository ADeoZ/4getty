import Link, { LinkProps } from 'next/link';

type AProps = LinkProps & { children?: React.ReactNode };

export const A = ({ children, ...props }: AProps) => <Link {...props}>{children}</Link>;

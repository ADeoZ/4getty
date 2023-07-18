import Link, { LinkProps } from 'next/link';

type AProps = LinkProps & { className?: string; children?: React.ReactNode };

export const A = ({ children, ...props }: AProps) => <Link {...props}>{children}</Link>;

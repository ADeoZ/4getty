import React from 'react';

export type CardHeaderProps = { children?: React.ReactNode };

export const CardHeader = ({ children }: CardHeaderProps) => <header>{children}</header>;

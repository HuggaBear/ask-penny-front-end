/**
 * Badge Component
 *
 * Small label for deal stages and status indicators
 */

import React from 'react';
import './Badge.css';

export type BadgeColorScheme =
  | 'green'
  | 'blue'
  | 'purple'
  | 'orange'
  | 'red'
  | 'gray';

export type BadgeVariant = 'solid' | 'subtle' | 'outline';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  colorScheme?: BadgeColorScheme;
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  colorScheme = 'gray',
  variant = 'subtle',
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'badge',
    `badge-${colorScheme}`,
    `badge-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

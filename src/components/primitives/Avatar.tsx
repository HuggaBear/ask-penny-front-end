/**
 * Avatar Component
 *
 * User/AI avatar with initials fallback
 */

import React from 'react';
import './Avatar.css';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  name?: string;
  src?: string;
  size?: AvatarSize;
  role?: 'user' | 'assistant';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  name = '',
  src,
  size = 'md',
  role = 'user',
  className = '',
}) => {
  const getInitials = (name: string): string => {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    }
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  const classes = [
    'avatar',
    `avatar-${size}`,
    `avatar-${role}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {src ? (
        <img src={src} alt={name || 'Avatar'} className="avatar-image" />
      ) : (
        <span className="avatar-initials">{getInitials(name)}</span>
      )}
    </div>
  );
};

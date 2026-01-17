/**
 * LoadingSpinner Component
 *
 * Animated loading spinner in SalesStar brand colors
 */

import React from 'react';
import './LoadingSpinner.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface LoadingSpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
}) => {
  return (
    <div className={`loading-spinner loading-spinner-${size} ${className}`}>
      <div className="spinner-circle"></div>
    </div>
  );
};

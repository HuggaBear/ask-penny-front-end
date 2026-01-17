/**
 * Input Component
 *
 * Text input with error states and helper text
 */

import React from 'react';
import './Input.css';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
  isInvalid?: boolean;
  inputSize?: InputSize;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  errorText,
  isInvalid = false,
  inputSize = 'md',
  fullWidth = false,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = isInvalid || !!errorText;

  const inputClasses = [
    'input',
    `input-${inputSize}`,
    fullWidth ? 'input-full-width' : '',
    hasError ? 'input-error' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`input-wrapper ${fullWidth ? 'input-wrapper-full-width' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={inputClasses}
        aria-invalid={hasError}
        aria-describedby={
          hasError
            ? `${inputId}-error`
            : helperText
            ? `${inputId}-helper`
            : undefined
        }
        {...props}
      />
      {hasError && errorText && (
        <span id={`${inputId}-error`} className="input-error-text">
          {errorText}
        </span>
      )}
      {!hasError && helperText && (
        <span id={`${inputId}-helper`} className="input-helper-text">
          {helperText}
        </span>
      )}
    </div>
  );
};

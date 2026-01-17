/**
 * Textarea Component
 *
 * Multi-line text input with auto-resize option
 */

import React, { useEffect, useRef } from 'react';
import './Textarea.css';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
  isInvalid?: boolean;
  fullWidth?: boolean;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  helperText,
  errorText,
  isInvalid = false,
  fullWidth = false,
  autoResize = false,
  minRows = 3,
  maxRows = 10,
  className = '',
  id,
  onChange,
  value,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = isInvalid || !!errorText;

  const textareaClasses = [
    'textarea',
    fullWidth ? 'textarea-full-width' : '',
    hasError ? 'textarea-error' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Auto-resize functionality
  useEffect(() => {
    if (autoResize && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
      const minHeight = lineHeight * minRows;
      const maxHeight = lineHeight * maxRows;
      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
      textarea.style.height = `${newHeight}px`;
    }
  }, [value, autoResize, minRows, maxRows]);

  return (
    <div className={`textarea-wrapper ${fullWidth ? 'textarea-wrapper-full-width' : ''}`}>
      {label && (
        <label htmlFor={textareaId} className="textarea-label">
          {label}
        </label>
      )}
      <textarea
        ref={textareaRef}
        id={textareaId}
        className={textareaClasses}
        rows={autoResize ? undefined : minRows}
        aria-invalid={hasError}
        aria-describedby={
          hasError
            ? `${textareaId}-error`
            : helperText
            ? `${textareaId}-helper`
            : undefined
        }
        onChange={onChange}
        value={value}
        {...props}
      />
      {hasError && errorText && (
        <span id={`${textareaId}-error`} className="textarea-error-text">
          {errorText}
        </span>
      )}
      {!hasError && helperText && (
        <span id={`${textareaId}-helper`} className="textarea-helper-text">
          {helperText}
        </span>
      )}
    </div>
  );
};

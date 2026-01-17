/**
 * Modal Component
 *
 * Dialog overlay for focused interactions
 */

import React, { useEffect } from 'react';
import './Modal.css';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: ModalSize;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  children,
}) => {
  // Handle ESC key press
  useEffect(() => {
    if (!closeOnEsc || !isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeOnEsc, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeOnOverlayClick ? onClose : undefined}>
      <div
        className={`modal modal-${size}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {title && (
          <div className="modal-header">
            <h2 id="modal-title" className="modal-title">
              {title}
            </h2>
            <button
              className="modal-close-button"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

// Modal subcomponents for better structure
export const ModalHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="modal-header">{children}</div>
);

export const ModalBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="modal-body">{children}</div>
);

export const ModalFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="modal-footer">{children}</div>
);

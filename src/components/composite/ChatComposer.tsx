/**
 * ChatComposer Component
 *
 * Message input with send button and keyboard shortcuts
 * Uses assistant-ui Composer for message submission
 */

import React from 'react';
import { Composer } from '@assistant-ui/react';
import { Button } from '../primitives';
import './ChatComposer.css';

export interface ChatComposerProps {
  className?: string;
  placeholder?: string;
}

export const ChatComposer: React.FC<ChatComposerProps> = ({
  className = '',
  placeholder = 'Type your message... (Shift+Enter for new line)',
}) => {
  return (
    <div className={`chat-composer ${className}`}>
      <Composer.Root className="chat-composer-root">
        <Composer.Input
          className="chat-composer-input"
          placeholder={placeholder}
          rows={1}
          autoFocus
        />
        <div className="chat-composer-actions">
          <div className="chat-composer-hint">
            Press <kbd>Enter</kbd> to send, <kbd>Shift+Enter</kbd> for new line
          </div>
          <Composer.Send asChild>
            <Button variant="primary" size="md">
              Send
            </Button>
          </Composer.Send>
        </div>
      </Composer.Root>
    </div>
  );
};

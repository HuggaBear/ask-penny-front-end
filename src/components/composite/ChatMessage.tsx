/**
 * ChatMessage Component
 *
 * Individual message display with avatar, content, and actions
 * Integrates with assistant-ui for message rendering
 */

import React from 'react';
import { Avatar } from '../primitives';
import './ChatMessage.css';

export interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  userName?: string;
  onCopy?: () => void;
  onThumbsUp?: () => void;
  onThumbsDown?: () => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  role,
  content,
  timestamp,
  userName = 'You',
  onCopy,
  onThumbsUp,
  onThumbsDown,
}) => {
  const isUser = role === 'user';
  const displayName = isUser ? userName : 'Ask Penny AI';

  const formatTimestamp = (timestamp?: string): string => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    onCopy?.();
  };

  return (
    <div className={`chat-message chat-message-${role}`}>
      <div className="chat-message-avatar">
        <Avatar
          name={displayName}
          role={role}
          size="md"
        />
      </div>

      <div className="chat-message-content-wrapper">
        <div className="chat-message-header">
          <span className="chat-message-name">{displayName}</span>
          {timestamp && (
            <span className="chat-message-timestamp">
              {formatTimestamp(timestamp)}
            </span>
          )}
        </div>

        <div className="chat-message-content">
          {content}
        </div>

        {!isUser && (
          <div className="chat-message-actions">
            <button
              className="chat-message-action-btn"
              onClick={handleCopy}
              title="Copy message"
            >
              📋
            </button>
            <button
              className="chat-message-action-btn"
              onClick={onThumbsUp}
              title="Good response"
            >
              👍
            </button>
            <button
              className="chat-message-action-btn"
              onClick={onThumbsDown}
              title="Bad response"
            >
              👎
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

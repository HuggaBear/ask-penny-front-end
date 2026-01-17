/**
 * ChatTranscript Component
 *
 * Displays the full conversation history with auto-scroll
 * Uses assistant-ui Thread component for message management
 */

import React, { useEffect, useRef } from 'react';
import { Thread } from '@assistant-ui/react';
import { ChatMessage } from './ChatMessage';
import './ChatTranscript.css';

export interface ChatTranscriptProps {
  className?: string;
}

export const ChatTranscript: React.FC<ChatTranscriptProps> = ({ className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  });

  return (
    <div className={`chat-transcript ${className}`} ref={scrollRef}>
      <Thread.Root>
        <Thread.Viewport className="chat-transcript-viewport">
          <Thread.Messages
            components={{
              UserMessage: ({ message }) => (
                <ChatMessage
                  role="user"
                  content={
                    message.content
                      .filter((c) => c.type === 'text')
                      .map((c) => (c as any).text)
                      .join('\n')
                  }
                  timestamp={message.createdAt?.toISOString()}
                />
              ),
              AssistantMessage: ({ message }) => (
                <ChatMessage
                  role="assistant"
                  content={
                    message.content
                      .filter((c) => c.type === 'text')
                      .map((c) => (c as any).text)
                      .join('\n')
                  }
                  timestamp={message.createdAt?.toISOString()}
                />
              ),
            }}
          />

          {/* Empty state when no messages */}
          <Thread.Empty>
            <div className="chat-transcript-empty">
              <div className="chat-transcript-empty-icon">💬</div>
              <h3 className="chat-transcript-empty-title">Start a Conversation</h3>
              <p className="chat-transcript-empty-text">
                Ask me about STAR methodology, DOUBTS sales process, or get coaching on your deals.
              </p>
            </div>
          </Thread.Empty>
        </Thread.Viewport>

        {/* Scroll to bottom button */}
        <Thread.ScrollToBottom className="chat-transcript-scroll-button">
          ↓
        </Thread.ScrollToBottom>
      </Thread.Root>
    </div>
  );
};

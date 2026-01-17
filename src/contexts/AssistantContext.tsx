/**
 * Assistant Context
 *
 * Provides assistant-ui runtime for chat functionality
 * Week 1-2: Uses mock runtime with hardcoded responses
 * Week 3: Will be replaced with real Bedrock integration
 */

import React from 'react';
import { useLocalRuntime, AssistantRuntimeProvider } from '@assistant-ui/react';
import type { ChatModelAdapter } from '@assistant-ui/react';

// Mock chat model adapter for development
const mockChatAdapter: ChatModelAdapter = {
  async run({ messages, abortSignal }) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    const userText = lastMessage?.content?.[0]?.type === 'text'
      ? lastMessage.content[0].text
      : '';

    // Generate mock response based on keywords
    let responseText = "I'm Ask Penny AI, your sales coaching assistant. I can help you with STAR methodology, DOUBTS sales process, and other coaching frameworks. What would you like to know?";

    if (userText.toLowerCase().includes('star')) {
      responseText = "STAR stands for:\n\n**S**ituation - Understand the customer's current state\n**T**ension - Identify pain points and challenges\n**A**ffection - Build emotional connection and trust\n**R**esolution - Present your solution\n\nWould you like me to elaborate on any of these steps?";
    } else if (userText.toLowerCase().includes('doubts')) {
      responseText = "DOUBTS is our sales process framework:\n\n**D**efine - Define the opportunity\n**O**utline - Outline the approach\n**U**ncover - Uncover needs and pain points\n**B**uild - Build the solution\n**T**est - Test the proposal\n**S**ecure - Secure the commitment\n\nWhich stage would you like to explore?";
    } else if (userText.toLowerCase().includes('help') || userText.toLowerCase().includes('what can you do')) {
      responseText = "I can help you with:\n\n• **STAR Methodology** - Consultative selling approach\n• **DOUBTS Process** - Complete sales framework\n• **Negotiation Tactics** - STAR Negotiator framework\n• **Account Management** - Relationship strategies\n• **Deal Coaching** - Analyze your specific deals\n\nWhat would you like to focus on?";
    }

    return {
      content: [
        {
          type: 'text' as const,
          text: responseText,
        },
      ],
    };
  },
};

interface AssistantProviderProps {
  children: React.ReactNode;
}

export const AssistantProvider: React.FC<AssistantProviderProps> = ({ children }) => {
  const runtime = useLocalRuntime(mockChatAdapter);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
};

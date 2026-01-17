import { useState } from 'react';
import './App.css';
import { brandColors } from './theme';
import { Button, Card, CardHeader, CardBody, Input, Avatar, Badge } from './components/primitives';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user' as const, content: message }];
    setMessages(newMessages);
    setMessage('');

    // Simulate AI response after 1 second
    setTimeout(() => {
      let response = "I'm Ask Penny AI, your sales coaching assistant. How can I help you today?";

      if (message.toLowerCase().includes('star')) {
        response = "**STAR Methodology:**\n\n**S**ituation - Understand the customer's current state\n**T**ension - Identify pain points and challenges\n**A**ffection - Build emotional connection and trust\n**R**esolution - Present your solution";
      } else if (message.toLowerCase().includes('doubts')) {
        response = "**DOUBTS Sales Process:**\n\n**D**efine - Define the opportunity\n**O**utline - Outline the approach\n**U**ncover - Uncover needs\n**B**uild - Build the solution\n**T**est - Test the proposal\n**S**ecure - Secure commitment";
      }

      setMessages([...newMessages, { role: 'assistant', content: response }]);
    }, 1000);
  };

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>Ask Penny AI</h1>
          <p className="subtitle">Sales Coaching Assistant - Demo</p>
          <p className="status">Week 1 Day 3 Complete ✅ Chat Interface Built</p>
        </header>

        {/* Chat Interface Demo */}
        <Card padding="none" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
          <CardHeader style={{ padding: '16px 24px', borderBottom: '1px solid var(--brand-border)' }}>
            <h2 style={{ margin: 0, fontSize: '18px' }}>Chat with Ask Penny</h2>
            <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--brand-textLight)' }}>
              Try asking about STAR methodology or DOUBTS process
            </p>
          </CardHeader>

          {/* Messages Area */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {messages.length === 0 ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                color: 'var(--brand-textMuted)'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
                <h3 style={{ margin: 0, fontSize: '20px', color: 'var(--brand-charcoal)' }}>Start a Conversation</h3>
                <p style={{ margin: '8px 0 0', fontSize: '16px' }}>
                  Ask me about STAR methodology, DOUBTS sales process, or get coaching on your deals.
                </p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start'
                }}>
                  <Avatar
                    name={msg.role === 'user' ? 'You' : 'Penny'}
                    role={msg.role}
                    size="md"
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--brand-charcoal)',
                      marginBottom: '4px'
                    }}>
                      {msg.role === 'user' ? 'You' : 'Ask Penny AI'}
                    </div>
                    <div style={{
                      fontSize: '16px',
                      lineHeight: '1.65',
                      color: 'var(--brand-text)',
                      whiteSpace: 'pre-wrap',
                      ...(msg.role === 'user' ? {
                        backgroundColor: 'var(--brand-userMessage)',
                        padding: '12px 16px',
                        borderRadius: '12px 12px 4px 12px',
                        display: 'inline-block',
                        maxWidth: '80%'
                      } : {})
                    }}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input Area */}
          <div style={{
            padding: '16px',
            borderTop: '1px solid var(--brand-border)',
            backgroundColor: 'white'
          }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
              <Input
                placeholder="Type your message... (press Enter to send)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                fullWidth
              />
              <Button onClick={handleSend} disabled={!message.trim()}>
                Send
              </Button>
            </div>
            <div style={{
              fontSize: '12px',
              color: 'var(--brand-textMuted)',
              marginTop: '8px'
            }}>
              Press <kbd style={{
                padding: '2px 6px',
                backgroundColor: 'var(--brand-bgDark)',
                border: '1px solid var(--brand-border)',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '11px'
              }}>Enter</kbd> to send, <kbd style={{
                padding: '2px 6px',
                backgroundColor: 'var(--brand-bgDark)',
                border: '1px solid var(--brand-border)',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '11px'
              }}>Shift+Enter</kbd> for new line
            </div>
          </div>
        </Card>

        {/* Quick Start Examples */}
        <Card style={{ marginTop: '24px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Quick Start Examples</h3>
          <p style={{ fontSize: '14px', color: 'var(--brand-textLight)', marginBottom: '16px' }}>
            Try these example questions in the chat above:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{
              padding: '12px',
              backgroundColor: 'var(--brand-bgDark)',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
            onClick={() => setMessage("What is STAR methodology?")}>
              <strong>Example 1:</strong> "What is STAR methodology?"
            </div>
            <div style={{
              padding: '12px',
              backgroundColor: 'var(--brand-bgDark)',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
            onClick={() => setMessage("Tell me about the DOUBTS sales process")}>
              <strong>Example 2:</strong> "Tell me about the DOUBTS sales process"
            </div>
            <div style={{
              padding: '12px',
              backgroundColor: 'var(--brand-bgDark)',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
            onClick={() => setMessage("What can you help me with?")}>
              <strong>Example 3:</strong> "What can you help me with?"
            </div>
          </div>
        </Card>

        {/* Progress Card */}
        <Card style={{ backgroundColor: 'rgba(233, 70, 41, 0.05)', border: '1px solid rgba(233, 70, 41, 0.2)', marginTop: '24px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>🚀 Week 1 Day 3 Complete</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>✅ Chat interface working (simple version)</li>
            <li>✅ Message sending and receiving</li>
            <li>✅ Keyword-based responses (STAR, DOUBTS)</li>
            <li>✅ Avatar display and message styling</li>
            <li>✅ Empty state with helpful prompt</li>
            <li>✅ Keyboard shortcuts (Enter to send)</li>
            <li style={{ marginTop: '8px' }}><strong>Next: Week 1 Day 4 - Build sidebar and layout components</strong></li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default App;

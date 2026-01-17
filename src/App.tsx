import './App.css';
import { AssistantProvider } from './contexts/AssistantContext';
import { ChatTranscript, ChatComposer } from './components/composite';
import { Card, CardHeader } from './components/primitives';

function App() {
  return (
    <AssistantProvider>
      <div className="app">
        <div className="container">
          {/* Header */}
          <header className="header">
            <h1>Ask Penny AI</h1>
            <p className="subtitle">Sales Coaching Assistant</p>
            <p className="status">Week 1 Day 3 Complete ✅ Chat Interface Built</p>
          </header>

          {/* Chat Interface Demo */}
          <Card padding="none" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
            <CardHeader style={{ padding: '16px 24px' }}>
              <h2 style={{ margin: 0, fontSize: '18px' }}>Chat with Ask Penny</h2>
              <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--brand-textLight)' }}>
                Try asking about STAR methodology, DOUBTS process, or request coaching help
              </p>
            </CardHeader>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <ChatTranscript />
              <ChatComposer />
            </div>
          </Card>

          {/* Info Card */}
          <Card style={{ backgroundColor: 'rgba(233, 70, 41, 0.05)', border: '1px solid rgba(233, 70, 41, 0.2)', marginTop: '24px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>🚀 Week 1 Day 3 Complete</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>✅ Assistant-ui runtime configured with mock adapter</li>
              <li>✅ ChatMessage component with avatars and actions</li>
              <li>✅ ChatTranscript with Thread integration</li>
              <li>✅ ChatComposer with Composer integration</li>
              <li>✅ Auto-scroll and keyboard shortcuts (Enter to send)</li>
              <li>✅ Empty state and loading states</li>
              <li>✅ Mock responses for STAR and DOUBTS keywords</li>
              <li><strong>Try it:</strong> Type "What is STAR?" or "Tell me about DOUBTS" above!</li>
              <li style={{ marginTop: '8px' }}><strong>Next: Week 1 Day 4 - Build sidebar and layout components</strong></li>
            </ul>
          </Card>

          {/* Quick Start Examples */}
          <Card style={{ marginTop: '24px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Quick Start Examples</h3>
            <p style={{ fontSize: '14px', color: 'var(--brand-textLight)', marginBottom: '16px' }}>
              Try these example questions in the chat above:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--brand-bgDark)', borderRadius: '8px', fontSize: '14px' }}>
                <strong>Example 1:</strong> "What is STAR methodology?"
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--brand-bgDark)', borderRadius: '8px', fontSize: '14px' }}>
                <strong>Example 2:</strong> "Tell me about the DOUBTS sales process"
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--brand-bgDark)', borderRadius: '8px', fontSize: '14px' }}>
                <strong>Example 3:</strong> "What can you help me with?"
              </div>
            </div>
          </Card>

          {/* Features List */}
          <Card style={{ marginTop: '24px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Chat Features</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px', color: 'var(--brand-charcoal)' }}>
                  ⌨️ Keyboard Shortcuts
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--brand-textLight)', margin: 0 }}>
                  Enter to send, Shift+Enter for new line
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px', color: 'var(--brand-charcoal)' }}>
                  📋 Message Actions
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--brand-textLight)', margin: 0 }}>
                  Copy, thumbs up/down on AI responses
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px', color: 'var(--brand-charcoal)' }}>
                  🔄 Auto-Scroll
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--brand-textLight)', margin: 0 }}>
                  Automatically scrolls to newest messages
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px', color: 'var(--brand-charcoal)' }}>
                  🤖 Smart Responses
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--brand-textLight)', margin: 0 }}>
                  Context-aware replies based on keywords
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AssistantProvider>
  );
}

export default App;

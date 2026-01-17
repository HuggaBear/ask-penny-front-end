import { useState } from 'react';
import './App.css';
import { Button, Input, Avatar, TypingIndicator } from './components/primitives';
import { AppLayout } from './components/layouts/AppLayout';
import { Sidebar } from './components/layouts/Sidebar';
import { KnowledgeBaseIndicator } from './components/composite/KnowledgeBaseIndicator';
import { ProjectFilesSection } from './components/composite/ProjectFilesSection';
import type { Playbook, UserRole, ProjectFile } from './types';
import { MOCK_PLAYBOOKS, MOCK_PROJECT_FILES, MOCK_USER_ROLE } from './data/mockData';

function App() {
  // State management
  const [currentPlaybook, setCurrentPlaybook] = useState<Playbook | null>(MOCK_PLAYBOOKS[0]);
  const [playbooks] = useState<Playbook[]>(MOCK_PLAYBOOKS);
  const [userRole, setUserRole] = useState<UserRole>(MOCK_USER_ROLE);
  const [files, setFiles] = useState<ProjectFile[]>(MOCK_PROJECT_FILES);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: `Welcome to Ask Penny AI! 👋

I'm your sales coaching assistant. I can help you with:
- **STAR Methodology** - Situation, Tension, Affection, Resolution
- **DOUBTS Sales Process** - Define, Outline, Uncover, Build, Test, Secure
- **Deal Strategy** - Analyzing and planning your sales opportunities
- **Coaching Feedback** - Improving your sales conversations

Currently viewing: **${MOCK_PLAYBOOKS[0].title}** (${MOCK_PLAYBOOKS[0].client})

How can I help you today?`
    }
  ]);

  // Event handlers
  const handleSend = () => {
    if (!message.trim() || isLoading) return;

    // Add user message
    const newMessages = [...messages, { role: 'user' as const, content: message }];
    setMessages(newMessages);
    setMessage('');
    setIsLoading(true);

    // Simulate AI response after 1 second
    setTimeout(() => {
      let response = "I'm Ask Penny AI, your sales coaching assistant. How can I help you with your deal?";

      if (message.toLowerCase().includes('star')) {
        response = `**STAR Methodology for Sales:**

**S**ituation - Understand the customer's current state
- What systems are they using?
- What's their business context?
- Who are the stakeholders?

**T**ension - Identify pain points and challenges
- What problems are they facing?
- What's the cost of inaction?
- What's the urgency?

**A**ffection - Build emotional connection and trust
- Show genuine interest
- Listen actively
- Demonstrate expertise

**R**esolution - Present your solution
- How does your solution address their tension?
- What outcomes can you deliver?
- What's the next step?`;
      } else if (message.toLowerCase().includes('doubts')) {
        response = `**DOUBTS Sales Process:**

**D**efine - Define the opportunity
- Qualify the lead
- Understand the scope

**O**utline - Outline the approach
- Map stakeholders
- Plan discovery

**U**ncover - Uncover needs
- Ask tension questions
- Identify pain points

**B**uild - Build the solution
- Customize your pitch
- Address objections

**T**est - Test the proposal
- Get feedback
- Refine your offer

**S**ecure - Secure commitment
- Close the deal
- Plan implementation`;
      } else if (message.toLowerCase().includes('help') || message.toLowerCase().includes('what can you')) {
        response = `I can help you with:

📊 **Deal Analysis** - Review your sales opportunities and provide strategic guidance

💡 **Coaching Frameworks** - Teach you STAR, DOUBTS, SLMA, and Negotiator methodologies

❓ **Question Preparation** - Craft powerful discovery and tension questions

📝 **Playbook Generation** - Create customized coaching playbooks for your deals

🎯 **Action Planning** - Identify next steps and action items

What would you like to focus on for **${currentPlaybook?.title}**?`;
      }

      setMessages([...newMessages, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const handlePlaybookClick = (playbook: Playbook) => {
    setCurrentPlaybook(playbook);
    setMessages([{
      role: 'assistant',
      content: `Switched to **${playbook.title}** (${playbook.client}).

This is a ${playbook.dealStage} stage opportunity. How can I help you prepare?`
    }]);
  };

  const handleNewPlaybook = () => {
    alert('New Playbook feature coming in Week 2! For now, using mock data.');
  };

  const handleRoleChange = (role: UserRole) => {
    setUserRole(role);
  };

  const handleFileUpload = (uploadedFiles: File[]) => {
    // Mock file upload - just add to list
    const newFiles: ProjectFile[] = uploadedFiles.map((file, idx) => ({
      id: `file-${Date.now()}-${idx}`,
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toISOString(),
      uploadedBy: 'Jonathan',
      status: 'ready',
    }));
    setFiles([...files, ...newFiles]);
  };

  const handleFileDelete = (fileId: string) => {
    setFiles(files.filter(f => f.id !== fileId));
  };

  // Sidebar component
  const sidebar = (
    <Sidebar
      playbooks={playbooks}
      activePlaybookId={currentPlaybook?.id}
      currentRole={userRole}
      onPlaybookClick={handlePlaybookClick}
      onNewPlaybook={handleNewPlaybook}
      onRoleChange={handleRoleChange}
    />
  );

  // Main chat area component
  const mainArea = (
    <div className="main-chat-area">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-header-content">
          <h2 className="chat-header-title">
            {currentPlaybook?.title || 'Ask Penny AI'}
          </h2>
          {currentPlaybook && (
            <p className="chat-header-subtitle">
              {currentPlaybook.client} • {currentPlaybook.dealStage}
            </p>
          )}
        </div>
      </div>

      {/* Messages Area */}
      <div className="messages-area">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message message-${msg.role}`}>
            <Avatar
              name={msg.role === 'user' ? 'You' : 'Penny'}
              role={msg.role}
              size="md"
            />
            <div className="message-content">
              <div className="message-name">
                {msg.role === 'user' ? 'You' : 'Ask Penny AI'}
              </div>
              <div className="message-text">
                {msg.content}
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isLoading && (
          <div className="message message-assistant">
            <Avatar name="Penny" role="assistant" size="md" />
            <div className="message-content">
              <div className="message-name">Ask Penny AI</div>
              <TypingIndicator />
            </div>
          </div>
        )}
      </div>

      {/* Knowledge Base Indicator */}
      <div className="kb-indicator-container">
        <KnowledgeBaseIndicator
          currentRole={userRole}
          uploadedFilesCount={files.length}
        />
      </div>

      {/* Project Files Section */}
      <div className="project-files-container">
        <ProjectFilesSection
          files={files}
          onUpload={handleFileUpload}
          onDelete={handleFileDelete}
        />
      </div>

      {/* Input Area */}
      <div className="input-area">
        <div className="input-container">
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
          <Button onClick={handleSend} disabled={!message.trim() || isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </div>
        <div className="input-hint">
          Press <kbd>Enter</kbd> to send, <kbd>Shift+Enter</kbd> for new line
        </div>
      </div>
    </div>
  );

  return <AppLayout sidebar={sidebar} main={mainArea} />;
}

export default App;

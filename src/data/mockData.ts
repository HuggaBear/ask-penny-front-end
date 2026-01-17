/**
 * Mock Data for Ask Penny MVP
 *
 * Week 1-2: Use this hardcoded data for development
 * Week 3: Replace with real API calls to Bedrock/DynamoDB
 */

import type { Playbook, Message, ProjectFile } from '../types';

/**
 * Mock Playbooks - Recent sales coaching sessions
 */
export const MOCK_PLAYBOOKS: Playbook[] = [
  {
    id: 'pb-1',
    title: 'Discovery Call - ACME Studios',
    client: 'ACME Studios',
    dealStage: 'discovery',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-17T14:30:00Z',
    description: 'Initial discovery call to understand client needs and pain points',
  },
  {
    id: 'pb-2',
    title: 'Qualification - TechCorp Enterprise',
    client: 'TechCorp',
    dealStage: 'qualification',
    createdAt: '2026-01-14T09:00:00Z',
    updatedAt: '2026-01-16T11:20:00Z',
    description: 'Qualifying budget authority and decision timeline',
  },
  {
    id: 'pb-3',
    title: 'Proposal Review - GlobalSales Inc',
    client: 'GlobalSales Inc',
    dealStage: 'proposal',
    createdAt: '2026-01-12T15:30:00Z',
    updatedAt: '2026-01-15T16:45:00Z',
    description: 'Reviewing proposal with stakeholders',
  },
  {
    id: 'pb-4',
    title: 'Negotiation - MarketLeaders Co',
    client: 'MarketLeaders Co',
    dealStage: 'negotiation',
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-01-14T10:00:00Z',
    description: 'Final pricing and terms negotiation',
  },
  {
    id: 'pb-5',
    title: 'Closed Deal - Innovate Systems',
    client: 'Innovate Systems',
    dealStage: 'closed-won',
    createdAt: '2026-01-08T13:00:00Z',
    updatedAt: '2026-01-12T09:30:00Z',
    description: 'Successfully closed enterprise deal',
  },
  {
    id: 'pb-6',
    title: 'Lost Deal Analysis - RetailChain',
    client: 'RetailChain',
    dealStage: 'closed-lost',
    createdAt: '2026-01-05T11:00:00Z',
    updatedAt: '2026-01-10T14:00:00Z',
    description: 'Analysis of lost deal to competitor',
  },
];

/**
 * Mock Messages - Chat conversation with Ask Penny AI
 */
export const MOCK_MESSAGES: Message[] = [
  {
    id: 'msg-1',
    role: 'user',
    content: 'Can you help me prepare for my discovery call with ACME Studios?',
    timestamp: '2026-01-17T14:00:00Z',
  },
  {
    id: 'msg-2',
    role: 'assistant',
    content: `I'd be happy to help you prepare for your discovery call with ACME Studios! Let me share some guidance from the **STAR Methodology**.

## Discovery Call Preparation

When entering a discovery call, focus on these four key areas:

### 1. **Situation** - Understanding Their Current State
- What systems are they currently using?
- How are they achieving their goals today?
- What's their organizational structure?

### 2. **Tension** - Identifying Pain Points
- What challenges are they facing?
- What's preventing them from reaching their goals?
- What's the cost of inaction?

### 3. **Affection** - Building Connection
- Show genuine interest in their business
- Ask open-ended questions
- Listen actively and take notes

### 4. **Resolution** - Positioning Your Solution
- How can your solution address their tension?
- What outcomes can you deliver?
- What's the next step?

Would you like me to provide specific questions you can ask during the discovery call?`,
    timestamp: '2026-01-17T14:00:15Z',
    resources: [
      {
        id: 'res-1',
        title: 'STAR Methodology - Discovery Phase',
        framework: 'STAR',
        excerpt: 'The Situation phase focuses on understanding the client\'s current state...',
      },
      {
        id: 'res-2',
        title: 'Tension Discovery Questions',
        framework: 'STAR',
        excerpt: 'Effective tension questions reveal underlying pain points that drive buying decisions...',
      },
    ],
  },
  {
    id: 'msg-3',
    role: 'user',
    content: 'Yes, can you give me some specific questions for the Tension phase?',
    timestamp: '2026-01-17T14:02:00Z',
  },
  {
    id: 'msg-4',
    role: 'assistant',
    content: `Great question! Here are **powerful tension discovery questions** you can use:

## Tension Discovery Questions

### Impact Questions
- "What happens if this problem isn't solved in the next 6 months?"
- "How is this issue affecting your team's productivity?"
- "What's the financial impact of the current challenges?"

### Prioritization Questions
- "Of all the challenges we've discussed, which one keeps you up at night?"
- "If you could solve one problem today, what would it be?"
- "What's preventing you from achieving [their stated goal]?"

### Urgency Questions
- "Why are you looking to solve this now?"
- "What's changed recently that's made this a priority?"
- "What's your timeline for addressing this?"

### Consequence Questions
- "What are the downstream effects of this issue?"
- "Who else in the organization is affected by this?"
- "What opportunities are you missing because of this?"

## Key Tips
- Ask one question at a time
- Use silence to let them think
- Follow up with "Tell me more about that"
- Take detailed notes on their pain points

Remember: The goal is to uncover the **real cost** of not solving the problem. This creates urgency and justifies your solution.`,
    timestamp: '2026-01-17T14:02:20Z',
    resources: [
      {
        id: 'res-3',
        title: 'Tension Discovery Playbook',
        framework: 'STAR',
        excerpt: 'Tension questions reveal the gap between current state and desired state...',
      },
    ],
  },
];

/**
 * Mock Project Files - Uploaded context documents
 */
export const MOCK_PROJECT_FILES: ProjectFile[] = [
  {
    id: 'file-1',
    name: 'ACME_Discovery_Brief.pdf',
    size: 245678, // ~246 KB
    type: 'application/pdf',
    uploadedAt: '2026-01-17T13:00:00Z',
    uploadedBy: 'Jonathan',
    status: 'ready',
  },
  {
    id: 'file-2',
    name: 'Company_Overview_ACME.docx',
    size: 1234567, // ~1.2 MB
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    uploadedAt: '2026-01-17T13:15:00Z',
    uploadedBy: 'Jonathan',
    status: 'ready',
  },
  {
    id: 'file-3',
    name: 'Previous_Sales_Call_Notes.txt',
    size: 15234, // ~15 KB
    type: 'text/plain',
    uploadedAt: '2026-01-17T13:30:00Z',
    uploadedBy: 'Jonathan',
    status: 'ready',
  },
];

/**
 * Mock User Role - Current logged-in user
 */
export const MOCK_USER_ROLE = 'coach' as const;

/**
 * Helper function to get playbook by ID
 */
export const getPlaybookById = (id: string): Playbook | undefined => {
  return MOCK_PLAYBOOKS.find((pb) => pb.id === id);
};

/**
 * Helper function to create a new playbook (mock)
 */
export const createMockPlaybook = (title: string, client: string): Playbook => {
  return {
    id: `pb-${Date.now()}`,
    title,
    client,
    dealStage: 'discovery',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

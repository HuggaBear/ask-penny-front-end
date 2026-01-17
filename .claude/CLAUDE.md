# Ask Penny Front-End - Project Guidelines

> Project-specific Claude Code standards and development guidelines
>
> **Project**: Ask Penny AI Front-End MVP
> **Tech Stack**: React + TypeScript + Vite + Chakra UI + assistant-ui
> **Timeline**: 4 weeks (2 weeks FE, 1 week integration, 1 week polish)
> **Status**: Week 1 Day 1 Complete ✅
> **Last Updated**: 17 Jan 2026

---

## Project Context

### What This Is

Ask Penny AI is an AI-powered coaching assistant for sales professionals. This front-end application provides:
- Real-time chat interface for coaching conversations
- Playbook management for deal-specific coaching
- 3-tier Knowledge Base visualization (SalesStar IP, Org KB, Project files)
- File upload for project context
- Role-based UI (Coach, Manager, Rep)

### What We're Building (MVP Scope)

**In Scope**:
- ✅ React + TypeScript front-end with Chakra UI
- ✅ assistant-ui for AI chat components
- ✅ Real AWS Bedrock Knowledge Base integration (NOT mocked)
- ✅ Real RAG retrieval and embeddings
- ✅ File upload UI + S3 integration
- ✅ 3-tier KB content management
- ✅ CloudFront + S3 deployment

**Out of Scope** (Production Phase):
- ❌ GoHighLevel iframe embedding
- ❌ Voice mode (STT/TTS)
- ❌ AWS Cognito authentication
- ❌ Action Points tracking
- ❌ Insights dashboard
- ❌ Mobile responsive design

---

## Quick Start

### First Time Setup
```bash
# Clone repository (already done)
git clone https://github.com/HuggaBear/ask-penny-front-end.git
cd ask-penny-front-end

# Install dependencies (already done)
npm install

# Start dev server
npm run dev
```

### Daily Development Workflow
```bash
# 1. Pull latest changes
git pull origin main

# 2. Start dev server
npm run dev

# 3. Make changes in Cursor IDE

# 4. Test locally
# Open http://localhost:5173

# 5. Commit and push
git add .
git commit -m "Descriptive message"
git push origin main
```

---

## Repository Setup (Week 1 Day 1) ✅

### What Was Completed

**Repository**:
- GitHub: https://github.com/HuggaBear/ask-penny-front-end
- Initialized with Vite + React + TypeScript template

**Dependencies Installed**:
```json
{
  "@chakra-ui/react": "^latest",
  "@emotion/react": "^latest",
  "@emotion/styled": "^latest",
  "framer-motion": "^latest",
  "@assistant-ui/react": "^latest",
  "react-icons": "^latest",
  "react-markdown": "^latest",
  "date-fns": "^latest"
}
```

**Project Structure Created**:
```
src/
├── components/
│   ├── primitives/      # Button, Input, Card, Avatar, Badge, Modal
│   ├── composite/        # ChatMessage, ChatTranscript, PlaybookList, KBIndicator
│   └── layouts/          # AppLayout, Sidebar, ChatHeader
├── contexts/             # AppContext, ChatContext
├── hooks/                # usePlaybooks, useChat, useKBLayers
├── theme/                # Chakra UI theme config
├── types/                # TypeScript interfaces
└── utils/                # Helper functions
```

**Configuration Files**:
- `.gitignore` - Updated with SalesStar security standards (no .env, no credentials)
- `README.md` - Comprehensive project documentation
- `.claude/CLAUDE.md` - This file

---

## Development Approach

### Week 1-2: Front-End Development (Hardcoded Data)

**Strategy**: Build complete UI with mock data first
- Use hardcoded arrays for playbooks, messages, files
- No backend calls yet
- Focus on component library and user experience
- Deploy to CloudFront for stakeholder preview

**Mock Data Location**: `src/data/mockData.ts`

**Example Mock Playbook**:
```typescript
export const MOCK_PLAYBOOKS: Playbook[] = [
  {
    id: '1',
    title: 'Discovery Call - ACME Studios',
    client: 'ACME Studios',
    dealStage: 'discovery',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-17T14:30:00Z',
  },
  // More playbooks...
];
```

### Week 3: Backend Integration (Parallo Coordination)

**When**: Late Jan / Early Feb when Parallo delivers AWS infrastructure

**Integration Points**:
1. Replace `MOCK_PLAYBOOKS` with API call to AppSync/DynamoDB
2. Connect chat to Bedrock Lambda function
3. Wire up file upload to S3
4. Integrate KB layer indicators with real Bedrock Knowledge Base

**Backend Deliverables** (from Parallo):
- AWS Bedrock Knowledge Base (3-tier setup)
- Lambda functions for chat API
- S3 bucket for file uploads
- AppSync GraphQL API
- DynamoDB tables

### Week 4: Polish & Deploy

**Final tasks**:
- Comprehensive testing (Playwright E2E)
- Accessibility audit (WCAG 2.1 AA)
- Performance optimization
- Coach feedback collection
- Production deployment

---

## Component Architecture

### Component Hierarchy

```
App (main.tsx)
└── AppLayout (2-column flex)
    ├── Sidebar (240px fixed width)
    │   ├── AppHeader
    │   ├── NewPlaybookButton
    │   ├── RecentPlaybooksList
    │   │   └── PlaybookCard (repeating)
    │   └── RoleSelector
    │
    └── MainChatArea (flex-grow)
        ├── ChatHeader
        ├── ChatTranscript (assistant-ui Thread)
        │   └── ChatMessage (repeating)
        │       ├── MessageContent (markdown)
        │       ├── MessageActions (copy, thumbs up/down)
        │       └── ReferencedResources
        ├── KnowledgeBaseIndicator
        │   ├── Layer1Indicator (SalesStar IP)
        │   ├── Layer2Indicator (Org KB)
        │   └── Layer3Indicator (Project files)
        ├── ProjectFilesSection
        │   ├── FileUpload
        │   └── FileList
        └── ChatComposer (assistant-ui Composer)
```

### Primitive Components (Week 1 Day 2)

**Chakra UI wrappers** (simple re-exports with custom styling):
- `Button.tsx` - Primary, secondary, ghost variants
- `Input.tsx` - Text input with error states
- `Textarea.tsx` - Multi-line input
- `Card.tsx` - Container with shadow and border
- `Avatar.tsx` - User/AI avatar
- `Badge.tsx` - Deal stage indicators
- `Modal.tsx` - Dialog overlays

**Pattern**:
```typescript
// src/components/primitives/Button.tsx
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

export const Button = (props: ButtonProps) => {
  return <ChakraButton colorScheme="brand" {...props} />;
};
```

### Composite Components (Week 1 Day 3-4)

**Complex, feature-specific components**:
- `ChatMessage.tsx` - User vs AI message with actions
- `ChatTranscript.tsx` - Message list with auto-scroll (uses assistant-ui Thread)
- `ChatComposer.tsx` - Input with keyboard shortcuts (uses assistant-ui Composer)
- `PlaybookCard.tsx` - Sidebar playbook item
- `PlaybookList.tsx` - Scrollable recent playbooks
- `KnowledgeBaseIndicator.tsx` - 3-tier KB visualization
- `FileUpload.tsx` - Drag-drop file upload
- `FileList.tsx` - Uploaded files with metadata

### Layout Components (Week 1 Day 4)

**Page structure**:
- `AppLayout.tsx` - 2-column flex container
- `Sidebar.tsx` - Left sidebar (240px)
- `ChatHeader.tsx` - Playbook title and actions

---

## Design System

### Theme Configuration

**File**: `src/theme/index.ts`

```typescript
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2B6CB0',  // Primary blue
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',
    },
    penny: {
      primary: '#2B6CB0',
      secondary: '#4A5568',
      bg: '#F7FAFC',
      bgDark: '#EDF2F7',
      text: '#2D3748',
      textLight: '#718096',
      border: '#E2E8F0',
    },
  },
  fonts: {
    heading: 'Inter, system-ui, -apple-system, sans-serif',
    body: 'Inter, system-ui, -apple-system, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
  },
  space: {
    px: '1px',
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
});
```

### Typography

**Fonts**: Use Inter font family (already in Vite template)

**Sizes**:
- Headings: 20px - 24px
- Body: 16px
- Small text: 14px
- Tiny text: 12px

**Weights**:
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

---

## TypeScript Types

**File**: `src/types/index.ts`

```typescript
export type DealStage =
  | 'discovery'
  | 'qualification'
  | 'proposal'
  | 'negotiation'
  | 'closed-won'
  | 'closed-lost';

export type UserRole = 'coach' | 'manager' | 'rep';

export interface Playbook {
  id: string;
  title: string;
  client: string;
  dealStage: DealStage;
  createdAt: string;  // ISO 8601
  updatedAt: string;  // ISO 8601
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;  // ISO 8601
  resources?: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  framework: string;  // e.g., "STAR", "DOUBTS"
  excerpt: string;
}

export interface ProjectFile {
  id: string;
  name: string;
  size: number;
  uploadedAt: string;  // ISO 8601
  url?: string;  // S3 URL (Week 3)
}

export interface KBLayer {
  id: number;  // 1, 2, or 3
  name: string;  // "SalesStar IP", "Org KB", "Project Files"
  active: boolean;
  description: string;
}
```

---

## Key Libraries

### assistant-ui

**Purpose**: AI chat components with streaming support

**Setup**: `src/contexts/AssistantContext.tsx`
```typescript
import { AssistantRuntimeProvider } from '@assistant-ui/react';

export const AssistantProvider = ({ children }) => {
  const runtime = useLocalRuntime();  // Week 1-2: local mock
  // Week 3: replace with real Bedrock runtime

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
};
```

**Components to use**:
- `<Thread />` - Message list
- `<Composer />` - Input field
- `useThreadContext()` - Access messages
- `useComposerContext()` - Send messages

**Documentation**: https://www.assistant-ui.com/docs

### Chakra UI

**Purpose**: Component library for rapid development

**Setup**: Already configured in `main.tsx`
```typescript
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

<ChakraProvider theme={theme}>
  <App />
</ChakraProvider>
```

**Most Used Components**:
- `Box, Flex, VStack, HStack` - Layout
- `Button, Input, Textarea` - Forms
- `Text, Heading` - Typography
- `Avatar, Badge, Icon` - UI elements
- `Modal, Drawer, Menu` - Overlays

**Documentation**: https://chakra-ui.com/docs

---

## State Management

### React Context

**Contexts to create**:

#### AppContext
```typescript
// src/contexts/AppContext.tsx
interface AppContextValue {
  currentPlaybook: Playbook | null;
  setCurrentPlaybook: (playbook: Playbook) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  kbLayers: KBLayer[];
}
```

#### ChatContext
```typescript
// src/contexts/ChatContext.tsx
interface ChatContextValue {
  messages: Message[];
  addMessage: (message: Message) => void;
  isTyping: boolean;
}
```

### Custom Hooks

**Hooks to create**:
```typescript
// src/hooks/usePlaybooks.ts
export const usePlaybooks = () => {
  const [playbooks, setPlaybooks] = useState(MOCK_PLAYBOOKS);
  // Week 3: Replace with API call
  return { playbooks, createPlaybook, deletePlaybook };
};

// src/hooks/useChat.ts
export const useChat = () => {
  const [messages, setMessages] = useState([]);
  // Week 3: Replace with Bedrock API
  const sendMessage = async (content: string) => {
    // Mock response for now
  };
  return { messages, sendMessage, isLoading };
};

// src/hooks/useKBLayers.ts
export const useKBLayers = (role: UserRole) => {
  // Week 1-2: Hardcoded
  // Week 3: Real KB integration
  return { layers, activeLayers };
};
```

---

## Testing Strategy

### Playwright Integration

**Setup** (completed):
- Playwright MCP server installed globally
- Cursor configured with MCP integration
- Can use Claude to write and execute tests

**Example Commands for Claude** (in Cursor):
```
Claude, open http://localhost:5173 and take a screenshot of the chat interface

Claude, test the file upload flow:
1. Click Upload Document
2. Select a file
3. Verify it appears in the list

Claude, verify KB layers update when I switch from Coach to Manager role
```

### Manual Testing Checklist

**Week 1-2**:
- [ ] Chat messages appear correctly
- [ ] Playbook sidebar scrolls
- [ ] New playbook button works
- [ ] KB indicators show correct layers
- [ ] File upload UI functional (mock data)
- [ ] Role selector changes UI

**Week 3** (Backend Integration):
- [ ] Real messages sent to Bedrock
- [ ] File upload to S3 works
- [ ] KB retrieval returns relevant content
- [ ] Playbooks persist in DynamoDB

**Week 4** (Production):
- [ ] CloudFront deployment successful
- [ ] Accessibility audit passes
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Coach feedback collected

---

## Deployment

### Local Development
```bash
npm run dev
# App runs on http://localhost:5173
```

### Production Build
```bash
npm run build
# Builds to ./dist/
```

### CloudFront + S3 Deployment (Week 3)

**GitHub Actions Workflow** (to be created):
```yaml
# .github/workflows/deploy.yml
name: Deploy to CloudFront

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - run: npm ci
      - run: npm run build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ secrets.AWS_ROLE_ARN }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Sync to S3
        run: aws s3 sync ./dist s3://${{ secrets.AWS_S3_BUCKET }} --delete

      - name: Invalidate CloudFront
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
```

**GitHub Secrets Required**:
- `AWS_ROLE_ARN` - IAM role for OIDC auth
- `AWS_REGION` - ap-southeast-2
- `AWS_S3_BUCKET` - ask-penny-frontend-dev
- `CLOUDFRONT_DISTRIBUTION_ID` - From AWS console

---

## Week-by-Week Plan

### Week 1 (17-24 Jan 2026)

**Day 1** (17 Jan): ✅ COMPLETE
- Repository setup
- Dependencies installed
- Project structure created
- Documentation written

**Day 2** (20 Jan):
- Build primitive components (Button, Input, Card, Avatar, Badge, Modal)
- Set up Chakra UI theme
- Create TypeScript types

**Day 3** (21 Jan):
- Configure assistant-ui
- Build ChatMessage component
- Build ChatTranscript component
- Build ChatComposer component

**Day 4** (22 Jan):
- Build Sidebar components (AppHeader, PlaybookCard, PlaybookList)
- Build AppLayout (2-column layout)
- Create mock data
- Wire up App with state

**Day 5** (23 Jan):
- Add loading states
- Polish UI/UX
- Manual testing
- Deploy to CloudFront (if ready)

### Week 2 (24-31 Jan 2026)

**Focus**: Composite components, KB visualization, file upload UI

### Week 3 (31 Jan - 7 Feb 2026)

**Focus**: Backend integration with Parallo team

### Week 4 (7-14 Feb 2026)

**Focus**: Testing, polish, coach feedback

---

## Reference Documents

### For Developers
- **README**: `/home/salesstarjb/ss/repos/ask-penny-front-end/README.md`
- **Week 1 Tasks**: `/home/salesstarjb/ss/docs/WIP/00_Admin/Project_Plans/Week 1 Task Breakdown | AskPenny AI Front-End | 17-01-2026.md`
- **Simplified Wireframe Spec**: `/home/salesstarjb/ss/docs/WIP/01_Docs/Product_Specs/Ask Penny MVP Chat UI Simplified Spec | AskPenny AI | 17-01-2026.md`

### For Stakeholders
- **SOW**: `/home/salesstarjb/ss/docs/WIP/00_Admin/Scope_of_Work/Ask Penny Front-End SOW REVISED | AskPenny AI | 16-01-2026.docx`
- **Research Document**: `/home/salesstarjb/ss/docs/WIP/01_Docs/Research/AI Chatbot UI and Playwright Testing Research | AskPenny AI | 17-01-2026.docx`
- **Playwright Setup Guide**: `/home/salesstarjb/ss/docs/WIP/00_Admin/Setup_Guides/Playwright MCP Setup for Cursor | AskPenny AI | 17-01-2026.md`

### Global Standards
- **Organization CLAUDE.md**: `~/.claude/CLAUDE.md`
- **Workspace CLAUDE.md**: `/home/salesstarjb/ss/CLAUDE.md`
- **Security Standards**: `~/.claude/rules/security.md`
- **AWS Best Practices**: `~/.claude/rules/aws.md`
- **Documentation Standards**: `~/.claude/rules/documentation.md`

---

## Security

### Never Commit
- `.env` files (use .env.example for templates)
- `credentials.json` or any credential files
- AWS keys or API tokens
- Private keys or certificates

### Use Environment Variables
```bash
# .env.example (commit this)
VITE_API_URL=https://api.example.com
VITE_BEDROCK_REGION=ap-southeast-2

# .env (DO NOT commit)
VITE_API_URL=https://api-prod.askpenny.com
VITE_AWS_ACCOUNT_ID=123456789012
```

---

## Common Commands

```bash
# Development
npm run dev                    # Start dev server
npm run build                  # Build for production
npm run preview                # Preview production build
npm run lint                   # Run ESLint

# Git workflow
git status                     # Check changes
git add .                      # Stage all changes
git commit -m "message"        # Commit
git push origin main           # Push to GitHub

# Playwright (via Claude in Cursor)
# Just ask Claude to test something in natural language
```

---

## Next Steps

**Immediate** (Week 1 Day 2):
1. Set up Chakra UI theme configuration
2. Create TypeScript types
3. Build primitive components (Button, Input, Card, etc.)

**This Week** (Week 1):
1. Complete all primitive components
2. Integrate assistant-ui for chat
3. Build chat interface (ChatMessage, ChatTranscript, ChatComposer)
4. Build sidebar (AppHeader, PlaybookList, RoleSelector)
5. Wire up with mock data
6. Deploy to CloudFront for preview

**Week 3** (Backend Integration):
1. Replace mock data with API calls
2. Integrate Bedrock Knowledge Base
3. Connect file upload to S3
4. Test end-to-end flow

---

**Status**: Foundation complete ✅ Ready for Week 1 Day 2 development

**Last Updated**: 17 Jan 2026
**Next Review**: End of Week 1 (24 Jan 2026)

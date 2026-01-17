# Ask Penny Front-End

> React + TypeScript front-end for Ask Penny AI coaching platform
>
> **Timeline**: 4 weeks (2 weeks FE dev, 1 week integration, 1 week polish)
> **Target**: End of February 2026 for internal MVP
> **Status**: Week 1 Day 1 - Foundation setup complete ✅

---

## Overview

Ask Penny AI is an AI-powered coaching assistant that provides real-time guidance for sales professionals using SalesStar's proven frameworks (STAR, DOUBTS, SLMA, Negotiator, etc.).

This front-end application will be:
- Deployed to AWS CloudFront + S3 for global CDN delivery
- Integrated with AWS Bedrock for AI/RAG capabilities (backend by Parallo team)
- Eventually embedded in GoHighLevel custom app marketplace (Production phase)

---

## Tech Stack

### Core Framework
- **React 18** with TypeScript strict mode
- **Vite** - Fast build tooling and dev server
- **Chakra UI** - Component library for rapid development
- **assistant-ui** - Purpose-built AI chat components

### Key Libraries
- **@assistant-ui/react** - AI chat interface components
- **@chakra-ui/react** - UI components and theming
- **react-icons** - Icon library
- **react-markdown** - Markdown rendering for AI responses
- **date-fns** - Date formatting utilities
- **framer-motion** - Animations (via Chakra UI)

### Development Tools
- **TypeScript** - Type safety
- **ESLint** - Code linting
- **Playwright** - E2E testing with Claude Code integration

---

## Project Structure

```
ask-penny-front-end/
├── src/
│   ├── components/
│   │   ├── primitives/      # Basic UI components (Button, Input, Card)
│   │   ├── composite/        # Complex components (ChatTranscript, PlaybookList)
│   │   └── layouts/          # Layout components (AppLayout, Sidebar)
│   ├── contexts/             # React context providers
│   ├── hooks/                # Custom React hooks
│   ├── theme/                # Chakra UI theme configuration
│   ├── types/                # TypeScript type definitions
│   ├── utils/                # Utility functions
│   ├── App.tsx               # Main app component
│   └── main.tsx              # App entry point
├── public/                   # Static assets
├── .claude/                  # Claude Code project documentation
│   └── CLAUDE.md             # Project-specific guidelines
└── README.md                 # This file
```

---

## Getting Started

### Prerequisites
- Node.js 18+ (currently using v24.12.0)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/HuggaBear/ask-penny-front-end.git
cd ask-penny-front-end

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## Development Workflow

### Week 1-2: Front-End Development (Hardcoded Data)
- Build UI components using Chakra UI
- Implement chat interface with assistant-ui
- Create playbook management sidebar
- Add 3-tier Knowledge Base visualization
- Use mock/hardcoded data for development

### Week 3: Backend Integration (Parallo Coordination)
- Integrate real AWS Bedrock Knowledge Base
- Connect file upload to S3
- Wire up RAG retrieval and embeddings
- Replace hardcoded data with real APIs

### Week 4: Polish & Deploy
- Testing and bug fixes
- Accessibility audit
- Performance optimization
- Deploy to CloudFront + S3
- Coach feedback collection

---

## Key Features (MVP Scope)

### Core Chat Interface
- AI-powered coaching conversation
- Message history and context
- Markdown rendering for rich responses
- Thumbs up/down feedback on responses
- Copy to clipboard functionality

### Playbook Management
- Recent playbooks sidebar
- Create new playbook
- Search/filter playbooks
- Deal stage indicators

### Knowledge Base Visualization
- 3-tier KB indicator:
  - Layer 1: SalesStar IP (STAR, DOUBTS, SLMA, Negotiator, DISC)
  - Layer 2: Organization KB (templates, client-specific)
  - Layer 3: Project files (deal context)
- Active/inactive layer visualization
- Role-based KB access (Coach/Manager/Rep)

### File Upload
- Upload documents for Layer 3 (project context)
- File list with metadata
- Remove/replace files

### Role Simulation
- Toggle between Coach/Manager/Rep roles
- Role-specific UI adjustments
- KB layer access based on role

---

## Design System

### Brand Tokens
```typescript
colors: {
  brand: {
    primary: '#2B6CB0',    // Blue
    secondary: '#4A5568',  // Gray
  },
  penny: {
    bg: '#F7FAFC',
    text: '#2D3748',
  }
}

fonts: {
  heading: 'Inter, system-ui, sans-serif',
  body: 'Inter, system-ui, sans-serif',
}
```

### Layout
- **2-column design**: Sidebar (240px fixed) + Main chat area (flex-grow)
- **Responsive**: Mobile-first approach (Production phase)
- **Accessibility**: WCAG 2.1 AA compliance

---

## Testing Strategy

### Playwright Integration
- E2E testing with Playwright
- Claude Code Playwright MCP for test generation
- Visual regression testing
- Accessibility testing

### Manual Testing
- User acceptance testing with coaches
- Cross-browser compatibility (Chrome, Firefox, Safari)
- Performance testing

---

## Deployment

### AWS CloudFront + S3
- Static site hosting on S3
- Global CDN via CloudFront
- GitHub Actions for CI/CD
- OIDC authentication (no long-lived credentials)

### GitHub Actions Workflow
```yaml
# Automated deployment on push to main
- Build production bundle
- Sync to S3 bucket
- Invalidate CloudFront cache
- Deploy time: ~2-3 minutes
```

---

## Backend Integration (Week 3)

### Parallo Team Deliverables
- AWS Bedrock Knowledge Base setup
- Lambda functions for chat API
- S3 bucket for file uploads
- AppSync GraphQL API
- DynamoDB for session storage

### Front-End Integration Points
- `/api/chat` - Send message, receive AI response
- `/api/playbooks` - CRUD operations
- `/api/files` - Upload/list/delete project files
- `/api/kb` - Query Knowledge Base layers

---

## Documentation

### For Developers
- **Global Standards**: `~/.claude/CLAUDE.md` (organization-wide)
- **Project Guidelines**: `.claude/CLAUDE.md` (this repo)
- **Component Specs**: See simplified wireframe spec in `docs/WIP/`

### For Stakeholders
- **SOW**: `docs/WIP/00_Admin/Scope_of_Work/Ask Penny Front-End SOW REVISED.docx`
- **Research**: `docs/WIP/01_Docs/Research/AI Chatbot UI and Playwright Testing Research.docx`
- **Wireframe Spec**: `docs/WIP/01_Docs/Product_Specs/Ask Penny MVP Chat UI Simplified Spec.md`

---

## Contributing

### Code Standards
- Follow TypeScript strict mode
- Use Chakra UI components (don't build custom unless necessary)
- Keep components small and focused
- Write meaningful commit messages
- No secrets in code (use `.env` files, which are .gitignored)

### Security
- Never commit `.env` files
- Never commit credentials or API keys
- Follow SalesStar security standards (`~/.claude/rules/security.md`)

---

## Timeline & Milestones

- **Week 1 Day 1** (17 Jan 2026): ✅ Project setup, dependencies, structure
- **Week 1 Day 2-5**: Primitive components, chat UI, sidebar
- **Week 2**: Composite components, polish, deploy to CloudFront
- **Week 3**: Backend integration with Parallo team
- **Week 4**: Testing, accessibility, coach feedback

**Target Completion**: End of February 2026

---

## Team

- **Front-End Development**: Jonathan (SalesStar)
- **Backend/AWS**: Parallo team (starts late Jan/early Feb)
- **Product Owner**: Kat (SalesStar)
- **Stakeholders**: Jonathan, Kat, Alex

---

## License

Proprietary - SalesStar Internal Project

---

## Questions or Issues?

- **Technical**: See `.claude/CLAUDE.md` for project guidelines
- **Organization Standards**: See `~/.claude/CLAUDE.md`
- **Product Questions**: Review SOW in `docs/WIP/00_Admin/Scope_of_Work/`

---

**Status**: Foundation complete, ready for Week 1 Day 2 development 🚀

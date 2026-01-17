/**
 * Ask Penny AI - TypeScript Type Definitions
 *
 * Core types for the application domain model
 */

// ============================================================================
// Deal and Playbook Types
// ============================================================================

export type DealStage =
  | 'discovery'
  | 'qualification'
  | 'proposal'
  | 'negotiation'
  | 'closed-won'
  | 'closed-lost';

export interface Playbook {
  id: string;
  title: string;
  client: string;
  dealStage: DealStage;
  createdAt: string;  // ISO 8601
  updatedAt: string;  // ISO 8601
  description?: string;
}

// ============================================================================
// Chat and Message Types
// ============================================================================

export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;  // ISO 8601
  resources?: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  framework: SalesFramework;
  excerpt: string;
  source?: string;  // URL or file path
}

// ============================================================================
// Framework Types
// ============================================================================

export type SalesFramework =
  | 'STAR'
  | 'DOUBTS'
  | 'SLMA'
  | 'STAR Negotiator'
  | 'STAR Account Manager'
  | 'STAR Recruiter'
  | 'Sales Manager Pathway'
  | 'DISC'
  | 'Other';

// ============================================================================
// User and Role Types
// ============================================================================

export type UserRole = 'coach' | 'manager' | 'rep';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

// ============================================================================
// Knowledge Base Types
// ============================================================================

export interface KBLayer {
  id: number;  // 1, 2, or 3
  name: string;  // "SalesStar IP", "Org KB", "Project Files"
  active: boolean;
  description: string;
  itemCount?: number;
}

// ============================================================================
// File Upload Types
// ============================================================================

export interface ProjectFile {
  id: string;
  name: string;
  size: number;
  type: string;  // MIME type
  uploadedAt: string;  // ISO 8601
  uploadedBy?: string;  // User ID
  url?: string;  // S3 URL (Week 3)
  status?: 'uploading' | 'processing' | 'ready' | 'error';
}

// ============================================================================
// UI Component Types
// ============================================================================

export interface BadgeVariant {
  colorScheme: string;
  label: string;
}

export const DEAL_STAGE_BADGES: Record<DealStage, BadgeVariant> = {
  'discovery': { colorScheme: 'green', label: 'Discovery' },
  'qualification': { colorScheme: 'blue', label: 'Qualification' },
  'proposal': { colorScheme: 'purple', label: 'Proposal' },
  'negotiation': { colorScheme: 'orange', label: 'Negotiation' },
  'closed-won': { colorScheme: 'green', label: 'Closed Won' },
  'closed-lost': { colorScheme: 'red', label: 'Closed Lost' },
};

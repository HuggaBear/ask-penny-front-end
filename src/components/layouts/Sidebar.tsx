/**
 * Sidebar Component
 *
 * Left sidebar with app header, playbook list, and role selector
 */

import React from 'react';
import { Button, Badge } from '../primitives';
import type { Playbook, UserRole } from '../../types';
import './Sidebar.css';

// AppHeader sub-component
export const AppHeader: React.FC = () => {
  return (
    <div className="sidebar-header">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">💰</div>
        <div className="sidebar-logo-text">
          <div className="sidebar-logo-title">Ask Penny</div>
          <div className="sidebar-logo-subtitle">Strategic Sales Coach</div>
        </div>
      </div>
    </div>
  );
};

// PlaybookCard sub-component
export interface PlaybookCardProps {
  playbook: Playbook;
  isActive?: boolean;
  onClick?: () => void;
}

export const PlaybookCard: React.FC<PlaybookCardProps> = ({
  playbook,
  isActive = false,
  onClick,
}) => {
  const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    if (hours < 48) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getDealStageBadge = (stage: string) => {
    const badges: Record<string, { color: 'green' | 'blue' | 'purple' | 'orange' | 'red', label: string }> = {
      discovery: { color: 'green', label: 'Discovery' },
      qualification: { color: 'blue', label: 'Qualification' },
      proposal: { color: 'purple', label: 'Proposal' },
      negotiation: { color: 'orange', label: 'Negotiation' },
      'closed-won': { color: 'green', label: 'Closed Won' },
      'closed-lost': { color: 'red', label: 'Closed Lost' },
    };
    return badges[stage] || { color: 'gray' as const, label: stage };
  };

  const badge = getDealStageBadge(playbook.dealStage);

  return (
    <div
      className={`playbook-card ${isActive ? 'playbook-card-active' : ''}`}
      onClick={onClick}
    >
      <div className="playbook-card-title">{playbook.title}</div>
      <div className="playbook-card-client">{playbook.client}</div>
      <div className="playbook-card-footer">
        <Badge colorScheme={badge.color} variant="subtle" style={{ fontSize: '10px', padding: '2px 8px' }}>
          {badge.label}
        </Badge>
        <span className="playbook-card-timestamp">
          {formatTimestamp(playbook.updatedAt)}
        </span>
      </div>
    </div>
  );
};

// PlaybookList sub-component
export interface PlaybookListProps {
  playbooks: Playbook[];
  activePlaybookId?: string;
  onPlaybookClick?: (playbook: Playbook) => void;
  onNewPlaybook?: () => void;
}

export const PlaybookList: React.FC<PlaybookListProps> = ({
  playbooks,
  activePlaybookId,
  onPlaybookClick,
  onNewPlaybook,
}) => {
  return (
    <div className="playbook-list">
      <Button
        variant="primary"
        fullWidth
        size="md"
        onClick={onNewPlaybook}
        style={{ marginBottom: '16px' }}
      >
        + New Playbook
      </Button>

      <div className="playbook-list-header">Recent Playbooks</div>

      <div className="playbook-list-items">
        {playbooks.length === 0 ? (
          <div className="playbook-list-empty">
            No playbooks yet. Create one to get started!
          </div>
        ) : (
          playbooks.map((playbook) => (
            <PlaybookCard
              key={playbook.id}
              playbook={playbook}
              isActive={playbook.id === activePlaybookId}
              onClick={() => onPlaybookClick?.(playbook)}
            />
          ))
        )}
      </div>
    </div>
  );
};

// RoleSelector sub-component
export interface RoleSelectorProps {
  currentRole: UserRole;
  onRoleChange?: (role: UserRole) => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({
  currentRole,
  onRoleChange,
}) => {
  return (
    <div className="role-selector">
      <div className="role-selector-label">Role</div>
      <select
        className="role-selector-select"
        value={currentRole}
        onChange={(e) => onRoleChange?.(e.target.value as UserRole)}
      >
        <option value="coach">Coach</option>
        <option value="manager">Manager</option>
        <option value="rep">Sales Rep</option>
      </select>
      <div className="role-selector-hint">
        Changes Knowledge Base access
      </div>
    </div>
  );
};

// Main Sidebar component
export interface SidebarProps {
  playbooks: Playbook[];
  activePlaybookId?: string;
  currentRole: UserRole;
  onPlaybookClick?: (playbook: Playbook) => void;
  onNewPlaybook?: () => void;
  onRoleChange?: (role: UserRole) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  playbooks,
  activePlaybookId,
  currentRole,
  onPlaybookClick,
  onNewPlaybook,
  onRoleChange,
}) => {
  return (
    <div className="sidebar">
      <AppHeader />
      <div className="sidebar-content">
        <PlaybookList
          playbooks={playbooks}
          activePlaybookId={activePlaybookId}
          onPlaybookClick={onPlaybookClick}
          onNewPlaybook={onNewPlaybook}
        />
      </div>
      <div className="sidebar-footer">
        <RoleSelector currentRole={currentRole} onRoleChange={onRoleChange} />
      </div>
    </div>
  );
};

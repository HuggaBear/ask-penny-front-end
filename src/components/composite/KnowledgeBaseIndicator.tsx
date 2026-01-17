/**
 * KnowledgeBaseIndicator Component
 *
 * Shows 3-tier Knowledge Base layers:
 * - Layer 1: SalesStar IP (always active)
 * - Layer 2: Org Knowledge (coach/manager only)
 * - Layer 3: Project Files (when uploaded)
 */

import React from 'react';
import type { UserRole } from '../../types';
import './KnowledgeBaseIndicator.css';

export interface KBLayerStatus {
  layer: 1 | 2 | 3;
  name: string;
  description: string;
  active: boolean;
  restricted?: boolean;
  itemCount?: number;
}

export interface KnowledgeBaseIndicatorProps {
  currentRole: UserRole;
  uploadedFilesCount: number;
}

export const KnowledgeBaseIndicator: React.FC<KnowledgeBaseIndicatorProps> = ({
  currentRole,
  uploadedFilesCount,
}) => {
  const getLayers = (): KBLayerStatus[] => {
    const isCoachOrManager = currentRole === 'coach' || currentRole === 'manager';

    return [
      {
        layer: 1,
        name: 'Layer 1: SalesStar IP',
        description: 'STAR, DOUBTS, SLMA, Negotiator',
        active: true,
      },
      {
        layer: 2,
        name: 'Layer 2: Org Knowledge',
        description: 'Templates, playbooks, SFW, OMG',
        active: isCoachOrManager,
        restricted: !isCoachOrManager,
      },
      {
        layer: 3,
        name: 'Layer 3: Project Files',
        description: uploadedFilesCount > 0 ? `${uploadedFilesCount} files uploaded` : 'No files yet',
        active: uploadedFilesCount > 0,
        itemCount: uploadedFilesCount,
      },
    ];
  };

  const layers = getLayers();

  return (
    <div className="kb-indicator">
      <div className="kb-indicator-header">
        <span className="kb-indicator-title">Knowledge Base Context</span>
      </div>

      <div className="kb-indicator-layers">
        {layers.map((layer) => (
          <div
            key={layer.layer}
            className={`kb-layer ${layer.active ? 'kb-layer-active' : 'kb-layer-inactive'}`}
          >
            <div className="kb-layer-icon">
              {layer.active ? (
                <span className="kb-layer-check">✓</span>
              ) : (
                <span className="kb-layer-empty">○</span>
              )}
            </div>
            <div className="kb-layer-content">
              <div className="kb-layer-name">
                {layer.name}
                {layer.restricted && (
                  <span className="kb-layer-badge">Coach/Manager only</span>
                )}
              </div>
              <div className="kb-layer-description">{layer.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

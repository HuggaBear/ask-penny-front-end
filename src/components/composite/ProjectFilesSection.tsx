/**
 * ProjectFilesSection Component
 *
 * Shows uploaded project files and provides upload UI
 * - Drag-drop file upload zone
 * - File list with metadata (name, size, date)
 * - Delete/remove files
 */

import React, { useState, useRef } from 'react';
import type { ProjectFile } from '../../types';
import './ProjectFilesSection.css';

export interface ProjectFilesSectionProps {
  files: ProjectFile[];
  onUpload?: (files: File[]) => void;
  onDelete?: (fileId: string) => void;
  maxFileSize?: number; // in MB
  acceptedFileTypes?: string[];
}

export const ProjectFilesSection: React.FC<ProjectFilesSectionProps> = ({
  files,
  onUpload,
  onDelete,
  maxFileSize = 10, // 10 MB default
  acceptedFileTypes = ['.pdf', '.docx', '.txt', '.xlsx'],
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

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

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (selectedFiles: File[]) => {
    // Filter by file type
    const validFiles = selectedFiles.filter((file) => {
      const extension = '.' + file.name.split('.').pop()?.toLowerCase();
      return acceptedFileTypes.includes(extension);
    });

    // Filter by file size
    const maxBytes = maxFileSize * 1024 * 1024;
    const sizedFiles = validFiles.filter((file) => file.size <= maxBytes);

    if (sizedFiles.length > 0) {
      onUpload?.(sizedFiles);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteClick = (fileId: string) => {
    onDelete?.(fileId);
  };

  return (
    <div className="project-files-section">
      <div className="project-files-header">
        <span className="project-files-title">Project Files</span>
        <span className="project-files-count">{files.length} file{files.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Upload Zone */}
      <div
        className={`file-upload-zone ${isDragging ? 'file-upload-zone-dragging' : ''}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
      >
        <div className="file-upload-icon">📎</div>
        <div className="file-upload-text">
          {isDragging ? (
            <span>Drop files here...</span>
          ) : (
            <>
              <span className="file-upload-primary">Drop files here or click to browse</span>
              <span className="file-upload-secondary">
                Supports {acceptedFileTypes.join(', ')} • Max {maxFileSize}MB
              </span>
            </>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedFileTypes.join(',')}
          onChange={handleFileInputChange}
          style={{ display: 'none' }}
        />
      </div>

      {/* File List */}
      {files.length > 0 ? (
        <div className="file-list">
          {files.map((file) => (
            <div key={file.id} className="file-item">
              <div className="file-item-icon">
                {file.type?.includes('pdf') ? '📄' :
                 file.type?.includes('word') ? '📝' :
                 file.type?.includes('excel') ? '📊' : '📁'}
              </div>
              <div className="file-item-info">
                <div className="file-item-name">{file.name}</div>
                <div className="file-item-meta">
                  {formatFileSize(file.size)} • {formatTimestamp(file.uploadedAt)}
                  {file.uploadedBy && ` • by ${file.uploadedBy}`}
                </div>
              </div>
              <div className="file-item-actions">
                {file.status === 'uploading' && (
                  <span className="file-status-uploading">Uploading...</span>
                )}
                {file.status === 'processing' && (
                  <span className="file-status-processing">Processing...</span>
                )}
                {file.status === 'error' && (
                  <span className="file-status-error">Error</span>
                )}
                {file.status === 'ready' && (
                  <button
                    className="file-delete-button"
                    onClick={() => handleDeleteClick(file.id)}
                    title="Remove file"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="file-list-empty">
          No files uploaded yet. Add project files to provide context for coaching.
        </div>
      )}
    </div>
  );
};

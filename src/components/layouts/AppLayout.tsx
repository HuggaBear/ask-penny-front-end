/**
 * AppLayout Component
 *
 * 2-column layout: Sidebar (240px fixed) + Main Area (flex-grow)
 */

import React from 'react';
import './AppLayout.css';

export interface AppLayoutProps {
  sidebar: React.ReactNode;
  main: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ sidebar, main }) => {
  return (
    <div className="app-layout">
      <aside className="app-layout-sidebar">
        {sidebar}
      </aside>
      <main className="app-layout-main">
        {main}
      </main>
    </div>
  );
};

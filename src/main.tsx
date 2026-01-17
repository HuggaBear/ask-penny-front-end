import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { applyBrandColors } from './theme'
import './index.css'
import App from './App.tsx'

// Apply SalesStar brand colors to CSS custom properties
applyBrandColors();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/**
 * Ask Penny AI - SalesStar Brand Tokens
 *
 * Based on SalesStar brand style guide extracted from salesstar.com
 * Date: 17-01-2026
 *
 * Key brand colors:
 * - Primary Blue: #0170B9
 * - Accent Orange: #E94629
 * - Dark Charcoal: #302E33
 *
 * Note: Chakra UI v3 theme configuration will be set up in Week 1 Day 2
 * For now, we're using CSS custom properties for brand colors
 */

// SalesStar Brand Color Tokens
export const brandColors = {
  // Primary brand palette
  primary: '#0170B9',      // SalesStar blue
  accent: '#E94629',       // SalesStar orange/red
  charcoal: '#302E33',     // Dark headers

  // Gray scale
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#E5E5E5',
  gray300: '#A7AAAF',
  gray400: '#4B4F58',      // Body text
  gray500: '#3A3A3A',      // Headings
  gray600: '#302E33',

  // UI colors
  bg: '#F7FAFC',
  bgDark: '#EDF2F7',
  text: '#4B4F58',
  textLight: '#718096',
  textMuted: '#A0AEC0',
  border: '#E2E8F0',

  // Chat-specific
  userMessage: '#E3F2FD',
  aiMessage: '#FFFFFF',
  codeBlock: '#F5F5F5',
};

// Typography tokens
export const typography = {
  fonts: {
    heading: 'Inter, system-ui, -apple-system, sans-serif',
    body: 'Inter, system-ui, -apple-system, sans-serif',
    mono: '"Fira Code", "Courier New", monospace',
  },
  fontSizes: {
    h1: '40px',
    h2: '32px',
    h3: '25px',
    h4: '24px',
    h5: '20px',
    body: '16px',
    small: '14px',
    tiny: '12px',
  },
  lineHeights: {
    heading: '1.3em',
    h1: '1.4em',
    body: '1.65em',
  },
};

// Spacing tokens
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
};

// Border radius tokens
export const radii = {
  button: '4px',
  card: '8px',
  badge: '16px',
};

// Shadow tokens
export const shadows = {
  card: '0px 0px 4px 0 rgba(0, 0, 0, 0.22)',
};

// Apply brand colors to CSS custom properties
export const applyBrandColors = () => {
  const root = document.documentElement;
  Object.entries(brandColors).forEach(([key, value]) => {
    root.style.setProperty(`--brand-${key}`, value);
  });
};

/**
 * Ask Penny AI - SalesStar Brand Tokens
 *
 * Based on official SalesStar Brand Guidelines (2023)
 * Date: 17-01-2026
 *
 * Key brand colors:
 * - Primary Red: #E94629
 * - Secondary Red: #FF290B
 * - Charcoal: #302E33
 * - Light Grey: #E8E8E8
 *
 * Note: Chakra UI v3 theme configuration will be set up in Week 1 Day 2
 * For now, we're using CSS custom properties for brand colors
 */

// SalesStar Brand Color Tokens
export const brandColors = {
  // Primary brand palette
  primary: '#E94629',      // SalesStar red/orange (PRIMARY)
  secondary: '#FF290B',    // Bright red (SECONDARY)
  charcoal: '#302E33',     // Dark charcoal

  // Gray scale (from official brand guidelines)
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#E8E8E8',      // Light grey (official)
  gray300: '#A7AAAF',      // Medium grey
  gray400: '#3E3C42',      // Dark grey
  gray500: '#CECECE',      // Light grey alt
  gray600: '#302E33',      // Charcoal

  // UI colors (using greys, not blues)
  bg: '#FAFAFA',           // Light background
  bgDark: '#F5F5F5',       // Slightly darker background
  text: '#3E3C42',         // Dark grey for body text
  textLight: '#A7AAAF',    // Medium grey for secondary text
  textMuted: '#CECECE',    // Light grey for muted text
  border: '#E8E8E8',       // Official light grey for borders

  // Chat-specific (grey-based, not blue)
  userMessage: '#FEF5F4',  // Very light red tint for user messages
  aiMessage: '#FFFFFF',    // White for AI messages
  codeBlock: '#F5F5F5',    // Light grey for code blocks
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

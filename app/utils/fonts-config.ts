/**
 * Font Configuration for Performance Optimization
 * Uses font-display: swap to prevent layout shift (CLS)
 * Preload critical fonts in layouts
 */

import type { Link } from '@unhead/vue'

export type FontPreloadConfig = Link

const criticalFonts: FontPreloadConfig[] = [
  {
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    rel: 'preload',
    as: 'font',
    type: 'font/woff2',
    crossorigin: 'anonymous',
  },
]

const secondaryFonts: FontPreloadConfig[] = [
  {
    href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap',
    rel: 'prefetch',
    as: 'font',
    type: 'font/woff2',
    crossorigin: 'anonymous',
  },
]

export function getFontPreloadLinks(): FontPreloadConfig[] {
  return [
    ...criticalFonts,
    ...secondaryFonts,
  ]
}

/**
 * Font stack CSS
 * Apply font-display: swap globally
 * Usage: Include in app/assets/styles/fonts.scss
 */
export const fontStackCSS = `
/* Font optimization: font-display: swap prevents layout shift */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  /* Primary font stack */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Monospace stack for code blocks */
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
}

/* Fallback for system fonts while custom fonts load */
html {
  font-family: var(--font-primary);
}

code, pre {
  font-family: var(--font-mono);
}
`

/**
 * Performance timing data
 * Track when fonts are loaded
 */
export const fontPerformanceMarkers = {
  fontsPreloadStart: 'fonts:preload:start',
  fontsPreloadEnd: 'fonts:preload:end',
  fontsLoadStart: 'fonts:load:start',
  fontsLoadEnd: 'fonts:load:end',
}

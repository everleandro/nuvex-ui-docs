/**
 * Font Configuration for Performance Optimization
 * Uses font-display: swap to prevent layout shift (CLS)
 * Preload critical fonts in layouts
 */

export interface FontPreloadConfig {
  href: string
  rel: 'preload' | 'prefetch'
  as: 'font'
  type: string
  crossorigin?: string
}

/**
 * Critical fonts to preload (render-blocking)
 * These should be loaded ASAP to prevent FOUT/FOIT
 */
export const criticalFonts: FontPreloadConfig[] = [
  {
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    rel: 'preload',
    as: 'font',
    type: 'font/woff2',
    crossorigin: 'anonymous',
  },
]

/**
 * Secondary fonts to prefetch (non-critical)
 * These can load after critical content
 */
export const secondaryFonts: FontPreloadConfig[] = [
  {
    href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap',
    rel: 'prefetch',
    as: 'font',
    type: 'font/woff2',
    crossorigin: 'anonymous',
  },
]

/**
 * Generate <link> tags for font preloading
 * Use in useHead() meta configuration
 */
export function getFontPreloadLinks(): Array<{
  rel: string
  href: string
  as?: string
  type?: string
  crossorigin?: string
}> {
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

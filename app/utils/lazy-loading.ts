/**
 * Lazy Loading Configuration for Components
 * Phase 4: Performance Optimization - Code Splitting
 *
 * Usage in pages:
 * import { lazyLoadComponent, lazyLoadView } from '~/utils/lazy-loading'
 * const MyComponent = lazyLoadComponent('MyComponent', { ssr: false })
 * const MyView = lazyLoadView('MyView', { ssr: true })
 */

import { defineAsyncComponent } from 'vue'
import type { Component, AsyncComponentLoader } from 'vue'

export interface LazyLoadOptions {
  /**
   * Suspense-compatible lazy loading
   * @default true
   */
  suspense?: boolean
  /**
   * Allow component to load on server-side
   * @default false
   */
  ssr?: boolean
  /**
   * Delay before showing loading state (ms)
   * @default 200
   */
  delay?: number
  /**
   * Timeout for component loading (ms)
   * @default 10000
   */
  timeout?: number
}

/**
 * Create async component with default performance settings
 * Optimized for client-side code splitting
 */
export function lazyLoadComponent<T extends Component>(
  path: string,
  options: LazyLoadOptions = {},
): Component {
  const {
    suspense = true,
    ssr = false,
    delay = 200,
    timeout = 10000,
  } = options

  return defineAsyncComponent({
    loader: () => import(path) as Promise<{ default: T }>,
    loadingComponent: undefined,
    delay,
    timeout,
    suspensible: suspense,
    onError(error, retry, fail) {
      // Log error but don't retry (avoid infinite loops)
      console.error(`Failed to load component from ${path}:`, error)
      fail(error)
    },
  })
}

/**
 * Create async view with default page-specific settings
 * Optimized for route-based code splitting
 */
export function lazyLoadView<T extends Component>(
  path: string,
  options: LazyLoadOptions = {},
): Component {
  return lazyLoadComponent(path, {
    suspense: true,
    ssr: true, // Views should SSR by default
    delay: 100, // Shorter delay for views
    timeout: 15000, // Longer timeout for views
    ...options,
  })
}

/**
 * Prefetch a component module in browser idle time
 * Reduces perceived load time for navigation
 */
export function prefetchComponent(path: string): void {
  if (typeof window === 'undefined') return

  const prefetch = () => {
    import(path).catch((err) => {
      console.warn(`Failed to prefetch component ${path}:`, err)
    })
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => prefetch(), { timeout: 5000 })
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(prefetch, 2000)
  }
}

/**
 * Prefetch multiple components
 */
export function prefetchComponentsModule(paths: string[]): void {
  paths.forEach(path => prefetchComponent(path))
}

/**
 * Common async component presets
 * Use these for consistency across docs
 */
export const AsyncComponents = {
  /**
   * For complex forms and interactive sections
   * Heavy components that might not be above the fold
   */
  complex: (path: string) => lazyLoadComponent(path, {
    ssr: false,
    delay: 300,
  }),

  /**
   * For documentation code examples
   * Can be client-only, used below the fold
   */
  codeExample: (path: string) => lazyLoadComponent(path, {
    ssr: false,
    delay: 500,
  }),

  /**
   * For additional documentation sections
   * Loaded after critical content
   */
  section: (path: string) => lazyLoadComponent(path, {
    ssr: true,
    delay: 400,
  }),

  /**
   * For modals and overlays
   * Load on-demand, not critical to initial render
   */
  modal: (path: string) => lazyLoadComponent(path, {
    ssr: false,
    suspense: false,
    delay: 100,
    timeout: 5000,
  }),
}

/**
 * Performance metrics helper
 * Track component loading times
 */
export const lazyLoadMetrics = {
  markers: {
    componentLoadStart: (name: string) => `component:load:start:${name}`,
    componentLoadEnd: (name: string) => `component:load:end:${name}`,
    componentError: (name: string) => `component:load:error:${name}`,
  },

  measure(name: string, startMark: string, endMark: string): number | null {
    if (typeof window === 'undefined') return null
    if (!('performance' in window)) return null

    try {
      window.performance.measure(name, startMark, endMark)
      const measure = window.performance.getEntriesByName(name)[0]
      return measure?.duration ?? null
    } catch (err) {
      console.warn(`Failed to measure ${name}:`, err)
      return null
    }
  },
}

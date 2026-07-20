export type DocsActionVariant = 'text' | 'outlined' | 'flat' | 'tonal' | 'elevated'

export interface DocsPageAction {
  label: string
  to: string
  variant?: DocsActionVariant
  outlined?: boolean
}

export interface DocsCallout {
  title?: string
  description: string
  color: 'success' | 'warning' | 'error' | 'info'
  icon?: string
}

export interface DocsFaqItem {
  question: string
  answerHtml: string
}

export interface DocsFooterLink {
  title: string
  description: string
  to: string
  icon: string
}

export interface DocsFooterContent {
  title: string
  description: string
  items: DocsFooterLink[]
}

export interface DocsGridItem {
  title: string
  description: string
  to?: string
  icon?: string
}

export interface DocsSection {
  type: 'card-grid' | 'nav-card-grid' | 'list'
  key: string
  title: string
  description: string
  descriptionHtml?: string
  ordered?: boolean
  items: Array<string | DocsGridItem>
  itemsHtml?: string[]
  cols?: {
    md?: number
    lg?: number
  }
}

export interface DocsPageContent {
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
    description: string
    actions: DocsPageAction[]
  }
  sections: DocsSection[]
  footer?: DocsFooterContent
}

export interface DocsSecondaryNavItem {
  id: string
  label: string
}

export type DocsInstallationSectionKey =
  | 'choose-path'
  | 'install-package'
  | 'register-vue'
  | 'register-nuxt'
  | 'first-render'
  | 'verify-installation'
  | 'common-pitfalls'
  | 'next-steps'

export interface DocsInstallationSection {
  title: string
  description: string
  items?: Array<string | DocsGridItem>
  calloutDescription?: string
}

export interface DocsInstallationEditorialContent {
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
    description: string
    prerequisitesTitle: string
    actions: {
      installPackage: string
      nuxtIntegration: string
    }
    prerequisites: string[]
  }
  sections: Record<DocsInstallationSectionKey, DocsInstallationSection>
}

export type DocsQuickStartSectionKey =
  | 'recommended-structure'
  | 'create-layout-base'
  | 'add-drawer'
  | 'connect-drawer-state'
  | 'add-bar-toggle'
  | 'assemble-initial-structure'
  | 'verify-structure'
  | 'next-steps'

export interface DocsQuickStartEditorialContent {
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
    description: string
    descriptionHtml?: string
    prerequisitesTitle: string
    actions: {
      backToInstallation: string
      openAppShell: string
    }
    prerequisites: string[]
  }
  sections: Record<DocsQuickStartSectionKey, DocsInstallationSection>
}

export type DocsWorkflowCommandValue = 'npm' | 'pnpm' | 'yarn' | 'bun'

export interface DocsWorkflowCommandEntry {
  code: string
  language?: 'bash' | 'shell' | 'sh'
  note?: string
}

export interface DocsWorkflowCodeSnippet {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json'
}

export interface DocsWorkflowSectionBase {
  key: string
  title: string
  description?: string
  descriptionHtml?: string
  callout?: DocsCallout
}

export interface DocsWorkflowDecisionSection extends DocsWorkflowSectionBase {
  type: 'decision-grid'
  items: DocsGridItem[]
  cols?: {
    md?: number
    lg?: number
  }
}

export interface DocsWorkflowCommandTabsSection extends DocsWorkflowSectionBase {
  type: 'command-tabs'
  commands?: Partial<Record<DocsWorkflowCommandValue, DocsWorkflowCommandEntry>>
}

export interface DocsWorkflowCodeSection extends DocsWorkflowSectionBase {
  type: 'code-block'
  snippets?: DocsWorkflowCodeSnippet[]
}

export interface DocsWorkflowChecklistSection extends DocsWorkflowSectionBase {
  type: 'checklist'
  items: string[]
  itemsHtml?: string[]
}

export interface DocsWorkflowCalloutSection extends DocsWorkflowSectionBase {
  type: 'callout-group'
  items: DocsGridItem[]
}

export interface DocsWorkflowNextStepsSection extends DocsWorkflowSectionBase {
  type: 'next-steps'
  items: Array<DocsGridItem & { to: string }>
}

export type DocsWorkflowSection =
  | DocsWorkflowDecisionSection
  | DocsWorkflowCommandTabsSection
  | DocsWorkflowCodeSection
  | DocsWorkflowChecklistSection
  | DocsWorkflowCalloutSection
  | DocsWorkflowNextStepsSection

export interface DocsWorkflowPageContent {
  kind: 'workflow'
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
    description: string
    actions: DocsPageAction[]
    prerequisites?: string[]
  }
  sections: DocsWorkflowSection[]
  footer?: DocsFooterContent
}

export interface DocsComponentSection {
  key: string
  title: string
  description?: string
  descriptionHtml?: string
  faqItems?: DocsFaqItem[]
}

export interface DocsComponentControlLabel {
  key: string
  label: string
}

export type DocsLooseLabelGroup = Record<string, any>

export interface DocsComponentPageLabels {
  controls: DocsComponentControlLabel[]
  checkboxText?: DocsLooseLabelGroup
  switchText?: DocsLooseLabelGroup
  radioText?: DocsLooseLabelGroup
  links?: DocsLooseLabelGroup
  buttonText?: DocsLooseLabelGroup
  formText?: DocsLooseLabelGroup
  stateText?: DocsLooseLabelGroup
  accessibilityText?: DocsLooseLabelGroup
  integrationText?: DocsLooseLabelGroup
  [key: string]: DocsLooseLabelGroup | DocsComponentControlLabel[] | undefined
}

export interface DocsComponentPageContent {
  kind: 'component'
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
    description?: string
    descriptionHtml?: string
  }
  sections: DocsComponentSection[]
  labels: DocsComponentPageLabels
}
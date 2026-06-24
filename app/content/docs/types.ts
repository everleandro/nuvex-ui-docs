export type DocsActionVariant = 'text' | 'outlined' | 'flat' | 'tonal' | 'elevated'
export type DocsLocaleCode = 'en' | 'es'

export interface DocsPageAction {
  label: string
  to: string
  variant?: DocsActionVariant
  outlined?: boolean
}

export interface DocsCardItem {
  title: string
  description: string
}

export interface DocsCardGridSection {
  type: 'card-grid'
  key: string
  title: string
  description: string
  items: DocsCardItem[]
  cols?: {
    md?: number
    lg?: number
  }
}

export interface DocsListSection {
  type: 'list'
  key: string
  title: string
  description: string
  ordered: boolean
  items: string[]
}

export type DocsSection = DocsCardGridSection | DocsListSection

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

export interface DocsComponentSection {
  key: string
  title: string
  description?: string
  descriptionHtml?: string
  faqItems?: DocsFaqItem[]
}

export interface DocsFaqItem {
  question: string
  answerHtml: string
}

export interface DocsComponentControlLabel {
  key: string
  label: string
}

export interface DocsComponentPageLabels {
  tabs: {
    design: string
    template: string
    example: string
    ts: string
  }
  controls: DocsComponentControlLabel[]
  links?: {
    iconsPage: string
    iconGuidePrefix: string
    iconGuideSuffix: string
  }
  buttonText?: {
    preview: string
    delete: string
    send: string
    warning: string
    stop: string
  }
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

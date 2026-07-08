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
  controls: DocsComponentControlLabel[]
  checkboxText?: {
    usageLabel: string
    usageDetail: string
    visualStateLabels: {
      default: string
      outlined: string
      active: string
      disabled: string
      readonly: string
    }
    customValuesLabel: string
    customValuesDetail: string
    currentModelValue: string
    termsDialogTitle: string
    termsDialogBody: string
    termsDialogClose: string
    validationCheckboxLabel: string
    validationMessage: string
    validationButtonLabel: string
    validationIdleFeedback: string
    validationSuccessFeedback: string
    slotsLead: string
    slotsLinkLabel: string
  }
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
  stateText?: {
    save: string
    saving: string
    disabledAction: string
    idle: string
    savingState: string
    saved: string
  }
  accessibilityText?: {
    iconOnlySend: string
    publish: string
    ready: string
    sent: string
    published: string
  }
  integrationText?: {
    form?: {
      submit?: string
      cancel?: string
      idle?: string
      submitting?: string
      success?: string
      canceled?: string
      projectNameLabel?: string
      projectNamePlaceholder?: string
      firstNameLabel?: string
      firstNamePlaceholder?: string
      lastNameLabel?: string
      lastNamePlaceholder?: string
      emailLabel?: string
      emailPlaceholder?: string
      passwordLabel?: string
      passwordPlaceholder?: string
      cardTitle?: string
      cardSubtitle?: string
    }
    async?: {
      success: string
      error: string
      idle: string
      loading: string
      successState: string
      errorState: string
    }
    hierarchy?: {
      cancel: string
      draft: string
      publish: string
      idle: string
      cancelState: string
      draftState: string
      publishState: string
    }
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

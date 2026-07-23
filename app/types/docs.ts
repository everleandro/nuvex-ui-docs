export type DocsActionVariant =
  | "text"
  | "outlined"
  | "flat"
  | "tonal"
  | "elevated";

import type { IconPath } from "nuvex-ui";

export interface DocsPageAction {
  label: string;
  to: string;
  variant?: DocsActionVariant;
  outlined?: boolean;
}

export interface DocsCallout {
  title?: string;
  description: string;
  color: "success" | "warning" | "error" | "info";
  icon?: string;
}

export interface DocsFaqItem {
  question: string;
  answerHtml: string;
}

export interface DocsFooterLink {
  title: string;
  description: string;
  to: string;
  icon: string;
}

export interface DocsFooterContent {
  title: string;
  description: string;
  items: DocsFooterLink[];
}

export interface DocsGridItem {
  title: string;
  description: string;
  to?: string;
  icon?: string;
}

export interface DocsSecondaryNavItem {
  id: string;
  label: string;
}

export type DocsPageKind = "concept" | "component" | "workflow";

export interface DocsEditorialHeroBase {
  title: string;
  description?: string;
  descriptionHtml?: string;
}

export interface DocsEditorialActionLabel {
  key: string;
  label: string;
}

export interface DocsEditorialSectionBase<TKey extends string = string> {
  key: TKey;
  title: string;
  description?: string;
  descriptionHtml?: string;
}

export interface DocsEditorialPageBase<
  TKind extends DocsPageKind,
  THero,
  TSections,
> {
  kind: TKind;
  seo: {
    title: string;
    description: string;
  };
  hero: THero;
  sections: TSections;
  footer?: DocsFooterContent;
}

export interface DocsEditorialGridItem {
  title: string;
  description: string;
}

export interface DocsConceptHero extends DocsEditorialHeroBase {
  actions?: DocsEditorialActionLabel[];
}

export interface DocsConceptSection<TKey extends string = string>
  extends DocsEditorialSectionBase<TKey> {
  type: "card-grid" | "nav-card-grid" | "list" | "callout";
  ordered?: boolean;
  items?: Array<string | DocsEditorialGridItem>;
  itemsHtml?: string[];
  body?: string;
  bodyHtml?: string;
  labels?: Record<string, string>;
}

export type DocsConceptPageContent<TKey extends string = string> =
  DocsEditorialPageBase<
    "concept",
    DocsConceptHero,
    Record<TKey, DocsConceptSection<TKey>>
  >;

export type DocsIntroductionSectionKey =
  | "what-is-nuvex-ui"
  | "docs-organization"
  | "recommended-path"
  | "system-principles";

export type DocsColorsSectionKey =
  | "background-helpers"
  | "text-helpers"
  | "palette-reference";

export type DocsTypographySectionKey =
  | "usage"
  | "hierarchy"
  | "specialized-roles";

export type DocsInstallationSectionKey =
  | "choose-path"
  | "install-package"
  | "register-vue"
  | "register-nuxt"
  | "first-render"
  | "verify-installation"
  | "common-pitfalls"
  | "next-steps";

export type DocsQuickStartSectionKey =
  | "recommended-structure"
  | "create-layout-base"
  | "add-drawer"
  | "connect-drawer-state"
  | "add-bar-toggle"
  | "assemble-initial-structure"
  | "verify-structure"
  | "next-steps";

export type DocsNuxtIntegrationSectionKey =
  | "what-this-guide-adds"
  | "register-nuxt-plugin"
  | "load-styles"
  | "persist-theme"
  | "assemble-nuxt-integration"
  | "verify-integration"
  | "common-pitfalls"
  | "next-steps";

export type DocsIconConfigurationSectionKey =
  | "overview"
  | "application-icon-strategy"
  | "mdi-integration"
  | "font-awesome-integration"
  | "internal-framework-icons"
  | "overriding-framework-icons"
  | "per-instance-overrides"
  | "ssr-considerations"
  | "recommendations";

export type DocsWorkflowCommandValue = "npm" | "pnpm" | "yarn" | "bun";

export interface DocsWorkflowCommandEntry {
  code: string;
  language?: "bash" | "shell" | "sh";
  note?: string;
}

export interface DocsWorkflowCodeSnippet {
  label?: string;
  code: string;
  language: "bash" | "ts" | "js" | "vue" | "scss" | "json";
}

export interface DocsWorkflowHero extends DocsEditorialHeroBase {
  prerequisitesTitle?: string;
  prerequisites?: string[];
  actions?: DocsEditorialActionLabel[];
}

export interface DocsWorkflowSection<TKey extends string = string>
  {
  key?: TKey;
  title: string;
  description?: string;
  descriptionHtml?: string;
  type?:
    | "decision-grid"
    | "command-tabs"
    | "code-block"
    | "checklist"
    | "callout-group"
    | "next-steps";
  items?: Array<string | DocsEditorialGridItem>;
  itemsHtml?: string[];
  ordered?: boolean;
  calloutDescription?: string;
  note?: string;
  cols?: {
    md?: number;
    lg?: number;
  };
}

export type DocsWorkflowPageContent<TKey extends string = string> =
  DocsEditorialPageBase<
    "workflow",
    DocsWorkflowHero,
    Record<TKey, DocsWorkflowSection<TKey>>
  >;

export interface DocsComponentSection {
  key: string;
  title: string;
  description?: string;
  descriptionHtml?: string;
  faqItems?: DocsFaqItem[];
}

export interface DocsComponentControlLabel {
  key: string;
  label: string;
}

export type DocsLooseLabelGroup = Record<string, any>;

export interface DocsComponentPageLabels {
  controls: DocsComponentControlLabel[];
  checkboxText?: DocsLooseLabelGroup;
  switchText?: DocsLooseLabelGroup;
  radioText?: DocsLooseLabelGroup;
  links?: DocsLooseLabelGroup;
  buttonText?: DocsLooseLabelGroup;
  formText?: DocsLooseLabelGroup;
  stateText?: DocsLooseLabelGroup;
  accessibilityText?: DocsLooseLabelGroup;
  integrationText?: DocsLooseLabelGroup;
  [key: string]: DocsLooseLabelGroup | DocsComponentControlLabel[] | undefined;
}

export interface DocsComponentPageContent {
  kind: "component";
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description?: string;
    descriptionHtml?: string;
  };
  sections: DocsComponentSection[];
  labels: DocsComponentPageLabels;
}

export const tabsCodeSnippets = {
  visualVariantsTemplateCode: `<ETabGroup v-model="defaultTab">
  <ETab value="overview">Overview</ETab>
  <ETab value="activity">Activity</ETab>
  <ETab value="settings">Settings</ETab>
</ETabGroup>

<ETabGroup
  v-model="trackedTab"
  color="success"
  inactive-color="secondary"
  track
>
  <ETab value="overview">Overview</ETab>
  <ETab value="activity">Activity</ETab>
  <ETab value="settings">Settings</ETab>
</ETabGroup>

<ETabGroup v-model="iconTab" color="primary" track>
  <ETab value="design" :icon="$icon.designSystem">Design</ETab>
  <ETab value="docs" :icon="$icon.introduction">Documentation</ETab>
  <ETab value="releases" :icon="$icon.gettingStarted">Releases</ETab>
</ETabGroup>`,

  alignmentTemplateCode: `<ETabGroup v-model="tab" tab-align="start" track>
  <ETab value="overview">Overview</ETab>
  <ETab value="activity">Activity</ETab>
</ETabGroup>

<ETabGroup v-model="tab" tab-align="center" track>
  <ETab value="overview">Overview</ETab>
  <ETab value="activity">Activity</ETab>
</ETabGroup>

<ETabGroup v-model="tab" grow track>
  <ETab value="overview">Overview</ETab>
  <ETab value="activity">Activity</ETab>
</ETabGroup>`,

  orientationTemplateCode: `<div class="tabs-layout">
  <ETabGroup
    v-model="activeTab"
    name="foundation-tabs"
    vertical
    tab-align="start"
    track
  >
    <ETab value="foundation">Foundation</ETab>
    <ETab value="components">Components</ETab>
    <ETab value="utilities">Utilities</ETab>
  </ETabGroup>

  <EWindow v-model="activeTab" name="foundation-tabs">
    <EWindowItem value="foundation">Foundation content</EWindowItem>
    <EWindowItem value="components">Components content</EWindowItem>
    <EWindowItem value="utilities">Utilities content</EWindowItem>
  </EWindow>
</div>`,
  orientationTsCode: `const activeTab = ref('foundation')`,

  contentPanelsTemplateCode: `<ETabGroup v-model="activeTab" name="account-tabs" track>
  <ETab value="overview">Overview</ETab>
  <ETab value="activity">Activity</ETab>
  <ETab value="settings">Settings</ETab>
</ETabGroup>

<EWindow v-model="activeTab" name="account-tabs">
  <EWindowItem value="overview">Overview content</EWindowItem>
  <EWindowItem value="activity">Activity content</EWindowItem>
  <EWindowItem value="settings">Settings content</EWindowItem>
</EWindow>`,
  contentPanelsTsCode: `const activeTab = ref('overview')`,

  statesTemplateCode: `<ETabGroup v-model="activeTab" track>
  <ETab value="profile">Profile</ETab>
  <ETab value="security">Security</ETab>
  <ETab value="billing" disabled>Billing</ETab>
</ETabGroup>

<EButton outlined @click="activeTab = 'security'">
  Open Security
</EButton>`,
  statesTsCode: `const activeTab = ref('profile')`,

  compositionTemplateCode: `<ETabGroup v-model="activeTab" color="primary" track>
  <ETab value="design" :icon="$icon.designSystem">Design</ETab>
  <ETab value="docs" :icon="$icon.introduction">Documentation</ETab>
  <ETab value="releases" :icon="$icon.gettingStarted">Releases</ETab>
</ETabGroup>`,

  accessibilityTemplateCode: `<ETabGroup
  v-model="activeTab"
  name="workspace-tabs"
  aria-label="Workspace sections"
  track
>
  <ETab value="overview">Overview</ETab>
  <ETab value="activity">Activity</ETab>
  <ETab value="settings">Settings</ETab>
</ETabGroup>

<EWindow v-model="activeTab" name="workspace-tabs">
  <EWindowItem value="overview">Overview content</EWindowItem>
  <EWindowItem value="activity">Activity content</EWindowItem>
  <EWindowItem value="settings">Settings content</EWindowItem>
</EWindow>`,
} as const
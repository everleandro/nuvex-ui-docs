export const listCodeSnippets = {
  itemContentTemplateCode: `<EList outlined inset>
  <EListItem
    :prepend-icon="$icon.account"
    title="Profile"
    subtitle="Account details and preferences"
  />
  <EListItem
    :prepend-avatar="teamAvatar?.avatarSrc"
    title="Design team"
    subtitle="8 active collaborators"
  />
  <EListItem
    :prepend-icon="$icon.cog"
    :append-icon="$icon.arrowRight"
    title="Notifications"
  />
</EList>`,

  visualVariantsTemplateCode: `<EList>
  <EListItem title="Default" subtitle="Default spacing and surface" />
</EList>

<EList outlined inset elevation="sm" size="large">
  <EListItem
    title="Outlined and inset"
    subtitle="Large inherited size"
  />
</EList>

<EList dense size="small">
  <EListItem title="Dense" subtitle="Compact vertical rhythm" />
</EList>`,

  selectionTemplateCode: `<EList v-model="singleSelection" active-color="primary" outlined>
  <EListItem value="available" title="Available" />
  <EListItem value="disabled" title="Disabled item" disabled />
</EList>

<EList
  v-model="multipleSelection"
  active-color="secondary"
  outlined
>
  <EListItem value="inbox" title="Inbox" />
  <EListItem value="drafts" title="Drafts" />
  <EListItem value="archive" title="Archive" />
</EList>`,

  selectionTsCode: `const singleSelection = ref('available')
const multipleSelection = ref(['inbox', 'archive'])`,

  navigationTemplateCode: `<EList inset active-color="primary">
  <EListItem
    :prepend-icon="$icon.home"
    to="/docs"
    title="Overview"
  />
  <EListItem
    :prepend-icon="$icon.navigation"
    to="/docs/component/navigation/list"
    title="List documentation"
  />
  <EListItem
    :prepend-icon="$icon.components"
    to="/docs/component/core-actions/button"
    title="Button documentation"
  />
</EList>`,

  groupsTemplateCode: `<EList
  v-model:group="openGroups"
  outlined
  inset
  active-color="primary"
>
  <EListGroup value="components">
    <template #activator="{ attrs }">
      <EListItem v-bind="attrs" title="Components" />
    </template>

    <EListGroup value="navigation">
      <template #activator="{ attrs }">
        <EListItem v-bind="attrs" title="Navigation" />
      </template>
      <EListItem title="List" />
      <EListItem title="Tabs" />
    </EListGroup>
  </EListGroup>
</EList>`,

  groupsTsCode: `const openGroups = ref(['components', 'components/navigation'])`,

  slotsTemplateCode: `<EList outlined inset>
  <EListItem
    title="Jordan Lee"
    subtitle="Product designer"
  >
    <template #prepend>
      <EAvatar :src="memberAvatar?.avatarSrc" />
    </template>
    <template #append>
      <EButton
        :icon="$icon.dotsMenu"
        text
        size="small"
        aria-label="More actions"
      />
    </template>
  </EListItem>
</EList>`,

  accessibilityTemplateCode: `<EList
  v-model="keyboardSelection"
  active-color="primary"
  outlined
  aria-label="Message folders"
>
  <EListItem
    value="inbox"
    title="Inbox"
    subtitle="12 unread messages"
  />
  <EListItem
    value="drafts"
    title="Drafts"
    subtitle="3 items pending review"
  />
  <EListItem
    value="archive"
    title="Archive"
    subtitle="Completed conversations"
  />
</EList>`,
}
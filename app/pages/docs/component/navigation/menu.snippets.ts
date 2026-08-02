export const menuCodeSnippets = {
  activatorTemplateCode: `<EMenu close-on-content-click fit-content>
  <template #activator="{ attrs }">
    <EButton v-bind="attrs">Slot activator</EButton>
  </template>
  <EList>
    <EListItem title="Edit" />
  </EList>
</EMenu>

<EButton ref="externalActivator">External activator</EButton>
<EMenu :activator="externalActivator" close-on-content-click fit-content>
  <EList>
    <EListItem title="Duplicate" />
  </EList>
</EMenu>`,
  placementTemplateCode: `<EMenu origin="bottom left" :offset-y="8" check-offset>
  <template #activator="{ attrs }">
    <EButton v-bind="attrs">Bottom left</EButton>
  </template>
  <EList>
    <EListItem title="Edit" />
  </EList>
</EMenu>

<EMenu origin="bottom right" :offset-y="8" check-offset>
  <template #activator="{ attrs }">
    <EButton v-bind="attrs">Bottom right</EButton>
  </template>
  <EList>
    <EListItem title="Archive" />
  </EList>
</EMenu>`,
  sizingTemplateCode: `<EMenu >...</EMenu>
<EMenu full-width>...</EMenu>
<EMenu :width="240" :max-width="240" elevation="md">...</EMenu>`,
  transitionsTemplateCode: `<EMenu>
  <template #activator="{ attrs }">
    <EButton v-bind="attrs">Fade (default)</EButton>
  </template>
  <EList>...</EList>
</EMenu>

<EMenu transition="scale">
  <template #activator="{ attrs }">
    <EButton v-bind="attrs">Scale</EButton>
  </template>
  <EList>...</EList>
</EMenu>`,
  stateTemplateCode: `<EMenu ref="menu" v-model="open">
  <template #activator="{ attrs }">
    <EButton v-bind="attrs">Controlled menu</EButton>
  </template>
  <EButton @click="menu?.closeMenu()">Close menu</EButton>
</EMenu>
<EButton @click="menu?.openMenu()">Open menu</EButton>`,
  stateTsCode: `type MenuExposed = { openMenu: () => void; closeMenu: () => void }
const open = ref(false)
const menu = ref<MenuExposed | null>(null)`,
  compositionTemplateCode: `<EMenu
   v-model="filtersOpen"
   :width="280"
   content-role="presentation">
  <template #activator="{ attrs }">
    <EButton v-bind="attrs">Filters</EButton>
  </template>
  <div class="filter-menu">
    <ECheckbox v-model="filters.showArchived" label="Show archived" />
    <ECheckbox v-model="filters.includeDrafts" label="Include drafts" />
    <EButton block @click="filtersOpen = false">Apply</EButton>
  </div>
</EMenu>`,
  compositionTsCode: `const filtersOpen = ref(false)
const filters = ref({ showArchived: false, includeDrafts: true })`,
  nestedTemplateCode: `<EMenu>
  <template #activator="{ attrs }">
    <EButton v-bind="attrs">More actions</EButton>
  </template>
  <EList>
    <EListItem title="Edit" />
    <EMenu fit-content origin="bottom right">
      <template #activator="{ attrs }">
        <EListItem v-bind="attrs" title="Move to" />
      </template>
      <EList>
        <EListItem title="Project" />
        <EListItem title="Personal" />
      </EList>
    </EMenu>
  </EList>
</EMenu>`,
  accessibilityTemplateCode: `<EMenu close-on-content-click fit-content aria-haspopup="menu">
  <template #activator="{ attrs }"><EButton v-bind="attrs">Keyboard menu</EButton></template>
  <EList aria-label="Actions">
    <EListItem title="Edit" />
    <EListItem title="Archive" />
  </EList>
</EMenu>`,
} as const;

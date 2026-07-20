type QuickStartCodeSnippet = {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json' | 'html' | 'css' | 'shell' | 'sh'
}

export const quickStartCodeSnippets: Record<
  'create-layout-base' | 'add-drawer' | 'connect-drawer-state' | 'add-bar-toggle' | 'assemble-initial-structure',
  QuickStartCodeSnippet[]
> = {
  'create-layout-base': [
    {
      label: 'App.vue',
      code: `<template>
  <EApp>
    <EBar app>
      <span class="type-title-2">Workspace</span>
    </EBar>

    <EMain>
      <EContainer class="py-8" max-width="960px">
        <ECard class="pa-6">
          <h1 class="type-h4 mb-2">Start building</h1>
          <p class="type-body mb-0">
            This content area is ready for your first screen.
          </p>
        </ECard>
      </EContainer>
    </EMain>
  </EApp>
</template>`,
  language: 'html',
    },
  ],
  'add-drawer': [
    {
      label: 'App.vue',
      code: `<template>
  <EApp>
    <EBar app>
      <span class="type-title-2">Workspace</span>
    </EBar>

    <EDrawer model-value nav>
      <EList dense>
        <EListItem title="Overview" />
        <EListItem title="Projects" />
        <EListItem title="Settings" />
      </EList>
    </EDrawer>

    <EMain>
      <EContainer class="py-8" max-width="960px">
        <ECard class="pa-6">
          <h1 class="type-h4 mb-2">Start building</h1>
          <p class="type-body mb-0">
            This content area is ready for your first screen.
          </p>
        </ECard>
      </EContainer>
    </EMain>
  </EApp>
</template>`,
  language: 'html',
    },
  ],
  'connect-drawer-state': [
    {
      label: 'App.vue <script setup>',
      code: `const drawerOpen = ref(true)`,
      language: 'ts',
    },
    {
      label: 'App.vue',
      code: `<EDrawer v-model="drawerOpen" nav>
  <EList dense>
    <EListItem title="Overview" />
    <EListItem title="Projects" />
    <EListItem title="Settings" />
  </EList>
</EDrawer>`,
  language: 'html',
    },
  ],
  'add-bar-toggle': [
    {
      label: 'App.vue',
      code: `<EBar app>
  <EButton
    :icon="$icon.menu"
    aria-label="Toggle navigation"
    @click="drawerOpen = !drawerOpen"
  />
  <span class="type-title-2">Workspace</span>
</EBar>`,
      language: 'html',
    },
  ],
  'assemble-initial-structure': [
    {
      label: 'App.vue <script setup>',
      code: `const drawerOpen = ref(true)`,
      language: 'ts',
    },
    {
      label: 'App.vue <template>',
      code: `<template>
  <EApp>
    <EBar app>
      <EButton
        :icon="$icon.menu"
        aria-label="Toggle navigation"
        @click="drawerOpen = !drawerOpen"
      />
      <span class="type-title-2">Workspace</span>
    </EBar>

    <EDrawer v-model="drawerOpen" nav>
      <EList dense>
        <EListItem title="Overview" />
        <EListItem title="Projects" />
        <EListItem title="Settings" />
      </EList>
    </EDrawer>

    <EMain>
      <EContainer class="py-8" max-width="960px">
        <ECard class="pa-6 d-flex flex-column gap-4">
          <div>
            <h1 class="type-h4 mb-2">Start building</h1>
            <p class="type-body mb-0">
              Use this structure as the recommended starting point for your app.
            </p>
          </div>

          <EButton color="primary">Create project</EButton>
        </ECard>
      </EContainer>
    </EMain>
  </EApp>
</template>`,
      language: 'html',
    },
  ],
}
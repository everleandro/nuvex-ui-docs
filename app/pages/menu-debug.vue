<template>
  <EContainer class="menu-debug p-4">
    <h1>Menu Activator Matrix</h1>

    <section class="case-row">
      <h2>1. Slot activator</h2>
      <EMenu v-model="slotOpen" close-on-content-click>
        <template #activator="{ attrs }">
          <EButton color="primary" v-bind="attrs">
            Slot activator
          </EButton>
        </template>
        <div class="menu-panel">Slot menu</div>
      </EMenu>
    </section>

    <section class="case-row">
      <h2>2. Ref activator</h2>
      <EButton :ref="setRefActivator" color="teal-300">Ref activator</EButton>
      <EMenu v-model="refOpen" :activator="refActivator" close-on-content-click>
        <div class="menu-panel">Ref menu</div>
      </EMenu>
    </section>

    <section class="case-row">
      <h2>3. String valid selector</h2>
      <EButton id="valid-activator" color="secondary">String valid</EButton>
      <EMenu v-model="stringValidOpen" activator="#valid-activator" close-on-content-click>
        <div class="menu-panel">String valid menu</div>
      </EMenu>
    </section>

    <section class="case-row">
      <h2>4. String invalid selector</h2>
      <EButton color="warning">String invalid</EButton>
      <EMenu v-model="stringInvalidOpen" activator="#invalid[selector" close-on-content-click>
        <div class="menu-panel">String invalid menu</div>
      </EMenu>
    </section>

    <section class="case-row">
      <h2>5. String empty selector</h2>
      <EButton color="error">String empty</EButton>
      <EMenu v-model="stringEmptyOpen" activator="   " close-on-content-click>
        <div class="menu-panel">String empty menu</div>
      </EMenu>
    </section>
  </EContainer>
</template>

<script setup lang="ts">
const slotOpen = ref(false)
const refOpen = ref(false)
const stringValidOpen = ref(false)
const stringInvalidOpen = ref(false)
const stringEmptyOpen = ref(false)

const refActivator = ref<HTMLElement | null>(null)

const setRefActivator = (value: unknown) => {
  if (value instanceof HTMLElement) {
    refActivator.value = value
    return
  }

  if (value && typeof value === 'object' && '$el' in (value as Record<string, unknown>)) {
    const element = (value as { $el?: unknown }).$el
    refActivator.value = element instanceof HTMLElement ? element : null
    return
  }

  refActivator.value = null
}
</script>

<style scoped>
.menu-debug {
  display: grid;
  gap: 16px;
}

.case-row {
  display: grid;
  gap: 8px;
}

.menu-panel {
  min-width: 180px;
  padding: 12px;
}
</style>

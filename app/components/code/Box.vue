<template>
  <ECard :class="boxClass" elevation="xs">
    <ETabGroup v-model="tab" :color="color" track>
      <slot name="tabs"></slot>
      <template v-if="github">
        <ESpacer />
        <EButton :icon="$icon.fullScreen" @click="fullScreenAction" />
        <EButton :prepend-icon="$icon.gitHub" text small :to="github.url" target="_blank" class="mr-1"
          style="align-self: center">
          <span class="d-none d-lg-block">view on GitHub</span>
        </EButton>
      </template>
    </ETabGroup>
    <ERow gap="0">
      <ECol :lg="showForm ? 7 : 12" cols="12" class="code-box__window-contaier p-4">
        <EWindow v-model="tab" :data-tab-model="tab">
          <slot name="window-item"></slot>
        </EWindow>
      </ECol>
      <template v-if="showForm">
        <ECol lg="5" class="code-box__form-container d-flex">
          <EDivider class="m-0 d-none d-md-block" vertical />
          <div class="p-4 d-flex flex-grow">
            <slot name="form"></slot>
          </div>
        </ECol>
      </template>
    </ERow>
  </ECard>
</template>
<script lang="ts" setup>
import { ref, computed, useSlots, watch } from "vue";
const boxAbsolute = ref(false);
const boxClass = computed(() => {
  return { "code-box--absolute": boxAbsolute.value, "code-box": true };
});
const slots = useSlots();
interface githubInterface {
  title: string;
  url: string;
}
export interface Props {
  color?: string;
  github?: githubInterface;
  initialTab?: string;
}
const props = withDefaults(defineProps<Props>(), {
  initialTab: "design",
});
const tab = ref(props.initialTab);

watch(
  () => props.initialTab,
  (value) => {
    if (value) {
      tab.value = value;
    }
  }
);
const showForm = computed((): boolean => {
  return Boolean(slots.form);
});
const fullScreenAction = () => {
  boxAbsolute.value = !boxAbsolute.value;
};
</script>
<style lang="scss">
.code-box {
  position: relative;

  --card-padding: 0;
  --card-gap: 0;

  &--absolute {
    position: fixed;
    top: 0;
    z-index: 999999;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .e-window {
    height: 100%;

    &-item {
      height: 100%;
    }
  }

}
</style>
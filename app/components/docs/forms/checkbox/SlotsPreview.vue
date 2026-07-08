<template>
  <div class="d-flex flex-column gap-3" style="width: 100%;">
    <ECheckbox v-model="slotChecked" :color="color">
      <template #label>
        I agree to the
        <a href="#" @click.prevent="termsDialogOpen = true">Terms and Conditions</a>
      </template>
    </ECheckbox>

    <EDialog v-model="termsDialogOpen" max-width="420">
      <ECard class="pa-4 d-flex flex-column gap-3">
        <div>
          <div class="text-subtitle-2">Terms and Conditions</div>
          <p class="text-body-2 mt-2 mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, velit ut tristique
            blandit, lectus nibh pharetra massa, id posuere justo nisi vitae arcu.
          </p>
        </div>

        <div class="d-flex justify-end">
          <EButton color="primary" @click="termsDialogOpen = false">Close</EButton>
        </div>
      </ECard>
    </EDialog>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  color: string
}>()

const slotChecked = ref(false)
const termsDialogOpen = ref(false)
</script>
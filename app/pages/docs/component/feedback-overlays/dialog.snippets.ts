export const dialogCodeSnippets = {
  dismissalTemplateCode: `<EButton @click="standardOpen = true">Standard dialog</EButton>
<EDialog v-model="standardOpen" :max-width="440">
  <ECard :title="title" :description="'description">
    <EButton color="primary" block @click="standardOpen = false">Close</EButton>
  </ECard>
</EDialog>

<EButton @click="persistentOpen = true">Persistent dialog</EButton>
<EDialog ref="persistentDialog" v-model="persistentOpen" persistent :max-width="440">
  <ECard :title="title" :description="'description">
    <EButton text @click="persistentDialog?.close(true)">Cancel</EButton>
    <EButton @click="persistentOpen = false">Continue</EButton>
  </ECard>
</EDialog>`,
  dismissalTsCode: `type DialogExposed = { close: (force?: boolean) => void }

const standardOpen = ref(false)
const persistentOpen = ref(false)
const persistentDialog = ref<DialogExposed | null>(null)`,

  visualVariantsTemplateCode: `<EButton @click="compactOpen = true">
  Compact dialog
</EButton>

<EDialog v-model="compactOpen" :max-width="360" elevation="sm">
  <ECard :title="title" :description="description">
    <EButton color="primary" block @click="compactOpen = false">
        Close
    </EButton>
  </ECard>
</EDialog>

<EButton @click="fluidOpen = true">
    Fluid dialog
</EButton>

<EDialog v-model="fluidOpen" fluid :max-width="720" elevation="md">
  <ECard :title="title" :description="description">
    <div class="d-flex justify-end">
        <EButton color="primary" @click="fluidOpen = false">
            Close
        </EButton>
    </div>
  </ECard>
</EDialog>`,
  visualVariantsTsCode: `const compactOpen = ref(false)
const fluidOpen = ref(false)`,

  fullscreenTemplateCode: `<EButton color="primary" @click="fullscreenOpen = true">
    Open Fullscreen Dialog
</EButton>

<EDialog v-model="fullscreenOpen" fullscreen>
    <EBar color="primary" elevation="sm">
        <h2 class="type-h5 text-capitalize">fullscreenTitle</h2>
        <ESpacer />
        <EButton text @click="fullscreenOpen = false">close</EButton>
    </EBar>

    <div class="p-6 d-flex flex-column gap-6">
        <p class="type-body text-center">fullscreenBody</p>
    </div>
</EDialog>`,
  fullscreenTsCode: `const fullscreenOpen = ref(false)`,

  compositionTemplateCode: `<EButton outlined @click="formOpen = true">Open</EButton>
<EDialog v-model="formOpen" :max-width="520">
    <ECard :title="title" :description="description">
        <EForm>
            <ETextfield v-model="invite.name" :label="labelName" />
            <ETextfield v-model="invite.email" type="email" :label="labelEmail" />
        </EForm>
        <div class="d-flex mt-4 justify-end gap-4">
            <EButton text @click="formOpen = false">Cancel</EButton>
            <EButton color="primary" @click="formOpen = false">Save</EButton>
        </div>
    </ECard>
</EDialog>`,
  compositionTsCode: `const formOpen = ref(false)
const invite = ref({ name: '', email: '' })`,

  accessibilityTemplateCode: `<EButton @click="accessibilityOpen = true">
  Open accessible dialog
</EButton>

<EDialog v-model="accessibilityOpen" :max-width="480">
    <ECard :title="title" :description="description">
        <div class="d-flex flex-wrap justify-end gap-2">
            <EButton text @click="accessibilityOpen = false">
                Cancel
            </EButton>
            <EButton color="primary" @click="accessibilityOpen = false">
                Continue
            </EButton>
        </div>
    </ECard>
</EDialog>`,
} as const;

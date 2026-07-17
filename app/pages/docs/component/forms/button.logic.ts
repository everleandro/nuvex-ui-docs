import { computed, ref, type ComputedRef } from "vue";
import { useDocsPlaygroundTabSets } from "~/composables/useDocsPlaygroundTabSets";
import { buildTemplateElementSnippet } from "~/utils/snippet-element";

type ButtonPageContent = {
  labels: any;
};

export const createButtonPlaygroundLogic = (
  content: ComputedRef<ButtonPageContent>,
) => {
  const color = ref("primary");

  const buttonProperty = ref({
    outlined: false,
    loading: false,
    disabled: false,
    block: false,
    rounded: false,
    text: false,
  });

  const colors = ["primary", "secondary", "blue", "warning", "purple"];

  const {
    tabsPlayground,
    tabsDesignTemplate,
    tabsDesignTemplateTs,
    tabsDesignTemplateTsCss,
  } = useDocsPlaygroundTabSets();

  const controlLabel = (key: string): string => {
    return (
      content.value.labels.controls.find((item: any) => item.key === key)
        ?.label ?? key
    );
  };

  const iconLinks = computed(() => {
    return {
      iconsPage: content.value.labels.links?.iconsPage ?? "Icons",
      iconGuidePrefix: content.value.labels.links?.iconGuidePrefix ?? "",
      iconGuideSuffix: content.value.labels.links?.iconGuideSuffix ?? "",
    };
  });

  const buttonTextLabels = computed(() => {
    return {
      preview: content.value.labels.buttonText?.preview ?? "Button",
      delete: content.value.labels.buttonText?.delete ?? "Delete",
      send: content.value.labels.buttonText?.send ?? "Send",
      warning: content.value.labels.buttonText?.warning ?? "warning",
      stop: content.value.labels.buttonText?.stop ?? "Stop",
    };
  });

  const HTMLCode = computed(() => {
    return buildTemplateElementSnippet({
      tag: "e-button",
      attrs: [
        `color="${color.value}"`,
        buttonProperty.value.loading && "loading",
        buttonProperty.value.rounded && "rounded",
        buttonProperty.value.disabled && "disabled",
        buttonProperty.value.text && "text",
        buttonProperty.value.outlined && "outlined",
        buttonProperty.value.block && "block",
      ],
      contentLines: ["button"],
    });
  });

  const sizeHtmlCode = `<template>
  <e-button x-small> x-small </e-button>
  <e-button small> small </e-button>
  <e-button> default </e-button>
  <e-button large> large </e-button>
  <e-button x-large> x-large </e-button>
</template>`;

  const visualVariantsHtmlCode = `<template>
    <e-button color="primary">Default</e-button>
    <e-button color="primary" outlined>Outlined</e-button>
    <e-button color="primary" text>Text</e-button>
    <e-button color="primary" tonal>Tonal</e-button>

    <e-button color="primary" disabled>Default</e-button>
    <e-button color="primary" outlined disabled>Outlined</e-button>
    <e-button color="primary" text disabled>Text</e-button>
    <e-button color="primary" tonal disabled>Tonal</e-button>
</template>`;

  const appendPrependHtmlCode = `<template>
  <e-button prepend-icon="delete">Delete</e-button>
  <e-button prepend-icon="send">Send</e-button>
  <e-button prepend-icon="alert" color="warning">warning</e-button>
  <e-button append-icon="alertBox">Stop</e-button>
</template>`;

  const customSizeHtmlCode = `<template>
  <e-button width="150">width:150px</e-button>
  <e-button width="200">width: 200px</e-button>
  <e-button height="60">height: 60px</e-button>
  <e-button height="70">height: 70px</e-button>
</template>`;

  const commonUseCasesCardHtmlCode = `<template>
    <e-card title="Form Title" subtitle="Enter credentials to enable login" elevation="sm">
        <e-form class="d-flex flex-column gap-3">
            <e-textfield label="Email" prepend-icon="email" placeholder="name@company.com" />
            <e-textfield label="Password" prepend-icon="lock" type="password" placeholder="At least 6 characters" />
        </e-form>

        <e-divider />

        <div class="d-flex gap-2 flex-1">
            <e-spacer />
            <e-button text>Cancel</e-button>
            <e-button color="primary" :loading="submitting" :disabled="!canSubmit">Log in</e-button>
        </div>
    </e-card>
</template>`;

  const commonUseCasesCardTsCode = `const email = ref('')
const password = ref('')
const formIsValid = ref(false)
const submitting = ref(false)

const canSubmit = computed(() => formIsValid.value && !submitting.value)

const submitForm = async () => {
    if (!canSubmit.value) return
    submitting.value = true
    try {
        await new Promise((resolve) => setTimeout(resolve, 900))
    } finally {
        submitting.value = false
    }
}

const resetForm = () => {
    email.value = ''
    password.value = ''
    formIsValid.value = false
}`;

  const commonUseCasesCardCssCode = `.e-card {
    width: 400px;
    --e-color-input: var(--card-text);
    --e-color-disabled: rgba(155, 155, 155, 0.5);
    --e-contrast-disabled: rgba(255, 255, 255, 0.68);
}`;

  const iconHtmlCode = `<template>
  <e-button x-small :icon="iconSend" />
  <e-button small :icon="iconSend" />
  <e-button :icon="iconSend" />
  <e-button large :icon="iconSend" />
  <e-button x-large :icon="iconSend" />
  <e-button text x-small icon="music" />
  <e-button text small icon="music" />
  <e-button text icon="music" />
  <e-button text large icon="music" />
  <e-button text x-large icon="music" />
</template>`;

  const iconTsCode = `import { IconPath } from "drocket";
const iconSend: IconPath = {
  title: "send",
  d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
};`;

  return {
    color,
    buttonProperty,
    colors,
    tabsPlayground,
    tabsDesignTemplate,
    tabsDesignTemplateTs,
    tabsDesignTemplateTsCss,
    controlLabel,
    iconLinks,
    buttonTextLabels,
    HTMLCode,
    sizeHtmlCode,
    visualVariantsHtmlCode,
    appendPrependHtmlCode,
    customSizeHtmlCode,
    commonUseCasesCardHtmlCode,
    commonUseCasesCardTsCode,
    commonUseCasesCardCssCode,
    iconHtmlCode,
    iconTsCode,
  };
};

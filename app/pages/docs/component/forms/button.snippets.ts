export const buttonCodeSnippets = {
  sizeHtmlCode: `<template>
  <e-button x-small> x-small </e-button>
  <e-button small> small </e-button>
  <e-button> default </e-button>
  <e-button large> large </e-button>
  <e-button x-large> x-large </e-button>
</template>`,

  visualVariantsHtmlCode: `<template>
    <e-button color="primary">Default</e-button>
    <e-button color="primary" outlined>Outlined</e-button>
    <e-button color="primary" text>Text</e-button>
    <e-button color="primary" tonal>Tonal</e-button>

    <e-button color="primary" disabled>Default</e-button>
    <e-button color="primary" outlined disabled>Outlined</e-button>
    <e-button color="primary" text disabled>Text</e-button>
    <e-button color="primary" tonal disabled>Tonal</e-button>
</template>`,

  appendPrependHtmlCode: `<template>
  <e-button prepend-icon="delete">Delete</e-button>
  <e-button prepend-icon="send">Send</e-button>
  <e-button prepend-icon="alert" color="warning">warning</e-button>
  <e-button append-icon="alertBox">Stop</e-button>
</template>`,

  customSizeHtmlCode: `<template>
  <e-button width="150">width:150px</e-button>
  <e-button width="200">width: 200px</e-button>
  <e-button height="60">height: 60px</e-button>
  <e-button height="70">height: 70px</e-button>
</template>`,

    commonUseCasesBarHtmlCode: `<template>
    <e-bar class="docs-page__button-integration-bar" outlined>
      <e-button :icon="$icon.menu" text />
      <app-logo />
      <e-spacer />
      <e-button :prepend-icon="$icon.plus" tonal>New</e-button>
      <e-button :icon="$icon.bellOutline" text />
      <e-avatar :src="getAvatarByIndex(0)?.avatarSrc" />
    </e-bar>
  </template>`,

  iconHtmlCode: `<template>
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
</template>`,

  iconTsCode: `import { IconPath } from "drocket";
const iconSend: IconPath = {
  title: "send",
  d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
};`,
} as const
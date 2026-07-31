import { computed, ref, type ComputedRef } from "vue";
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
  };
};

export const barCodeSnippets = {
  contentActionsTemplateCode: `<EBar outlined>
    <EButton text icon="menu" aria-label="aria-label-text" />
    <span class="type-h6">title</span>
    <ESpacer />
    <EButton text icon="magnify" aria-label="aria-label-text" />
</EBar>`,

  densityTemplateCode: `<EBar dense color="blue">
    <span class="title">title</span>
    <ESpacer />
    <div class="d-flex gap-0">
        <EButton text size="small" icon="heart" aria-label="aria-label-text" />
        <EButton text size="small" icon="magnify" aria-label="aria-label-text" />
        <EButton text size="small" icon="dotsMenu" aria-label="aria-label-text" />
    </div>
</EBar>`,
} as const;

<template>
  <article class="docs-page menu-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title"
      :description-html="sections.usage.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
        <template #panel-design>
          <EMenu v-model="usageOpen" :origin="menuProperty.origin" :color="color"
            :elevation="menuProperty.elevation != 'default' ? menuProperty.elevation : undefined"
            :fit-content="menuProperty.fitContent" :full-width="menuProperty.fullWidth"
            :close-on-content-click="menuProperty.closeOnContentClick" :check-offset="menuProperty.checkOffset"
            :disable-menu="menuProperty.disableMenu">
            <template #activator="{ attrs }">
              <EButton v-bind="attrs" :color="color" :append-icon="$icon.arrowDown">
                {{ menuLabel('openActions') }}
              </EButton>
            </template>
            <EList class="menu-page__surface">
              <EListItem :prepend-icon="$icon.pencil" :title="menuLabel('edit')" />
              <EListItem :prepend-icon="$icon.layersOutline" :title="menuLabel('duplicate')" />
              <EListItem :prepend-icon="$icon.trash" :title="menuLabel('archive')" />
            </EList>
          </EMenu>
        </template>
        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="menuProperty.origin" cols="24" :items="origins" :label="controlLabel('origin')" />
            <ESelect v-model="color" cols="24" :items="colors" :label="controlLabel('color')" clearable />
            <ESelect v-model="menuProperty.elevation" cols="24" :items="elevations"
              :label="controlLabel('elevation')" />
            <ECheckbox v-model="menuProperty.fitContent" cols="24" :label="controlLabel('fitContent')" />
            <ECheckbox v-model="menuProperty.fullWidth" cols="24" :label="controlLabel('fullWidth')" />
            <ECheckbox v-model="menuProperty.closeOnContentClick" cols="24"
              :label="controlLabel('closeOnContentClick')" />
            <ECheckbox v-model="menuProperty.checkOffset" cols="24" :label="controlLabel('checkOffset')" />
            <ECheckbox v-model="menuProperty.disableMenu" cols="24" :label="controlLabel('disableMenu')" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['activator-patterns'].key" :title="sections['activator-patterns'].title"
      :description-html="sections['activator-patterns'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ERow>
            <ECol cols="6">
              <EMenu close-on-content-click fit-content>
                <template #activator="{ attrs }">
                  <EButton v-bind="attrs" color="primary">{{ menuLabel('slotActivator') }}</EButton>
                </template>
                <EList>
                  <EListItem :title="menuLabel('edit')" />
                </EList>
              </EMenu>
            </ECol>
            <ECol cols="6">
              <EButton ref="externalActivator" outlined>{{ menuLabel('externalActivator') }}</EButton>
              <EMenu :activator="externalActivator" close-on-content-click fit-content>
                <EList>
                  <EListItem :title="menuLabel('duplicate')" />
                </EList>
              </EMenu>
            </ECol>
          </ERow>
        </template>
        <template #panel-template>
          <CodePanel :code="activatorTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['placement-offsets'].key" :title="sections['placement-offsets'].title"
      :description-html="sections['placement-offsets'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ERow>
            <ECol cols="6">
              <EMenu origin="bottom left" :offset-y="8" check-offset fit-content close-on-content-click>
                <template #activator="{ attrs }">
                  <EButton v-bind="attrs" outlined>{{ menuLabel('leftAligned') }}</EButton>
                </template>
                <EList>
                  <EListItem :title="menuLabel('edit')" />
                </EList>
              </EMenu>
            </ECol>
            <ECol cols="6">
              <EMenu origin="bottom right" :offset-y="8" check-offset fit-content close-on-content-click>
                <template #activator="{ attrs }">
                  <EButton v-bind="attrs" outlined>{{ menuLabel('rightAligned') }}</EButton>
                </template>
                <EList>
                  <EListItem :title="menuLabel('archive')" />
                </EList>
              </EMenu>
            </ECol>
          </ERow>
        </template>
        <template #panel-template>
          <CodePanel :code="placementTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['sizing-surface'].key" :title="sections['sizing-surface'].title"
      :description-html="sections['sizing-surface'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ERow>
            <ECol sm="4">
              <EMenu fit-content close-on-content-click>
                <template #activator="{ attrs }">
                  <EButton v-bind="attrs" text>{{ menuLabel('compact') }}</EButton>
                </template>
                <EList>
                  <EListItem :title="menuLabel('edit')" />
                </EList>
              </EMenu>
            </ECol>
            <ECol sm="4">
              <EMenu full-width close-on-content-click>
                <template #activator="{ attrs }">
                  <EButton v-bind="attrs" outlined class="menu-page__wide-activator">{{ menuLabel('matchActivator') }}
                  </EButton>
                </template>
                <EList>
                  <EListItem :title="menuLabel('duplicate')" />
                </EList>
              </EMenu>
            </ECol>
            <ECol sm="4">
              <EMenu :width="240" :max-width="240" elevation="md" close-on-content-click>
                <template #activator="{ attrs }">
                  <EButton v-bind="attrs" tonal>{{ menuLabel('fixedWidth') }}</EButton>
                </template>
                <EList>
                  <EListItem :title="menuLabel('archive')" />
                </EList>
              </EMenu>
            </ECol>
          </ERow>
        </template>
        <template #panel-template>
          <CodePanel :code="sizingTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.transitions.key" :title="sections.transitions.title"
      :description-html="sections.transitions.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ERow>
            <ECol cols="6">
              <EMenu close-on-content-click>
                <template #activator="{ attrs }">
                  <EButton v-bind="attrs" outlined>{{ menuLabel('defaultFade') }}</EButton>
                </template>
                <EList>
                  <EListItem :title="menuLabel('edit')" />
                  <EListItem :title="menuLabel('duplicate')" />
                </EList>
              </EMenu>
            </ECol>
            <ECol cols="6">
              <EMenu transition="scale" fit-content close-on-content-click>
                <template #activator="{ attrs }">
                  <EButton v-bind="attrs" outlined>{{ menuLabel('scaleTransition') }}</EButton>
                </template>
                <EList>
                  <EListItem :title="menuLabel('edit')" />
                  <EListItem :title="menuLabel('duplicate')" />
                </EList>
              </EMenu>
            </ECol>
          </ERow>
        </template>
        <template #panel-template>
          <CodePanel :code="transitionsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['open-close-states'].key" :title="sections['open-close-states'].title"
      :description-html="sections['open-close-states'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <ERow>
            <ECol sm="4">
              <EMenu ref="controlledMenu" v-model="controlledOpen" :close-on-content-click="false">
                <template #activator="{ attrs }">
                  <EButton v-bind="attrs" block color="primary">{{ menuLabel('controlledMenu') }}</EButton>
                </template>
                <div class="menu-page__interactive-content">
                  <EButton size="small" block text @click="controlledMenu?.closeMenu()">{{ menuLabel('closeMenu') }}
                  </EButton>
                </div>
              </EMenu>
            </ECol>
            <ECol sm="4">
              <EButton block color="primary" outlined @click="controlledMenu?.openMenu()">{{ menuLabel('openMenu') }}
              </EButton>
            </ECol>
            <ECol sm="4">
              <EButton text block color="primary" @click="controlledMenu?.closeMenu()">{{ menuLabel('closeMenu') }}
              </EButton>
            </ECol>
          </ERow>
        </template>
        <template #panel-template>
          <CodePanel :code="stateTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="stateTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['composition-patterns'].key" :title="sections['composition-patterns'].title"
      :description-html="sections['composition-patterns'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <EMenu v-model="filtersOpen" :close-on-content-click="false" :width="280" content-role="presentation">
            <template #activator="{ attrs }">
              <EButton v-bind="attrs" :prepend-icon="$icon.cog" outlined>{{ menuLabel('filters') }}</EButton>
            </template>
            <div class="menu-page__interactive-content">
              <ECheckbox v-model="filters.showArchived" :label="menuLabel('showArchived')" />
              <ECheckbox v-model="filters.includeDrafts" :label="menuLabel('includeDrafts')" />
              <EButton block color="primary" @click="filtersOpen = false">{{ menuLabel('apply') }}</EButton>
            </div>
          </EMenu>
        </template>
        <template #panel-template>
          <CodePanel :code="compositionTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="compositionTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['nested-menus'].key" :title="sections['nested-menus'].title"
      :description-html="sections['nested-menus'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <EMenu>
            <template #activator="{ attrs }">
              <EButton v-bind="attrs" :append-icon="$icon.arrowDown">{{ menuLabel('moreActions') }}</EButton>
            </template>
            <EList>
              <EListItem :title="menuLabel('edit')" />
              <EMenu fit-content origin="bottom right">
                <template #activator="{ attrs }">
                  <EListItem v-bind="attrs" :title="menuLabel('moveTo')" :append-icon="$icon.arrowRight" />
                </template>
                <EList>
                  <EListItem :title="menuLabel('project')" />
                  <EListItem :title="menuLabel('personal')" />
                </EList>
              </EMenu>
            </EList>
          </EMenu>
        </template>
        <template #panel-template>
          <CodePanel :code="nestedTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.accessibility.key" :title="sections.accessibility.title"
      :description-html="sections.accessibility.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <div>
            <EMenu close-on-content-click aria-haspopup="menu">
              <template #activator="{ attrs }">
                <EButton v-bind="attrs" :append-icon="$icon.arrowDown">{{ menuLabel('keyboardMenu') }}</EButton>
              </template>
              <EList aria-label="Actions">
                <EListItem :title="menuLabel('edit')" />
                <EListItem :title="menuLabel('archive')" />
              </EList>
            </EMenu>
            <p class="type-caption text-medium-emphasis my-4">{{ menuLabel('keyboardHint') }}</p>
          </div>
        </template>
        <template #panel-template>
          <CodePanel :code="accessibilityTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <div class="menu-page__api-table">
        <DocsApiTable :api-reference="localizedMenuApiReference" />
      </div>
      <h3 class="type-h5 text-heading mt-6 mb-2">{{ menuLabel('apiEvents') }}</h3>
      <p class="type-body">{{ menuLabel('apiEventsBody') }}</p>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { menuApiReference } from '~/api-reference/navigation/menu'
import { menuApiReferenceEs } from '~/api-reference/navigation/menu-es'
import { menuCodeSnippets } from './menu.snippets'
import { buildTemplateElementSnippet } from "~/utils/snippet-element";

type MenuSectionKey = 'usage' | 'activator-patterns' | 'placement-offsets' | 'sizing-surface' | 'transitions'
  | 'open-close-states' | 'composition-patterns' | 'nested-menus' | 'accessibility' | 'props'
type MenuExposed = { openMenu: () => void; closeMenu: () => void }

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.menu.menu')
const getRequiredSection = (key: MenuSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)
  if (!section) throw createError({ statusCode: 500, statusMessage: `Menu documentation section missing: ${key}` })
  return section
}
const sections = computed(() => ({
  usage: getRequiredSection('usage'),
  'activator-patterns': getRequiredSection('activator-patterns'),
  'placement-offsets': getRequiredSection('placement-offsets'),
  'sizing-surface': getRequiredSection('sizing-surface'),
  transitions: getRequiredSection('transitions'),
  'open-close-states': getRequiredSection('open-close-states'),
  'composition-patterns': getRequiredSection('composition-patterns'),
  'nested-menus': getRequiredSection('nested-menus'),
  accessibility: getRequiredSection('accessibility'),
  props: getRequiredSection('props'),
}))

useSeoMeta({ title: computed(() => content.value.seo.title), description: computed(() => content.value.seo.description) })

const usageOpen = ref(false)
const controlledOpen = ref(false)
const filtersOpen = ref(false)
const controlledMenu = ref<MenuExposed | null>(null)
const externalActivator = ref<HTMLElement | null>(null)
const color = ref<string | undefined>('primary')
const origins = ['bottom left', 'bottom right', 'top left', 'top right']
const colors = ['primary', 'secondary', 'success', 'warning']
const elevations = ['xs', 'sm', 'md', 'lg', 'xl', 'default']
const menuProperty = ref({ fitContent: false, fullWidth: false, elevation: 'default', closeOnContentClick: true, origin: 'bottom left', checkOffset: true, disableMenu: false })
const filters = ref({ showArchived: false, includeDrafts: true })

const { tabsDesignTemplate, tabsDesignTemplateTs, tabsPlayground } = useDocsPlaygroundTabSets()
const controlLabel = (key: string): string => content.value.labels.controls.find((item) => item.key === key)?.label ?? key
const menuLabel = (key: string): string => {
  const labels = content.value.labels.menuText
  return labels && !Array.isArray(labels) ? labels[key] ?? key : key
}
const usageTemplateCode = computed(() => {
  return buildTemplateElementSnippet({
    tag: "e-menu",
    attrs: [
      'v-model="menuModel"',
      color.value && `color="${color.value}"`,
      menuProperty.value.fitContent && "fit-content",
      menuProperty.value.origin && `origin="${menuProperty.value.origin}"`,
      menuProperty.value.fullWidth && "full-width",
      menuProperty.value.closeOnContentClick && "close-on-content-click",
      menuProperty.value.checkOffset && "check-offset",
      menuProperty.value.elevation != "default" && `elevation="${menuProperty.value.elevation}"`,
      menuProperty.value.disableMenu && "disabled",
    ],
    contentLines: [`<template #activator="{ attrs }">
      <EButton v-bind="attrs" :append-icon="$icon.arrowDown">Open actions</EButton>
    </template>
    <EList>
      <EListItem title="Edit" />
      <EListItem title="Duplicate" />
      <EListItem title="Archive" />
    </EList>`],
  });
});
const localizedMenuApiReference = computed(() => locale.value === 'es' ? menuApiReferenceEs : menuApiReference)
const { activatorTemplateCode, placementTemplateCode,
  sizingTemplateCode, transitionsTemplateCode, stateTemplateCode, stateTsCode, compositionTemplateCode, compositionTsCode,
  nestedTemplateCode, accessibilityTemplateCode,
} = menuCodeSnippets
</script>

<style scoped lang="scss">
.menu-page__surface {
  min-width: 200px;
}
</style>

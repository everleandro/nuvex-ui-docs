import type { DocsInstallationEditorialContent } from "~/types/docs";

export const installationEditorialContent: DocsInstallationEditorialContent = {
  seo: {
    title: "Installation",
    description:
      "Install Nuvex UI, register the plugin, and load the base styles so your project is ready before moving into components, theming, or layout.",
  },
  hero: {
    title: "Installation",
    description:
      "Install Nuvex UI, register the plugin, and load the base styles so your project is ready before moving into components, theming, or layout.",
    prerequisitesTitle: "Before you start",
    actions: {
      installPackage: "Install with npm",
      nuxtIntegration: "View Nuxt Integration",
    },
    prerequisites: [
      "Vue 3 or Nuxt 4.",
      "An existing project scaffold.",
      "Sass installed if you plan to import framework.scss.",
    ],
  },
  sections: {
    "choose-path": {
      title: "Choose your starting point",
      description:
        "The base installation is short, but the file you need to touch changes with your stack.",
      items: [
        {
          title: "Vue + Vite",
          description:
            "Register Nuvex UI in main.ts and load global styles during app startup.",
        },
        {
          title: "Nuxt",
          description:
            "Register Nuvex UI in a plugin and load styles from nuxt.config.ts in the correct order.",
        },
      ],
    },
    "install-package": {
      title: "Install the package",
      description:
        "Choose the package manager you use in your project. If you plan to import framework.scss, install sass as well.",
      calloutDescription:
        "If you skip sass, the nuvex-ui/framework.scss import will fail at build time.",
    },
    "register-vue": {
      title: "Minimum registration in Vue + Vite",
      description:
        "In a Vue app, register the plugin in main.ts and load styles.css first, then framework.scss.",
    },
    "register-nuxt": {
      title: "Minimum registration in Nuxt",
      description:
        "In Nuxt, register the plugin in app/plugins/nuvex-ui.ts and load styles from nuxt.config.ts.",
      calloutDescription:
        "This is the minimum setup required to install the library. Theme persistence, refined SSR behavior, and custom storage belong in a later integration or theming guide.",
    },
    "first-render": {
      title: "Render a first component",
      description:
        "Before moving into theming or layout, confirm that the library already renders a simple component.",
    },
    "verify-installation": {
      title: "Verify the installation",
      description:
        "Use this list to confirm the base setup is correct before moving into other guides.",
      items: [
        "The app compiles without Sass errors.",
        "The first component looks styled instead of rendering as unstyled HTML.",
        "An EButton renders without component registration warnings.",
        "Framework classes and base component styling are already visible if you imported framework.scss.",
      ],
    },
    "common-pitfalls": {
      title: "Common pitfalls",
      description:
        "These setup issues usually show up when installing the library for the first time and are worth resolving before moving on.",
      items: [
        {
          title: "framework.scss does not compile",
          description:
            "Install sass in your project before importing nuvex-ui/framework.scss.",
        },
        {
          title: "Styles do not look as expected",
          description:
            "Verify load order: nuvex-ui/styles.css first, then nuvex-ui/framework.scss.",
        },
        {
          title: "Components do not appear",
          description:
            "Confirm that you registered NuvexUI with app.use(NuvexUI) or defineNuxtPlugin.",
        },
        {
          title: "My Sass variables do not apply",
          description:
            "If you plan to customize framework.scss, define your variables before importing the framework from your global stylesheet or your project's Sass configuration.",
        },
      ],
    },
    "next-steps": {
      title: "Recommended next step",
      description:
        "Once the base installation is in place, the next step depends on whether you want to try components, structure screens, or customize the theme.",
      items: [
        {
          title: "Quick Start",
          description:
            "Build a first screen and confirm the base workflow with the library.",
        },
        {
          title: "Button",
          description:
            "Use a real Type B page as the first reference after setup.",
        },
        {
          title: "Theming Overview",
          description:
            "Continue with tokens, CSS variables, and theme customization.",
        },
        {
          title: "App Shell",
          description:
            "Move into layout once the base setup is already stable.",
        },
      ],
    },
  },
};

export const installationPages = {
  installation: installationEditorialContent,
} as const;

export default installationPages;

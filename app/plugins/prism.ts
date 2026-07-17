import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-json"; // need this for json
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

Prism.manual = true;

const renderHighlightedBlock = (el: HTMLDivElement, binding: Record<string, any>) => {
  const className = binding.value?.class || binding.value || "language-markup";
  const pre = document.createElement("pre");
  const code = document.createElement("code");
  const codeText = typeof binding.value?.code === "string" ? binding.value.code : el.textContent || "";

  pre.setAttribute("data-start", String(binding.value?.dataStart || "1"));

  const lineNumbersEnabled = binding.value?.lineNumbers !== false;

  const classTokens = String(className)
    .split(/\s+/)
    .map((value) => value.trim())
    .filter(Boolean);

  pre.classList.add(...classTokens);
  if (lineNumbersEnabled) {
    pre.classList.add("line-numbers");
  }

  code.classList.add(...classTokens);
  code.setAttribute("data-prismjs-copy", "COPY");
  code.textContent = codeText;

  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }

  pre.appendChild(code);
  el.appendChild(pre);
  Prism.highlightAllUnder(el);
};

export const prism = {
  mounted(el: HTMLDivElement, binding: Record<string, any>) {
    renderHighlightedBlock(el, binding);
  },
  updated: function (el: HTMLDivElement, binding: Record<string, any>) {
    renderHighlightedBlock(el, binding);
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("prism", prism);
});
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-json"; // need this for json

Prism.manual = true;

const renderHighlightedBlock = (el: HTMLDivElement, binding: Record<string, any>) => {
  let className = binding.value?.class || binding.value || "language-markup";
  const pre = document.createElement("pre");
  const code = document.createElement("code");

  pre.setAttribute("data-start", String(binding.value?.dataStart || "1"));

  const lineNumbersEnabled = binding.value?.lineNumbers !== false;
  if (lineNumbersEnabled) {
    className = `${className} line-numbers`;
  }

  const classTokens = String(className)
    .split(/\s+/)
    .map((value) => value.trim())
    .filter(Boolean);
  code.classList.add(...classTokens);
  code.setAttribute("data-prismjs-copy", "COPY");

  for (let i = 0; i < el.childNodes.length; i++) {
    const node = el.childNodes.item(i);
    if (!node) {
      continue;
    }
    code.appendChild(node.cloneNode(true));
  }

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
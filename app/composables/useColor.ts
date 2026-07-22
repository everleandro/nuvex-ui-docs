const colorToHex = (color: string): string => {
  if (!color) {
    return "";
  }

  const value = color.trim();

  // Ya es HEX
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)) {
    return value.toUpperCase();
  }

  // RGB / RGBA
  const rgb = value.match(/\d+(\.\d+)?/g);

  if (!rgb || rgb.length < 3) {
    return "";
  }

  const [r, g, b] = rgb.map(Number);

  return (
    "#" +
    [r, g, b]
      .map((channel) =>
        Math.round(channel || 0)
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
      .toUpperCase()
  );
};
const getCssVar = (name: string, fallback = "") => {
  if (import.meta.server) {
    return fallback;
  }
  const result = getComputedStyle(document.documentElement)
    .getPropertyValue(`--e-palette-${name}`)
    .trim();
  return result ? colorToHex(result) : fallback;
};
export const useColor = () => {
  return {
    getCssVar,
  };
};

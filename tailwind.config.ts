import type { Config } from "tailwindcss";

function withOpacity(variableName: string) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary":  withOpacity("--color-primary"),
        "color-background": withOpacity("--color-background"),
        "color-text": withOpacity("--color-text"),
      },
    },
  },
  plugins: [],
} satisfies Config;

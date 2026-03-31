import nextPlugin from "@next/eslint-plugin-next";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ...nextPlugin.flatConfig.coreWebVitals,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...nextPlugin.flatConfig.coreWebVitals.rules,
      "@next/next/no-img-element": "off",
    },
  },
];

export default config;

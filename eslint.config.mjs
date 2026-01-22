import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";
import promise from "eslint-plugin-promise";
import reactCompiler from "eslint-plugin-react-compiler";

const eslintConfig = defineConfig([
  // Next.js core web vitals (includes react, react-hooks, jsx-a11y)
  ...nextVitals,
  ...nextTs,

  // SonarJS recommended rules (all bug detection & code quality rules)
  sonarjs.configs.recommended,

  // Global ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "*.config.js",
    "*.config.mjs",
  ]),

  // TypeScript strict configuration
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
      unicorn,
      promise,
      "react-compiler": reactCompiler,
    },
    rules: {
      // ============================================================
      // REACT COMPILER (Prevents leaked renders, stale closures)
      // ============================================================
      "react-compiler/react-compiler": "error",

      // ============================================================
      // TYPESCRIPT - Strict Type Safety
      // ============================================================
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": true,
          "ts-nocheck": true,
          "ts-check": false,
        },
      ],
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-unsafe-function-type": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",

      // ============================================================
      // REACT HOOKS - Prevent Leaked Renders & Stale State
      // ============================================================
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      // ============================================================
      // REACT - Best Practices & Performance
      // ============================================================
      "react/jsx-key": ["error", { checkFragmentShorthand: true }],
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
      "react/no-array-index-key": "warn",
      "react/self-closing-comp": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/jsx-boolean-value": ["error", "never"],
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
      "react/jsx-no-constructed-context-values": "error",
      "react/no-danger": "warn",

      // ============================================================
      // IMPORTS - Clean Dependencies & Order
      // ============================================================
      "import/no-duplicates": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-cycle": "error",
      "import/no-self-import": "error",
      "import/no-useless-path-segments": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "type",
          ],
          "newlines-between": "never",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // ============================================================
      // UNICORN - Modern JavaScript Best Practices
      // ============================================================
      "unicorn/prefer-node-protocol": "error",
      "unicorn/no-array-for-each": "error",
      "unicorn/no-for-loop": "error",
      "unicorn/prefer-array-flat-map": "error",
      "unicorn/prefer-array-find": "error",
      "unicorn/prefer-array-some": "error",
      "unicorn/prefer-includes": "error",
      "unicorn/prefer-string-slice": "error",
      "unicorn/prefer-string-starts-ends-with": "error",
      "unicorn/prefer-string-trim-start-end": "error",
      "unicorn/prefer-number-properties": "error",
      "unicorn/prefer-optional-catch-binding": "error",
      "unicorn/prefer-spread": "error",
      "unicorn/prefer-ternary": ["error", "only-single-line"],
      "unicorn/no-null": "off", // React uses null
      "unicorn/no-useless-undefined": ["error", { checkArguments: false }],
      "unicorn/no-array-reduce": "off", // Sometimes useful
      "unicorn/prevent-abbreviations": "off", // Too aggressive
      "unicorn/filename-case": "off", // Next.js has conventions
      "unicorn/no-nested-ternary": "off", // Sometimes cleaner
      "unicorn/consistent-function-scoping": "error",
      "unicorn/error-message": "error",
      "unicorn/throw-new-error": "error",
      "unicorn/prefer-regexp-test": "error",
      "unicorn/no-lonely-if": "error",
      "unicorn/prefer-date-now": "error",
      "unicorn/prefer-modern-math-apis": "error",
      "unicorn/prefer-negative-index": "error",
      "unicorn/no-typeof-undefined": "error",
      "unicorn/no-useless-promise-resolve-reject": "error",
      "unicorn/switch-case-braces": ["error", "avoid"],

      // ============================================================
      // SONARJS - Override specific rules
      // ============================================================
      "sonarjs/no-duplicate-string": "off", // Too noisy for UI strings
      "sonarjs/cognitive-complexity": ["warn", 20],

      // ============================================================
      // PROMISES - Async Safety
      // ============================================================
      "promise/catch-or-return": "error",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/no-nesting": "warn",
      "promise/no-promise-in-callback": "warn",
      "promise/no-callback-in-promise": "warn",
      "promise/no-return-in-finally": "error",
      "promise/valid-params": "error",

      // ============================================================
      // JAVASCRIPT - Core Rules
      // ============================================================
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-alert": "error",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "prefer-arrow-callback": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-destructuring": [
        "error",
        {
          array: false,
          object: true,
        },
      ],
      "no-param-reassign": ["error", { props: false }],
      "no-nested-ternary": "off",
      "no-unneeded-ternary": "error",
      "no-else-return": ["error", { allowElseIf: false }],
      "no-lonely-if": "error",
      "no-useless-return": "error",
      "no-useless-rename": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-empty-function": ["error", { allow: ["arrowFunctions"] }],
      "no-duplicate-imports": "off",
      eqeqeq: ["error", "always", { null: "ignore" }],
      curly: ["error", "all"],
      "default-case-last": "error",
      "dot-notation": "error",
      "grouped-accessor-pairs": ["error", "getBeforeSet"],
      "no-implicit-coercion": ["error", { allow: ["!!"] }],
      "no-multi-assign": "error",
      "no-return-assign": ["error", "always"],
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
      "object-shorthand": "error",
      "operator-assignment": ["error", "always"],
      radix: "error",
      "require-await": "error",
      "spaced-comment": ["error", "always", { markers: ["/"] }],
      yoda: "error",

      // ============================================================
      // ACCESSIBILITY (jsx-a11y) - Critical for SEO
      // ============================================================
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/html-has-lang": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/scope": "error",
      "jsx-a11y/tabindex-no-positive": "error",
    },
  },
]);

export default eslintConfig;

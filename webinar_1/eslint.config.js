import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  // Базовая конфигурация для всех JS файлов
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      prettier: prettierPlugin
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettier.rules,
      
      // Prettier integration
      "prettier/prettier": "error",
      
      // Ошибки и предупреждения
      "no-unused-vars": "error",
      "no-console": "warn",
      "no-debugger": "error",
      
      // Лучшие практики (стилевые правила убраны, так как их обрабатывает Prettier)
      "eqeqeq": "error",
      "curly": "error", 
      "prefer-const": "error",
      
      // Дополнительные правила для современного JS
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "object-shorthand": "error",
      "no-duplicate-imports": "error"
    }
  },
  
  // Игнорируемые файлы
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "*.min.js"
    ]
  }
];
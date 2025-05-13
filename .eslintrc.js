module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'prettier', // Make sure this is last to override other configs
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // --- Basic ESLint/TypeScript/React Rules ---
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Allow console.warn/error
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_+' }], // Warn on unused vars, allow starting with _
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // --- Import Rules ---
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          // Example: Prevent feature A from importing directly from feature B
          // Add specific zones as features are created, e.g.:
          // { target: './src/features/auth', from: './src/features/orders', message: 'Auth feature should not import directly from Orders.' },
          // { target: './src/features/orders', from: './src/features/auth', message: 'Orders feature should not import directly from Auth.' },
          {
            target: './src/features/*/**',
            from: './src/features/*/**',
            message: 'Cross-feature imports are not allowed. Use shared modules (components, hooks, stores, utils) instead.'
          }
        ],
      },
    ],
    'import/no-unresolved': 'error',

    // --- React Native --- (Optional: Add eslint-plugin-react-native if needed)
    // e.g., 'react-native/no-inline-styles': 'warn',
  },
  // Rule overrides for specific file types
  overrides: [
    {
      files: [
        '*.test.ts',
        '*.test.tsx',
        'src/testing/**',
      ],
      env: {
        jest: true,
        'jest/globals': true,
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off', // Often needed in tests
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
}; 
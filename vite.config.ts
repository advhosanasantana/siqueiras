import { defineConfig } from 'vite';

// Allow overriding base path via VITE_BASE env var (useful for GitHub Pages)
const rawBase = process.env.VITE_BASE;
const base = rawBase && rawBase.length > 0 ? rawBase : '/';

export default defineConfig({
  base,
});

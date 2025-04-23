import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://ics-etienne.github.io",
  base: "site",
  outDir: "dist",
  vite: {
    plugins: [tailwindcss()]
  }
});

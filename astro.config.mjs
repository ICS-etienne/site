import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "/",
  outDir: "dist",
  vite: {
    plugins: [tailwindcss()]
  }
});

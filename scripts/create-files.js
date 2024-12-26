import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const files = {
  // Configurations
  'astro.config.mjs': `import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://livano.fr',
});`,

  'tailwind.config.mjs': `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg': 'rgb(var(--color-bg) / <alpha-value>)',
        'box': 'rgb(var(--color-box) / <alpha-value>)',
        'border': 'rgb(var(--box-border) / <alpha-value>)',
        'heading-1': 'rgb(var(--heading-1) / <alpha-value>)',
        'heading-2': 'rgb(var(--heading-2) / <alpha-value>)',
        'heading-3': 'rgb(var(--heading-3) / <alpha-value>)',
        primary: '#17CF97',
        secondary: '#15b886'
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.2' }],
      },
      spacing: {
        'section': '6rem',
      }
    },
  },
  plugins: [],
}`,

  // Styles
  'src/styles/global.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-bg: 255 255 255;
    --color-border: 255 255 255;
    --color-box: 255 255 255;
    --box-border: 229 231 235;
    --box-sd: 226 232 240 / 0.5;
    --heading-1: 23 37 84;
    --heading-2: 31 41 55;
    --heading-3: 55 65 81;
  }

  .dark {
    --color-bg: 3 7 18;
    --color-box: 17 24 39;
    --box-border: 243 244 246/0.1;
    --box-sd: transparent;
    --heading-1: 255 255 255;
    --heading-2: 243 244 246;
    --heading-3: 209 213 219;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Raleway", sans-serif;
  }
}`,

  // Utils
  'src/utils/theme.ts': `export const getThemePreference = () => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const setTheme = (theme: string) => {
  localStorage.setItem('theme', theme);
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};`,

  // Components
  'src/components/ui/Button.astro': `---
interface Props {
  variant?: 'primary' | 'outline';
  href?: string;
  class?: string;
}

const { 
  variant = 'primary', 
  href, 
  class: className 
} = Astro.props;

const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block";
const variants = {
  primary: "bg-primary text-white hover:bg-secondary hover:shadow-lg",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
};

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  class:list={[baseStyles, variants[variant], className]}
>
  <slot />
</Tag>`,

  // Pages
  'src/pages/index.astro': `---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/sections/Hero.astro';
import Services from '../components/sections/Services.astro';
---

<Layout title="Livano - Agence de développement web">
  <Hero />
  <Services />
</Layout>`
};

async function createFiles() {
  try {
    const projectRoot = join(dirname(__dirname));
    
    for (const [path, content] of Object.entries(files)) {
      const fullPath = join(projectRoot, path);
      const dir = dirname(fullPath);
      
      // Créer le dossier parent s'il n'existe pas
      await fs.mkdir(dir, { recursive: true });
      
      // Créer le fichier avec son contenu
      await fs.writeFile(fullPath, content);
      console.log(`✅ Fichier créé: ${path}`);
    }
    
    console.log('\n✨ Tous les fichiers ont été créés avec succès!');
  } catch (error) {
    console.error('❌ Erreur lors de la création des fichiers:', error);
  }
}

createFiles();
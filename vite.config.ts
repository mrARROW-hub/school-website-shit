import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

/**
 * Robust base path resolution for GitHub Pages:
 * 1. BASE_PATH (passed by GitHub Actions actions/configure-pages@v4)
 * 2. VITE_BASE_PATH (manual env override)
 * 3. GITHUB_REPOSITORY (automatically provided in GitHub Actions as "owner/repo")
 *    - "owner.github.io" -> "/" (root user/org site)
 *    - "repo" -> "/repo/" (project site)
 * 4. Fallback: "/" for local dev / preview server
 */
function getBasePath(): string {
  const envBase = process.env.BASE_PATH || process.env.VITE_BASE_PATH;
  if (envBase !== undefined && envBase !== '') {
    return envBase.endsWith('/') ? envBase : `${envBase}/`;
  }

  if (process.env.GITHUB_REPOSITORY) {
    const parts = process.env.GITHUB_REPOSITORY.split('/');
    const owner = parts[0] || '';
    const repo = parts[1] || '';

    if (repo && owner && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
      return '/';
    }

    return repo ? `/${repo}/` : '/';
  }

  return '/';
}

export default defineConfig(() => {
  return {
    base: getBasePath(),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

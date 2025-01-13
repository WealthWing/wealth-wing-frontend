import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

const PORT = 3001;

export default defineConfig(({ mode }) => {
	return {
		envDir: './env',
		server: {
			port: PORT
		},
		preview: {
			port: PORT
		},
		plugins: [
			react(),
			tsconfigPaths(),
			visualizer({
				filename: 'stats.html',
				emitFile: true
			}),
			mode === 'development' &&
				checker({
					typescript: true,
					overlay: {
						initialIsOpen: true
					}
				}) // Runs type checker in watch mode and displays issues in browser
		],
		build: {
			outDir: 'build',
			// Ensure the bundle size is optimized
			rollupOptions: {
				output: {
					manualChunks: (id) => {
						if (id.includes('node_modules')) {
							return 'vendor';
						}
						return undefined;
					}
				}
			}
		}
	};
});

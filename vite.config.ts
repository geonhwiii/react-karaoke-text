import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLibMode = mode === 'lib'
  
  const baseConfig = {
    plugins: [react()],
  }
  
  if (isLibMode) {
    // 라이브러리 빌드 모드
    return {
      ...baseConfig,
      plugins: [
        ...baseConfig.plugins,
        dts({
          insertTypesEntry: true,
        }),
      ],
      build: {
        lib: {
          entry: './src/index.ts',
          name: 'ReactKaraokeText',
          formats: ['es'],
          fileName: 'index',
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    }
  }
  
  // 일반 앱 모드 (dev, build, preview)
  return baseConfig
})

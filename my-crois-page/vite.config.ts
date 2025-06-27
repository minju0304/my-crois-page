import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,       // 변경 감지를 위해 폴링 모드 사용
      interval: 100,          // 폴링 주기 (100ms 권장)
    }
  }
})

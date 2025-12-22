
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente baseadas no modo atual
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // Substitui process.env.API_KEY pelo valor da string durante o build
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
      // Define process.env como um objeto vazio para evitar crash em chamadas genéricas,
      // mas mantendo a API_KEY acessível pela substituição acima.
      'process.env': {} 
    },
    server: {
      proxy: {
        // Redireciona chamadas /api/auth para http://localhost:3001/auth
        '/api/auth': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        // Redireciona chamadas /api/data e /api/admin para http://localhost:3001/api/...
        // Nota: O backend define rotas como /api/data/:key, então precisamos manter o /api
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          // Não fazemos rewrite aqui porque o backend espera /api/data...
        }
      }
    }
  }
})

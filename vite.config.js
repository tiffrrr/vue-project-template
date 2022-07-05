import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// // pug
// import pugPlugin from "vite-plugin-pug"
// const options = { pretty: true } // FIXME: pug pretty is deprecated!
// const locals = { name: "My Pug" }
// // https://vitejs.dev/config/
// export default defineConfig({
// plugins: [vue(),pugPlugin(options, locals)]
// })
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

import { resolve } from "path";
import { defineConfig } from "vite";
import dts from 'vite-plugin-dts';
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts()],
    build: {
        lib: {
            entry: resolve(__dirname, "src/package.js"),
            name: "vue-gsi",
            fileName: "vue-gsi",
        },
        rollupOptions: {
            external: ["vue", "@vueuse/core"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    }
});

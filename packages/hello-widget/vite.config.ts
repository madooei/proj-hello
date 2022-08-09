import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.tsx"),
      name: "Hello Widget",
      formats: ["es", "umd"],
      fileName: (format) => `hello-widget.${format}.js`
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled into your library
      external: ["react", "react-dom"],
      output: {
        // global variables to use in the UMD build for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});

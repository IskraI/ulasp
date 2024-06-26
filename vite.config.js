import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // base: "/ulasp/",
  base: "/",
  server: {
    port: 9080,
  },
  node: { fs: "empty" },
  externals: [{ "./cptable": "var cptable" }, { "./jszip": "jszip" }],
});

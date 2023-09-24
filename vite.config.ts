import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "floatCaluclator",
      fileName: "floatCaluclator"
    },
    
  },
  resolve: {
    alias: {
      "@": __dirname+"/src",
      "@errors": __dirname+"/src/errors",
      "@methods": __dirname+"/src/methods",
      "@thisTypes": __dirname+"/src/types",
      "@methods_private": __dirname+"/src/methods_private"
    }
  }
})

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://hawkfranklin.in",
  output: "static",
  build: {
    format: "directory"
  }
});

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://hawkfranklin.eu",
  output: "static",
  build: {
    format: "directory"
  }
});

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      include: ["src/**"],
      exclude: ["**/*.config.ts", "**/types/*.types.ts"],
    },
  },
});

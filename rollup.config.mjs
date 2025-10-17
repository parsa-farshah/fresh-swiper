import { defineConfig } from "rollup";
import css from "rollup-plugin-css-only";

export default defineConfig([
  {
    input: "src/freshSwiper.js",
    output: [
      { file: "dist/freshSwiper.js", format: "umd", name: "fresh" },
      { file: "dist/freshSwiper.esm.js", format: "esm" },
    ],
    plugins: [css({ output: "freshSwiper.css" })],
  },
]);
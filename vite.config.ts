import { defineConfig } from "vite"
import solidPlugin from "solid-start/vite"
import solidStyled from "vite-plugin-solid-styled"

export default defineConfig({
  plugins: [
    solidPlugin(),
    solidStyled({
      prefix: "example",
      filter: {
        include: "src/**/*.tsx",
        exclude: "node_modules/**/*.{ts,js}",
      },
    }),
  ],
})

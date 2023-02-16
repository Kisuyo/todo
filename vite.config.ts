import { defineConfig } from "vite"
import solidPlugin from "solid-start/vite"
import solidStyled from "vite-plugin-solid-styled"
import solid from "solid-start/vite"
import vercel from "solid-start-vercel"

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
    solid({
      adapter: vercel({}),
    }),
  ],
})

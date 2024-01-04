import type { Config } from 'tailwindcss'
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: "#4640DE",
      blue: "#26A4FF",
      darkBlue: "#202430",
      green: "#56CDAD",
      white: "#FFF",
      black: "#000",
      gray: {
        dark: "#626B7D",
        light: "#ced4da"
      }
    },
    extend: {},
  },
  plugins: [],
}
export default withMT(config)

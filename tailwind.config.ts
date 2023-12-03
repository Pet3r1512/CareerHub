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
      gray: "#626B7D"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default withMT(config)

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Wittgenstein', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.black.DEFAULT'),
            '--tw-prose-headings': theme('colors.black.DEFAULT'),
            '--tw-prose-lead': theme('colors.black.DEFAULT'),
            '--tw-prose-links': theme('colors.black.DEFAULT'),
            '--tw-prose-bold': theme('colors.black.DEFAULT'),
            '--tw-prose-counters': theme('colors.black.DEFAULT'),
            '--tw-prose-bullets': theme('colors.black.DEFAULT'),
            '--tw-prose-hr': theme('colors.black.DEFAULT'),
            '--tw-prose-quotes': theme('colors.black.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.black.DEFAULT'),
            '--tw-prose-captions': theme('colors.black.DEFAULT'),
            '--tw-prose-code': theme('colors.black.DEFAULT'),
            '--tw-prose-pre-code': theme('colors.black.DEFAULT'),
            '--tw-prose-pre-bg': theme('colors.black.DEFAULT'),
            '--tw-prose-th-borders': theme('colors.black.DEFAULT'),
            '--tw-prose-td-borders': theme('colors.black.DEFAULT'),
            maxWidth: '85ch',
          },
        },
      }),
      colors: {
        black: {
          DEFAULT: '#171717',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;

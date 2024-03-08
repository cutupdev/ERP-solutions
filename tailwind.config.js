/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    safelist: [
        {
            pattern: /bg-[\w.]+/,
            variants: ['hover'],
        },
        {
            pattern: /text-[\w.]+/,
        },
    ],
    plugins: [],
});

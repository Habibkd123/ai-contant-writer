// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // ✅ yahi hona chahiye yahan
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(90deg, #2b0a68, #6328e0)',
            },
        },
    },
    plugins: [],
}

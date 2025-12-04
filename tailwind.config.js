import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gravel: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b', // Base gravel blue
                    900: '#0f172a', // Darker gravel blue
                    950: '#020617',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [
        daisyui,
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#38bdf8", // Light blue accent
                    "secondary": "#818cf8",
                    "accent": "#f472b6",
                    "neutral": "#1e293b", // Gravel 800
                    "base-100": "#0f172a", // Gravel 900
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
            },
        ],
    },
}

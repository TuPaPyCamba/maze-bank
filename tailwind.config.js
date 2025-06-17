/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                MazeRedColor: "#D3272D",
                MazeGrayback: "#D6D6D8",
                MazeBarColor: "#CFD0D4",
                MazeBlack: "#1A1B1F",
                MazeGray: "#E8E8E8",
                MazeFooter: "#1F2937"
            },
        },
    },
    plugins: [],
} 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['"Nunito"', 'sans-serif']
      },
      backgroundImage: {
        'heroImage': "url('https://preview.colorlib.com/theme/echo/images/blob-1.svg')",
        'aboutImage': "url('/blob_about.svg')"
      },
      height: {
        '90/1': "90%",
        '100/1': "100%"
      },
      width: {
        'c_40': '1000px'
      },
      spacing: {
        '60p': '60%',
        '80p': '80%',
        '85p': '85%',
        '90p': '90%'
      }
    },
  },
  plugins: [],
}

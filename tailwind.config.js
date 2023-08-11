/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "Monoton",
        body: "Quicksand",
      },
      backgroundColor: {
        body: "#5a3e2b",
        logo: "#f4a226",
        form: "#e5771f",
        stats: "#76c7ad",
        button: "#ffebb3",
      },
      colors: {
        body: "#5a3e2b",
        list: "#ffebb3",
        form: "#e5771f",
      },
      accentColor: {
        input: "#e5771f",
      },
      gridTemplateRows: {
        layout: "auto auto 1fr auto",
      },
      gridTemplateColumns: {
        listLayout: "repeat(auto-fit, minmax(250px, 1fr))",
        item: "auto 1fr auto",
      },
      boxShadow: {
        item: "0 0 30px rgba(0, 0, 0, 0.1)",
      }
    },
  },
  plugins: [],
}

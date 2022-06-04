module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        red: "hsl(0, 100%, 74%)",
        green: "hsl(154, 59%, 51%)",
        accent: "hsl(248, 32%, 49%)",
        darkBlue: "hsl(249, 10%, 26%)",
        greyBlue: "hsl(246, 25%, 77%)",
        purple: "#7e5bef",
        purpleFocus: "#5E54A4",
        grey: "#3D3B48",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      boxShadow: {
        custom:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
        custom2: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
      },
    },
  },
  plugins: [],
};

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
        btn_primary: "#346ED6",
        header_color: "#FFFFFF",
        hero_small_text_color: "#F7F8FA",
      },
      fontSize: {
        "14px": "14px",
        "16px": "16px",
        "30px": "30px",
        hero_header: "3.125rem",
        hero_small: "1.125rem",
      },
      fontFamily: {
        Lato: "Lato",
        Montserrat: "Montserrat",
        PublicSans: "Public Sans",
        header_font: "Montserrat",
        hero_small_family: "Public Sans",
        Poppins: "Poppins",
      },
      fontWeight: {
        header_weight: "700",
        hero_small_weight: "400",
      },
      width: {
        header_width: "36.1875rem",
        header_small_width: "36.5rem",
        small_header_width: "22.5625rem",
      },
      lineHeight: {
        hero_header: "4rem",
        hero_small: "1.75rem",
      },
      padding: {
        custom_card: "24px 30.31px 24px 30.31px",
        number_padding: "22px",
      },
    },
    backgroundImage: {
      "custom-gradient":
        "linear-gradient(to right, #F5F6FA 0%, #E0E7FF 50%, #F5F6FA 100%)",
      "custom-gradient-two":
        "linear-gradient(to bottom, #F5F6FA 0%, #F5F6FA 100%)",
    },
  },
  plugins: [],
};

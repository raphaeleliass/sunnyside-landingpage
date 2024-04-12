/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary_Soft_red: "hsl(7, 99%, 70%)",
        primary_Yellow: "hsl(51, 100%, 49%)",
        primary_Dark_desaturated_cyan_graphic_design_text: "hsl(167, 40%, 24%)",
        primary_Dark_blue_photography_text: "hsl(198, 62%, 26%)",
        primary_Dark_moderate_cyan_footer: "hsl(168, 34%, 41%)",
        neutral_Very_dark_desaturated_blue: "hsl(212, 27%, 19%)",
        neutral_Very_dark_grayish_blue: "hsl(213, 9%, 39%)",
        neutral_Dark_grayish_blue: "hsl(232, 10%, 55%)",
        neutral_Grayish_blue: "hsl(210, 4%, 67%)",
        neutral_White: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        standard: "18px",
      },
      fontFamily: {
        Barlow: ["Barlow", "Arial", "Sans-serif"],
        Fraunces: ["Fraunces", "Arial", "Sans-serif"],
      },
      fontWeight: {
        Barlow_600: "600",
        Fraunces_700: "700",
        Fraunces_900: "900",
      },
      backgroundImage: {
        header_desktop: "url('/src/images/desktop/image-header.jpg')",
        transform: "url('/src/images/desktop/image-transform.jpg')",
        stand_out: "url('/src/images/desktop/image-stand-out.jpg')",
        photography: "url('/src/images/desktop/image-photography.jpg')",
        graphic_design: "url('/src/images/desktop/image-graphic-design.jpg')",
        gallery_sugarcubes:
          "url('/src/images/desktop/image-gallery-sugarcubes.jpg')",
        gallery_orange: "url('/src/images/desktop/image-gallery-orange.jpg')",
        gallery_milkbottles:
          "url('/src/images/desktop/image-gallery-milkbottles.jpg')",
        gallery_cone: "url('/src/images/desktop/image-gallery-cone.jpg')",
        header_mobile: "url('/src/images/mobile/image-header.jpg')",
        transform_mobile: "url('/src/images/mobile/image-transform.jpg')",
        stand_out_mobile: "url('/src/images/mobile/image-stand-out.jpg')",
        photography_mobile: "url('/src/images/mobile/image-photography.jpg')",
        graphic_design_mobile:
          "url('/src/images/mobile/image-graphic-design.jpg')",
        gallery_sugarcubes_mobile:
          "url('/src/images/mobile/image-gallery-sugar-cubes.jpg')",
        gallery_orange_mobile:
          "url('/src/images/mobile/image-gallery-orange.jpg')",
        gallery_milkbottles_mobile:
          "url('/src/images/mobile/image-gallery-milkbottles.jpg')",
        gallery_cone_mobile: "url('/src/images/mobile/image-gallery-cone.jpg')",
      },
    },
  },
  plugins: [],
};

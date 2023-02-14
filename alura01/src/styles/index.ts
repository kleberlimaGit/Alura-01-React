import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#f7f7f7",
      purple050: "#EAE2F8",
      purple100: "#CFBCF2",
      purple200: "#A081D9",
      purple300: "#8662C7",
      purple400: "#724BB7",
      purple500: "#653CAD",
      purple600: "#51279B",
      purple700: "#421987",
      purple800: "#34126F",
      purple900: "#240754",

      neutral000: "#FFFFFF",
      neutral050: "#F7F7F7",
      neutral100: "#E1E1E1",
      neutral200: "#CFCFCF",
      neutral300: "#B1B1B1",
      neutral400: "#9E9E9E",
      neutral500: "#7E7E7E",
      neutral600: "#626262",
      neutral700: "#515151",
      neutral800: "#3B3B3B",
      neutral900: "#222222",
      neutral999: "#111111",
    },
    sizes: {
      x0: "0",
      xpx: "1px",
      "x0.5": "2px", // 0.125rem
      x1: "4px", // 0.25rem
      "x1.5": "6px", // 0.375rem
      x2: "8px", // 0.5rem
      "x2.5": "10px", // 0.625rem
      x3: "12px", // 0.75rem
      "x3.5": "14px", // 0.875rem
      x4: "16px", // 1rem
      x5: "20px", // 1.25rem'
      x6: "24px", // 1.5rem
      x7: "1.75rem", // 1.75rem
      x8: "32px", // 2rem
      x9: "36px", // 2.25rem
      x10: "40px", // 2.5rem
      x11: "44px", // 2.75rem
      x12: "48px", // 3rem
      x14: "56px", // 3.5rem
      x16: "64px", // 4rem
      x20: "80px", // 5rem
      x24: "96px", // 6rem
      x28: "112px", // 7rem
      x32: "128px", // 8rem
      x36: "144px", // 9rem
      x40: "160px", // 10rem
      x44: "176px", // 11rem
      x48: "192px", // 12rem
      x52: "208px", // 13rem
      x56: "224px", // 14rem
      x60: "240px", // 15rem
      x64: "256px", // 16rem
      x72: "288px", // 18rem
      x80: "320px", // 20rem
      x96: "384px", // 24rem
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
});

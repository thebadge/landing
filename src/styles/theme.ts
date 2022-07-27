interface ThemeInterface {
  colors: {
    primary: string;
    white: string;
  };
  sizes: {
    xxl: string;
    xl: string;
    l: string;
    m: string;
    s: string;
    xs: string;
  };
}

export const theme: ThemeInterface = {
  colors: {
    primary: "#0070f3",
    white: "#FFFF",
  },
  sizes: {
    xxl: "100px",
    xl: "64px",
    l: "32px",
    m: "20px",
    s: "16px",
    xs: "8px",
  },
};

import { createContext, useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});
const themeObj = {
  light: {
    background: {
      primery: "#4845A2",
      secondary: "#fff",
      inputbg: "#F8F5F5",
      
      buttonBg: "#DFDFDF",

    },
    text: {
      // primery: "#F9A326  ",
    },
    borderColor: {
      borderBg: "#ffffff",
    },
  },
  dark: {
    background: {
      primery: "#4845A2",
      secondary: "#3A3A3A",
      inputbg: "#262626",
      buttonBg: "#3A3A3A",
    },
    text: {
      // primery: "#CECECE",
    },
    borderColor: {
      borderBg: "#3A3A3A",
    },
  },
};
export default function ColorContectProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState("light");
  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...themeObj[mode],
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: (theme) => `
              body {
                background-color: ${
                  theme.palette.mode === "dark" ? "#151515" : "#f5f5f5"
                }
              }
            `,
          },
          MuiButton: {
            variants: [
              {
                props: { variant: "gradient" },
                style: {
                  // fontSize: { xs: "12px", md: "20px" },
                  width: "100%",
                  marginTop: "30px",
                  borderRadius: "10px",
                  backgroundColor: "background.gradient",

                  color: "white",
                  fontWeight: 700,
                },
              },
              {
                props: { variant: "btn-black" },
                style: {
                  background: mode === "light" ? "#000000" : "#3e3ebf",

                  borderRadius: "51px",

                  color: "#ffffff",

                  fontWeight: "700",
                  fontSize: "12px",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: mode === "light" ? "#000000" : "#3e3ebf",
                  },
                },
              },
              {
                props: { variant: "btn-dark" },
                style: {
                  background: "#3e3ebf",
                  borderRadius: "51px",
                  border: "1px solid #3e3ebf",
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "12px",
                  textTransform: "capitalize",
                  "&:hover": {
                    border: "1px solid #3e3ebf",
                    color: mode === "light" ? "#000000" : "#ffffff",
                  },
                },
              },
              {
                props: { variant: "btn-light" },
                style: {
                  borderRadius: "51px",
                  border: "1px solid #3e3ebf",
                  // color: "#000000",
                  fontWeight: "700",
                  fontSize: "12px",
                  textTransform: "capitalize",
                  "&:hover": {
                    border: "1px solid #3e3ebf",
                    background: "#3e3ebf",

                    color: "#ffffff",
                  },
                },
              },
            ],
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ colorMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

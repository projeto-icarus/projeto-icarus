import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

import themeSchema from "./theme";
import { useSelector } from "react-redux";

const ThemeWrapper = ({ children }) => {
  const { darkMode } = useSelector((state) => state.settings);

  const darkTheme = createMuiTheme(
    {
      ...themeSchema,
      palette: {
        ...themeSchema.palette,
        type: "dark",
      },
    },
    ptBR
  );

  const lightTheme = createMuiTheme(themeSchema, ptBR);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;

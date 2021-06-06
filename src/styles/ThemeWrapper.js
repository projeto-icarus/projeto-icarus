import React, { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";
import PubSub from "pubsub-js";

import themeSchema from "./theme";

const TOGGLE_THEME_TOPIC = "TOGGLE_THEME_TOPIC";

export const toggleTheme = () => PubSub.publish(TOGGLE_THEME_TOPIC, "");

const ThemeWrapper = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const darkTheme = createMuiTheme(
    {
      ...themeSchema,
      palette: {
        ...themeSchema.palette,
        primary: {
          main: themeSchema.palette.secondary.main,
        },
        secondary: {
          main: themeSchema.palette.primary.main,
        },
        type: "dark",
      },
    },
    ptBR
  );

  const lightTheme = createMuiTheme(themeSchema, ptBR);

  useEffect(() => {
    const token = PubSub.subscribe(TOGGLE_THEME_TOPIC, () =>
      setDarkMode((dm) => !dm)
    );

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;

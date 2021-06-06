import React, { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";
import PubSub from "pubsub-js";

import themeSchema from "./theme";

const TOGGLE_THEME_TOPIC = "TOGGLE_THEME_TOPIC";

export const toggleTheme = () => {
  PubSub.publish(TOGGLE_THEME_TOPIC, "");
};

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
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const token = PubSub.subscribe(TOGGLE_THEME_TOPIC, () =>
      setDarkMode((dm) => !dm)
    );

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  useEffect(() => {
    setTheme(darkMode ? darkTheme : lightTheme);
  }, [darkMode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;

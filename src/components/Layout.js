import React from "react";
import {
  Icon,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  useTheme,
} from "@material-ui/core";
import Color from "color";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import Link from "next/link";

import general from "../config/general";
import styles from "../styles/Layout.module.scss";
import { toggleTheme } from "../styles/ThemeWrapper";

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <header>
        <div className="container">
          <div className={styles.headerTop}>
            <Link href="/">
              <a>
                <img
                  src={`/assets/logos/${general.keyName}/logo.png`}
                  title={general.siteName}
                  alt={general.siteName}
                />
              </a>
            </Link>
            <InputBase
              placeholder="Faça sua busca"
              style={{
                backgroundColor:
                  theme.palette.type === "dark"
                    ? Color(theme.palette.background.default).darken(0.3)
                    : theme.palette.text.secondary,
                color: "#ffffff",
              }}
              className={styles.searchText}
            />

            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <IconButton {...bindTrigger(popupState)}>
                    <Icon>settings</Icon>
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={() => toggleTheme()}>
                      {theme.palette.type === "dark" ? (
                        <>
                          <Icon className="mr-2">dark_mode</Icon> Modo escuro
                        </>
                      ) : (
                        <>
                          <Icon className="mr-2">light_mode</Icon> Modo claro
                        </>
                      )}
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export default Layout;

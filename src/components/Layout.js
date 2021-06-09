import React, { useState } from "react";
import {
  capitalize,
  Checkbox,
  FormControl,
  Icon,
  IconButton,
  ListItemText,
  MenuItem,
  Select,
  Switch,
  Tooltip,
  useTheme,
} from "@material-ui/core";
// import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import Link from "next/link";

import Input from "../components/Input";
import general from "../config/general";
import styles from "../styles/Layout.module.scss";
import { toggleTheme } from "../styles/ThemeWrapper";
import { useDispatch, useSelector } from "react-redux";
import lorem from "../faker/lorem";
import { updateSettings } from "../store/actions/settings";
import DebugPanel from "./DebugPanel";

const orientations = [
  { value: "straight", label: "Hétero" },
  { value: "gay", label: "Gay" },
  { value: "trans", label: "Trans" },
];

const Layout = ({ children, debugMode }) => {
  const theme = useTheme();
  const [orientation, setOrientation] = useState([orientations[0]]);
  const { blindSiteLogo, blindTitles, darkMode } = useSelector(
    (state) => state.settings
  );
  const dispatch = useDispatch();
  const orientationChange = (event) => {
    setOrientation(event.target.value);
  };

  const toggleTheme = () => {
    setTimeout(() => {
      dispatch(updateSettings({ darkMode: !darkMode }));
    }, 50);
  };

  return (
    <>
      {debugMode && <DebugPanel />}
      <header>
        <div className="container">
          <div className={styles.headerTop}>
            <Link href="/">
              <a>
                <img
                  src={`/assets/logos/${general.keyName}/logo.png`}
                  title={general.siteName}
                  alt={general.siteName}
                  className={blindSiteLogo ? "blind-image" : ""}
                />
              </a>
            </Link>
            <Input
              placeholder="Faça sua busca"
              className={styles.searchText}
              mx={4}
            />
            <FormControl
              className={styles.orientation}
              style={{ marginRight: 16 }}
              variant="outlined"
            >
              <Select
                multiple
                value={orientation}
                onChange={orientationChange}
                input={<Input />}
                renderValue={(selected) =>
                  blindTitles
                    ? lorem()
                    : capitalize(
                        selected
                          .map((ori, i) => {
                            if (ori) {
                              if (i === selected.length - 2) {
                                ori = ori.label.toLowerCase() + " e ";
                              } else if (i === selected.length - 1) {
                                ori = ori.label.toLowerCase() + "";
                              } else {
                                ori = ori.label.toLowerCase() + ", ";
                              }
                            }
                            return ori;
                          })
                          .join("")
                      )
                }
                // MenuProps={MenuProps}
              >
                {orientations.map((ori) => (
                  <MenuItem value={ori} key={ori.value}>
                    <Checkbox checked={orientation.indexOf(ori) > -1} />
                    <ListItemText primary={blindTitles ? lorem() : ori.label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Tooltip
              title={
                theme.palette.type === "dark" ? "Modo escuro" : "Modo claro"
              }
            >
              <IconButton onClick={toggleTheme}>
                {theme.palette.type === "dark" ? (
                  <Icon>dark_mode</Icon>
                ) : (
                  <Icon>light_mode</Icon>
                )}
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;

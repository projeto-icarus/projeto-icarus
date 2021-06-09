import React, { useState } from "react";
import {
  capitalize,
  Checkbox,
  Chip,
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
import Link from "next/link";

import Input from "../components/Input";
import general from "../config/general";
import styles from "../styles/Layout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import lorem from "../faker/lorem";
import { updateSettings } from "../store/actions/settings";
import DebugPanel from "./DebugPanel";
import useBlinder from "../hooks/useBlinder";

const orientations = [
  { value: "straight", label: "Hétero" },
  { value: "gay", label: "Gay" },
  { value: "trans", label: "Trans" },
];

const Layout = ({ children, debugMode }) => {
  const theme = useTheme();
  const [orientation, setOrientation] = useState([orientations[0]]);
  const { darkMode } = useSelector((state) => state.settings);
  const blinder = useBlinder();
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
                  className={blinder("", "siteLogo", "blind-image")}
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
                  blinder(
                    capitalize(
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
                    ),
                    "titles"
                  )
                }
                // MenuProps={MenuProps}
              >
                {orientations.map((ori) => (
                  <MenuItem value={ori} key={ori.value}>
                    <Checkbox checked={orientation.indexOf(ori) > -1} />
                    <ListItemText primary={blinder(ori.label, "titles")} />
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
        <div className="container">
          <nav className={styles.navbar}>
            <Link href="/">
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    theme.palette.type === "dark" ? "primary" : "secondary"
                  }
                  label={blinder("Início", "titles", false, 5, 10)}
                />
              </a>
            </Link>
            <Link href="/categories">
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                  label={blinder("Categorias", "titles", false, 5, 10)}
                />
              </a>
            </Link>
            <Link href="/stars">
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                  label={blinder("Estrelas pornô", "titles", false, 5, 10)}
                />
              </a>
            </Link>
            <Link href="/popular">
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                  label={blinder("Vídeos populares", "titles", false, 5, 10)}
                />
              </a>
            </Link>
            <Link href="/new">
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                  label={blinder("Vídeos novos", "titles", false, 5, 10)}
                />
              </a>
            </Link>
            <Link href="/relevance">
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                  label={blinder(
                    "Vídeos com mais relevância",
                    "titles",
                    false,
                    5,
                    10
                  )}
                />
              </a>
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;

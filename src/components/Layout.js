import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import Input from "../components/Input";
import general from "../config/general";
import styles from "../styles/Layout.module.scss";
import { updateSettings } from "../store/actions/settings";
import DebugPanel from "./DebugPanel";
import useBlinder from "../hooks/useBlinder";
import { orientations } from "../utils/consts";

const getValueOrientation = (orientation) => {
  const straight = orientations[0];
  const gay = orientations[1];
  const shemale = orientations[2];
  switch (orientation) {
    case "":
      return [straight];
    case "gay":
      return [gay];
    case "shemale":
      return [shemale];
    case "straight-and-shemale":
      return [straight, shemale];
    case "straight-and-gay":
      return [straight, gay];
    case "gay-and-shemale":
      return [gay, shemale];
    case "straight-and-gay-and-shemale":
      return orientations;
    default:
      break;
  }
};

const Layout = ({ children, debugMode, defaultOrientation }) => {
  const theme = useTheme();
  const { darkMode, orientation } = useSelector((state) => state.settings);
  const [selectOrientation, setSelectOrientation] = useState(
    getValueOrientation(defaultOrientation || orientation)
  );
  const blinder = useBlinder();
  const dispatch = useDispatch();
  const router = useRouter();

  const orientationBlur = () => {
    const straight = orientations[0];
    const shemale = orientations[2];

    const newValSelect = selectOrientation;

    if (newValSelect.length === 0) {
      setSelectOrientation([orientations[0]]);
    }

    let newValRedux = "";

    switch (newValSelect.length) {
      case 1:
        newValRedux = newValSelect[0] === straight ? "" : newValSelect[0].value;
        break;
      case 2:
        if (newValSelect.indexOf(straight) > -1) {
          if (newValSelect.indexOf(shemale) > -1) {
            newValRedux = "straight-and-shemale";
          } else {
            newValRedux = "straight-and-gay";
          }
        } else {
          newValRedux = "gay-and-shemale";
        }
        break;
      case 3:
        newValRedux = "straight-and-gay-and-shemale";

      default:
        break;
    }

    dispatch(updateSettings({ orientation: newValRedux }));
    router.push(
      `${router.asPath
        .replace("/straight-and-gay-and-shemale", "")
        .replace("/straight-and-gay", "")
        .replace("/straight-and-shemale", "")
        .replace("/gay-and-shemale", "")
        .replace("/gay", "")
        .replace("/shemale", "")}/${newValRedux}`.replace("//", "/")
    );
  };

  const orientationChange = (event) => setSelectOrientation(event.target.value);

  const toggleTheme = () => {
    setTimeout(() => {
      dispatch(updateSettings({ darkMode: !darkMode }));
    }, 50);
  };

  useEffect(() => {
    if (defaultOrientation) {
      dispatch(updateSettings({ orientation: defaultOrientation }));
    }
  }, []);

  return (
    <>
      {debugMode && <DebugPanel />}
      <header>
        <div className="container">
          <div className={styles.headerTop}>
            <Link href={`/${orientation !== "" ? orientation : ""}`}>
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
                value={selectOrientation}
                onChange={orientationChange}
                onClose={orientationBlur}
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
                    <Checkbox checked={selectOrientation.indexOf(ori) > -1} />
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
            <Link href={`/${orientation !== "" ? orientation : ""}`}>
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    ["/[orientation]", "/"].includes(router.pathname)
                      ? "secondary"
                      : "primary"
                  }
                  label={blinder("Início", "titles", false, 5, 10)}
                />
              </a>
            </Link>
            <Link
              href={`/categories${orientation !== "" ? "/" + orientation : ""}`}
            >
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    router.pathname.startsWith("/categories")
                      ? "secondary"
                      : "primary"
                  }
                  label={blinder("Categorias", "titles", false, 5, 10)}
                />
              </a>
            </Link>
            <Link href={`/stars${orientation !== "" ? "/" + orientation : ""}`}>
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    router.pathname.startsWith("/stars")
                      ? "secondary"
                      : "primary"
                  }
                  label={blinder("Estrelas pornô", "titles", false, 5, 10)}
                />
              </a>
            </Link>
            <Link
              href={`/popular${orientation !== "" ? "/" + orientation : ""}`}
            >
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    router.pathname.startsWith("/popular")
                      ? "secondary"
                      : "primary"
                  }
                  label={blinder("Vídeos populares", "titles", false, 5, 10)}
                />
              </a>
            </Link>
            <Link href={`/new${orientation !== "" ? "/" + orientation : ""}`}>
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    router.pathname.startsWith("/new") ? "secondary" : "primary"
                  }
                  label={blinder("Vídeos novos", "titles", false, 5, 10)}
                />
              </a>
            </Link>
            <Link
              href={`/relevance${orientation !== "" ? "/" + orientation : ""}`}
            >
              <a className={styles.navBarItem}>
                <Chip
                  color={
                    router.pathname.startsWith("/relevance")
                      ? "secondary"
                      : "primary"
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

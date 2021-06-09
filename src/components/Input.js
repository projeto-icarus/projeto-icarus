import { InputBase, useTheme } from "@material-ui/core";
import React from "react";
import styles from "../styles/Input.module.scss";
import Color from "color";
import useDeclarativeStyles from "../hooks/useDeclarativeStyles";

const Input = (props) => {
  const theme = useTheme();
  const style = useDeclarativeStyles(props);
  style.backgroundColor =
    theme.palette.type === "dark"
      ? Color(theme.palette.background.default).darken(0.3)
      : "#dfdfdf";

  return <InputBase style={style} {...props} className={styles.inputBase} />;
};

export default Input;

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeWrapper from "../styles/ThemeWrapper";
import AlertDialog from "../components/AlertDialog";
import { storeWrapper } from "../store";
import "../styles/global.css";
import general from "../config/general";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../store/actions/settings";
import { DARK_MODE } from "../store/reducers/settings";

function Icarus(props) {
  const { Component, pageProps } = props;
  const { blindSiteTitle, blindFavicon } = useSelector(
    (state) => state.settings
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (typeof window !== "undefined") {
      const localThemeMode = localStorage.getItem(DARK_MODE);
      dispatch(
        updateSettings({
          darkMode: localThemeMode ? localThemeMode === "true" : true,
        })
      );
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{blindSiteTitle ? "Projeto Icarus" : general.siteName}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {!blindFavicon && (
          <link
            rel="icon"
            type="image/png"
            href={`/assets/logos/${general.keyName}/logo.png`}
          />
        )}
      </Head>
      <ThemeWrapper>
        <AlertDialog />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeWrapper>
    </React.Fragment>
  );
}

Icarus.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default storeWrapper.withRedux(Icarus);

import {
  Button,
  FormControlLabel,
  Switch as MatSwitch,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../store/actions/settings";

const Switch = ({ label, ...props }) => {
  return (
    <FormControlLabel
      control={<MatSwitch color="primary" {...props} />}
      label={label}
    />
  );
};

const DebugPanel = () => {
  const {
    blindSiteTitle,
    blindSiteLogo,
    blindFavicon,
    blindImages,
    blindTitles,
  } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const changeBlindSwitch = (event) => {
    dispatch(updateSettings({ [event.target.name]: event.target.checked }));
    localStorage.setItem(event.target.name, event.target.checked);
  };

  const toggleBlindMode = () => {
    if (
      blindSiteTitle ||
      blindSiteLogo ||
      blindFavicon ||
      blindImages ||
      blindTitles
    ) {
      dispatch(
        updateSettings({
          blindSiteTitle: false,
          blindSiteLogo: false,
          blindFavicon: false,
          blindImages: false,
          blindTitles: false,
        })
      );
      localStorage.setItem("blindSiteTitle", false);
      localStorage.setItem("blindSiteLogo", false);
      localStorage.setItem("blindFavicon", false);
      localStorage.setItem("blindImages", false);
      localStorage.setItem("blindTitles", false);
    } else {
      dispatch(
        updateSettings({
          blindSiteTitle: true,
          blindSiteLogo: true,
          blindFavicon: true,
          blindImages: true,
          blindTitles: true,
        })
      );
      localStorage.setItem("blindSiteTitle", true);
      localStorage.setItem("blindSiteLogo", true);
      localStorage.setItem("blindFavicon", true);
      localStorage.setItem("blindImages", true);
      localStorage.setItem("blindTitles", true);
    }
  };

  useEffect(() => {
    // localStorage.getItem("blindSiteTitle")
    // localStorage.getItem("blindSiteLogo")
    // localStorage.getItem("blindFavicon")
    // localStorage.getItem("blindImages")
    // localStorage.getItem("blindTitles")

    const localBlindSiteTitle = localStorage.getItem("blindSiteTitle");
    const localBlindSiteLogo = localStorage.getItem("blindSiteLogo");
    const localBlindFavicon = localStorage.getItem("blindFavicon");
    const localBlindImages = localStorage.getItem("blindImages");
    const localBlindTitles = localStorage.getItem("blindTitles");

    dispatch(
      updateSettings({
        blindSiteTitle: localBlindSiteTitle
          ? localBlindSiteTitle === "true"
          : true,
        blindSiteLogo: localBlindSiteLogo
          ? localBlindSiteLogo === "true"
          : true,
        blindFavicon: localBlindFavicon ? localBlindFavicon === "true" : true,
        blindImages: localBlindImages ? localBlindImages === "true" : true,
        blindTitles: localBlindTitles ? localBlindTitles === "true" : true,
      })
    );
  }, []);

  return (
    <div className="container mt-2">
      <div className="DebugPanel">
        <Button onClick={toggleBlindMode}>Toggle Blind Mode</Button>
        {(blindSiteTitle ||
          blindSiteLogo ||
          blindFavicon ||
          blindImages ||
          blindTitles) && (
          <>
            <Switch
              label="blindSiteTitle"
              checked={blindSiteTitle}
              name="blindSiteTitle"
              onChange={changeBlindSwitch}
            />
            <Switch
              label="blindSiteLogo"
              checked={blindSiteLogo}
              name="blindSiteLogo"
              onChange={changeBlindSwitch}
            />
            <Switch
              label="blindFavicon"
              checked={blindFavicon}
              name="blindFavicon"
              onChange={changeBlindSwitch}
            />
            <Switch
              label="blindImages"
              checked={blindImages}
              name="blindImages"
              onChange={changeBlindSwitch}
            />
            <Switch
              label="blindTitles"
              checked={blindTitles}
              name="blindTitles"
              onChange={changeBlindSwitch}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DebugPanel;

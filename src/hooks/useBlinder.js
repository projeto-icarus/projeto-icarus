import React from "react";
import { useSelector } from "react-redux";
import lorem from "../faker/lorem";

const useBlinder = () => {
  const {
    blindSiteTitle,
    blindSiteLogo,
    blindFavicon,
    blindImages,
    blindTitles,
  } = useSelector((state) => state.settings);

  const blinders = {
    siteTitle: blindSiteTitle,
    siteLogo: blindSiteLogo,
    favicon: blindFavicon,
    images: blindImages,
    titles: blindTitles,
  };

  return (text, blinder, textBlind = false, min = 10, max = 25) =>
    blinders[blinder] ? textBlind || lorem(min, max) : text;
};

export default useBlinder;

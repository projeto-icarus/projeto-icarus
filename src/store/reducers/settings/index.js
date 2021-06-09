import { HYDRATE } from "next-redux-wrapper";
import { UPDATE_SETTINGS } from "../../actions";

export const DARK_MODE = "DARK_MODE";
export const ORIENTATION_MODE = "ORIENTATION_MODE";

const initialState = {
  darkMode: false,
  orientation: "",
  blindSiteTitle: false,
  blindSiteLogo: false,
  blindFavicon: false,
  blindImages: false,
  blindTitles: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.settings };
    case UPDATE_SETTINGS:
      if (typeof action.payload.darkMode !== "undefined") {
        localStorage.setItem(DARK_MODE, action.payload.darkMode);
      }
      if (typeof action.payload.orientation !== "undefined") {
        localStorage.setItem(ORIENTATION_MODE, action.payload.orientation);
      }
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;

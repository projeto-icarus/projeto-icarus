import { UPDATE_SETTINGS } from "../";

export const updateSettings = (settings) => ({
  type: UPDATE_SETTINGS,
  payload: settings,
});

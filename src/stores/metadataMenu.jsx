import { createContext } from "react";

const defaultState = {
  metadataMenuOpened: false,
  setMetadataMenuOpened: () => {}
}

export const MetadataMenuContext = createContext(defaultState);
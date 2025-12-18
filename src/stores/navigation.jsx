import { createContext } from "react";

const defaultState = {
  navigation: null,
}

export const NavigationContext = createContext(defaultState);
import React from "react"

export const initialStoreState = {
  cookieConcent: false,
  tabIsUsed: false,
}

interface MainContextAction {
  type: "SET_COOKIE_CONCENT" | "SET_TAB_IS_USED"
  payload: boolean
}

export type MainContextDispatch = React.Dispatch<MainContextAction>

const defaultDispatch: MainContextDispatch = () => initialStoreState

const MainContext = React.createContext({
  ...initialStoreState,
  mainContextDispatch: defaultDispatch,
})

export const setCookieConcent = (
  dispatch: MainContextDispatch,
  payload: boolean
) => {
  dispatch({
    type: "SET_COOKIE_CONCENT",
    payload,
  })
}
export const setTabIsUsed = (
  dispatch: MainContextDispatch,
  payload: boolean
) => {
  dispatch({
    type: "SET_TAB_IS_USED",
    payload,
  })
}

export const mainContextReducer = (
  state: typeof initialStoreState,
  { type, payload }: MainContextAction
) => {
  switch (type) {
    case "SET_COOKIE_CONCENT": {
      return {
        ...state,
        cookieConcent: payload,
      }
    }
    case "SET_TAB_IS_USED": {
      return {
        ...state,
        tabIsUsed: payload,
      }
    }
    default:
      throw new Error("Error from mainContextReducer default case")
  }
}

export default MainContext

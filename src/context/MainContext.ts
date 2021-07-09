import React from "react"

export const initialStoreState = {
  cookieConcent: false,
  tabIsUsed: false,
}

interface MainContextAction {
  type: string
  payload: boolean
}

export type MainContextDispatch = React.Dispatch<MainContextAction>

const defaultDispatch: MainContextDispatch = () => initialStoreState

const MainContext = React.createContext({
  ...initialStoreState,
  mainContextDispatch: defaultDispatch,
})

const types = {
  setCookieConcent: "SET_COOKIE_CONCENT",
  setTabIsUsed: "SET_TAB_IS_USED",
}

export const setCookieConcent = (
  dispatch: MainContextDispatch,
  payload: boolean
) => {
  dispatch({
    type: types.setCookieConcent,
    payload,
  })
}
export const setTabIsUsed = (
  dispatch: MainContextDispatch,
  payload: boolean
) => {
  dispatch({
    type: types.setTabIsUsed,
    payload,
  })
}

export const mainContextReducer = (
  state: typeof initialStoreState,
  { type, payload }: MainContextAction
) => {
  switch (type) {
    case types.setCookieConcent: {
      return {
        ...state,
        cookieConcent: payload,
      }
    }
    case types.setTabIsUsed: {
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

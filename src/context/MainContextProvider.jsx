import React from "react"
import MainContext, {
  mainContextReducer,
  initialStoreState,
  setTabIsUsed,
} from "./MainContext"
import useTabIsUsed from "../hooks/useTabIsUsed"

const MainContextProvider = ({ children }) => {
  const [mainContextStore, mainContextDispatch] = React.useReducer(
    mainContextReducer,
    initialStoreState
  )
  useTabIsUsed({ mainContextDispatch, setTabIsUsed })

  return (
    <MainContext.Provider
      value={{
        ...mainContextStore,
        mainContextDispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
export default MainContextProvider

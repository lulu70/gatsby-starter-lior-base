import React from "react"
import useTabIsUsed from "../hooks/useTabIsUsed"
import MainContext, {
  initialStoreState,
  mainContextReducer,
  setTabIsUsed,
} from "./MainContext"

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
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

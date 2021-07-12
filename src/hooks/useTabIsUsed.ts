import React from "react"
import isBrowser from "../helpers/isBrowser"
import { MainContextDispatch } from "../context/MainContext"

interface useTabIsUsedProps {
  mainContextDispatch: MainContextDispatch
  setTabIsUsed: (dispatch: MainContextDispatch, payload: boolean) => void
}

const useTabIsUsed = ({
  mainContextDispatch,
  setTabIsUsed,
}: useTabIsUsedProps) => {
  // keydown event listener to check if user is tabbing
  React.useEffect(() => {
    function handleFirstTab(e: KeyboardEvent) {
      if (e.code === "Tab") {
        setTabIsUsed(mainContextDispatch, true)
      }
    }
    if (isBrowser()) {
      window.addEventListener("keydown", handleFirstTab)
    }
    return () => {
      if (isBrowser()) {
        window.removeEventListener("keydown", handleFirstTab)
      }
    }
  }, [mainContextDispatch, setTabIsUsed])

  // mousedown event listener to check if user is not tabbing
  React.useEffect(() => {
    function handleMouseDownOnce() {
      setTabIsUsed(mainContextDispatch, false)
    }
    if (isBrowser()) {
      window.addEventListener("mousedown", handleMouseDownOnce)
    }
    return () => {
      if (isBrowser()) {
        window.removeEventListener("mousedown", handleMouseDownOnce)
      }
    }
  }, [setTabIsUsed, mainContextDispatch])
}

export default useTabIsUsed

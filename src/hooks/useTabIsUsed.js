import React from "react"
import isBrowser from "../helpers/isBrowser"
const useTabIsUsed = () => {
  const [tabIsUsed, setTabIseUsed] = React.useState(false)
  // keydown event listener to check if user is tabbing
  React.useEffect(() => {
    function handleFirstTab(e) {
      if (e.code === "Tab") {
        setTabIseUsed(true)
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
  }, [])

  // mousedown event listener to check if user is not tabbing
  React.useEffect(() => {
    function handleMouseDownOnce() {
      setTabIseUsed(false)
    }
    if (isBrowser()) {
      window.addEventListener("mousedown", handleMouseDownOnce)
    }
    return () => {
      if (isBrowser()) {
        window.removeEventListener("mousedown", handleMouseDownOnce)
      }
    }
  }, [])
  return tabIsUsed
}

export default useTabIsUsed

import React from "react"
import isBrowser from "../helpers/isBrowser"

const useElementPosition = () => {
  const elementRef = React.useRef<HTMLElement>()
  const [elementPosition, setElementPosition] = React.useState<
    React.SetStateAction<DOMRect>
  >()

  React.useEffect(() => {
    if (isBrowser()) {
      const handleResize = () => {
        if (elementRef.current) {
          setElementPosition(elementRef.current.getBoundingClientRect())
        }
      }
      window.addEventListener("resize", handleResize)
      handleResize()
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [setElementPosition])

  return [elementRef, elementPosition]
}

export default useElementPosition

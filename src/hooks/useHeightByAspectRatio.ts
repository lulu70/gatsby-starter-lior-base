import React from "react"

const useHeightByAspectRatio = (aspectRatio = 4 / 3) => {
  const ref = React.useRef<HTMLElement>()
  const [height, setHeight] = React.useState(0)
  React.useEffect(() => {
    const width = ref?.current?.offsetWidth ?? 0
    const height = width / aspectRatio
    setHeight(height)
  }, [aspectRatio])
  return { ref, height }
}
export default useHeightByAspectRatio

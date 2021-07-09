import React from "react"
import NavigationSecondMenu from "./NavigationSecondMenu"
import NavigationNav from "./NavigationNav"
import NavigationBrandAndHamburger from "./NavigationBrandAndHamburger"

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header className=" bg-gray-900 z-50 lg:flex lg:px-4 lg:py-3 lg:items-center">
      <NavigationBrandAndHamburger setIsOpen={setIsOpen} isOpen={isOpen} />
      <NavigationNav isOpen={isOpen} />
      <NavigationSecondMenu mainNavIsOpen={isOpen} />
    </header>
  )
}

export default Navigation

import React from "react"
import { Link } from "gatsby"
import MainContext from "../../context/MainContext"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"
import classNames from "classnames"

interface NavigationNavProps {
  isOpen: boolean
}

const NavigationNav = ({ isOpen }: NavigationNavProps) => {
  const links = [
    {
      id: 0,
      text: "Second Page",
      slug: "/second-page",
    },
    {
      id: 1,
      text: "Third Page",
      slug: "/third-page",
    },
    {
      id: 2,
      text: "Forth Page",
      slug: "/forth-page",
    },
  ]
  const { tabIsUsed } = React.useContext(MainContext)
  return (
    <nav
      id="links-container"
      className={classNames(isOpen ? "block" : "hidden", "lg:block")}
    >
      <div className="px-2 pt-2 pb-4 lg:flex lg:p-0 lg:items-center">
        {links.map(({ id, text, slug }, index) => (
          <Link
            key={id}
            to={slug}
            className={classNames(
              index > 0 ? "mt-1" : "mt-0",
              "lg:mt-0 lg:ml-2 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800",
              getClassNamesByTabIsUsedState(tabIsUsed)
            )}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavigationNav

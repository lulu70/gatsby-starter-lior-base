import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"
import MainContext from "../../context/MainContext"
import classNames from "classnames"

interface NavigationSecondMenuProps {
  mainNavIsOpen: boolean
  className?: string
}
const NavigationSecondMenu = ({
  className,
  mainNavIsOpen,
}: NavigationSecondMenuProps) => {
  const { tabIsUsed } = React.useContext(MainContext)

  const links = [
    { id: 0, text: "Account Settings", slug: "/" },
    { id: 1, text: "Support", slug: "/" },
    { id: 2, text: "Logout", slug: "/" },
  ]
  const [isOpen, setIsOpen] = React.useState(false)
  React.useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Esc" || e.key === "Escape") {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeydown)
    return () => {
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [])
  return (
    <>
      <div
        id="desktop-menu"
        className={classNames(
          "relative hidden z-10 lg:block lg:ml-6",
          className,
          "lg:ml-auto"
        )}
      >
        <button
          className="relative block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
          onClick={() => {
            setIsOpen(isOpen => !isOpen)
          }}
        >
          <StaticImage
            className="h-full w-full object-cover"
            src="https://placekitten.com/50/50"
            alt="cat avatar"
            placeholder="none"
            formats={["auto", "webp", "avif"]}
          />
        </button>
        {isOpen && (
          <>
            <button
              className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
              tabIndex={-1}
              onClick={() => setIsOpen(false)}
              aria-label="layout"
            />
            <div
              id="links-on-desktop"
              className="mt-2 py-2 bg-white rounded-lg w-48 shadow-xl absolute right-0"
            >
              {links.map(({ id, text, slug }) => (
                <Link
                  key={id}
                  to={slug}
                  className={classNames(
                    "block px-4 py-2 text-gray-800 hover:bg-gray-900 hover:text-white",
                    getClassNamesByTabIsUsedState(tabIsUsed)
                  )}
                >
                  {text}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
      {mainNavIsOpen && (
        <div
          id="mobile-menu"
          className="px-2 py-5 lg:hidden border-t border-gray-800"
        >
          <div className="flex items-center">
            <StaticImage
              className="h-8 w-8 rounded-full object-cover border-2 border-gray-600"
              src="https://placekitten.com/50/50"
              alt="avatar"
              placeholder="none"
              formats={["auto", "webp", "avif"]}
            />
            <span className="ml-3 text-white font-semibold text-xs">
              Lior Cohen
            </span>
          </div>
          <div id="links-on-mobile" className="mt-4">
            {links.map(({ id, text, slug }, index) => (
              <Link
                key={id}
                to={slug}
                className={classNames(
                  "block text-gray-400",
                  getClassNamesByTabIsUsedState(tabIsUsed),
                  { "mt-2": index > 0 },
                  "hover:text-white"
                )}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default NavigationSecondMenu

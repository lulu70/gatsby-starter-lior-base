import React from "react"
import { Link } from "gatsby"
import FocusedButton from "./FocusedButton"
import { StaticImage } from "gatsby-plugin-image"
const NavigationBrandAndHamburger = ({ isOpen, setIsOpen }) => {
  return (
    <div
      id="brand-and-hamburger-container"
      className="flex items-center justify-between px-4 py-3 lg:p-0"
    >
      <div id="brand-container">
        <Link to="/">
          <StaticImage
            className="w-12 h-12 rounded-full"
            src="https://placekitten.com/250/250"
            alt="cat avatar"
            placeholder="none"
            formats={["auto", "webp", "avif"]}
          />
        </Link>
      </div>
      <div id="hamburger-container" className="lg:hidden text-white">
        <FocusedButton
          className="z-10 relative block w-8"
          aria-label="menu"
          onClick={() => {
            setIsOpen(isOpen => !isOpen)
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </FocusedButton>
      </div>
    </div>
  )
}

export default NavigationBrandAndHamburger

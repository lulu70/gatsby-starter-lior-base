import React from "react"
import { Link } from "gatsby"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"
import useTabIsUsed from "../../hooks/useTabIsUsed"

const Footer = () => {
  const tabIsUsed = useTabIsUsed()
  const links = [
    {
      id: 0,
      text: "Home",
      slug: "/",
    },
    {
      id: 1,
      text: "Second Page",
      slug: "/second-page",
    },
    {
      id: 2,
      text: "Third Page",
      slug: "/third-page",
    },
    {
      id: 3,
      text: "Forth Page",
      slug: "/forth-page",
    },
    {
      id: 4,
      text: "Privacy Policy",
      slug: "/policies/privacy-policy/",
    },
  ]
  return (
    <footer className="mt-auto pb-5">
      <div className="w-5/6 lg:w-2/3 text-center mx-auto">
        <nav className="flex flex-col lg:flex-row items-center mx-auto text-sm border-t border-b py-3 lg:space-x-5">
          {links.map(link => (
            <Link
              key={link.id}
              className={`text-gray-500 ${getClassNamesByTabIsUsedState(
                tabIsUsed
              )}`}
              to={link.slug}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="text-gray-500 mt-3">
          © 2020 Lior Cohen All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer

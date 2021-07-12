import React from "react"
import { Link } from "gatsby"
import MainContext, { setCookieConcent } from "../../context/MainContext"
import isBrowser from "../../helpers/isBrowser"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"
import classnames from "classnames"

const CookieConsent = () => {
  const { cookieConcent, mainContextDispatch, tabIsUsed } = React.useContext(
    MainContext
  )
  //set cookie concent from local storage
  React.useEffect(() => {
    const cookieConcent = isBrowser()
      ? localStorage.getItem("cookie_concent")
      : null
    if (cookieConcent) {
      const boolCookieConcent = cookieConcent === "true"
      setCookieConcent(mainContextDispatch, boolCookieConcent)
    }
  }, [mainContextDispatch])

  function handleClick() {
    setCookieConcent(mainContextDispatch, true)
    if (isBrowser()) {
      localStorage.setItem("cookie_concent", "true")
    }
  }

  return !cookieConcent ? (
    <div
      className="bg-gray-900 w-full z-40 fixed bottom-0 small m-0 text-center py-2 text-gray-100"
      role="alert"
    >
      We are using cookies to ensure best experience on our website.{" "}
      <Link
        to="/policies/privacy-policy"
        className={classnames(
          "text-yellow-400",
          getClassNamesByTabIsUsedState(tabIsUsed)
        )}
      >
        Privacy policy
      </Link>{" "}
      <button
        className={classnames(
          "border border-gray-50 p-1 rounded-sm",
          getClassNamesByTabIsUsedState(tabIsUsed)
        )}
        onClick={handleClick}
      >
        Got it!
      </button>
    </div>
  ) : (
    <span />
  )
}

export default CookieConsent

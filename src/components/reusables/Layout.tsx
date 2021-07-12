import React from "react"
import Navigation from "./Navigation"
import ScrollTopButton from "./ScrollTopButton"
import Footer from "./Footer"
import CookieConsent from "./CookieConsent"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="layout-wrapper"
      className="relative overflow-hidden flex flex-col min-h-screen selection:bg-blue-600 selection:text-white"
    >
      <Navigation />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
      <ScrollTopButton />
    </div>
  )
}

export default Layout

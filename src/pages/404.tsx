import React from "react"
import SEO from "../components/reusables/SEO"
import Layout from "../components/reusables/Layout"
import isBrowser from "../helpers/isBrowser"
const NotFoundPage = () => {
  return isBrowser() ? (
    <>
      <SEO title="404: Not found" />
      <Layout>
        <h1 className="text-4xl text-center my-5 font-bold">PAGE NOT FOUND</h1>
      </Layout>
    </>
  ) : (
    <span />
  )
}

export default NotFoundPage

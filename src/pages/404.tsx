import React from "react"
import SeoComponent from "../components/reusables/SeoComponent"
import Layout from "../components/reusables/Layout"
import isBrowser from "../helpers/isBrowser"
const NotFoundPage = () => {
  return isBrowser() ? (
    <>
      <SeoComponent title="404: Not found" />
      <Layout>
        <h1 className="text-4xl text-center my-5 font-bold">PAGE NOT FOUND</h1>
      </Layout>
    </>
  ) : (
    <span />
  )
}

export default NotFoundPage

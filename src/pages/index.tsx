import React from "react"
import Layout from "../components/reusables/Layout"
import SeoComponent from "../components/reusables/SeoComponent"
import { StaticImage } from "gatsby-plugin-image"
export default function Home() {
  return (
    <>
      <SeoComponent title="Home" />
      <Layout>
        <section id="main" className="my-10">
          <h1 className="text-center font-bold text-4xl">Hello World</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="w-9/12 lg:w-1/3 mx-auto mt-10">
              <StaticImage
                src="../images/image-name.jpg"
                alt="image-name"
                placeholder="none"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

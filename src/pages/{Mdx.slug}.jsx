import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/reusables/Layout"
import SeoComponent from "../components/reusables/SeoComponent"

export default function Home({ data }) {
  const mdx = data.mdx.childMdx
  const image = getImage(mdx.frontmatter.image)
  return (
    <>
      <SeoComponent title={mdx.frontmatter.title} />
      <Layout>
        <section id="main" className="my-10">
          <h1 className="text-center font-bold text-4xl">
            {mdx.frontmatter.title}
          </h1>
          <div className="flex flex-col lg:flex-row">
            <div className="w-9/12 lg:w-1/3 mx-auto mt-10">
              <GatsbyImage image={image} alt={mdx.frontmatter.image.name} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
export const query = graphql`
  query($id: String!) {
    mdx: file(childMdx: { id: { eq: $id } }) {
      ...MdxNode
    }
  }
`

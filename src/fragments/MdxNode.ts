import { graphql } from "gatsby"

export const fragment = graphql`
  fragment MdxNode on File {
    id
    childMdx {
      id
      body
      frontmatter {
        title
        image {
          ...NewGatsbyImage
        }
      }
    }
  }
`

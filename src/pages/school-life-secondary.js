import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogDetailsPageMain from "../components/schoolLifeSecondary"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "school-life-secondary"}}
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

const BlogDetailsPage = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <Seo
        image={seoImageUrl?.length > 1 ? `https://shakhsiyah.netlify.app${seoImageUrl}` : null}
        description="The curriculum and formal classroom learning is just one element of learning in Shakhsiyah Schools. Children learn through all aspects of school life in many ways as our concept of learning is holistic tarbiyah."
        title="Secondary School Life"
      />
      <BlogDetailsPageMain />
    </Layout>
  )
}

export default BlogDetailsPage

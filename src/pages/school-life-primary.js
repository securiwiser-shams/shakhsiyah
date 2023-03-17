import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogDetailsPageMain from "../components/schoolLifePrimary"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "school-life-primary"}}
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
        description="At Shakhsiyah Schools we believe that learning is a lifelong journey, and extends well beyond the classroom. As a community, we are constantly seeking knowledge to grow closer to Allah (swt)."
        title="Primary School Life"
      />
      <BlogDetailsPageMain />
    </Layout>
  )
}

export default BlogDetailsPage

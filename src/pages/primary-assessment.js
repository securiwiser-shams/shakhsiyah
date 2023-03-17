import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogDetailsPageMain from "../components/primaryAssessment"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "primary-assessment"}}
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
        description="Observe children as they act and interact in their play, everyday activities and planned activities, and learn from parents about what the child does at home (observation)."
        title="Primary School Assessment"
      />
      <BlogDetailsPageMain />
    </Layout>
  )
}

export default BlogDetailsPage

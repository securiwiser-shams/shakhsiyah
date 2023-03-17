import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogDetailsPageMain from "../components/earlyAssessment"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "early-assessment"}}
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
        description="Our principle of Taqdeer underpins all areas of assessment in our Early Years provision. The Early Years Pedagogy at our schools aims to empower and support children so that they may become powerful learners."
        title="Early Years Assessment"
      />
      <BlogDetailsPageMain />
    </Layout>
  )
}

export default BlogDetailsPage

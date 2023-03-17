import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogDetailsPageMain from "../components/schoolLifeEarly"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "school-life-early"}}
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
        description="Every year, every child in our school performs at the children’s presentation. They prepare, rehearse and amaze the audience with their public speaking skills, confidence and creativity."
        title="Early Years School Life"
      />
      <BlogDetailsPageMain />
    </Layout>
  )
}

export default BlogDetailsPage

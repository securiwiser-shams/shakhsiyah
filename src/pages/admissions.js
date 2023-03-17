import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogDetailsPageMain from "../components/admissions"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "admissions"}}
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
        description="Parents must fill in an application form for their child to be added to the school’s waiting list. If the child already attends another school, a copy of the latest school report will be required during the admission procedure."
        title="Admissions"
      />
      <BlogDetailsPageMain />
    </Layout>
  )
}

export default BlogDetailsPage

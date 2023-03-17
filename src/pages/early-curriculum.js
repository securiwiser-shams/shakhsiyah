import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CourseFourMain from "../components/earlyCurriculum"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "early-curriculum"}}
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

const CoursePageFour = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <Seo
        image={seoImageUrl?.length > 1 ? `https://shakhsiyah.netlify.app${seoImageUrl}` : null}
        description="Our Early Years ethos is that learning is through providing a stimulating adult supported environment for young children to develop their shakhsiyah, thinking, self awareness and physical development."
        title="Early Years Curriculum"
      />
      <CourseFourMain />
    </Layout>
  )
}

export default CoursePageFour

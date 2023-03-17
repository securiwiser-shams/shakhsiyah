import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CourseFourMain from "../components/secondaryCurriculum"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "secondary-curriculum"}}
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
        description="Our Secondary ethos is that learning is through providing a stimulating adult supported environment for young children to develop their shakhsiyah, thinking, self awareness and physical development."
        title="Secondary School Curriculum"
      />
      <CourseFourMain />
    </Layout>
  )
}

export default CoursePageFour

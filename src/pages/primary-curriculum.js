import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CourseFourMain from "../components/primaryCurriculum"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "primary-curriculum"}}
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
        description="We are continuously developing new and exciting ways of encouraging personal development in all areas of learning in a safe and stimulating environment."
        title="Primary School Curriculum"
      />
      <CourseFourMain />
    </Layout>
  )
}

export default CoursePageFour

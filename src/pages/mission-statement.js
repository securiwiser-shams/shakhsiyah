import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutMain from "../components/missionStatement"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "mission-statement"}}
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

const AboutPage = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <Seo
        image={seoImageUrl?.length > 1 ? `https://shakhsiyah.netlify.app${seoImageUrl}` : null}
        description="The Islamic Shakhsiyah Foundation is an educational establishment aimed at providing high quality academic education in combination with classical Islamic culturing as:"
        title="Mission Statement"
      />
      <AboutMain />
    </Layout>
  )
}

export default AboutPage

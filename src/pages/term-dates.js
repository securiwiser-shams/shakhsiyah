import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Parents from "../components/termDates"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "parents"}}
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

const EventDetailsPage = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <Seo
        image={seoImageUrl?.length > 1 ? `https://shakhsiyah.netlify.app${seoImageUrl}` : null}
        description="We are very pleased with the work our staff have put in to give the children at Shakhsiyah Schools an amazing holistic tarbiyah. The children are a proof of the amazing work being done."
        title="Information for Parents"
      />
      <Parents /> {/* Updated component name if necessary */}
    </Layout>
  )
}

export default EventDetailsPage

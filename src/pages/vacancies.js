import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import EventMain from "../components/vacancies"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "vacancies"}}
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

const EventPage = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <Seo
        image={seoImageUrl?.length > 1 ? `https://shakhsiyah.netlify.app${seoImageUrl}` : null}
        description="We offer a number of opportunities to work at our organisation in an Islamic environment. Our current vacancies are listed below. Shakhsiyah Schools are committed to promoting the safety and well-being of children."
        title="Vacancies"
      />
      <EventMain />
    </Layout>
  )
}

export default EventPage


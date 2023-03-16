import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HomeMain from "../components/home"
import SEO from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "index"}}
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <SEO
        image={seoImageUrl?.length > 1 ? `https://shakhsiyah.netlify.app${seoImageUrl}` : null}
        description="Shakhsiyah Schools are governed by the Principles of Shakhsiyah Education, which have been developed through extensive research in order to generate a 21st century Islamic educational model that is true to the Qur’an and sunnah."
        title="Shakhsiyah Schools"
      />
      <HomeMain />
    </Layout>
  );
};

export default IndexPage;
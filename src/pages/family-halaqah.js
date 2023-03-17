import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShopMain from "../components/familyHalaqah"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "family-halaqah"}}
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

const ShopPage = ({ data }) => {
  const seoImageUrl = data.allFile.edges[0]?.node?.publicURL
  return (
    <Layout>
      <Seo
        image={seoImageUrl?.length > 1 ? `https://shakhsiyah.netlify.app${seoImageUrl}` : null}
        description="Our free Quranic resources are specially designed for Muslim parents and educators for an at home Halaqah. These are available to download below."
        title="Family Halaqah"
      />
      <ShopMain />
    </Layout>
  )
}

export default ShopPage

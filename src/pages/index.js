import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HomeMain from "../components/home"
import Seo from "../components/layout/seo"
import {CookieNotice} from "gatsby-cookie-notice";


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
      <Seo
        image={seoImageUrl?.length > 1 ? `https://shakhsiyah.netlify.app${seoImageUrl}` : null}
        description="Shakhsiyah Schools are governed by the Principles of Shakhsiyah Education, which have been developed through extensive research in order to generate a 21st century Islamic educational model that is true to the Qur’an and sunnah."
        title="Shakhsiyah Schools"
      />
      <HomeMain />
      <CookieNotice>
    <h4>This websites uses cookies.</h4>
    <p>We use cookies to make the site work better, but also to see how you interact with it. how you interact with it. We will only use cookies if you allow us to do so by clicking by clicking on "Accept Cookies". You can also choose which cookie you want to allow.</p>
</CookieNotice>
    </Layout>
  );
};

export default IndexPage;
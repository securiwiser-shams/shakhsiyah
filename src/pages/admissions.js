import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import BlogDetailsPageMain from "../components/admissions"
import SEO from "../components/layout/seo"

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
const BlogDetailsPage = () => (
  <Layout>
    <BlogDetailsPageMain />
        <SEO
          image={seoImageUrl?.length > 1 ? `https://shakhsiyah.netlify.app${seoImageUrl}` : null}
          description="Securiwiser is a cybersecurity service provider offering the best cybersecurity consulting & cyber risk monitoring services. We can assist you with effective cybersecurity tools to monitor & protect your business from cyber-attack. Get in touch with us today! "
          title="Best Cybersecurity Service Provider | Cybersecurity Consulting Firm"
        />
  </Layout>
)

export default BlogDetailsPage

export const Head = () => (
  <Seo />
)
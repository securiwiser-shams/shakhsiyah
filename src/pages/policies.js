import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogDetailsPageMain from "../components/policies"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "policies"}}
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

const BlogDetailsPage = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <Seo
        image={seoImageUrl?.length > 1 ? `https://shakhsiyah.netlify.app${seoImageUrl}` : null}
        description="Our foremost priority is the welfare, health and safety of all children in our care. All members of Islamic Shakhsiyah Foundation will need to abide by these policies at all times."
        title="Policies"
      />
      <BlogDetailsPageMain />
    </Layout>
  );
};

export default BlogDetailsPage;

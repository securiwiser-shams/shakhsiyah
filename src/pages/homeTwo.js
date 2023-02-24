import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import HomeTwoMain from "../components/homeTwo"

const IndexPageTwo = () => (
  <Layout>
    <HomeTwoMain />
  </Layout>
)

export default IndexPageTwo

export const Head = () => (
  <Seo />
)
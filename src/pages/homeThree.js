import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import HomeThreeMain from "../components/homeThree"

const IndexPageThree = () => (
  <Layout>
    <HomeThreeMain />
  </Layout>
)

export default IndexPageThree

export const Head = () => (
  <Seo />
)
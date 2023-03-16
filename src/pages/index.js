import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import HomeMain from "../components/home"

const IndexPage = () => (
  <Layout>
    <HomeMain />
  </Layout>
)

export default IndexPage

export const Head = () => (
  <Seo />
)
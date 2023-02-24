import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import FaqMain from "../components/faqPage"

const FaqPage = () => (
  <Layout>
    <FaqMain />
  </Layout>
)

export default FaqPage

export const Head = () => (
  <Seo />
)
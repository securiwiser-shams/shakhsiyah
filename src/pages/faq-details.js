import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import FaqDetailsMain from "../components/faqDetails"

const FaqDetails = () => (
  <Layout>
    <FaqDetailsMain />
  </Layout>
)

export default FaqDetails

export const Head = () => (
  <Seo />
)
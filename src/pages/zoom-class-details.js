import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ZoomClassDetailsMain from "../components/zoomClassDetails"

const ZoomClassDetailsPage = () => (
  <Layout>
    <ZoomClassDetailsMain />
  </Layout>
)

export default ZoomClassDetailsPage

export const Head = () => (
  <Seo />
)
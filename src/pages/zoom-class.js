import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ZoomClassMain from "../components/zoomClass"

const ZoomClassPage = () => (
  <Layout>
    <ZoomClassMain />
  </Layout>
)

export default ZoomClassPage

export const Head = () => (
  <Seo />
)
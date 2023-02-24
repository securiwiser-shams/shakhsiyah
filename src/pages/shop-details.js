import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ShopDetailsMain from "../components/shopDetails"

const ShopDetailsPage = () => (
  <Layout>
    <ShopDetailsMain />
  </Layout>
)

export default ShopDetailsPage

export const Head = () => (
  <Seo />
)
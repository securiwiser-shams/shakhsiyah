import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ShopMain from "../components/familyHalaqah"

const ShopPage = () => (
  <Layout>
    <ShopMain />
  </Layout>
)

export default ShopPage

export const Head = () => (
  <Seo />
)
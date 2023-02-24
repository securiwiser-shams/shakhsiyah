import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import CheckoutMain from "../components/checkout"

const CheckoutPage = () => (
  <Layout>
    <CheckoutMain />
  </Layout>
)

export default CheckoutPage

export const Head = () => (
  <Seo />
)
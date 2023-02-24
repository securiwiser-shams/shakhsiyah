import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import CartMain from "../components/cart"

const CartPage = () => (
  <Layout>
    <CartMain />
  </Layout>
)

export default CartPage

export const Head = () => (
  <Seo />
)
import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import WishlistMain from "../components/wishlist"

const WishlistPage = () => (
  <Layout>
    <WishlistMain />
  </Layout>
)

export default WishlistPage

export const Head = () => (
  <Seo />
)
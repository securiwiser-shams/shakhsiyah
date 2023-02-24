import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import MembershipMain from "../components/membership"

const MembershipPage = () => (
  <Layout>
    <MembershipMain />
  </Layout>
)

export default MembershipPage

export const Head = () => (
  <Seo />
)
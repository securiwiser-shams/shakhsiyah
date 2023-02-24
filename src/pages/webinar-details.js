import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import WebinarDetailsMain from "../components/webinarDetails"

const WebinarDetailsPage = () => (
  <Layout>
    <WebinarDetailsMain />
  </Layout>
)

export default WebinarDetailsPage

export const Head = () => (
  <Seo />
)
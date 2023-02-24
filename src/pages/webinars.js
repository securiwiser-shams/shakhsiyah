import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import WebinarsMain from "../components/webinars"

const WebinarsPage = () => (
  <Layout>
    <WebinarsMain />
  </Layout>
)

export default WebinarsPage

export const Head = () => (
  <Seo />
)
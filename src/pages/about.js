import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import AboutMain from "../components/about"

const AboutPage = () => (
  <Layout>
    <AboutMain />
  </Layout>
)

export default AboutPage

export const Head = () => (
  <Seo />
)
import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import BecomeInstructorMain from "../components/becomeInstructor"

const BecomeInstructorPage = () => (
  <Layout>
    <BecomeInstructorMain />
  </Layout>
)

export default BecomeInstructorPage

export const Head = () => (
  <Seo />
)
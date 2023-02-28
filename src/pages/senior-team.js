import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import InstructorMain from "../components/seniorTeam"

const InstructorPage = () => (
  <Layout>
    <InstructorMain />
  </Layout>
)

export default InstructorPage

export const Head = () => (
  <Seo />
)
import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import InstructorProfileMain from "../components/instructorProfile"

const InstructorProfilePage = () => (
  <Layout>
    <InstructorProfileMain />
  </Layout>
)

export default InstructorProfilePage

export const Head = () => (
  <Seo />
)
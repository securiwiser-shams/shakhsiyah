import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import StudentProfileMain from "../components/studentProfile"

const StudentProfilePage = () => (
  <Layout>
    <StudentProfileMain />
  </Layout>
)

export default StudentProfilePage

export const Head = () => (
  <Seo />
)
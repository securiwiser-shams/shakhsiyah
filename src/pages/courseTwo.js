import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import CourseTwoMain from "../components/courseTwo"

const CoursePageTwo = () => (
  <Layout>
    <CourseTwoMain />
  </Layout>
)

export default CoursePageTwo

export const Head = () => (
  <Seo />
)
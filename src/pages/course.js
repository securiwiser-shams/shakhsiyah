import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import CourseMain from "../components/course"

const CoursePage = () => (
  <Layout>
    <CourseMain />
  </Layout>
)

export default CoursePage

export const Head = () => (
  <Seo />
)
import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import CourseDetailsMain from "../components/curriculumDetails"

const CourseDetailsPage = () => (
  <Layout>
    <CourseDetailsMain />
  </Layout>
)

export default CourseDetailsPage

export const Head = () => (
  <Seo />
)
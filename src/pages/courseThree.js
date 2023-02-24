import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import CourseThreeMain from "../components/courseThree"

const CoursePageThree = () => (
  <Layout>
    <CourseThreeMain />
  </Layout>
)

export default CoursePageThree

export const Head = () => (
  <Seo />
)
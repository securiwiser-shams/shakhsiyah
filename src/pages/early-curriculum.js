import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import CourseFourMain from "../components/earlyCurriculum"

const CoursePageFour = () => (
    <Layout>
        <CourseFourMain />
    </Layout>
)

export default CoursePageFour

export const Head = () => (
    <Seo />
)
import * as React from "react"
import Layout from "../components/layout"
import {Seo} from "../components/seo"
import ErrorPageMain from "../components/errorPage"

const NotFoundPage = () => (
  <Layout>
    <ErrorPageMain />
  </Layout>
)

export default NotFoundPage

export const Head = () => (
    <Seo title="404: Not found" />
)

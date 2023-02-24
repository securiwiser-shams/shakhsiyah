import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ForgotPasswordMain from "../components/forgotPassword"

const ForgotPasswordPage = () => (
  <Layout>
    <ForgotPasswordMain />
  </Layout>
)

export default ForgotPasswordPage

export const Head = () => (
  <Seo />
)
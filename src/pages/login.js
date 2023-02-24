import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import LoginMain from "../components/login"

const LoginPage = () => (
  <Layout>
    <LoginMain />
  </Layout>
)

export default LoginPage

export const Head = () => (
  <Seo />
)
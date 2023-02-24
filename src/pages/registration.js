import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import RegistrationMain from "../components/registration"

const RegistrationPage = () => (
  <Layout>
    <RegistrationMain />
  </Layout>
)

export default RegistrationPage

export const Head = () => (
  <Seo />
)
import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ContactMain from "../components/contact"

const ContactPage = () => (
  <Layout>
    <ContactMain />
  </Layout>
)

export default ContactPage

export const Head = () => (
  <Seo />
)
import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import EventMain from "../components/vacancies"

const EventPage = () => (
  <Layout>
    <EventMain />
  </Layout>
)

export default EventPage

export const Head = () => (
  <Seo />
)
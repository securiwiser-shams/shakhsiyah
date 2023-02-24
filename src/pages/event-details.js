import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import EventDetailsMain from "../components/eventDetails"

const EventDetailsPage = () => (
  <Layout>
    <EventDetailsMain />
  </Layout>
)

export default EventDetailsPage

export const Head = () => (
  <Seo />
)
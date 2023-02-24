import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import BlogPageMain from "../components/blog"

const BlogPage = () => (
  <Layout>
    <BlogPageMain />
  </Layout>
)

export default BlogPage

export const Head = () => (
  <Seo />
)
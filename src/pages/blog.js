import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useArticles from "../hooks/useArticles"
import Preview from "../components/preview"

const Blog = () => {
  const articles = useArticles()
  return (
    <Layout>
      <SEO title="Blog" />
      {articles.map(article => (
        <Preview article={article} />
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Blog

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useArticles from "../hooks/useArticles"

const Blog = () => {
  const articles = useArticles()
  return (
    <Layout>
      <SEO title="Blog" />
      {articles.map(({ title, blurb }) => (
        <>
          <h1>{title}</h1>
          <p>{blurb}</p>
        </>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Blog

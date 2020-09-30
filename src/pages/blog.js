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
      <div>
        {articles.map(article => (
          <Preview key={article.slug} article={article} />
        ))}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Blog

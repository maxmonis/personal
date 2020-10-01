import React from "react"

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
        <Preview key={article.slug} article={article} />
      ))}
    </Layout>
  )
}

export default Blog

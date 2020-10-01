import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useArticles from "../hooks/useArticles"
import Preview from "../components/preview"
import { css } from "@emotion/core"

const Blog = () => {
  const articles = useArticles()
  return (
    <Layout>
      <SEO title="Blog" />
      <div
        css={css`
          background-color: var(--blue);
        `}
      >
        {articles.map(article => (
          <Preview key={article.slug} article={article} />
        ))}
      </div>
      <Link to="/">Return home</Link>
    </Layout>
  )
}

export default Blog

import React from "react"

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
          padding: 2rem;
          @media (min-width: 992px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 1rem;
          }
        `}
      >
        {articles.map(article => (
          <Preview key={article.slug} article={article} />
        ))}
      </div>
    </Layout>
  )
}

export default Blog

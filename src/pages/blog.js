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
          padding: 2rem;
          @media (min-width: 576px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 1rem;
          }
          @media (min-width: 992px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 1rem;
          }
        `}
      >
        {articles.map(article => (
          <Preview key={article.slug} article={article} />
        ))}
      </div>
      <div
        css={css`
          margin-top: 10rem;
          text-align: center;
          text-transform: uppercase;
          a {
            font-size: 20px;
            :hover {
              border-bottom: 1px solid var(--blue);
            }
          }
        `}
      >
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}

export default Blog

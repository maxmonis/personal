import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useArticles from "../hooks/useArticles"
import Preview from "../components/preview"
import { css } from "@emotion/core"

const Blog = () => {
  const articles = useArticles()
  const [order, setOrder] = useState("newest")
  return (
    <Layout>
      <SEO title="Blog" />
      <label>
        Sort by{" "}
        <select onChange={e => setOrder(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </label>
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
          }
        `}
      >
        {order === "newest"
          ? articles.map(article => (
              <Preview key={article.slug} article={article} />
            ))
          : articles
              .reverse()
              .map(article => <Preview key={article.slug} article={article} />)}
      </div>
      <div
        css={css`
          margin-top: 5rem;
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

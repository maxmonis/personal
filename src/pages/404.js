import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      css={css`
        text-align: center;
        h1 {
          margin: 5rem auto 10rem;
        }
      `}
    >
      <h1>404: NOT FOUND</h1>
      <Link to="/">Return home</Link>
    </div>
  </Layout>
)

export default NotFoundPage

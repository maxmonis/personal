import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const IndexPage = () => {
  const date = new Date()
  const hrs = date.getHours()
  const greeting = hrs < 12 ? "morning" : hrs < 17 ? "afternoon" : "evening"
  return (
    <Layout>
      <SEO title="About" />
      <div
        css={css`
          h1,
          h2,
          h3 {
            margin-bottom: 2rem;
          }
          a {
            display: block;
            padding: 1rem;
            border: solid 2px white;
            margin: 5rem auto;
          }
        `}
      >
        <h2>Good {greeting} and welcome!</h2>
        <h1>My name is Max</h1>
        <h3>I build websites</h3>
        <Link to="/portfolio/">Check out my work &#10132;</Link>
      </div>
    </Layout>
  )
}

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

const IndexPage = () => {
  const date = new Date()
  const hrs = date.getHours()
  const greeting = hrs < 12 ? "morning" : hrs < 17 ? "afternoon" : "evening"
  return (
    <Layout>
      <SEO title="About" />
      <div
        css={css`
          h2 {
            margin-top: 5rem;
          }
          h1,
          h2,
          h3 {
            margin-bottom: 2rem;
          }
          a {
            display: block;
            padding: 1rem;
            border: solid 2px white;
            margin: 5rem auto 0;
            max-width: 200px;
          }
        `}
      >
        <h2>Good {greeting} and welcome!</h2>
        <h1>My name is Max</h1>
        <h3>I build websites</h3>
        <a href={`mailto:mmonis77@gmail.com`} className="email-link">
          Get In Touch
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage

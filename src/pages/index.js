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
      <SEO title="Home" />
      <div
        css={css`
          h1,
          h2,
          h3 {
            margin-bottom: 50%;
          }
        `}
      >
        <h2>Good {greeting} and welcome!</h2>
        <h1>My name is Max</h1>
        <h3>I build websites</h3>
      </div>
    </Layout>
  )
}

export default IndexPage

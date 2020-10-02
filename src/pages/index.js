import React from "react"
import Layout from "../components/layout"
import Website from "../components/website"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import useWebsites from "../hooks/useWebsites"

const IndexPage = () => {
  const websites = useWebsites()
  const date = new Date()
  const hrs = date.getHours()
  const greeting = hrs < 12 ? "morning" : hrs < 17 ? "afternoon" : "evening"
  return (
    <Layout>
      <SEO title="Portfolio" />
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
        `}
      >
        <h2>Good {greeting} and welcome!</h2>
        <h1>My name is Max</h1>
        <h3>I build websites</h3>
      </div>
      {websites.map(website => (
        <Website key={website.url} website={website} />
      ))}
    </Layout>
  )
}

export default IndexPage

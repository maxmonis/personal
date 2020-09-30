import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div
        css={css`
          h1,
          h3 {
            margin-bottom: 50%;
          }
        `}
      >
        <h1>My name is Max</h1>
        <h3>I build websites</h3>
      </div>
    </Layout>
  )
}

export default About

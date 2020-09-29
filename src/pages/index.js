import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My name is Max</h1>
    <p>Welcome to my site.</p>
    <div
      css={css`
        max-width: 300px;
      `}
    >
      <Image />
    </div>
    <Link to="/projects/">View my portfolio</Link> <br />
    <a target="_blank" rel="noreferrer" href="https://github.com/maxmonis">
      Check out my Github
    </a>
  </Layout>
)

export default IndexPage

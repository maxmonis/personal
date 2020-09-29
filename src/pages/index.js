import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My name is Max</h1>
    <p>Welcome to my site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/projects/">View my portfolio</Link> <br />
    <a target="_blank" rel="noreferrer" href="https://github.com/maxmonis">
      Check out my Github
    </a>
  </Layout>
)

export default IndexPage

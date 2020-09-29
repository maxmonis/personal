import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Image />
      <Link to="/projects/">View my portfolio</Link> <br />
      <a target="_blank" rel="noreferrer" href="https://github.com/maxmonis">
        Check out my Github
      </a>
    </Layout>
  )
}

export default IndexPage

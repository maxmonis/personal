import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const date = new Date()
  const hrs = date.getHours()
  const greeting = hrs < 12 ? "morning" : hrs < 17 ? "afternoon" : "evening"
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Good {greeting} and welcome!</h2>
      <h1>My name is Max</h1>
      <p>I build websites</p>
      <Link to="/projects/">View my portfolio</Link> <br />
      <a target="_blank" rel="noreferrer" href="https://github.com/maxmonis">
        Check out my Github
      </a>
    </Layout>
  )
}

export default IndexPage

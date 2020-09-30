import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsAbout {
        nodes {
          text
        }
      }
    }
  `)
  const { text } = data.allDatoCmsAbout.nodes[0]
  return (
    <Layout>
      <SEO title="About" />
      <div
        css={css`
          h1,
          p {
            margin: 0 10% 5rem;
          }
        `}
      >
        <h1>I'm a Toronto-based web developer</h1>
        {text.split(/\r|\n/).map(paragraph => (
          <p>{paragraph}</p>
        ))}
        <Link to="/">Return home</Link>
      </div>
    </Layout>
  )
}

export default About

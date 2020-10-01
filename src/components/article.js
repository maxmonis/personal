import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "./layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsArticle(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        text
        image {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const Article = ({
  data: {
    allDatoCmsArticle: { nodes },
  },
}) => {
  const { title, text, image } = nodes[0]
  return (
    <Layout>
      <SEO title={title} />
      <main
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          text-align: center;
          h1 {
            font-size: 4rem;
            padding-bottom: 1rem;
            @media (min-width: 768px) {
              font-size: 6rem;
              padding-bottom: 3rem;
            }
          }
          h2 {
            margin: 2rem 0;
            font-size: 3rem;
            @media (min-width: 768px) {
              font-size: 5rem;
            }
          }
          p {
            padding: 2rem 10% 0;
            :first-of-type {
              margin-top: 5rem;
            }
            :last-of-type {
              margin-bottom: 5rem;
            }
          }
        `}
      >
        <h1>{title}</h1>
        <Image fluid={image.fluid} />
        {text.split(/\r|\n/).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </main>
    </Layout>
  )
}

export default Article

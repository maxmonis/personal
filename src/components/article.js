import React from "react"
import PropTypes from "prop-types"
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
            padding-bottom: 1rem;
            @media (min-width: 768px) {
              font-size: 4rem;
              padding-bottom: 3rem;
            }
          }
          p {
            padding: 2rem 10% 0;
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

Article.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Article

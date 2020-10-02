import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"

const Preview = ({ article }) => {
  const { title, blurb, slug, image } = article
  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
        display: inline-block;
        justify-content: center;
        padding: 1rem;
        h1 {
          padding-bottom: 1rem;
        }
        p {
          padding-top: 1rem;
        }
      `}
    >
      <Link to={`../blog/${slug}`}>
        <h1>{title}</h1>
        <div
          css={css`
            @media (min-width: 768px) {
              display: grid;
              grid-template-columns: 2fr 1fr;
              column-gap: 1rem;
            }
            @media (min-width: 992px) {
              display: inline-block;
            }
          `}
        >
          <Image fluid={image.fluid} />
          <p>{blurb}</p>
        </div>
      </Link>
    </div>
  )
}

export default Preview

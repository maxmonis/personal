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
        padding: 2rem;
        max-width: 75%;
        h1 {
          padding-bottom: 1rem;
        }
        p {
          padding: 1rem 10% 0;
        }
      `}
    >
      <Link to={`../${slug}`}>
        <h1>{title}</h1>
        <Image fluid={image.fluid} />
        <p>{blurb}</p>
      </Link>
    </div>
  )
}

export default Preview

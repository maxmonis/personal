import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"

const Website = ({ website }) => {
  const { title, text, url, image } = website
  return (
    <a
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
        display: inline-block;
        justify-content: center;
        padding: 2rem;
        max-width: 75%;
        h1,
        p {
          margin: 2rem 0;
        }
      `}
      target="_blank"
      rel="noreferrer"
      href={url}
    >
      <h1>{title}</h1>
      <Image fluid={image.fluid} />
      <p>{text}</p>
    </a>
  )
}

export default Website

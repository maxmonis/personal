import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"

const Website = ({ website }) => {
  const { title, text, url, image, github } = website
  return (
    <div
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
    >
      <h1>{title}</h1>
      <a target="_blank" rel="noreferrer" href={url}>
        <Image fluid={image.fluid} />
      </a>
      <p>{text}</p>

      <a
        css={css`
          padding: 1rem 2rem;
          border: solid 2px white;
        `}
        target="_blank"
        rel="noreferrer"
        href={github}
      >
        Check out on Github &#10132;
      </a>
    </div>
  )
}

export default Website

import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 95%;
  display: block;
  font-weight: 700;
  text-align: center;
`

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
      `}
    >
      <h1>{title}</h1>
      <Image fluid={image.fluid} />
      <p>{blurb}</p>
      <Button to={`../${slug}`}>Read more...</Button>
    </div>
  )
}

export default Preview

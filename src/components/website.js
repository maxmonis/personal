import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"

const Website = ({ website }) => {
  const { title, text, url, image, github } = website
  return (
    <div
      css={css`
        border-top: 1px solid #e1e1e1;
        display: inline-block;
        justify-content: center;
        max-width: 90%;
        padding-bottom: 2rem;
        h1,
        p {
          margin: 2rem 0;
        }
        @media (min-width: 576px) {
          padding-bottom: 4rem;
          p {
            margin: 2rem 0 4rem;
            @media (min-width: 992px) {
              margin: 2rem 0 10rem;
            }
          }
        }
      `}
    >
      <h1>{title}</h1>
      <div
        css={css`
          @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 1rem;
          }
          @media (min-width: 992px) {
            display: grid;
            grid-template-columns: 2fr 1fr;
            column-gap: 1rem;
          }
        `}
      >
        <div>
          <a target="_blank" rel="noreferrer" href={url}>
            <Image fluid={image.fluid} />
          </a>
        </div>
        <aside>
          <p>{text}</p>
          <a
            css={css`
              padding: 1rem 2rem;
              max-width: 275px;
              @media (min-width: 992px) {
                border: solid 2px white;
              }
            `}
            target="_blank"
            rel="noreferrer"
            href={github}
          >
            View code on Github &#10132;
          </a>
        </aside>
      </div>
    </div>
  )
}

export default Website

import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"

const Website = ({ website, i }) => {
  const { title, text, url, image, github } = website
  const primary = i % 2 ? "white" : "var(--blue)"
  const secondary = i % 2 ? "var(--blue)" : "white"
  return (
    <div
      css={css`
        max-width: 95%;
        background-color: ${primary};
        display: inline-block;
        margin-bottom: 5rem;
        justify-content: center;
        padding: 1rem 1rem 3rem;
        h1,
        p {
          color: ${secondary};
          margin: 1rem 0;
        }
        @media (min-width: 576px) {
          padding: 2rem;
          p {
            @media (min-width: 992px) {
              margin: 2rem 0 5rem;
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
        <a target="_blank" rel="noreferrer" href={url}>
          <div
            css={css`
              border: 3px solid ${secondary};
            `}
          >
            <Image fluid={image.fluid} />
          </div>
        </a>
        <aside>
          <p>{text}</p>
          <a
            css={css`
              max-width: 275px;
              color: ${secondary};
              @media (min-width: 992px) {
                padding: 1rem 2rem;
                border: solid 2px ${secondary};
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

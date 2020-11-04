import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { css } from "@emotion/core"

const Website = ({ website, i }) => {
  const { title, text, url, image, github } = website
  const primary = i % 2 ? "var(--blue)" : "white"
  const secondary = i % 2 ? "white" : "var(--blue)"
  return (
    <div
      css={css`
        background-color: ${primary};
        display: inline-block;
        justify-content: center;
        margin-bottom: 2rem;
        padding: 1rem 1rem 3rem;
        h1,
        p {
          color: ${secondary};
        }
        h1 {
          margin: 1rem 0;
          @media (min-width: 576px) {
            font-size: 3rem;
          }
        }
      `}
    >
      <a target="_blank" rel="noreferrer" href={url}>
        <h1>{title}</h1>
      </a>
      <div
        css={css`
          max-width: 1025px;
          @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 1rem;
          }
          @media (min-width: 992px) {
            padding-left: 1rem;
            display: grid;
            grid-template-columns: 2fr 1fr;
          }
        `}
      >
        <a target="_blank" rel="noreferrer" href={url}>
          <div
            css={css`
              border: 2px solid ${secondary};
            `}
          >
            <Image fluid={image.fluid} />
          </div>
        </a>
        <div
          css={css`
            a {
              max-width: 275px;
              color: ${secondary};
              padding: 1rem 2rem;
              border: 2px solid ${secondary};
            }
            p {
              margin: 1rem 0 2rem;
              padding: 0 1rem;
            }
            @media (min-width: 768px) {
              position: relative;
              margin-top: 1rem;
              p {
                margin: 0;
                padding: 0 2rem 0 1rem;
              }
              div {
                position: absolute;
                bottom: 2rem;
                width: 100%;
              }
            }
            @media (min-width: 900px) {
              font-size: 20px;
            }
            @media (min-width: 992px) {
              margin-top: 2rem;
            }
          `}
        >
          <p>{text}</p>
          <div>
            <a target="_blank" rel="noreferrer" href={github}>
              View code on Github &#10132;
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Website.propTypes = {
  website: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
}

export default Website

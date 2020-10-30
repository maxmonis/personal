import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const Preview = ({ article }) => {
  const { title, blurb, slug, image, published } = article
  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
        display: inline-block;
        min-width: 100%;
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
        <div>
          <div
            css={css`
              @media (min-width: 576px) {
                max-height: 200px;
                img {
                  max-height: 200px;
                }
              }
            `}
          >
            <Image fluid={image.fluid} />
          </div>
          <p>{blurb}</p>
          <p>Published {formatDistanceToNow(new Date(published))} ago</p>
        </div>
      </Link>
    </div>
  )
}

Preview.propTypes = {
  article: PropTypes.object.isRequired,
}

export default Preview

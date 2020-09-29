import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const Header = ({ title, description }) => {
  return (
    <header>
      <div
        css={css`
          background: rebeccapurple;
          padding: 1rem;
        `}
      >
        <h1
          css={css`
            margin: 0;
            color: white;
            display: flex;
          `}
        >
          <Link
            to="/"
            css={css`
              color: white;
              text-decoration: none;
              padding: 0 5%;
            `}
          >
            {title}
          </Link>
          <span
            css={css`
              display: none;
              @media (min-width: 576px) {
                display: flex;
              }
            `}
          >
            {description}
          </span>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  title: `Title`,
  description: `Description`,
}

export default Header

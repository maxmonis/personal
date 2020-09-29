import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const Header = ({ title, description }) => {
  return (
    <header
      css={css`
        width: 100%;
        padding: 1rem;
        h1 {
          color: white;
          display: flex;
        }
        span {
          display: none;
          @media (min-width: 576px) {
            display: flex;
            margin: 0 4% 0 auto;
          }
        }
      `}
    >
      <h1>
        <Link
          to="/"
          css={css`
            color: white;
            text-decoration: none;
            margin: 0 4%;
          `}
        >
          {title}
        </Link>
        <span>{description}</span>
      </h1>
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

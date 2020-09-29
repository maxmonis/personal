import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const Header = ({ title, description }) => {
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0, color: `white`, display: "flex" }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {title}
          </Link>
          <span
            css={css`
              display: none;
              @media (min-width: 576px) {
                display: flex;
                margin-left: 2rem;
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

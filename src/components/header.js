import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const Header = ({ title }) => {
  return (
    <header
      css={css`
        width: 100%;
        padding: 1rem 5%;
        display: flex;
        flex: row;
        span {
          margin: 0 0 0 auto;
          a {
            padding: 1rem 1rem 0;
          }
        }
      `}
    >
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <span>
        <Link to="/projects/">Portfolio</Link>
        <Link to="/blog/">Blog</Link>
        <a target="_blank" rel="noreferrer" href="https://github.com/maxmonis">
          Github
        </a>
      </span>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: `Max Monis`,
}

export default Header

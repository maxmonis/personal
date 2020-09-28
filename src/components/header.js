import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ title, description }) => (
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
      <h1 style={{ margin: 0, color: `white` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {title}
        </Link>{" "}
        | {description}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  title: `Title`,
  description: `Descritpion`,
}

export default Header

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ title, description }) => {
  const [mobile, setMobile] = useState(window.innerWidth < 576)
  const updateMedia = () => {
    setMobile(window.innerWidth < 576)
  }
  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })
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
        <h1 style={{ margin: 0, color: `white` }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {title}
          </Link>
          {!mobile && ` | ${description}`}
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

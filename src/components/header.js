import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.header`
  width: 100%;
  height: 100px;
  padding: 2rem 5%;
  display: flex;
  flex: row;
  span {
    margin: 0 0 0 auto;
    a {
      padding: 1rem 1rem 0;
      &.active {
        border-bottom: 2px solid #fff;
      }
    }
  }
  li {
    margin-top: 1rem;
    text-align: right;
  }
`

const Header = ({ title }) => {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 576
  )
  const updateMedia = () => {
    setMobile(window.innerWidth < 576)
  }
  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })
  return (
    <Container>
      <h1>
        <Link to="/">{mobile ? "MM" : title} </Link>
      </h1>
      <span>
        <div>
          {!mobile && (
            <Link to="/" activeClassName="active">
              About
            </Link>
          )}
          <Link to="/portfolio/" activeClassName="active">
            Portfolio
          </Link>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </div>
      </span>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: `Max Monis`,
}

export default Header

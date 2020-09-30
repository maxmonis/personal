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
    }
  }
  li {
    margin-top: 1rem;
    text-align: right;
  }
`
const Button = styled.h3`
  cursor: pointer;
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
  const [menu, setMenu] = useState(false)
  const toggle = () => setMenu(!menu)
  return (
    <Container>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <span>
        {!mobile ? (
          <div>
            <Link to="/portfolio/">Portfolio</Link>
            <Link to="/blog/">Blog</Link>
            <Link to="/about/">About</Link>
          </div>
        ) : menu ? (
          <>
            <Button onClick={toggle}>Hide Menu &#9650;</Button>
            <li>
              <Link to="/portfolio/">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </>
        ) : (
          <Button onClick={toggle}>Show Menu &#9660;</Button>
        )}
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

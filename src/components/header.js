import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import icon from "../images/favicon.png"

const Container = styled.header`
  width: 100%;
  padding: 2rem 5%;
  display: flex;
  flex: row;
  span {
    margin: 0 0 0 auto;
    a {
      padding: 1rem 1rem 0;
      &.email-link {
        padding: 1rem;
        border: solid 2px white;
        border-radius: 8px;
        max-width: 200px;
      }
    }
  }
`
const Image = styled.img`
  height: 45px;
`

const Header = ({ title }) => {
  return (
    <Container>
      <h1>
        <Link to="/">
          <Image src={icon} alt={title} />
        </Link>
      </h1>
      <span>
        <Link to="/blog/">Blog</Link>
        <a href={`mailto:mmonis77@gmail.com`} className="email-link">
          Get In Touch
        </a>
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

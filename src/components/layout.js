import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          ul {
            list-style: none;
          }
        `}
      />
      <Header
        title={data.site.siteMetadata?.title || `Max Monis`}
        description={
          data.site.siteMetadata?.description || `Toronto web developer`
        }
      />
      <div
        css={css`
          min-height: 100vh;
          margin: 3rem;
        `}
      >
        <main>{children}</main>
      </div>
      <footer
        css={css`
          height: 20px;
          text-align: center;
        `}
      >
        © {new Date().getFullYear()}{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/maxmonis">
          Max Monis
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

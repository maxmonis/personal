import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
      <Header
        title={data.site.siteMetadata?.title || `Title`}
        description={data.site.siteMetadata?.description || `Description`}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div style={{ minHeight: "100vh", paddingBottom: "20px" }}>
          <main>{children}</main>
        </div>
        <footer
          style={{
            height: "20px",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/maxmonis"
          >
            Max Monis
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

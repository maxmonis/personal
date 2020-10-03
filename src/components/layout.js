import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
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
            color: var(--blue);
            text-decoration: none;
            list-style: none;
          }
          :root {
            --blue: #486383;
          }
        `}
      />
      <Header title={data.site.siteMetadata?.title || `Max Monis`} />
      <main
        css={css`
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          flex: 1;
          align-items: center;
          text-align: center;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

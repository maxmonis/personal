import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import Header from "./header"
import Image from "./image"

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
          Link {
            color: white;
            text-decoration: none;
          }
        `}
      />
      <Image>
        <Header
          title={data.site.siteMetadata?.title || `Max Monis`}
          description={
            data.site.siteMetadata?.description || `Toronto web developer`
          }
        />
        <main
          css={css`
            min-height: 100vh;
          `}
        >
          {children}
        </main>
        <footer
          css={css`
            text-align: center;
          `}
        >
          © Max Monis {new Date().getFullYear()}
        </footer>
      </Image>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

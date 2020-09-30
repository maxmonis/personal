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
            color: white;
            text-decoration: none;
            list-style: none;
          }
        `}
      />
      <Image>
        <Header title={data.site.siteMetadata?.title || `Max Monis`} />
        <main
          css={css`
            min-height: 100vh;
            padding: 5rem 1rem;
          `}
        >
          {children}
        </main>
        <footer
          css={css`
            text-align: center;
          `}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/maxmonis"
          >
            © Max Monis {new Date().getFullYear()}
          </a>
        </footer>
      </Image>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

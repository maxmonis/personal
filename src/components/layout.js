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
            background-color: var(--blue);
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
      <footer
        css={css`
          text-align: center;
          padding-bottom: 1rem;
          margin-top: 5rem;
        `}
      >
        <a target="_blank" rel="noreferrer" href="https://github.com/maxmonis">
          © Max Monis {new Date().getFullYear()}
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

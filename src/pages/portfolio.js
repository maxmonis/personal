import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useWebsites from "../hooks/useWebsites"
import Website from "../components/website"
import { css } from "@emotion/core"

const Portfolio = () => {
  const websites = useWebsites()
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div
        css={css`
          background-color: var(--blue);
        `}
      >
        {websites.map(website => (
          <Website key={website.url} website={website} />
        ))}
      </div>
    </Layout>
  )
}

export default Portfolio

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useWebsites from "../hooks/useWebsites"
import Website from "../components/website"

const Portfolio = () => {
  const websites = useWebsites()
  return (
    <Layout>
      <SEO title="Portfolio" />
      {websites.map(website => (
        <Website key={website.url} website={website} />
      ))}
    </Layout>
  )
}

export default Portfolio

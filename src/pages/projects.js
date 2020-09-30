import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useWebsites from "../hooks/useWebsites"
import Website from "../components/website"

const Projects = () => {
  const websites = useWebsites()
  return (
    <Layout>
      <SEO title="Projects" />
      <div>
        {websites.map(website => (
          <Website website={website} />
        ))}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Projects

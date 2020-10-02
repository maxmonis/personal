import React from "react"
import Layout from "../components/layout"
import Website from "../components/website"
import SEO from "../components/seo"
import useWebsites from "../hooks/useWebsites"
import Image from "../components/image"

const IndexPage = () => {
  const websites = useWebsites()
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Image />
      {websites.map(website => (
        <Website key={website.url} website={website} />
      ))}
    </Layout>
  )
}

export default IndexPage

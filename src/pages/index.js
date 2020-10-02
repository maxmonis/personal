import React from "react"
import Layout from "../components/layout"
import Website from "../components/website"
import SEO from "../components/seo"
import useWebsites from "../hooks/useWebsites"
import Image from "../components/image"
import { css } from "@emotion/core"

const IndexPage = () => {
  const websites = useWebsites()
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Image />
      <div
        css={css`
          max-width: 90%;
          h1 {
            margin: 10rem auto 5rem;
          }
          h3 {
            margin-bottom: 10rem;
          }
          @media (min-width: 992px) {
            h1 {
              font-size: 4rem;
            }
            h3 {
              font-size: 2rem;
            }
          }
        `}
      >
        <h1>Toronto-based web developer</h1>
        <h3>Passionate about creating simple and intuitive user interfaces</h3>
        {websites.map((website, i) => (
          <Website key={website.url} website={website} i={i} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

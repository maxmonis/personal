import React from "react"
import Layout from "../components/layout"
import Website from "../components/website"
import About from "../components/about"
import SEO from "../components/seo"
import useWebsites from "../hooks/useWebsites"
import Image from "../components/image"
import { css } from "@emotion/core"
import photo from "../images/max.jpg"

const IndexPage = () => {
  const websites = useWebsites()
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Image />
      <div
        css={css`
          max-width: 95%;
          img {
            max-width: 300px;
            width: 90%;
            border: solid 3px var(--blue);
            border-radius: 25px;
          }
          h1 {
            margin: 10rem auto 5rem;
          }
          h3 {
            margin-bottom: 5rem;
          }
          p {
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
        <img src={photo} alt={"Max Monis"} />
        <p>Not really Tom Hardy (sorry)</p>
        <h1>Portfolio</h1>
      </div>
      {websites.map((website, i) => (
        <Website key={website.url} website={website} i={i} />
      ))}
      <About />
    </Layout>
  )
}

export default IndexPage

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const Background = styled(BackgroundImage)`
  width: 100%;
`
const Text = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.6),
    rgba(34, 49, 63, 0.6)
  );
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Image = () => {
  const date = new Date()
  const hrs = date.getHours()
  const greeting = hrs < 12 ? "morning" : hrs < 17 ? "afternoon" : "evening"
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mad-max.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Background tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <Text>
        <h2>Good {greeting} and welcome!</h2>
        <h1>My name is Max</h1>
        <p>I build websites</p>
      </Text>
    </Background>
  )
}

export default Image

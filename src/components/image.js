import React from "react"
import PropTypes from "prop-types"
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
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`

const Image = ({ children }) => {
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
      <Text>{children}</Text>
    </Background>
  )
}

Image.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Image

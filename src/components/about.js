import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const About = () => {
  return (
    <div
      css={css`
        max-width: 90%;
        margin-top: 3rem;
        h3 {
          margin: 2rem auto 1rem;
        }
      `}
    >
      <h1>About Me</h1>
      <h3>Biography</h3>
      <p>Sports &#10132; Music &#10132; Fitness &#10132; Software</p>
      <h3>Technologies</h3>
      <p>HTML, CSS, JavaScript, React, Next, Gatsby, Node, Express, NoSQL </p>
      <h3>Contact</h3>
      <p>
        Please don't hesitate to{" "}
        <a href={`mailto:mmonis77@gmail.com`}>
          <b>reach out</b>
        </a>{" "}
        regarding job opportunities, freelance work, invitations to collaborate
        on open source, or just to say hi
      </p>
      <div
        css={css`
          margin-top: 5rem;
          text-align: center;
          text-transform: uppercase;
          a {
            font-size: 20px;
            :hover {
              border-bottom: 1px solid var(--blue);
            }
          }
        `}
      >
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  )
}

export default About

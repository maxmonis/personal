import React from "react"
import { css } from "@emotion/core"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"

const Footer = () => {
  return (
    <footer
      css={css`
        text-align: center;
        margin-top: 5rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex: row;
          width: 100%;
          vertical-align: middle;
          justify-content: center;
          a {
            padding: 1rem;
          }
        `}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/max-monis-098ab1192"
        >
          <img
            css={css`
              height: 25px;
            `}
            src={linkedin}
            alt={"LinkedIn"}
          />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/maxmonis">
          <img
            css={css`
              height: 25px;
            `}
            src={github}
            alt={"Github"}
          />
        </a>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/maxmonis/personal"
      >
        © Max Monis {new Date().getFullYear()}
      </a>
    </footer>
  )
}

export default Footer

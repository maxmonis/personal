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
        button {
          outline: none;
          border: none;
          background-color: #ffffff;
          color: var(--blue);
          cursor: pointer;
          margin-bottom: 3rem;
          font-size: 1rem;
          :hover {
            border-bottom: 1px solid var(--blue);
          }
        }
      `}
    >
      <button
        href="#top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Scroll to top &#8593;
      </button>
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

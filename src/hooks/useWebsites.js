import { graphql, useStaticQuery } from "gatsby"

const useWebsites = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsWebsite (sort: { fields: [index] }) {
        nodes {
          title
          text
          url
          github
          index
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return data.allDatoCmsWebsite.nodes.map(website => {
    const { title, image, text, url, github, index } = website
    return { title, image, text, url, github, index }
  })
}

export default useWebsites

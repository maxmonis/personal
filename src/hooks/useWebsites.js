import { graphql, useStaticQuery } from "gatsby"

const useWebsites = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsWebsite {
        nodes {
          title
          text
          url
          github
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
    const { title, image, text, url, github } = website
    return { title, image, text, url, github }
  })
}

export default useWebsites

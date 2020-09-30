import { graphql, useStaticQuery } from "gatsby"

const useWebsites = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsWebsite {
        nodes {
          title
          text
          url
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
    const { title, image, text, url } = website
    return { title, image, text, url }
  })
}

export default useWebsites

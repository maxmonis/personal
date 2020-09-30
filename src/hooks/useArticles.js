import { graphql, useStaticQuery } from "gatsby"

const useArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsArticle {
        nodes {
          title
          text
          blurb
          slug
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return data.allDatoCmsArticle.nodes.map(article => {
    const { title, image, text, blurb, slug } = article
    return { title, image, text, blurb, slug }
  })
}

export default useArticles

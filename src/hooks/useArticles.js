import { graphql, useStaticQuery } from "gatsby"

const useArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsArticle {
        nodes {
          title
          text
          blurb
        }
      }
    }
  `)
  return data.allDatoCmsArticle.nodes.map(article => {
    const { title, text, blurb } = article
    return { title, text, blurb }
  })
}

export default useArticles

exports.createPages = async ({ graphql, reporter, actions }) => {
  const res = await graphql(`
    query {
      allDatoCmsArticle {
        nodes {
          slug
        }
      }
    }
  `)
  if (res.errors) {
    reporter.panic("No results ", res.errors)
  }
  const articles = res.data.allDatoCmsArticle.nodes
  for (const article of articles) {
    const { slug } = article
    actions.createPage({
      path: slug,
      component: require.resolve("./src/components/article.js"),
      context: {
        slug: slug,
      },
    })
  }
}

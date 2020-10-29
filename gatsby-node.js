exports.createPages = async ({ graphql, reporter, actions }) => {
  const res = await graphql(`
    query {
      allDatoCmsArticle(sort: { fields: [published], order: ASC }) {
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
  articles.forEach((article, i) => {
    const { slug } = article
    const previous = articles[i - 1] || null
    const next = articles[i + 1] || null
    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve("./src/components/article.js"),
      context: {
        slug: slug,
        previous: previous ? previous.slug : null,
        next: next ? next.slug : null,
      },
    })
  })
}

const mdAttrs = require('markdown-it-attrs')
const mdAnchor = require('markdown-it-anchor')

module.exports = function(config) {
  config.addPassthroughCopy('style.css')
  config.amendLibrary('md', md =>
    md
      .use(mdAttrs)
      .use(mdAnchor, {
        level: [2],
      })
  )

  return {
    dir: {
      output: 'docs',
    },
  }
}

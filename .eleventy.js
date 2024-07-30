const mdAttrs = require('markdown-it-attrs')
const mdAnchor = require('markdown-it-anchor')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function(config) {
  config.addPassthroughCopy('style.css')
  config.addPassthroughCopy('prism-rose-pine-dawn-alt.css')
  config.addPassthroughCopy('prism-rose-pine-main-alt.css')
  config.amendLibrary('md', md =>
    md
      .use(mdAttrs)
      .use(mdAnchor, {
        level: [2],
      })
  )

  config.addPlugin(syntaxHighlight)

  return {
    dir: {
      output: 'docs',
    },
  }
}

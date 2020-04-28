const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/scss/mixins.scss'),
        path.resolve(__dirname, 'src/scss/variables.scss')
      ]
    }
  },

  outputDir: path.join(__dirname, '../public'),
  indexPath: path.join(__dirname, '../view/index.ejs')
}

exports.config = {
  conventions: {
    assets: /(^app\/assets|font)/,
    ignored: /^(.*?\/)?[_]\w*|^test\//
  },
  modules: {
    definition: false,
    wrapper: false
  },
  paths: {
    "public": '_public'
  },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': /^bower_components/
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/
      },
      order: {
        before: ['app/styles/app.less']
      }
    },
    templates: {
      joinTo: {
        'js/templates.js': /^app/
      },
      order: {
        before: ['app/scripts/app.js']
      }
    }
  },
  keyword: {
    extraFiles: ['_public/js/app.js'],
  },
  // Enable or disable minifying of result js / css files.
  // plugins: {
  //   minify: true
  // }
};

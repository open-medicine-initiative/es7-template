module.exports = function(config) {
  function normalizationBrowserName(browser) {
    return browser.toLowerCase().split(/[ /-]/)[0];
  }

  var babelOptions = require('./babel.config');

  config.set({
    frameworks: ['mocha', 'chai', 'jspm'],
    files: ['node_modules/babel/node_modules/babel-core/browser-polyfill.js'],
    preprocessors: {
      'src/**/*.spec.js': ['babel'],
      'src/**/!(*.spec).js': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    browsers: ['PhantomJS'],

    ////

    babelPreprocessor: {
      options: babelOptions
    },

    jspm: {
      config: 'jspm.config.js',
      serveFiles: [
        'src/app/**/!(*.spec).js'
      ],
      loadFiles: ['src/app/**/*.spec.js']
    },

    coverageReporter: {
      // configure the reporter to use isparta for JavaScript coverage
      instrumenters: { isparta : require('isparta') },
      instrumenter: {
        '**/*.js': 'isparta'
      },

      instrumenterOptions: {
        isparta: { babel : babelOptions }
      },

      reporters: [
        {
          type: 'html',
          dir: 'target/coverage/',
          subdir: normalizationBrowserName
        }
      ]
    }

  });
};

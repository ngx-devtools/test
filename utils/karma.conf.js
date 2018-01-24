const { join } = require('path');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'node_modules/core-js/client/shim.min.js',
      
      'node_modules/systemjs/dist/system.src.js',

      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',

      {pattern: '**/*.json', included: false, watched: false},

      'node_modules/jquery/dist/jquery.js',
      '@ngx-devtools/ngx-test/utils/systemjs.config.base.js',
      '@ngx-devtools/ngx-test/utils/test-config.js',
      '@ngx-devtools/ngx-test/utils/karma-test-shim.js',
      '@ngx-devtools/ngx-test/ngx-test/index.js',
      
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false},
      
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: true},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true},

      {pattern: 'dist/**/*.js', included: false, watched: false},
      {pattern: 'src/**/*.ts', included: false, watched: false}
    ],
    proxies: {
      "/dist/": "/base/dist/"
    },
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher'
    ],
    reporters: ['mocha', 'coverage'],
    preprocessors: {
      'dist/**/!(*.spec).js': ['coverage']
    },
    coverageReporter: {
      reporters: [
        { type: 'lcov', subdir: 'lcov' }
      ],
      dir : '.tmp/coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });

  const test = [];

  let fileValue = (value) => ((typeof(value) !== 'string') ? value.pattern : value);
  let findFile = (value) => config.files.find(file => (fileValue(file) === value));

  if (test && test['karma'] && test.karma['files'] && Array.isArray(test.karma.files)) {
    test.karma.files.forEach((file) => {
      let find = findFile(fileValue(file));
      if (!(find)){
        config.files.push(file);
      }
    });
  }

}
/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;

__karma__.loaded = function () { };

$.getJSON('base/devtools.config.json')
  .then(function(data) {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = (data['test'] && data['test']['timeOut']) ? data.test.timeOut : 3000;
    return $.getJSON('base/config.json');  
  })
  .then(function(data) {
    System.config(data);
    return Promise.all([
      System.import('node_modules/@angular/core/bundles/core-testing.umd.js'),
      System.import('node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js')
    ]);
  })
  .then(function (providers) {
    var testing = providers[0];
    var testingBrowser = providers[1];
    testing.TestBed.initTestEnvironment(testingBrowser.BrowserDynamicTestingModule,
      testingBrowser.platformBrowserDynamicTesting());
  })
  .then(function() {
    var allSpecFiles = Object.keys(window.__karma__.files)
        .filter(function(path) { return path.slice(-7) == 'spec.js'; })
        .filter(function(path) {
          return (path.slice(-3) == '.js') && (path.substr(0, '/base/dist/'.length) == '/base/dist/');
        });
    return Promise.all(
        allSpecFiles.map(function (moduleName) {
          return System.import(moduleName);
        }));
  }).then(__karma__.start, __karma__.error);
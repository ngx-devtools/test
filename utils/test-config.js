(function(global) {
  System.config({
    map: {
      'ngx-test': 'node_modules/ngx-test/index.js',
      '@angular/core/testing': 'node_modules/@angular/core/bundles/core-testing.umd.js',
      '@angular/common/testing': 'node_modules/@angular/common/bundles/common-testing.umd.js',
      '@angular/compiler/testing': 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
      '@angular/http/testing': 'node_modules/@angular/http/bundles/http-testing.umd.js',
      '@angular/router/testing': 'node_modules/@angular/router/bundles/router-testing.umd.js',
      '@angular/platform-browser/testing': 'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
      '@angular/platform-browser-dynamic/testing': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    }
  });
})(this);
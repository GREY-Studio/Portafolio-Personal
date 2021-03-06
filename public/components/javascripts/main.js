
//------------------------------------//
// Require Config
//------------------------------------//

// Require.js paths and dependencies
require.config({

  paths: {

    // Paths to https CDN content - with static fallback in Bower & Core
    'angular': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min', '/static/angular/angular.min'],
    'jquery': ['https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min', '/static/jquery/dist/jquery.min'],
    'angular-route': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-route.min', '/static/angular-route/angular-route.min'],
    'angular-animate': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-animate.min', '/static/angular-animate/angular-animate.min'],
    'preload': ['https://code.createjs.com/preloadjs-0.6.2.min', '/static/PreloadJS/lib/preloadjs-0.6.2.min'],
    'three': ['https://ajax.googleapis.com/ajax/libs/threejs/r76/three.min', '/static/three.js/build/three.min'],

    'threeConf': ['/components/javascripts/core/threeConf'],
    'modernizr': ['/components/javascripts/core/modernizr.min'],
    'lettering': ['/components/javascripts/core/lettering'],
    // Load the modules
    'coreModule': '/components/javascripts/core/coreModule',
    'themeModule': '/components/javascripts/theme/themeModule'

  },

  shim: {

    'angular': {
      'deps': [ 'jquery' ]
    },

    'angular-route': {
      'deps': [ 'angular' ]
    },

    'angular-animate': {
      'deps': [ 'angular' ]
    },

    'three': {
      'deps': [ 'jquery' ]
    },

    'modernizr': {
      'deps': [ 'jquery' ]
    },

    'themeModule': {
      'deps': [ 'angular-route' ]
    },

    'coreModule': {
      'deps': [ 'angular-route', 'angular-animate', 'themeModule', 'preload', 'three', 'threeConf', 'modernizr', 'lettering' ]
    }

  }

});

// Require coreModule
require(['coreModule'], function() {
  // Application ready!
  // Serving document...
});

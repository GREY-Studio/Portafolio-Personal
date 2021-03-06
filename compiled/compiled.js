
//------------------------------------//
// Controller References
//------------------------------------//

define(function() {

  return [
    'core/controllers/mainController'
  ]

});


//------------------------------------//
// About Controller
//------------------------------------//

define(function() {

  angular
    .module('coreModule')
    .registerController('aboutController', ['$scope', function($scope) {
      $scope.title = "About";
    }]);

});


//------------------------------------//
// Home Controller
//------------------------------------//

define(function() {

  angular
    .module('coreModule')
    .registerController('homeController', ['$scope', function($scope) {
      $scope.title = "Home";
    }]);

});


//------------------------------------//
// Main Controller
//------------------------------------//

define(function() {

  var coreModule = angular.module('coreModule');

  coreModule.controller('mainController', ['$scope', function($scope) {

  }]);

});


//------------------------------------//
// Core Module
//------------------------------------//

define(['core/runners/logRunner'], function(logRunner) {

  var coreModule = angular.module('coreModule', ['ngRoute', 'ngAnimate', 'themeModule']);

  coreModule.run(logRunner);

  coreModule.config(['$controllerProvider', function($controllerProvider) {
    coreModule.registerController = $controllerProvider.register;
  }]);

  // Angular routing
  coreModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');

    $routeProvider
      //Home
      .when('/', {
        controller: 'homeController',
        templateUrl: 'components/javascripts/core/views/home.html',
        resolve: {
          load: ['$q', function($q) {
            var deferred = $q.defer();

            require(['core/controllers/homeController'], function() {
              deferred.resolve();
            });

            return deferred.promise;
          }]
        }
      })
      //About
      .when('/about', {
        controller: 'aboutController',
        templateUrl: 'components/javascripts/core/views/about.html',
        resolve: {
          load: ['$q', function($q) {
            var deferred = $q.defer();

            require(['core/controllers/aboutController'], function() {
              deferred.resolve();
            });

            return deferred.promise;
          }]
        }
      })
      //404 Note: Make a 404 page || reset URL
      .otherwise({
        redirectTo: '/'
      });

  }]);

  // Bootstrap the application to the document (inititate)
  require(['core/controllerReferences'], function(references) {
      require(references, function() {
        angular.bootstrap( document, ['coreModule'] );
      });
  });

});

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-geolocation-hashchange-history-hsla-inlinesvg-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-webworkers-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,s,i;for(var d in b)if(b.hasOwnProperty(d)){if(e=[],t=b[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)s=e[a],i=s.split("."),1===i.length?Modernizr[i[0]]=o:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=o),y.push((o?"":"no-")+i.join("-"))}}function a(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?S.className.baseVal=t:S.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(e,t){return!!~(""+e).indexOf(t)}function d(){var e=t.body;return e||(e=s(C?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var a,i,c,l,u="modernizr",f=s("div"),p=d();if(parseInt(r,10))for(;r--;)c=s("div"),c.id=o?o[r]:u+(r+1),f.appendChild(c);return a=s("style"),a.type="text/css",a.id="s"+u,(p.fake?p:f).appendChild(a),p.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),i=n(f,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=l,S.offsetHeight):f.parentNode.removeChild(f),!!i}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?u(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+p(t[o])+":"+r+")");return a=a.join(" or "),c("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,o,a){function d(){u&&(delete L.style,delete L.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var c=g(e,o);if(!r(c,"undefined"))return c}for(var u,f,p,m,v,h=["modernizr","tspan","samp"];!L.style&&h.length;)u=!0,L.modElem=s(h.shift()),L.style=L.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],v=L.style[m],i(m,"-")&&(m=l(m)),L.style[m]!==n){if(a||r(o,"undefined"))return d(),"pfx"==t?m:!0;try{L.style[m]=o}catch(y){}if(L.style[m]!=v)return d(),"pfx"==t?m:!0}return d(),!1}function v(e,t,n,o,a){var s=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+R.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(i,t,o,a):(i=(e+" "+O.join(s+" ")+s).split(" "),f(i,t,n))}function h(e,t,r){return v(e,n,n,t,r)}var y=[],b=[],T={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var w=!1;try{w="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(x){}Modernizr.addTest("websockets",w),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("webworkers","Worker"in e);var S=t.documentElement,C="svg"===S.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=s("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof s("canvas").getContext("2d").fillText}),Modernizr.addTest("video",function(){var e=s("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webgl",function(){var t=s("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("multiplebgs",function(){var e=s("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var P=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();T.hasEvent=P,Modernizr.addTest("hashchange",function(){return P("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7});var k=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];T._prefixes=k,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,a=k.length-1;a>o;o++)e=0===o?"to ":"",r+=t+k[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var i=s("a"),d=i.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=k.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("hsla",function(){var e=s("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",i(e.backgroundColor,"rgba")||i(e.backgroundColor,"hsla")});var E="CSS"in e&&"supports"in e.CSS,_="supportsCSS"in e;Modernizr.addTest("supports",E||_);var z={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(z.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(z.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var N=T.testStyles=c,A=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||r}();A?Modernizr.addTest("fontface",!1):N('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",s=/src/i.test(a)&&0===a.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",s)}),N('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)});var $="Moz O ms Webkit",R=T._config.usePrefixes?$.split(" "):[];T._cssomPrefixes=R;var O=T._config.usePrefixes?$.toLowerCase().split(" "):[];T._domPrefixes=O;var I={elem:s("modernizr")};Modernizr._q.push(function(){delete I.elem});var L={style:I.elem.style};Modernizr._q.unshift(function(){delete L.style});var j=T.testProp=function(e,t,r){return m([e],n,t,r)};Modernizr.addTest("textshadow",j("textShadow","1px 1px")),T.testAllProps=v,T.testAllProps=h,Modernizr.addTest("cssanimations",h("animationName","a",!0)),Modernizr.addTest("backgroundsize",h("backgroundSize","100%",!0)),Modernizr.addTest("borderimage",h("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",h("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",h("boxShadow","1px 1px",!0)),Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("cssreflections",h("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!h("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",N(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",h("transition","all",!0)),o(),a(y),delete T.addTest,delete T.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document);


//------------------------------------//
// Log Runner
//------------------------------------//

define(function() {

  return ['$log', function($log) {
    $log.info('Started coreModule...');
  }];

});


//------------------------------------//
// Three Config
//------------------------------------//

define(['jquery', 'three', 'angular'], function($, THREE, angular) {

  (function(window, document, undefined) {

    var mouseX = 0,
        mouseY = 0,
        scene = new THREE.Scene(),
        renderer = new THREE.WebGLRenderer(),
        camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, .1, 1000),
        axis = new THREE.AxisHelper(30);

    camera.position.set( 0, 0, 400 );
    renderer.setPixelRatio( window.devicePixelRatio );
    scene.add(axis);

    /*
    THREE.ImageUtils.crossOrigin = '';
    var mapOverlay = THREE.ImageUtils.loadTexture('https://i.ytimg.com/vi/XV9LHg2dHa4/hqdefault.jpg');
    */

    var cubeGEO = new THREE.BoxGeometry(20,20,20),
        cubeMAT = new THREE.MeshBasicMaterial({color: 0xdddddd, wireframe: true}), // + map: mapOverlay
        cube = new THREE.Mesh(cubeGEO, cubeMAT);

    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;

    scene.add(cube);

    /*
    var cylinderGEO = new THREE.CylinderGeometry(20,10,20),
        cylinderMAT = new THREE.MeshBasicMaterial({color:0xdddddd, wireframe:true}),
        cylinder = new THREE.Mesh(cylinderGEO, cylinderMAT);

    cylinder.position.x = 0;
    cylinder.position.y = 0;
    cylinder.position.z = 0;

    scene.add(cylinder);
    */

    $('.ejo-WebGL').append(renderer.domElement);

    function onDocumentMouseMove(e) {
  		var windowHalfX = window.innerWidth / 2,
          windowHalfY = window.innerHeight / 2;

    	mouseX = ( event.clientX - windowHalfX ) / 2;
  		mouseY = ( event.clientY - windowHalfY ) / 2;
  	}

    function size(e) {
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
  		requestAnimationFrame( animate );

  		camera.position.x += ( mouseX - camera.position.x ) * .05;
  		camera.position.y += ( -mouseY - camera.position.y ) * .05;
  		camera.lookAt( scene.position );

  		renderer.render( scene, camera );
  	}

    size();
    animate();

    $(window).on('resize', size);
    $(document).on('mousemove', onDocumentMouseMove);

  })(window, document);

});


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
      'deps': [ 'angular-route', 'angular-animate', 'themeModule', 'preload', 'three', 'threeConf', 'modernizr' ]
    }

  }

});

// Require coreModule
require(['coreModule'], function() {
  // Application ready!
  // Serving document...
});


//------------------------------------//
// Theme Module
//------------------------------------//

define(function() {

  var themeModule = angular.module('themeModule', []);

  themeModule.run(['$log', function($log) {
    $log.info('Initialized the themeModule');
  }]);

});

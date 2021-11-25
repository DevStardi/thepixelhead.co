// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../img/icons/arrow.svg":[["arrow.703be1a8.svg","img/icons/arrow.svg"],"img/icons/arrow.svg"],"./../img/icons/dropdown.svg":[["dropdown.77248ee9.svg","img/icons/dropdown.svg"],"img/icons/dropdown.svg"],"./../fonts/roboto/roboto-v29-latin-regular.eot":[["roboto-v29-latin-regular.f3987aef.eot","fonts/roboto/roboto-v29-latin-regular.eot"],"fonts/roboto/roboto-v29-latin-regular.eot"],"./../fonts/roboto/roboto-v29-latin-regular.woff2":[["roboto-v29-latin-regular.098dbb63.woff2","fonts/roboto/roboto-v29-latin-regular.woff2"],"fonts/roboto/roboto-v29-latin-regular.woff2"],"./../fonts/roboto/roboto-v29-latin-regular.woff":[["roboto-v29-latin-regular.494453d0.woff","fonts/roboto/roboto-v29-latin-regular.woff"],"fonts/roboto/roboto-v29-latin-regular.woff"],"./../fonts/roboto/roboto-v29-latin-regular.ttf":[["roboto-v29-latin-regular.f7b73bf6.ttf","fonts/roboto/roboto-v29-latin-regular.ttf"],"fonts/roboto/roboto-v29-latin-regular.ttf"],"./../fonts/roboto/roboto-v29-latin-regular.svg":[["roboto-v29-latin-regular.7bbbc944.svg","fonts/roboto/roboto-v29-latin-regular.svg"],"fonts/roboto/roboto-v29-latin-regular.svg"],"./../fonts/roboto/roboto-v29-latin-italic.eot":[["roboto-v29-latin-italic.639516ab.eot","fonts/roboto/roboto-v29-latin-italic.eot"],"fonts/roboto/roboto-v29-latin-italic.eot"],"./../fonts/roboto/roboto-v29-latin-italic.woff2":[["roboto-v29-latin-italic.5bec9b1a.woff2","fonts/roboto/roboto-v29-latin-italic.woff2"],"fonts/roboto/roboto-v29-latin-italic.woff2"],"./../fonts/roboto/roboto-v29-latin-italic.woff":[["roboto-v29-latin-italic.450e34f2.woff","fonts/roboto/roboto-v29-latin-italic.woff"],"fonts/roboto/roboto-v29-latin-italic.woff"],"./../fonts/roboto/roboto-v29-latin-italic.ttf":[["roboto-v29-latin-italic.be7e586c.ttf","fonts/roboto/roboto-v29-latin-italic.ttf"],"fonts/roboto/roboto-v29-latin-italic.ttf"],"./../fonts/roboto/roboto-v29-latin-italic.svg":[["roboto-v29-latin-italic.660937c0.svg","fonts/roboto/roboto-v29-latin-italic.svg"],"fonts/roboto/roboto-v29-latin-italic.svg"],"./../fonts/roboto/roboto-v29-latin-500.eot":[["roboto-v29-latin-500.0249f89f.eot","fonts/roboto/roboto-v29-latin-500.eot"],"fonts/roboto/roboto-v29-latin-500.eot"],"./../fonts/roboto/roboto-v29-latin-500.woff2":[["roboto-v29-latin-500.614eef7b.woff2","fonts/roboto/roboto-v29-latin-500.woff2"],"fonts/roboto/roboto-v29-latin-500.woff2"],"./../fonts/roboto/roboto-v29-latin-500.woff":[["roboto-v29-latin-500.cb492b48.woff","fonts/roboto/roboto-v29-latin-500.woff"],"fonts/roboto/roboto-v29-latin-500.woff"],"./../fonts/roboto/roboto-v29-latin-500.ttf":[["roboto-v29-latin-500.37b2ca30.ttf","fonts/roboto/roboto-v29-latin-500.ttf"],"fonts/roboto/roboto-v29-latin-500.ttf"],"./../fonts/roboto/roboto-v29-latin-500.svg":[["roboto-v29-latin-500.93219a13.svg","fonts/roboto/roboto-v29-latin-500.svg"],"fonts/roboto/roboto-v29-latin-500.svg"],"./../fonts/roboto/roboto-v29-latin-500italic.eot":[["roboto-v29-latin-500italic.a271f328.eot","fonts/roboto/roboto-v29-latin-500italic.eot"],"fonts/roboto/roboto-v29-latin-500italic.eot"],"./../fonts/roboto/roboto-v29-latin-500italic.woff2":[["roboto-v29-latin-500italic.d952c697.woff2","fonts/roboto/roboto-v29-latin-500italic.woff2"],"fonts/roboto/roboto-v29-latin-500italic.woff2"],"./../fonts/roboto/roboto-v29-latin-500italic.woff":[["roboto-v29-latin-500italic.52ab1ade.woff","fonts/roboto/roboto-v29-latin-500italic.woff"],"fonts/roboto/roboto-v29-latin-500italic.woff"],"./../fonts/roboto/roboto-v29-latin-500italic.ttf":[["roboto-v29-latin-500italic.88f12357.ttf","fonts/roboto/roboto-v29-latin-500italic.ttf"],"fonts/roboto/roboto-v29-latin-500italic.ttf"],"./../fonts/roboto/roboto-v29-latin-500italic.svg":[["roboto-v29-latin-500italic.50b9c361.svg","fonts/roboto/roboto-v29-latin-500italic.svg"],"fonts/roboto/roboto-v29-latin-500italic.svg"],"./../fonts/roboto/roboto-v29-latin-700.eot":[["roboto-v29-latin-700.10b9fbb0.eot","fonts/roboto/roboto-v29-latin-700.eot"],"fonts/roboto/roboto-v29-latin-700.eot"],"./../fonts/roboto/roboto-v29-latin-700.woff2":[["roboto-v29-latin-700.5d74f099.woff2","fonts/roboto/roboto-v29-latin-700.woff2"],"fonts/roboto/roboto-v29-latin-700.woff2"],"./../fonts/roboto/roboto-v29-latin-700.woff":[["roboto-v29-latin-700.8c4ea5bc.woff","fonts/roboto/roboto-v29-latin-700.woff"],"fonts/roboto/roboto-v29-latin-700.woff"],"./../fonts/roboto/roboto-v29-latin-700.ttf":[["roboto-v29-latin-700.8f86568c.ttf","fonts/roboto/roboto-v29-latin-700.ttf"],"fonts/roboto/roboto-v29-latin-700.ttf"],"./../fonts/roboto/roboto-v29-latin-700.svg":[["roboto-v29-latin-700.2b995226.svg","fonts/roboto/roboto-v29-latin-700.svg"],"fonts/roboto/roboto-v29-latin-700.svg"],"./../fonts/roboto/roboto-v29-latin-700italic.eot":[["roboto-v29-latin-700italic.9e41604b.eot","fonts/roboto/roboto-v29-latin-700italic.eot"],"fonts/roboto/roboto-v29-latin-700italic.eot"],"./../fonts/roboto/roboto-v29-latin-700italic.woff2":[["roboto-v29-latin-700italic.376a2861.woff2","fonts/roboto/roboto-v29-latin-700italic.woff2"],"fonts/roboto/roboto-v29-latin-700italic.woff2"],"./../fonts/roboto/roboto-v29-latin-700italic.woff":[["roboto-v29-latin-700italic.db6a8397.woff","fonts/roboto/roboto-v29-latin-700italic.woff"],"fonts/roboto/roboto-v29-latin-700italic.woff"],"./../fonts/roboto/roboto-v29-latin-700italic.ttf":[["roboto-v29-latin-700italic.0870353c.ttf","fonts/roboto/roboto-v29-latin-700italic.ttf"],"fonts/roboto/roboto-v29-latin-700italic.ttf"],"./../fonts/roboto/roboto-v29-latin-700italic.svg":[["roboto-v29-latin-700italic.bc284549.svg","fonts/roboto/roboto-v29-latin-700italic.svg"],"fonts/roboto/roboto-v29-latin-700italic.svg"],"./../fonts/josefin-sans/josefin-sans-v20-latin-regular.eot":[["josefin-sans-v20-latin-regular.2fa3da7c.eot","fonts/josefin-sans/josefin-sans-v20-latin-regular.eot"],"fonts/josefin-sans/josefin-sans-v20-latin-regular.eot"],"./../fonts/josefin-sans/josefin-sans-v20-latin-regular.woff2":[["josefin-sans-v20-latin-regular.07369fbb.woff2","fonts/josefin-sans/josefin-sans-v20-latin-regular.woff2"],"fonts/josefin-sans/josefin-sans-v20-latin-regular.woff2"],"./../fonts/josefin-sans/josefin-sans-v20-latin-regular.woff":[["josefin-sans-v20-latin-regular.ea1feac3.woff","fonts/josefin-sans/josefin-sans-v20-latin-regular.woff"],"fonts/josefin-sans/josefin-sans-v20-latin-regular.woff"],"./../fonts/josefin-sans/josefin-sans-v20-latin-regular.ttf":[["josefin-sans-v20-latin-regular.76561836.ttf","fonts/josefin-sans/josefin-sans-v20-latin-regular.ttf"],"fonts/josefin-sans/josefin-sans-v20-latin-regular.ttf"],"./../fonts/josefin-sans/josefin-sans-v20-latin-regular.svg":[["josefin-sans-v20-latin-regular.12f0c146.svg","fonts/josefin-sans/josefin-sans-v20-latin-regular.svg"],"fonts/josefin-sans/josefin-sans-v20-latin-regular.svg"],"./../fonts/josefin-sans/josefin-sans-v20-latin-500.eot":[["josefin-sans-v20-latin-500.e707fc2b.eot","fonts/josefin-sans/josefin-sans-v20-latin-500.eot"],"fonts/josefin-sans/josefin-sans-v20-latin-500.eot"],"./../fonts/josefin-sans/josefin-sans-v20-latin-500.woff2":[["josefin-sans-v20-latin-500.0f6d27a2.woff2","fonts/josefin-sans/josefin-sans-v20-latin-500.woff2"],"fonts/josefin-sans/josefin-sans-v20-latin-500.woff2"],"./../fonts/josefin-sans/josefin-sans-v20-latin-500.woff":[["josefin-sans-v20-latin-500.e5edf1c0.woff","fonts/josefin-sans/josefin-sans-v20-latin-500.woff"],"fonts/josefin-sans/josefin-sans-v20-latin-500.woff"],"./../fonts/josefin-sans/josefin-sans-v20-latin-500.ttf":[["josefin-sans-v20-latin-500.3c1f3dbb.ttf","fonts/josefin-sans/josefin-sans-v20-latin-500.ttf"],"fonts/josefin-sans/josefin-sans-v20-latin-500.ttf"],"./../fonts/josefin-sans/josefin-sans-v20-latin-500.svg":[["josefin-sans-v20-latin-500.a0f55ea9.svg","fonts/josefin-sans/josefin-sans-v20-latin-500.svg"],"fonts/josefin-sans/josefin-sans-v20-latin-500.svg"],"./../fonts/josefin-sans/josefin-sans-v20-latin-600.eot":[["josefin-sans-v20-latin-600.e4f118f6.eot","fonts/josefin-sans/josefin-sans-v20-latin-600.eot"],"fonts/josefin-sans/josefin-sans-v20-latin-600.eot"],"./../fonts/josefin-sans/josefin-sans-v20-latin-600.woff2":[["josefin-sans-v20-latin-600.188873b3.woff2","fonts/josefin-sans/josefin-sans-v20-latin-600.woff2"],"fonts/josefin-sans/josefin-sans-v20-latin-600.woff2"],"./../fonts/josefin-sans/josefin-sans-v20-latin-600.woff":[["josefin-sans-v20-latin-600.73aa48d8.woff","fonts/josefin-sans/josefin-sans-v20-latin-600.woff"],"fonts/josefin-sans/josefin-sans-v20-latin-600.woff"],"./../fonts/josefin-sans/josefin-sans-v20-latin-600.ttf":[["josefin-sans-v20-latin-600.640784aa.ttf","fonts/josefin-sans/josefin-sans-v20-latin-600.ttf"],"fonts/josefin-sans/josefin-sans-v20-latin-600.ttf"],"./../fonts/josefin-sans/josefin-sans-v20-latin-600.svg":[["josefin-sans-v20-latin-600.756cd0b7.svg","fonts/josefin-sans/josefin-sans-v20-latin-600.svg"],"fonts/josefin-sans/josefin-sans-v20-latin-600.svg"],"./../fonts/josefin-sans/josefin-sans-v20-latin-700.eot":[["josefin-sans-v20-latin-700.ac0bb766.eot","fonts/josefin-sans/josefin-sans-v20-latin-700.eot"],"fonts/josefin-sans/josefin-sans-v20-latin-700.eot"],"./../fonts/josefin-sans/josefin-sans-v20-latin-700.woff2":[["josefin-sans-v20-latin-700.b0c7aba7.woff2","fonts/josefin-sans/josefin-sans-v20-latin-700.woff2"],"fonts/josefin-sans/josefin-sans-v20-latin-700.woff2"],"./../fonts/josefin-sans/josefin-sans-v20-latin-700.woff":[["josefin-sans-v20-latin-700.14a47938.woff","fonts/josefin-sans/josefin-sans-v20-latin-700.woff"],"fonts/josefin-sans/josefin-sans-v20-latin-700.woff"],"./../fonts/josefin-sans/josefin-sans-v20-latin-700.ttf":[["josefin-sans-v20-latin-700.296f9b2b.ttf","fonts/josefin-sans/josefin-sans-v20-latin-700.ttf"],"fonts/josefin-sans/josefin-sans-v20-latin-700.ttf"],"./../fonts/josefin-sans/josefin-sans-v20-latin-700.svg":[["josefin-sans-v20-latin-700.9f69a1a3.svg","fonts/josefin-sans/josefin-sans-v20-latin-700.svg"],"fonts/josefin-sans/josefin-sans-v20-latin-700.svg"],"./../fonts/josefin-sans/josefin-sans-v20-latin-italic.eot":[["josefin-sans-v20-latin-italic.edb9e1ae.eot","fonts/josefin-sans/josefin-sans-v20-latin-italic.eot"],"fonts/josefin-sans/josefin-sans-v20-latin-italic.eot"],"./../fonts/josefin-sans/josefin-sans-v20-latin-italic.woff2":[["josefin-sans-v20-latin-italic.1c8ef6f3.woff2","fonts/josefin-sans/josefin-sans-v20-latin-italic.woff2"],"fonts/josefin-sans/josefin-sans-v20-latin-italic.woff2"],"./../fonts/josefin-sans/josefin-sans-v20-latin-italic.woff":[["josefin-sans-v20-latin-italic.2e4bb564.woff","fonts/josefin-sans/josefin-sans-v20-latin-italic.woff"],"fonts/josefin-sans/josefin-sans-v20-latin-italic.woff"],"./../fonts/josefin-sans/josefin-sans-v20-latin-italic.ttf":[["josefin-sans-v20-latin-italic.e8e325e3.ttf","fonts/josefin-sans/josefin-sans-v20-latin-italic.ttf"],"fonts/josefin-sans/josefin-sans-v20-latin-italic.ttf"],"./../fonts/josefin-sans/josefin-sans-v20-latin-italic.svg":[["josefin-sans-v20-latin-italic.e4197eaf.svg","fonts/josefin-sans/josefin-sans-v20-latin-italic.svg"],"fonts/josefin-sans/josefin-sans-v20-latin-italic.svg"],"./../fonts/josefin-sans/josefin-sans-v20-latin-500italic.eot":[["josefin-sans-v20-latin-500italic.373c0250.eot","fonts/josefin-sans/josefin-sans-v20-latin-500italic.eot"],"fonts/josefin-sans/josefin-sans-v20-latin-500italic.eot"],"./../fonts/josefin-sans/josefin-sans-v20-latin-500italic.woff2":[["josefin-sans-v20-latin-500italic.14e66868.woff2","fonts/josefin-sans/josefin-sans-v20-latin-500italic.woff2"],"fonts/josefin-sans/josefin-sans-v20-latin-500italic.woff2"],"./../fonts/josefin-sans/josefin-sans-v20-latin-500italic.woff":[["josefin-sans-v20-latin-500italic.962b3558.woff","fonts/josefin-sans/josefin-sans-v20-latin-500italic.woff"],"fonts/josefin-sans/josefin-sans-v20-latin-500italic.woff"],"./../fonts/josefin-sans/josefin-sans-v20-latin-500italic.ttf":[["josefin-sans-v20-latin-500italic.610edc58.ttf","fonts/josefin-sans/josefin-sans-v20-latin-500italic.ttf"],"fonts/josefin-sans/josefin-sans-v20-latin-500italic.ttf"],"./../fonts/josefin-sans/josefin-sans-v20-latin-500italic.svg":[["josefin-sans-v20-latin-500italic.f1a306a4.svg","fonts/josefin-sans/josefin-sans-v20-latin-500italic.svg"],"fonts/josefin-sans/josefin-sans-v20-latin-500italic.svg"],"./../fonts/josefin-sans/josefin-sans-v20-latin-600italic.eot":[["josefin-sans-v20-latin-600italic.832bc263.eot","fonts/josefin-sans/josefin-sans-v20-latin-600italic.eot"],"fonts/josefin-sans/josefin-sans-v20-latin-600italic.eot"],"./../fonts/josefin-sans/josefin-sans-v20-latin-600italic.woff2":[["josefin-sans-v20-latin-600italic.72585e45.woff2","fonts/josefin-sans/josefin-sans-v20-latin-600italic.woff2"],"fonts/josefin-sans/josefin-sans-v20-latin-600italic.woff2"],"./../fonts/josefin-sans/josefin-sans-v20-latin-600italic.woff":[["josefin-sans-v20-latin-600italic.9b82fc72.woff","fonts/josefin-sans/josefin-sans-v20-latin-600italic.woff"],"fonts/josefin-sans/josefin-sans-v20-latin-600italic.woff"],"./../fonts/josefin-sans/josefin-sans-v20-latin-600italic.ttf":[["josefin-sans-v20-latin-600italic.6b8d9cf4.ttf","fonts/josefin-sans/josefin-sans-v20-latin-600italic.ttf"],"fonts/josefin-sans/josefin-sans-v20-latin-600italic.ttf"],"./../fonts/josefin-sans/josefin-sans-v20-latin-600italic.svg":[["josefin-sans-v20-latin-600italic.9e69c96c.svg","fonts/josefin-sans/josefin-sans-v20-latin-600italic.svg"],"fonts/josefin-sans/josefin-sans-v20-latin-600italic.svg"],"./../fonts/josefin-sans/josefin-sans-v20-latin-700italic.eot":[["josefin-sans-v20-latin-700italic.0d079fb4.eot","fonts/josefin-sans/josefin-sans-v20-latin-700italic.eot"],"fonts/josefin-sans/josefin-sans-v20-latin-700italic.eot"],"./../fonts/josefin-sans/josefin-sans-v20-latin-700italic.woff2":[["josefin-sans-v20-latin-700italic.e71d77d6.woff2","fonts/josefin-sans/josefin-sans-v20-latin-700italic.woff2"],"fonts/josefin-sans/josefin-sans-v20-latin-700italic.woff2"],"./../fonts/josefin-sans/josefin-sans-v20-latin-700italic.woff":[["josefin-sans-v20-latin-700italic.1eccae0e.woff","fonts/josefin-sans/josefin-sans-v20-latin-700italic.woff"],"fonts/josefin-sans/josefin-sans-v20-latin-700italic.woff"],"./../fonts/josefin-sans/josefin-sans-v20-latin-700italic.ttf":[["josefin-sans-v20-latin-700italic.e84a3b0f.ttf","fonts/josefin-sans/josefin-sans-v20-latin-700italic.ttf"],"fonts/josefin-sans/josefin-sans-v20-latin-700italic.ttf"],"./../fonts/josefin-sans/josefin-sans-v20-latin-700italic.svg":[["josefin-sans-v20-latin-700italic.445bd8a6.svg","fonts/josefin-sans/josefin-sans-v20-latin-700italic.svg"],"fonts/josefin-sans/josefin-sans-v20-latin-700italic.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59382" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/main.77bb5cfd.js.map
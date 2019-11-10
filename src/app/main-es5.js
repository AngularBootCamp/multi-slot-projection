function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _green_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./green-wrapper.component */
    "./src/app/green-wrapper.component.ts");
    /* harmony import */


    var _blue_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./blue-wrapper.component */
    "./src/app/blue-wrapper.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 14,
      vars: 0,
      consts: [["body", ""], ["header", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "green-wrapper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " This is a p tag. Its only job is to be content that is transcluded into the wrapper directive. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This is a title for the content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "blue-wrapper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I am some content. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " I am the heading. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I am an unrelated div tag, minding my own business\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_green_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["GreenWrapperComponent"], _blue_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["BlueWrapperComponent"], _blue_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["BlueWrapperDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-root',
        templateUrl: './app.component.html'
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _blue_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blue-wrapper.component */
    "./src/app/blue-wrapper.component.ts");
    /* harmony import */


    var _green_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./green-wrapper.component */
    "./src/app/green-wrapper.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _green_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["GreenWrapperComponent"], _blue_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["BlueWrapperComponent"], _blue_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["BlueWrapperDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _green_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["GreenWrapperComponent"], _blue_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["BlueWrapperComponent"], _blue_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["BlueWrapperDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/blue-wrapper.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/blue-wrapper.component.ts ***!
    \*******************************************/

  /*! exports provided: BlueWrapperComponent, BlueWrapperDirective */

  /***/
  function srcAppBlueWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlueWrapperComponent", function () {
      return BlueWrapperComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlueWrapperDirective", function () {
      return BlueWrapperDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = [[["heading"]], [["content"]]];
    var _c1 = ["heading", "content"];

    var BlueWrapperComponent = function BlueWrapperComponent() {
      _classCallCheck(this, BlueWrapperComponent);
    };

    BlueWrapperComponent.ɵfac = function BlueWrapperComponent_Factory(t) {
      return new (t || BlueWrapperComponent)();
    };

    BlueWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlueWrapperComponent,
      selectors: [["blue-wrapper"]],
      ngContentSelectors: _c1,
      decls: 5,
      vars: 0,
      consts: [[1, "card", "outer"], [1, "card", "inner"]],
      template: function BlueWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".outer[_ngcontent-%COMP%] { border: solid blue }", ".inner[_ngcontent-%COMP%] { border: dotted blue }"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlueWrapperComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'blue-wrapper',
        styles: ['.outer { border: solid blue }', '.inner { border: dotted blue }'],
        template: "\n    <div class=\"card outer\">\n      <h2>\n        <ng-content select=\"heading\"></ng-content>\n      </h2>\n      <div class=\"card inner\">\n        <ng-content select=\"content\"></ng-content>\n      </div>\n    </div>\n  "
      }]
    }], null, null);

    var BlueWrapperDirective = function BlueWrapperDirective() {
      _classCallCheck(this, BlueWrapperDirective);
    };

    BlueWrapperDirective.ɵfac = function BlueWrapperDirective_Factory(t) {
      return new (t || BlueWrapperDirective)();
    };

    BlueWrapperDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: BlueWrapperDirective,
      selectors: [["heading"], ["content"]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlueWrapperDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        // tslint:disable-next-line:directive-selector
        selector: 'heading, content'
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/green-wrapper.component.ts":
  /*!********************************************!*\
    !*** ./src/app/green-wrapper.component.ts ***!
    \********************************************/

  /*! exports provided: GreenWrapperComponent */

  /***/
  function srcAppGreenWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GreenWrapperComponent", function () {
      return GreenWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = [[["", "header", ""]], [["", "body", ""]]];
    var _c1 = ["[header]", "[body]"];

    var GreenWrapperComponent = function GreenWrapperComponent() {
      _classCallCheck(this, GreenWrapperComponent);
    };

    GreenWrapperComponent.ɵfac = function GreenWrapperComponent_Factory(t) {
      return new (t || GreenWrapperComponent)();
    };

    GreenWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GreenWrapperComponent,
      selectors: [["green-wrapper"]],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [[1, "card"]],
      template: function GreenWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card[_ngcontent-%COMP%] { border: solid green }"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GreenWrapperComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'green-wrapper',
        styles: ['.card { border: solid green }'],
        template: "\n    <div class=\"card\">\n      <ng-content select=\"[header]\"></ng-content>\n      <ng-content select=\"[body]\"></ng-content>\n    </div>\n  "
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kcordes/projects/Ang/angular-class-material/abc/AOT-SKIP-cli/sandbox/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
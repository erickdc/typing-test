(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n    <app-topBar></app-topBar>\n    <app-bottomBar></app-bottomBar>\n    <app-sidePane></app-sidePane>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/topBar/topBar.component */ "./src/app/components/topBar/topBar.component.ts");
/* harmony import */ var _components_bottomBar_bottomBar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bottomBar/bottomBar.component */ "./src/app/components/bottomBar/bottomBar.component.ts");
/* harmony import */ var _components_sidePane_sidePane_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidePane/sidePane.component */ "./src/app/components/sidePane/sidePane.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_4__["TopBarComponent"],
                _components_bottomBar_bottomBar_component__WEBPACK_IMPORTED_MODULE_5__["BottomBarComponent"],
                _components_sidePane_sidePane_component__WEBPACK_IMPORTED_MODULE_6__["SidePaneComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/bottomBar/bottomBar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/bottomBar/bottomBar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: auto;\n  line-height: 60px;\n  background-color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/bottomBar/bottomBar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/bottomBar/bottomBar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <footer class=\"footer\">\n        <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div>\n                            <textarea [disabled]=\"inputService.ended\" [(ngModel)]=\"user.response\" rows=\"2\" cols=\"50\" placeholder=\"Start typing sample text to begin test\"> </textarea>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                    </div>\n              </div>\n        </div>\n      </footer>\n"

/***/ }),

/***/ "./src/app/components/bottomBar/bottomBar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/bottomBar/bottomBar.component.ts ***!
  \*************************************************************/
/*! exports provided: BottomBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomBarComponent", function() { return BottomBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidePane_input_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidePane/input.service */ "./src/app/components/sidePane/input.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent(inputService) {
        this.inputService = inputService;
    }
    BottomBarComponent.prototype.ngOnInit = function () {
        this.user = this.inputService.user;
    };
    BottomBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottomBar',
            template: __webpack_require__(/*! ./bottomBar.component.html */ "./src/app/components/bottomBar/bottomBar.component.html"),
            styles: [__webpack_require__(/*! ./bottomBar.component.css */ "./src/app/components/bottomBar/bottomBar.component.css")]
        }),
        __metadata("design:paramtypes", [_sidePane_input_service__WEBPACK_IMPORTED_MODULE_1__["InputService"]])
    ], BottomBarComponent);
    return BottomBarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidePane/input.service.ts":
/*!******************************************************!*\
  !*** ./src/app/components/sidePane/input.service.ts ***!
  \******************************************************/
/*! exports provided: InputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputService", function() { return InputService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputService = /** @class */ (function () {
    function InputService() {
        this.user = {
            response: '',
        };
        this.started = false;
        this.ended = false;
        this.exampleText = [
            "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        ];
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedExampleText = this.exampleText[Math.floor((Math.random() * (this.exampleText.length - 1)) + 1)];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InputService.prototype, "change", void 0);
    InputService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], InputService);
    return InputService;
}());



/***/ }),

/***/ "./src/app/components/sidePane/sidePane.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/sidePane/sidePane.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-top: 40%;\n}\n"

/***/ }),

/***/ "./src/app/components/sidePane/sidePane.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/sidePane/sidePane.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n    <div class=\"col\"></div>\n    <div class=\"col\"></div>\n    <div class=\"col\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Real Time Information\n            </div>\n            <div class=\"card-body\">\n                <p [hidden]=\"inputService.started\"  class=\"card-text text-info\">Start typing sample text to begin test</p>\n\n                <p class=\"text-success\">Timer: {{ticks}} seconds</p>\n\n                <p class=\"text-success\">Amount of words: {{amountOfWords - 1}}</p>\n\n                <p *ngIf=\"inputService.ended\" class=\"text-success\">Words-Per-Minute: {{calculateWordPerMinute()}}</p>\n            </div>\n        </div>\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/sidePane/sidePane.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sidePane/sidePane.component.ts ***!
  \***********************************************************/
/*! exports provided: SidePaneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidePaneComponent", function() { return SidePaneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _input_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.service */ "./src/app/components/sidePane/input.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidePaneComponent = /** @class */ (function () {
    function SidePaneComponent(inputService) {
        this.inputService = inputService;
        this.ticks = 0;
        this.amountOfWords = 0;
        this.user = inputService.user;
        this.selectedExampleText = inputService.selectedExampleText;
    }
    SidePaneComponent.prototype.ngOnInit = function () {
    };
    SidePaneComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var amountCharacters = this.user.response.length;
        if (!this.inputService.started && amountCharacters > 0) {
            var localTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000);
            this.subscription = localTimer.subscribe(function (t) { return _this.ticks = t; });
            this.inputService.started = true;
        }
        if (amountCharacters === this.selectedExampleText.length) {
            this.subscription.unsubscribe();
            this.inputService.ended = true;
        }
        this.amountOfWords = this.calculateAmountOfWords(this.user.response);
    };
    SidePaneComponent.prototype.calculateAmountOfWords = function (words) {
        return words.split(/\W+/).length;
    };
    SidePaneComponent.prototype.calculateWordPerMinute = function () {
        var minutes = (this.ticks / 60);
        minutes = minutes < 1 ? 1 : minutes;
        return (this.amountOfWords / minutes).toString();
    };
    SidePaneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidePane',
            template: __webpack_require__(/*! ./sidePane.component.html */ "./src/app/components/sidePane/sidePane.component.html"),
            styles: [__webpack_require__(/*! ./sidePane.component.css */ "./src/app/components/sidePane/sidePane.component.css")]
        }),
        __metadata("design:paramtypes", [_input_service__WEBPACK_IMPORTED_MODULE_1__["InputService"]])
    ], SidePaneComponent);
    return SidePaneComponent;
}());



/***/ }),

/***/ "./src/app/components/topBar/topBar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/topBar/topBar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/components/topBar/topBar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/topBar/topBar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<nav class=\"navbar navbar-dark bg-dark\">\n    <p> {{selectedExampleText}} </p>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/topBar/topBar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/topBar/topBar.component.ts ***!
  \*******************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidePane_input_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidePane/input.service */ "./src/app/components/sidePane/input.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(inputService) {
        this.inputService = inputService;
        this.selectedExampleText = inputService.selectedExampleText;
    }
    TopBarComponent.prototype.ngOnInit = function () {
        this.user = this.inputService.user;
    };
    TopBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topBar',
            template: __webpack_require__(/*! ./topBar.component.html */ "./src/app/components/topBar/topBar.component.html"),
            styles: [__webpack_require__(/*! ./topBar.component.css */ "./src/app/components/topBar/topBar.component.css")]
        }),
        __metadata("design:paramtypes", [_sidePane_input_service__WEBPACK_IMPORTED_MODULE_1__["InputService"]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/erickcaballero/Desktop/typing-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
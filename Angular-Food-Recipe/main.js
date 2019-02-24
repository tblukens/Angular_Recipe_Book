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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-recipes *ngIf=\"loadedFeature === 'recipe'\"></app-recipes>\n      <app-shopping-list *ngIf=\"loadedFeature !== 'recipe'\"></app-shopping-list>\n    </div>\n  </div>\n  <app-parallax></app-parallax>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular-Food-Recipe';
        this.loadedFeature = 'recipe';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-list/shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _shared_parallax_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/parallax.directive */ "./src/app/shared/parallax.directive.ts");
/* harmony import */ var _parallax_parallax_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parallax/parallax.component */ "./src/app/parallax/parallax.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"],
                _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_8__["RecipeListComponent"],
                _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__["RecipeItemComponent"],
                _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__["RecipeDetailComponent"],
                _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingListComponent"],
                _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingEditComponent"],
                _shared_parallax_directive__WEBPACK_IMPORTED_MODULE_13__["ParallaxDirective"],
                _parallax_parallax_component__WEBPACK_IMPORTED_MODULE_14__["ParallaxComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Recipe Book</a>\n    </div>\n\n    <div class=\"navbar-default\">\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"#\" (click)=\"onSelect('recipe')\">Recipes</a></li>\n        <li>\n          <a href=\"#\" (click)=\"onSelect('shopping-list')\">Shopping List</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" role=\"button\"\n            >Manage <span class=\"caret\"></span\n          ></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Save Data</a></li>\n            <li><a href=\"#\">Fetch Data</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.onSelect = function (feature) {
        this.featureSelected.emit(feature);
        console.log(feature);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "featureSelected", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/parallax/parallax.component.css":
/*!*************************************************!*\
  !*** ./src/app/parallax/parallax.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\r\n  overflow: visible;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n#container {\r\n  width: 100%;\r\n}\r\n#square {\r\n  position: fixed;\r\n  z-index: -1;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100px;\r\n  height: 100px;\r\n  background-color: green;\r\n}\r\n#rectangle {\r\n  position: fixed;\r\n  z-index: -1;\r\n  bottom: 0px;\r\n  left: 50px;\r\n  width: 200px;\r\n  height: 100px;\r\n  background-color: red;\r\n}\r\n#circle {\r\n  position: fixed;\r\n  z-index: -1;\r\n  bottom: 0px;\r\n  right: 0px;\r\n  width: 100px;\r\n  height: 100px;\r\n  background-color: yellow;\r\n  border-radius: 50px;\r\n}\r\n#background {\r\n  position: fixed;\r\n  z-index: -1;\r\n  top: 0px;\r\n  left: 0px;\r\n}\r\n#background img {\r\n  max-width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyYWxsYXgvcGFyYWxsYXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYXJhbGxheC9wYXJhbGxheC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4jY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3NxdWFyZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuI3JlY3RhbmdsZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4jY2lyY2xlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuI2JhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAtMTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbiNiYWNrZ3JvdW5kIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/parallax/parallax.component.html":
/*!**************************************************!*\
  !*** ./src/app/parallax/parallax.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"container\">\n  <div id=\"content\">\n    <div style=\"width: 80%; margin-left: auto; margin-right: auto;\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut augue sit\n      amet risus tempus mollis. Maecenas sit amet fermentum felis. Ut feugiat\n      dui eu velit rhoncus, a consectetur urna semper. Duis venenatis eros diam,\n      vitae elementum mauris tincidunt vitae. Quisque commodo nibh sapien, at\n      tempor lectus pulvinar sit amet. Nullam dictum aliquam purus in cursus.\n      Etiam porta leo quam, sed pretium nibh placerat a. Nunc convallis dui\n      purus, at suscipit ex porta et. Praesent et nulla vel dui placerat\n      faucibus. Quisque laoreet ipsum in sem eleifend vulputate. Suspendisse non\n      laoreet felis. Donec vestibulum auctor convallis. Duis eget justo sapien.\n      Maecenas nibh ipsum, scelerisque non nulla sit amet, viverra elementum\n      nulla. Sed posuere faucibus odio sit amet vulputate. Sed eleifend in nisi\n      id interdum. Pellentesque condimentum quam ultrices, dignissim dui nec,\n      dictum quam. Nulla facilisi. Proin eleifend cursus euismod. Proin rhoncus\n      nisi elit, quis aliquam augue eleifend a. Fusce tristique libero vitae\n      justo pulvinar blandit. Quisque fringilla varius metus eu feugiat. Duis\n      viverra, est vitae suscipit posuere, dolor sapien tempus nisl, non semper\n      massa metus a nibh. Nunc sed nisl lacus. Sed congue dignissim iaculis. Sed\n      varius dui sit amet ipsum pretium porta. Aliquam ac porttitor magna. Morbi\n      mattis vehicula molestie. Class aptent taciti sociosqu ad litora torquent\n      per conubia nostra, per inceptos himenaeos. Vivamus sollicitudin feugiat\n      magna a congue. Sed maximus arcu dolor, at fermentum arcu lacinia vel. Sed\n      erat neque, pulvinar eu commodo eu, lobortis sodales felis. Pellentesque\n      sollicitudin, augue vel placerat tincidunt, elit mauris vulputate ex, ut\n      pretium purus leo a est. Quisque porttitor feugiat laoreet. Fusce\n      vestibulum sapien et hendrerit lobortis. Nunc ornare quam sit amet lacus\n      tempus ornare. Pellentesque in rutrum libero. Vivamus vitae elit sed elit\n      commodo elementum aliquet at diam. Nullam viverra felis in felis ultricies\n      lacinia. Mauris nec pellentesque ipsum, non vestibulum diam. Mauris\n      tristique vulputate nulla eget ornare. Sed vestibulum est eu mauris\n      elementum lobortis. Etiam mattis nunc sit amet lobortis sodales. Aenean at\n      ante tortor. Suspendisse elit purus, pharetra quis porta quis, vestibulum\n      non dolor. Vestibulum vehicula urna eu sapien sodales ultricies. Cras sit\n      amet tempor ligula. Donec finibus, lorem eu rutrum auctor, diam tellus\n      dignissim sapien, non pulvinar arcu dui vel libero. Maecenas sit amet\n      tempus diam. Class aptent taciti sociosqu ad litora torquent per conubia\n      nostra, per inceptos himenaeos. Phasellus ultricies nisl nec fermentum\n      pellentesque. Ut non est euismod, fringilla purus ac, elementum risus.\n      Morbi convallis semper lorem blandit pretium. Phasellus ultricies magna\n      justo, commodo efficitur nulla porttitor in. Morbi sed ligula eleifend,\n      dictum ante in, facilisis ipsum. Donec purus purus, suscipit non orci ac,\n      tincidunt pretium elit. Praesent eget turpis justo. Nunc lacinia lectus ut\n      mauris imperdiet vehicula. Vivamus sodales enim a magna cursus, eu laoreet\n      arcu ornare. Aliquam sit amet ante facilisis magna facilisis ornare.\n      Aenean sapien mauris, bibendum quis auctor ac, aliquam ac orci. Nam in\n      ullamcorper dolor, et efficitur dolor. Suspendisse nec aliquam nulla, id\n      bibendum est.\n    </div>\n  </div>\n</div> -->\n\n<!-- our parallax stuff -->\n<div appParallax id=\"background\" [ratio]=\"0.15\">\n  <img src=\"../../assets/images/food_background.jpg\" alt=\"alt\" />\n</div>\n<!-- <div appParallax [ratio]=\"-0.2\" id=\"square\"></div>\n<div appParallax [ratio]=\"0.5\" id=\"circle\"></div>\n<div appParallax [ratio]=\"0.9\" id=\"rectangle\"></div> -->\n"

/***/ }),

/***/ "./src/app/parallax/parallax.component.ts":
/*!************************************************!*\
  !*** ./src/app/parallax/parallax.component.ts ***!
  \************************************************/
/*! exports provided: ParallaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxComponent", function() { return ParallaxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParallaxComponent = /** @class */ (function () {
    function ParallaxComponent() {
    }
    ParallaxComponent.prototype.ngOnInit = function () {
    };
    ParallaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parallax',
            template: __webpack_require__(/*! ./parallax.component.html */ "./src/app/parallax/parallax.component.html"),
            styles: [__webpack_require__(/*! ./parallax.component.css */ "./src/app/parallax/parallax.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParallaxComponent);
    return ParallaxComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img src=\"\" alt=\"\" class=\"img-responsive\" />\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>Recipe Name</h1>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n        Manage Recipe <span class=\"caret\"></span>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"\">Add To Shopping List</a></li>\n          <li><a href=\"\">Edit Recipe</a></li>\n          <li><a href=\"\">Delete Recipe</a></li>\n        </ul>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    Description\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    Ingredients\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent() {
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
    };
    RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.component.html */ "./src/app/recipes/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipes/recipe-detail/recipe-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" class=\"list-group-item clearfix\">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">\n      {{ recipe.name }}\n    </h4>\n    <p class=\"list-group-item-text\">{{ recipe.description }}</p>\n  </div>\n  <span class=\"pull-right\">\n    <img\n      [src]=\"recipe.imagePath\"\n      alt=\"{{ recipe.name }}\"\n      style=\"max-height: 50px;\"\n      class=\"img-responsive\"\n    />\n  </span>\n</a>\n"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recipe.model */ "./src/app/recipes/recipe.model.ts");



var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"])
    ], RecipeItemComponent.prototype, "recipe", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! ./recipe-item.component.html */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.css */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\">New Recipe</button>\n  </div>\n</div>\n<hr />\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-recipe-item\n      *ngFor=\"let recipeEl of recipes\"\n      [recipe]=\"recipeEl\"\n    ></app-recipe-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.model */ "./src/app/recipes/recipe.model.ts");



var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent() {
        this.recipes = [
            new _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"]('Test Recipe', 'Testing the Recipe model', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
            new _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"]('Second Test Recipe', 'Another description here for this testing.', 'https://c1.staticflickr.com/3/2015/2269983942_96804244fb_b.jpg')
        ];
    }
    RecipeListComponent.prototype.ngOnInit = function () { };
    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! ./recipe-list.component.html */ "./src/app/recipes/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipes/recipe-list/recipe-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipe.model.ts ***!
  \*****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, desc, imagePath) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/*!************************************************!*\
  !*** ./src/app/recipes/recipes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-recipe-list></app-recipe-list>\n  </div>\n  <div class=\"col-md-7\">\n    <app-recipe-detail></app-recipe-detail>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipesComponent = /** @class */ (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.component.html */ "./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shared/parallax.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/parallax.directive.ts ***!
  \**********************************************/
/*! exports provided: ParallaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxDirective", function() { return ParallaxDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParallaxDirective = /** @class */ (function () {
    function ParallaxDirective(eleRef) {
        this.eleRef = eleRef;
        this.parallaxRatio = 1;
        this.initialTop = 0;
        this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
    }
    ParallaxDirective.prototype.onWindowScroll = function (event) {
        this.eleRef.nativeElement.style.top =
            this.initialTop - window.scrollY * this.parallaxRatio + 'px';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ratio'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ParallaxDirective.prototype, "parallaxRatio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ParallaxDirective.prototype, "onWindowScroll", null);
    ParallaxDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appParallax]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ParallaxDirective);
    return ParallaxDirective;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" />\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"amount\">Amount</label>\n          <input type=\"number\" id=\"amount\" class=\"form-control\" />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button class=\"btn btn-success\" type=\"submit\">Add</button>\n          <button class=\"btn btn-danger\" type=\"button\">Delete</button>\n          <button class=\"btn btn-warning\" type=\"button\">Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent() {
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
    };
    ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! ./shopping-edit.component.html */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <app-shopping-edit></app-shopping-edit>\n    <hr />\n    <ul class=\"list-group\">\n      <a\n        class=\"list-group-item\"\n        style=\"cursor: pointer\"\n        *ngFor=\"let ingredient of ingredients\"\n      >\n        {{ ingredient.name }} ({{ ingredient.amount }})\n      </a>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");



var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent() {
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('Apples', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('Tomatoes', 10)
        ];
    }
    ShoppingListComponent.prototype.ngOnInit = function () { };
    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! ./shopping-list.component.html */ "./src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingListComponent);
    return ShoppingListComponent;
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

module.exports = __webpack_require__(/*! E:\Side_Projects\Angular_Max\Angular-Food-Recipe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
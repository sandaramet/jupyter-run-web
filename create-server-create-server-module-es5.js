function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-server-create-server-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/create-server/create-server.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/create-server/create-server.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeCreateServerCreateServerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header>\n</app-header>\n<ion-content>\n  <ion-progress-bar [attr.type]=\"loading == true ? 'indeterminate' : ''\"></ion-progress-bar>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size-xs=\"12\" offset-md=\"4\" size-md=\"4\">\n        <form (ngSubmit)=\"onSubmit()\">\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-input required placeholder=\"Name\" name=\"name\" type=\"text\"\n              [(ngModel)]=\"newVM.name\"></ion-input>\n          </ion-item>\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label>Region</ion-label>\n            <ion-select value=\"\" placeholder=\"Select Region\" name=\"region\"\n              [(ngModel)]=\"newVM.region\" interface=\"action-sheet\">\n              <ng-template ngFor let-region [ngForOf]=\"regions\">\n                <ion-select-option [value]=region>{{region}}</ion-select-option>\n              </ng-template>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label>VM type</ion-label>\n            <ion-select value=\"\" placeholder=\"Select type\" name=\"vmType\"\n              [(ngModel)]=\"newVM.vmType\" interface=\"action-sheet\">\n              <ng-template ngFor let-machineType [ngForOf]=\"machineTypes\">\n                <ion-select-option [value]=machineType>{{machineType}}</ion-select-option>\n              </ng-template>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-input required placeholder=\"Jupyter password\"\n              name=\"jupyterPassword\" type=\"password\"\n              [(ngModel)]=\"newVM.jupyterPassword\">\n            </ion-input>\n          </ion-item>\n          <ion-button routerLink=\"/home\" color=\"danger\"\n            class=\"ion-margin-vertical\">\n            back\n          </ion-button>\n          <ion-button color=\"success\" fill=\"solid\" type=\"submit\"\n            class=\"ion-margin-vertical\">\n            <ion-icon slot=\"start\" name=\"create-outline\"></ion-icon>\n            Create\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/home/create-server/create-server-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/home/create-server/create-server-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: CreateServerPageRoutingModule */

  /***/
  function srcAppPagesHomeCreateServerCreateServerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateServerPageRoutingModule", function () {
      return CreateServerPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _create_server_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-server.page */
    "./src/app/pages/home/create-server/create-server.page.ts");

    var routes = [{
      path: '',
      component: _create_server_page__WEBPACK_IMPORTED_MODULE_3__["CreateServerPage"]
    }];

    var CreateServerPageRoutingModule = function CreateServerPageRoutingModule() {
      _classCallCheck(this, CreateServerPageRoutingModule);
    };

    CreateServerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreateServerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/create-server/create-server.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/home/create-server/create-server.module.ts ***!
    \******************************************************************/

  /*! exports provided: CreateServerPageModule */

  /***/
  function srcAppPagesHomeCreateServerCreateServerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateServerPageModule", function () {
      return CreateServerPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _create_server_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-server-routing.module */
    "./src/app/pages/home/create-server/create-server-routing.module.ts");
    /* harmony import */


    var _create_server_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-server.page */
    "./src/app/pages/home/create-server/create-server.page.ts");

    var CreateServerPageModule = function CreateServerPageModule() {
      _classCallCheck(this, CreateServerPageModule);
    };

    CreateServerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_server_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateServerPageRoutingModule"]],
      declarations: [_create_server_page__WEBPACK_IMPORTED_MODULE_6__["CreateServerPage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CreateServerPageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/create-server/create-server.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/home/create-server/create-server.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeCreateServerCreateServerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-button:last-child {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmRhcmFtZXQvRG9jdW1lbnRzL2p1cHl0ZXItcnVuL3NyYy9hcHAvcGFnZXMvaG9tZS9jcmVhdGUtc2VydmVyL2NyZWF0ZS1zZXJ2ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2NyZWF0ZS1zZXJ2ZXIvY3JlYXRlLXNlcnZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2NyZWF0ZS1zZXJ2ZXIvY3JlYXRlLXNlcnZlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uOmxhc3QtY2hpbGR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSIsImlvbi1idXR0b246bGFzdC1jaGlsZCB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/home/create-server/create-server.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/home/create-server/create-server.page.ts ***!
    \****************************************************************/

  /*! exports provided: CreateServerPage */

  /***/
  function srcAppPagesHomeCreateServerCreateServerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateServerPage", function () {
      return CreateServerPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;

    var CreateServerPage = /*#__PURE__*/function () {
      function CreateServerPage(data, router, alertController) {
        _classCallCheck(this, CreateServerPage);

        this.data = data;
        this.router = router;
        this.alertController = alertController;
        this.loading = false;
        this.regions = [];
        this.machineTypes = [];
        this.newVM = {
          name: "",
          region: "",
          vmType: "",
          jupyterPassword: ""
        };
      }

      _createClass(CreateServerPage, [{
        key: "presentAlert",
        value: function presentAlert(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Alert',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (localStorage.getItem('regions') == null) {
            if (localStorage.getItem('machineType') == null) {
              this.data.getRegionsAndMachineTypes().subscribe(function (data) {
                console.log(data);

                if (localStorage.getItem('regions') == null) {
                  console.log(localStorage.getItem('regions'));

                  var _iterator = _createForOfIteratorHelper(data['regionas']),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var region = _step.value;

                      _this.regions.push(region['name']);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  localStorage.setItem("regions", String(_this.regions));
                }

                if (localStorage.getItem('machineType') == null) {
                  console.log(localStorage.getItem('machineType'));

                  var _iterator2 = _createForOfIteratorHelper(data['machineType']),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var machineTypes = _step2.value;

                      _this.machineTypes.push(machineTypes['name']);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  localStorage.setItem("machineTypes", String(_this.machineTypes));
                }
              });
            }
          } else {
            console.log("else");
            this.regions = localStorage.getItem("regions").split(",");
            this.machineTypes = localStorage.getItem("machineTypes").split(",");
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.loading = true;
          console.log(this.newVM);
          this.data.createVM(this.newVM).subscribe(function (res) {
            console.log(res);

            if (res['statusCode'] == 200) {
              _this2.presentAlert('You sucsesfuly created new VM it will available in 10 min');

              _this2.router.navigateByUrl('/home');

              _this2.data.addVMIdToFirebase(res['data'], _this2.newVM.name);
            } else {
              _this2.presentAlert(res['error']);
            }

            _this2.loading = false;
          }); // fetch(`${baseUrl}/createVirtualMachine?uid=81wXgHbek5NFN7GgPCf4cgERxB22&name=${this.newVM.name}&machine_type=${this.newVM.vmType}&password=${this.newVM.jupyterPassword}&region=${this.newVM.region}`, {
          //   method: 'GET',
          //   redirect: 'follow'
          // })
          //   .then(response => response.json())
          //   .then(result => {
          //     console.log(result)
          //     alert("You sucsesfuly created new VM it will available in 10 min")
          //     this.router.navigateByUrl('/home')
          //   })
          //   .catch(error => console.log(alert(error)));
        }
      }]);

      return CreateServerPage;
    }();

    CreateServerPage.ctorParameters = function () {
      return [{
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    CreateServerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-server',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-server.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/create-server/create-server.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-server.page.scss */
      "./src/app/pages/home/create-server/create-server.page.scss"))["default"]]
    })], CreateServerPage);
    /***/
  }
}]);
//# sourceMappingURL=create-server-create-server-module-es5.js.map
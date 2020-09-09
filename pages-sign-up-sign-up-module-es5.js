function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignUpSignUpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n\n\n      <ion-col size-xs=\"12\" offset-md=\"2\" size-md=\"4\">\n        <h2 class=\"ion-margin\">Sign up</h2>\n        <form (ngSubmit)=\"onSubmit()\">\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-icon name=\"mail\" slot=\"start\" color=\"dark\" size=\"3\"></ion-icon>\n            <ion-input required placeholder=\"Your Email\" [(ngModel)]=\"user.email\" name=\"email\" type=\"email\"></ion-input>\n          </ion-item>\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-icon name=\"lock-closed\" slot=\"start\" color=\"dark\"></ion-icon>\n            <ion-input required placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\" type=\"password\">\n            </ion-input>\n          </ion-item>\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-icon name=\"lock-closed-outline\" slot=\"start\" color=\"dark\"></ion-icon>\n            <ion-input required placeholder=\"Repeat your password\" [(ngModel)]=\"user.repeatPassword\"\n              name=\"repeatPassword\" type=\"password\">\n            </ion-input>\n          </ion-item>\n          <ion-button [routerLink]=\"['/sign-in']\" routerLinkActive=\"router-link-active\" block fill=\"clear\"\n            color=\"primary\" class=\"ion-margin-vertical\" style=\"text-transform: initial;\">\n            I am already registered\n          </ion-button>\n          <ion-button block color=\"primary\" type=\"submit\" class=\"ion-margin-vertical\">\n            Register\n          </ion-button>\n        </form>\n      </ion-col>\n      <ion-col size-xs=\"0\" offset-md=\"1\" size-md=\"4\">\n        <img src=\"../../../assets/signup-image.jpg\" alt=\"Signup Image\">\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/sign-up/sign-up-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/sign-up/sign-up-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SignUpPageRoutingModule */

  /***/
  function srcAppPagesSignUpSignUpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function () {
      return SignUpPageRoutingModule;
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


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/pages/sign-up/sign-up.page.ts");

    var routes = [{
      path: '',
      component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }];

    var SignUpPageRoutingModule = function SignUpPageRoutingModule() {
      _classCallCheck(this, SignUpPageRoutingModule);
    };

    SignUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignUpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/sign-up/sign-up.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
    \*************************************************/

  /*! exports provided: SignUpPageModule */

  /***/
  function srcAppPagesSignUpSignUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
      return SignUpPageModule;
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


    var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-up-routing.module */
    "./src/app/pages/sign-up/sign-up-routing.module.ts");
    /* harmony import */


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/pages/sign-up/sign-up.page.ts");
    /* harmony import */


    var src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/header/header.module */
    "./src/app/components/header/header.module.ts");

    var SignUpPageModule = function SignUpPageModule() {
      _classCallCheck(this, SignUpPageModule);
    };

    SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"], src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })], SignUpPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sign-up/sign-up.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/sign-up/sign-up.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignUpSignUpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-grid {\n  display: grid;\n  height: 100%;\n  align-items: center;\n}\n\nion-col:last-child {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-rows: 80% 20%;\n}\n\nion-icon {\n  font-size: 1.2em;\n}\n\nion-col:first-child ion-button {\n  height: 45px;\n}\n\nion-col:first-child form > ion-button:nth-child(4) {\n  text-transform: initial;\n  font-weight: 400;\n}\n\nion-col:first-child form > ion-button:nth-child(4) > div {\n  border-bottom: 1px solid black;\n  width: 100%;\n}\n\nion-col:first-child form > ion-button[type=submit] {\n  font-size: 0.8em;\n  width: 115px;\n  float: right;\n}\n\nh2 {\n  font-size: 3em;\n  font-weight: 900;\n  letter-spacing: 1px;\n  margin-bottom: 10%;\n}\n\n.alert-box {\n  width: 300px !important;\n}\n\n::ng-deep .alert-wrapper {\n  --min-width: 400px;\n  --max-width: 400px;\n  --width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmRhcmFtZXQvRG9jdW1lbnRzL2p1cHl0ZXItcnVuL3NyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FESUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSw4QkFBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUNGSjs7QURLQTtFQUNJLHVCQUFBO0FDRko7O0FEUUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY29sOmxhc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwJSAyMCU7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG5cbmlvbi1jb2w6Zmlyc3QtY2hpbGQgaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuXG59XG5cbmlvbi1jb2w6Zmlyc3QtY2hpbGQgZm9ybT5pb24tYnV0dG9uOm50aC1jaGlsZCg0KSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW9uLWNvbDpmaXJzdC1jaGlsZCBmb3JtPmlvbi1idXR0b246bnRoLWNoaWxkKDQpPmRpdiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY29sOmZpcnN0LWNoaWxkIGZvcm0+aW9uLWJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAvLyBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5hbGVydC1ib3gge1xuICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50XG59XG5cblxuXG46Om5nLWRlZXAge1xuICAgIC5hbGVydC13cmFwcGVyIHtcbiAgICAgICAgLS1taW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAtLW1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIC0td2lkdGg6IDQwMHB4O1xuICAgIH1cblxufSIsImlvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY29sOmxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MCUgMjAlO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbmlvbi1jb2w6Zmlyc3QtY2hpbGQgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbn1cblxuaW9uLWNvbDpmaXJzdC1jaGlsZCBmb3JtID4gaW9uLWJ1dHRvbjpudGgtY2hpbGQoNCkge1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW9uLWNvbDpmaXJzdC1jaGlsZCBmb3JtID4gaW9uLWJ1dHRvbjpudGgtY2hpbGQoNCkgPiBkaXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY29sOmZpcnN0LWNoaWxkIGZvcm0gPiBpb24tYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHdpZHRoOiAxMTVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5hbGVydC1ib3gge1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hbGVydC13cmFwcGVyIHtcbiAgLS1taW4td2lkdGg6IDQwMHB4O1xuICAtLW1heC13aWR0aDogNDAwcHg7XG4gIC0td2lkdGg6IDQwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/sign-up/sign-up.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/sign-up/sign-up.page.ts ***!
    \***********************************************/

  /*! exports provided: SignUpPage */

  /***/
  function srcAppPagesSignUpSignUpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
      return SignUpPage;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SignUpPage = /*#__PURE__*/function () {
      function SignUpPage(auth, alertController, router) {
        _classCallCheck(this, SignUpPage);

        this.auth = auth;
        this.alertController = alertController;
        this.router = router;
        this.user = {
          email: "",
          password: "",
          repeatPassword: ""
        };
      }

      _createClass(SignUpPage, [{
        key: "presentAlert",
        value: function presentAlert(msg, header, callback) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'alert-box',
                      header: header,
                      message: msg,
                      buttons: [{
                        text: 'OK',
                        handler: function handler() {
                          if (callback != undefined) callback();
                        }
                      }]
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
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          if (this.user.password === this.user.repeatPassword) {
            this.auth.SignUp(this.user.email, this.user.password).then(function (data) {
              console.log(data);
              if (data.message) _this.presentAlert(data.message);else if (data) _this.presentAlert("Please validate your email address. Kindly check your inbox.", "You successfully registered", function () {
                return _this.router.navigateByUrl("/sign-in");
              });
            });
          } else this.presentAlert("Those passwords didn't match.");
        }
      }]);

      return SignUpPage;
    }();

    SignUpPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sign-up.page.scss */
      "./src/app/pages/sign-up/sign-up.page.scss"))["default"]]
    })], SignUpPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-sign-up-sign-up-module-es5.js.map
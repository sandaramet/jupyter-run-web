(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n\n      <ion-col size-xs=\"0\" offset-md=\"1\" size-md=\"4\">\n        <img src=\"assets/signin-image.jpg\" alt=\"Signup Image\">\n\n      </ion-col>\n      <ion-col size-xs=\"12\" offset-md=\"2\" size-md=\"4\">\n        <div>\n          <h2 class=\"ion-margin\">Sign in</h2>\n          <form (ngSubmit)=\"authMail()\">\n            <ion-item class=\"ion-margin-vertical\">\n              <ion-icon name=\"mail\" slot=\"start\" color=\"dark\" size=\"3\"></ion-icon>\n              <ion-input required placeholder=\"Your Email\" [(ngModel)]=\"user.email\" name=\"email\" type=\"email\">\n              </ion-input>\n            </ion-item>\n            <ion-item class=\"ion-margin-vertical\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" color=\"dark\"></ion-icon>\n              <ion-input required placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\" type=\"password\">\n              </ion-input>\n            </ion-item>\n            <ion-button [routerLink]=\"['/sign-up']\" block fill=\"clear\" color=\"primary\" class=\"ion-margin-vertical\"\n              style=\"text-transform: initial;\">\n              Create an account\n            </ion-button>\n            <ion-button block color=\"primary\" type=\"submit\" class=\"ion-margin-vertical\">\n              Log in\n            </ion-button>\n          </form>\n          <div>\n            <p class=\"ion-text-center\">OR</p>\n            <ion-button (click)=\"authGoogle()\" expand=\"full\" color=\"light\" class=\"ion-margin-vertical\">\n              <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\n              Continue with Google\n            </ion-button>\n            <ion-button (click)=\"authGithub()\" expand=\"full\" color=\"light\" class=\"ion-margin-vertical\">\n              <ion-icon name=\"logo-github\" slot=\"start\"></ion-icon>\n              Continue with Github\n            </ion-button>\n\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/sign-in/sign-in.page.ts");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
  \*************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/app/pages/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/sign-in/sign-in.page.ts");
/* harmony import */ var src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/header/header.module */ "./src/app/components/header/header.module.ts");








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageRoutingModule"],
            src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  display: grid;\n  height: 100%;\n  align-items: center;\n}\n\nion-col:first-child {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-rows: 82% 30%;\n}\n\nform ion-icon {\n  font-size: 1.2em;\n}\n\nion-col:last-child {\n  display: grid;\n  grid-template-rows: 100% 20%;\n}\n\nion-col:first-child > div:last-child {\n  display: grid;\n  grid-template-columns: 85px 53px 53px;\n  align-items: center;\n  margin: auto;\n}\n\nion-col:first-child div:last-child > div {\n  width: 70%;\n  height: 90%;\n  padding: 5px;\n  border-radius: 6px;\n}\n\nion-col:first-child div:last-child ion-icon {\n  zoom: 1.7;\n  cursor: pointer;\n}\n\nion-col:first-child div:last-child ion-label {\n  color: #222;\n  font-weight: 300;\n  font-size: 17px;\n}\n\nion-icon[name=logo-google] {\n  color: #e42a37;\n}\n\nion-icon[name=logo-github] {\n  color: #24292e;\n}\n\nion-col:first-child div:last-child ion-icon {\n  color: white;\n}\n\nion-col:last-child ion-button {\n  height: 45px;\n}\n\nion-col:last-child form > ion-button:nth-child(4) {\n  text-transform: initial;\n  font-weight: 400;\n}\n\nion-col:last-child form > ion-button:nth-child(4) > div {\n  border-bottom: 1px solid black;\n  width: 100%;\n}\n\nion-col:last-child form > ion-button[type=submit] {\n  font-size: 0.8em;\n  width: 115px;\n  float: right;\n}\n\nh2 {\n  font-size: 3em;\n  font-weight: 900;\n  letter-spacing: 1px;\n  margin-bottom: 10%;\n}\n\n.alert-box {\n  width: 300px !important;\n}\n\n::ng-deep .alert-wrapper {\n  --min-width: 400px;\n  --max-width: 400px;\n  --width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmRhcmFtZXQvRG9jdW1lbnRzL2p1cHl0ZXItcnVuL3NyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFFSSxjQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0FDREo7O0FETUE7RUFDSSxZQUFBO0FDSEo7O0FETUE7RUFDSSxZQUFBO0FDSEo7O0FET0E7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FDSko7O0FET0E7RUFDSSw4QkFBQTtFQUNBLFdBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUNMSjs7QURRQTtFQUNJLHVCQUFBO0FDTEo7O0FEV0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY29sOmZpcnN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MiUgMzAlO1xufVxuXG5mb3JtIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG5pb24tY29sOmxhc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlIDIwJTtcbn1cblxuaW9uLWNvbDpmaXJzdC1jaGlsZD5kaXY6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg1cHggNTNweCA1M3B4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5cbmlvbi1jb2w6Zmlyc3QtY2hpbGQgZGl2Omxhc3QtY2hpbGQ+ZGl2IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbmlvbi1jb2w6Zmlyc3QtY2hpbGQgZGl2Omxhc3QtY2hpbGQgaW9uLWljb24ge1xuICAgIHpvb206IDEuNztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1jb2w6Zmlyc3QtY2hpbGQgZGl2Omxhc3QtY2hpbGQgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuaW9uLWljb25bbmFtZT1cImxvZ28tZ29vZ2xlXCJdIHtcblxuICAgIGNvbG9yOiAjZTQyYTM3O1xufVxuXG5pb24taWNvbltuYW1lPVwibG9nby1naXRodWJcIl0ge1xuICAgIGNvbG9yOiAjMjQyOTJlO1xufVxuXG5cblxuaW9uLWNvbDpmaXJzdC1jaGlsZCBkaXY6bGFzdC1jaGlsZCBpb24taWNvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29sOmxhc3QtY2hpbGQgaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuXG59XG5cbmlvbi1jb2w6bGFzdC1jaGlsZCBmb3JtPmlvbi1idXR0b246bnRoLWNoaWxkKDQpIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pb24tY29sOmxhc3QtY2hpbGQgZm9ybT5pb24tYnV0dG9uOm50aC1jaGlsZCg0KT5kaXYge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNvbDpsYXN0LWNoaWxkIGZvcm0+aW9uLWJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAvLyBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5hbGVydC1ib3gge1xuICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50XG59XG5cblxuXG46Om5nLWRlZXAge1xuICAgIC5hbGVydC13cmFwcGVyIHtcbiAgICAgICAgLS1taW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAtLW1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIC0td2lkdGg6IDQwMHB4O1xuICAgIH1cblxufSIsImlvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY29sOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODIlIDMwJTtcbn1cblxuZm9ybSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbmlvbi1jb2w6bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJSAyMCU7XG59XG5cbmlvbi1jb2w6Zmlyc3QtY2hpbGQgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODVweCA1M3B4IDUzcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWNvbDpmaXJzdC1jaGlsZCBkaXY6bGFzdC1jaGlsZCA+IGRpdiB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogOTAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuaW9uLWNvbDpmaXJzdC1jaGlsZCBkaXY6bGFzdC1jaGlsZCBpb24taWNvbiB7XG4gIHpvb206IDEuNztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tY29sOmZpcnN0LWNoaWxkIGRpdjpsYXN0LWNoaWxkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1pY29uW25hbWU9bG9nby1nb29nbGVdIHtcbiAgY29sb3I6ICNlNDJhMzc7XG59XG5cbmlvbi1pY29uW25hbWU9bG9nby1naXRodWJdIHtcbiAgY29sb3I6ICMyNDI5MmU7XG59XG5cbmlvbi1jb2w6Zmlyc3QtY2hpbGQgZGl2Omxhc3QtY2hpbGQgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb2w6bGFzdC1jaGlsZCBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG5pb24tY29sOmxhc3QtY2hpbGQgZm9ybSA+IGlvbi1idXR0b246bnRoLWNoaWxkKDQpIHtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlvbi1jb2w6bGFzdC1jaGlsZCBmb3JtID4gaW9uLWJ1dHRvbjpudGgtY2hpbGQoNCkgPiBkaXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY29sOmxhc3QtY2hpbGQgZm9ybSA+IGlvbi1idXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgd2lkdGg6IDExNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmFsZXJ0LWJveCB7XG4gIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFsZXJ0LXdyYXBwZXIge1xuICAtLW1pbi13aWR0aDogNDAwcHg7XG4gIC0tbWF4LXdpZHRoOiA0MDBweDtcbiAgLS13aWR0aDogNDAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.ts ***!
  \***********************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let SignInPage = class SignInPage {
    constructor(auth, alertController, router) {
        this.auth = auth;
        this.alertController = alertController;
        this.router = router;
        this.user = {
            email: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    presentAlert(msg, header, callback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-box',
                header: header,
                message: msg,
                buttons: [{
                        text: 'OK', handler: () => {
                            if (callback != undefined)
                                callback();
                        }
                    }],
            });
            yield alert.present();
        });
    }
    authMail() {
        this.auth.SignIn(this.user.email, this.user.password).then(data => {
            console.log(data);
            if (data.user && data.user.emailVerified !== true)
                this.presentAlert("Please validate your email address. Kindly check your inbox.", "You successfully registered", () => this.router.navigateByUrl("/sign-in"));
            else if (data.message)
                this.presentAlert(data.message);
        });
    }
    authGithub() { }
    authGoogle() {
        this.auth.GoogleAuth();
    }
};
SignInPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/pages/sign-in/sign-in.page.scss")).default]
    })
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=pages-sign-in-sign-in-module-es2015.js.map
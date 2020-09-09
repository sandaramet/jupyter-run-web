(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-server-create-server-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/create-server/create-server.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/create-server/create-server.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header>\n</app-header>\n<ion-content>\n  <ion-progress-bar [attr.type]=\"loading == true ? 'indeterminate' : ''\"></ion-progress-bar>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size-xs=\"12\" offset-md=\"4\" size-md=\"4\">\n        <form (ngSubmit)=\"onSubmit()\">\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-input required placeholder=\"Name\" name=\"name\" type=\"text\"\n              [(ngModel)]=\"newVM.name\"></ion-input>\n          </ion-item>\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label>Region</ion-label>\n            <ion-select value=\"\" placeholder=\"Select Region\" name=\"region\"\n              [(ngModel)]=\"newVM.region\" interface=\"action-sheet\">\n              <ng-template ngFor let-region [ngForOf]=\"regions\">\n                <ion-select-option [value]=region>{{region}}</ion-select-option>\n              </ng-template>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label>VM type</ion-label>\n            <ion-select value=\"\" placeholder=\"Select type\" name=\"vmType\"\n              [(ngModel)]=\"newVM.vmType\" interface=\"action-sheet\">\n              <ng-template ngFor let-machineType [ngForOf]=\"machineTypes\">\n                <ion-select-option [value]=machineType>{{machineType}}</ion-select-option>\n              </ng-template>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-input required placeholder=\"Jupyter password\"\n              name=\"jupyterPassword\" type=\"password\"\n              [(ngModel)]=\"newVM.jupyterPassword\">\n            </ion-input>\n          </ion-item>\n          <ion-button routerLink=\"/home\" color=\"danger\"\n            class=\"ion-margin-vertical\">\n            back\n          </ion-button>\n          <ion-button color=\"success\" fill=\"solid\" type=\"submit\"\n            class=\"ion-margin-vertical\">\n            <ion-icon slot=\"start\" name=\"create-outline\"></ion-icon>\n            Create\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/create-server/create-server-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/home/create-server/create-server-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CreateServerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateServerPageRoutingModule", function() { return CreateServerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_server_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-server.page */ "./src/app/pages/home/create-server/create-server.page.ts");




const routes = [
    {
        path: '',
        component: _create_server_page__WEBPACK_IMPORTED_MODULE_3__["CreateServerPage"],
    }
];
let CreateServerPageRoutingModule = class CreateServerPageRoutingModule {
};
CreateServerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CreateServerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/create-server/create-server.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/home/create-server/create-server.module.ts ***!
  \******************************************************************/
/*! exports provided: CreateServerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateServerPageModule", function() { return CreateServerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_server_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-server-routing.module */ "./src/app/pages/home/create-server/create-server-routing.module.ts");
/* harmony import */ var _create_server_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-server.page */ "./src/app/pages/home/create-server/create-server.page.ts");







let CreateServerPageModule = class CreateServerPageModule {
};
CreateServerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_server_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateServerPageRoutingModule"]
        ],
        declarations: [_create_server_page__WEBPACK_IMPORTED_MODULE_6__["CreateServerPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], CreateServerPageModule);



/***/ }),

/***/ "./src/app/pages/home/create-server/create-server.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/home/create-server/create-server.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button:last-child {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmRhcmFtZXQvRG9jdW1lbnRzL2p1cHl0ZXItcnVuL3NyYy9hcHAvcGFnZXMvaG9tZS9jcmVhdGUtc2VydmVyL2NyZWF0ZS1zZXJ2ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2NyZWF0ZS1zZXJ2ZXIvY3JlYXRlLXNlcnZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2NyZWF0ZS1zZXJ2ZXIvY3JlYXRlLXNlcnZlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uOmxhc3QtY2hpbGR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSIsImlvbi1idXR0b246bGFzdC1jaGlsZCB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/create-server/create-server.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/create-server/create-server.page.ts ***!
  \****************************************************************/
/*! exports provided: CreateServerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateServerPage", function() { return CreateServerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






const { baseUrl } = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
let CreateServerPage = class CreateServerPage {
    constructor(data, router, alertController) {
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
    presentAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        if (localStorage.getItem('regions') == null) {
            if (localStorage.getItem('machineType') == null) {
                this.data.getRegionsAndMachineTypes().subscribe(data => {
                    console.log(data);
                    if (localStorage.getItem('regions') == null) {
                        console.log(localStorage.getItem('regions'));
                        for (let region of data['regionas']) {
                            this.regions.push(region['name']);
                        }
                        localStorage.setItem("regions", String(this.regions));
                    }
                    if (localStorage.getItem('machineType') == null) {
                        console.log(localStorage.getItem('machineType'));
                        for (let machineTypes of data['machineType']) {
                            this.machineTypes.push(machineTypes['name']);
                        }
                        localStorage.setItem("machineTypes", String(this.machineTypes));
                    }
                });
            }
        }
        else {
            console.log("else");
            this.regions = localStorage.getItem("regions").split(",");
            this.machineTypes = localStorage.getItem("machineTypes").split(",");
        }
    }
    onSubmit() {
        this.loading = true;
        console.log(this.newVM);
        this.data.createVM(this.newVM).subscribe(res => {
            console.log(res);
            if (res['statusCode'] == 200) {
                this.presentAlert('You sucsesfuly created new VM it will available in 10 min');
                this.router.navigateByUrl('/home');
                this.data.addVMIdToFirebase(res['data'], this.newVM.name);
            }
            else {
                this.presentAlert(res['error']);
            }
            this.loading = false;
        });
        // fetch(`${baseUrl}/createVirtualMachine?uid=81wXgHbek5NFN7GgPCf4cgERxB22&name=${this.newVM.name}&machine_type=${this.newVM.vmType}&password=${this.newVM.jupyterPassword}&region=${this.newVM.region}`, {
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
};
CreateServerPage.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
CreateServerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-server',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-server.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/create-server/create-server.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-server.page.scss */ "./src/app/pages/home/create-server/create-server.page.scss")).default]
    })
], CreateServerPage);



/***/ })

}]);
//# sourceMappingURL=create-server-create-server-module-es2015.js.map
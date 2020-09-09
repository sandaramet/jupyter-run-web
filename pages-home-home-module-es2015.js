(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notebook-card/notebook-card.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notebook-card/notebook-card.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-card class=\"ion-margin-vertical\" [attr.disabled]=\"isStarted == true ? true\n    :\n    false\">\n\n    <ion-card-header>\n        <ion-card-title>{{vm_title}}</ion-card-title>\n        <ion-card-subtitle>{{vm_zone}}</ion-card-subtitle>\n\n    </ion-card-header>\n    <div class=\"ion-padding\">\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"openAddress(vm_ip)\">\n                {{vm_ip}}\n            </ion-button>\n        </ion-buttons>\n    </div>\n    <div class=\"ion-padding\">\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"startVM()\">\n                <ion-icon name=\"play\" [attr.color]=\"this.isRuning == true ?\n                    'success ' : ' '\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"stopVM()\">\n                <ion-icon name=\"power\" [attr.color]=\"this.isRuning == false ?\n                    'danger ' : ' '\"></ion-icon>\n            </ion-button>\n            <ion-button>\n                <ion-icon name=\"time\"></ion-icon>\n            </ion-button>\n            <ion-button>\n                <ion-icon name=\"document\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"deleteVM()\">\n                <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n    </div>\n    <ion-progress-bar [attr.type]=\"isStarted == true ? 'indeterminate' :\n        ''\"></ion-progress-bar>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content>\n    <ion-grid fixed>\n        <ion-row>\n            <ion-col size-xs=\"12\" offset-md=\"1\" size-md=\"10\">\n                <ion-toolbar>\n                    <ion-title>Your Notebook Servers</ion-title>\n                    <ion-buttons slot=\"end\">\n                        <ion-button expand=\"block\"\n                            routerLink=\"/home/create-server\">\n                            <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n                            create new server\n                        </ion-button>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size-xs=\"12\" offset-md=\"1\" size-md=\"10\">\n                <ng-template ngFor let-item [ngForOf]=\"VMList\">\n                    <app-notebook-card (onRemoveVM)=\"getVMList($event)\"\n                        [isRuning]=\"item.metadata.status == 'RUNNING'\n                        ? true :false\"\n                        [vm_title]=\"item.name\"\n                        [vm_zone]=\"item.zone.name\"\n                        [vm_ip]=\"item.metadata.networkInterfaces[0].accessConfigs[0].natIP\">\n                    </app-notebook-card>\n                </ng-template>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/components/notebook-card/notebook-card.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/notebook-card/notebook-card.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  display: grid;\n  grid-template-columns: -webkit-max-content 1fr 1fr;\n  grid-template-columns: max-content 1fr 1fr;\n  align-items: center;\n  grid-template-rows: 95% 5%;\n}\n\nion-card > div {\n  display: flex;\n  justify-content: flex-end;\n}\n\nion-progress-bar {\n  grid-column: 1/-1;\n  --buffer-background:#fff ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmRhcmFtZXQvRG9jdW1lbnRzL2p1cHl0ZXItcnVuL3NyYy9hcHAvY29tcG9uZW50cy9ub3RlYm9vay1jYXJkL25vdGVib29rLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZWJvb2stY2FyZC9ub3RlYm9vay1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtEQUFBO0VBQUEsMENBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNFQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZWJvb2stY2FyZC9ub3RlYm9vay1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5NSUgNSU7XG59XG5cbmlvbi1jYXJkPmRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuaW9uLXByb2dyZXNzLWJhcntcbmdyaWQtY29sdW1uOiAxIC8gLTE7XG4tLWJ1ZmZlci1iYWNrZ3JvdW5kOiNmZmZcbn0iLCJpb24tY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5NSUgNSU7XG59XG5cbmlvbi1jYXJkID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiNmZmYgO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/notebook-card/notebook-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notebook-card/notebook-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotebookCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebookCardComponent", function() { return NotebookCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



let NotebookCardComponent = class NotebookCardComponent {
    constructor(data) {
        this.data = data;
        this.onRemoveVM = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isStarted = false;
    }
    ngOnInit() {
        if (localStorage.getItem('progress') == this.vm_title) {
            this.isStarted = true;
        }
        else {
            this.isStarted = false;
        }
    }
    openAddress(ip) {
        window.open("http://" + ip, "_blank");
    }
    startVM() {
        this.isStarted = true;
        this.data.startVM(this.vm_title, this.vm_zone).subscribe(data => {
            if (data['status'] == 200)
                this.isRuning = true;
            this.isStarted = false;
        });
    }
    stopVM() {
        this.isStarted = true;
        this.data.stopVM(this.vm_title, this.vm_zone).subscribe(data => {
            if (data['status'] == 200)
                this.isRuning = false;
            this.isStarted = false;
        });
    }
    deleteVM() {
        localStorage.setItem("progress", this.vm_title);
        if (localStorage.getItem("progress") != undefined) {
            this.isStarted = true;
        }
        this.data.deleteVM(this.vm_title, this.vm_zone).subscribe(data => {
            if (data['status'] == 200)
                setTimeout(() => {
                    this.onRemoveVM.emit(this.vm_title);
                }, 20000);
        });
    }
};
NotebookCardComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotebookCardComponent.prototype, "vm_title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotebookCardComponent.prototype, "vm_zone", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotebookCardComponent.prototype, "vm_ip", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotebookCardComponent.prototype, "isRuning", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NotebookCardComponent.prototype, "onRemoveVM", void 0);
NotebookCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notebook-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notebook-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notebook-card/notebook-card.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notebook-card.component.scss */ "./src/app/components/notebook-card/notebook-card.component.scss")).default]
    })
], NotebookCardComponent);



/***/ }),

/***/ "./src/app/components/notebook-card/notebook-card.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/notebook-card/notebook-card.module.ts ***!
  \******************************************************************/
/*! exports provided: NotebookCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebookCardModule", function() { return NotebookCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _notebook_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notebook-card.component */ "./src/app/components/notebook-card/notebook-card.component.ts");




let NotebookCardModule = class NotebookCardModule {
};
NotebookCardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_notebook_card_component__WEBPACK_IMPORTED_MODULE_3__["NotebookCardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_notebook_card_component__WEBPACK_IMPORTED_MODULE_3__["NotebookCardComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], NotebookCardModule);



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    },
    {
        path: 'upload-keys',
        loadChildren: () => __webpack_require__.e(/*! import() | upload-keys-upload-keys-module */ "upload-keys-upload-keys-module").then(__webpack_require__.bind(null, /*! ./upload-keys/upload-keys.module */ "./src/app/pages/home/upload-keys/upload-keys.module.ts")).then(m => m.UploadKeysPageModule)
    },
    {
        path: 'create-server',
        loadChildren: () => __webpack_require__.e(/*! import() | create-server-create-server-module */ "create-server-create-server-module").then(__webpack_require__.bind(null, /*! ./create-server/create-server.module */ "./src/app/pages/home/create-server/create-server.module.ts")).then(m => m.CreateServerPageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/header/header.module */ "./src/app/components/header/header.module.ts");
/* harmony import */ var src_app_components_notebook_card_notebook_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/notebook-card/notebook-card.module */ "./src/app/components/notebook-card/notebook-card.module.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            src_app_components_notebook_card_notebook_card_module__WEBPACK_IMPORTED_MODULE_8__["NotebookCardModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .create-server {\n  --min-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmRhcmFtZXQvRG9jdW1lbnRzL2p1cHl0ZXItcnVuL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgICAuY3JlYXRlLXNlcnZlciB7XG4gICAgICAgIC0tbWluLXdpZHRoOiA0MDBweDtcbiAgICB9XG5cblxufSIsIjo6bmctZGVlcCAuY3JlYXRlLXNlcnZlciB7XG4gIC0tbWluLXdpZHRoOiA0MDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



let HomePage = class HomePage {
    constructor(data) {
        this.data = data;
        this.VMList = [];
    }
    getVMList(name) {
        for (let i = 0; i < this.VMList.length; i++) {
            if (this.VMList[i]['name'] == name) {
                this.VMList.splice(i, 1);
            }
        }
    }
    ngOnInit() {
        this.data.getVMList().subscribe(data => {
            console.log(data);
            this.VMList = data[0];
        });
        setInterval(() => this.data.getVMList().subscribe(data => {
            this.VMList = data[0];
            let found = false;
            for (let item of this.VMList) {
                if (item.name == localStorage.getItem('progress')) {
                    found = true;
                }
            }
            if (found == false)
                localStorage.removeItem('progress');
        }), 30000);
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");





const { baseUrl } = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
let DataService = class DataService {
    constructor(http, afs) {
        this.http = http;
        this.afs = afs;
    }
    getVMList() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Access-Control-Allow-Origin', "*");
        return this.http.get(`https://us-central1-jupyter-run-dev.cloudfunctions.net/VirtualMachineList?uid=${JSON.parse(localStorage.getItem('user_uid'))}`, {
            headers: headers
        });
    }
    stopVM(name, zone) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Access-Control-Allow-Origin', "*");
        return this.http.get(`https://us-central1-jupyter-run-dev.cloudfunctions.net/stopVirtualMachine?uid=${JSON.parse(localStorage.getItem('user_uid'))}&vm_name=${name}&vm_zone=${zone}`, {
            headers: headers
        });
    }
    startVM(name, zone) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Access-Control-Allow-Origin', "*");
        return this.http.get(`https://us-central1-jupyter-run-dev.cloudfunctions.net/startVirtualMachine?uid=${JSON.parse(localStorage.getItem('user_uid'))}&vm_name=${name}&vm_zone=${zone}`, {
            headers: headers
        });
    }
    deleteVM(name, zone) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Access-Control-Allow-Origin', "*");
        this.afs.collection(`users/${JSON.parse(localStorage.getItem('user_uid'))}/VMs`).doc(name).delete();
        return this.http.get(`https://us-central1-jupyter-run-dev.cloudfunctions.net/deleteVirtualMachine?uid=${JSON.parse(localStorage.getItem('user_uid'))}&vm_name=${name}&vm_zone=${zone}`, {
            headers: headers
        });
    }
    createVM({ name, vmType, jupyterPassword, region }) {
        const uid = JSON.parse(localStorage.getItem('user_uid'));
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .append('uid', uid)
            .append('name', name)
            .append('machine_type', vmType)
            .append('password', jupyterPassword)
            .append('region', region);
        return this.http.get(baseUrl + '/createVirtualMachine', { params });
    }
    addVMIdToFirebase({ instance_id, ip }, name) {
        const data = {
            instance_id,
            ip,
        };
        const userRef = this.afs.collection(`users/${JSON.parse(localStorage.getItem('user_uid'))}/VMs`).doc(name);
        // doc(`users/${JSON.parse(localStorage.getItem('user_uid'))}/${name}`);
        return userRef.set(data, { merge: true });
    }
    getRegionsAndMachineTypes() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Access-Control-Allow-Origin', "*");
        return this.http.get(`https://us-central1-jupyter-run-dev.cloudfunctions.net/RegionsAndMachineTypes?uid=${JSON.parse(localStorage.getItem('user_uid'))}`, {
            headers: headers
        });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map
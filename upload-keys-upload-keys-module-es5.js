function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-keys-upload-keys-module"], {
  /***/
  "./node_modules/ionic4-tooltips/__ivy_ngcc__/fesm2015/ionic4-tooltips.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/ionic4-tooltips/__ivy_ngcc__/fesm2015/ionic4-tooltips.js ***!
    \*******************************************************************************/

  /*! exports provided: TooltipBox, TooltipController, TooltipDirective, TooltipsModule */

  /***/
  function node_modulesIonic4Tooltips__ivy_ngcc__Fesm2015Ionic4TooltipsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipBox", function () {
      return TooltipBox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipController", function () {
      return TooltipController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () {
      return TooltipDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipsModule", function () {
      return TooltipsModule;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function TooltipBox_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.tooltipHtml, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function TooltipBox_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 4);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r2.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    var TooltipBox = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} rnd
       */
      function TooltipBox(elementRef, rnd) {
        var _this = this;

        _classCallCheck(this, TooltipBox);

        this.elementRef = elementRef;
        this.rnd = rnd;
        this.fadeState = 'invisible';
        this.role = 'status';
        this.tooltipStyles = {};
        this.init = new Promise(
        /**
        * @param {?} resolve
        * @return {?}
        */
        function (resolve) {
          _this.initResolve = resolve;
        });
      }
      /**
       * @param {?} side
       * @return {?}
       */


      _createClass(TooltipBox, [{
        key: "getNativeElement",

        /**
         * @return {?}
         */
        value: function getNativeElement() {
          return this.elementRef.nativeElement;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initResolve();
        }
      }, {
        key: "arrow",
        set: function set(side) {
          this.rnd.setAttribute(this.getNativeElement(), 'class', 'has-arrow ' + 'arrow-' + side);
        }
        /**
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "posTop",
        set: function set(val) {
          this.rnd.setStyle(this.getNativeElement(), 'top', val + 'px');
        }
        /**
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "posLeft",
        set: function set(val) {
          this.rnd.setStyle(this.getNativeElement(), 'left', val + 'px');
        }
      }]);

      return TooltipBox;
    }();

    TooltipBox.ɵfac = function TooltipBox_Factory(t) {
      return new (t || TooltipBox)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
    };

    TooltipBox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TooltipBox,
      selectors: [["tooltip-box"]],
      hostVars: 1,
      hostBindings: function TooltipBox_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵupdateSyntheticHostBinding"]("@fade", ctx.fadeState);
        }
      },
      inputs: {
        role: "role",
        tooltipStyles: "tooltipStyles",
        arrow: "arrow",
        posTop: "posTop",
        posLeft: "posLeft",
        text: "text",
        tooltipHtml: "tooltipHtml"
      },
      decls: 4,
      vars: 4,
      consts: [[1, "tooltip-box", 3, "ngStyle"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], ["txt", ""], [3, "innerHTML"], [3, "innerHtml"]],
      template: function TooltipBox_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TooltipBox_div_1_Template, 1, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TooltipBox_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.tooltipStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-role", ctx.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tooltipHtml)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["[_nghost-%COMP%]{background-color:rgba(0,0,0,.8);color:#fff;display:inline-block;position:fixed;padding:15px 25px;font-size:15px;z-index:3}.has-arrow[_nghost-%COMP%]:before{content:\"\";border:5px solid transparent;position:absolute;width:0;height:0}.has-arrow.arrow-top[_nghost-%COMP%]:before{border-bottom:5px solid rgba(0,0,0,.8);top:-10px}.has-arrow.arrow-left[_nghost-%COMP%]:before{border-right:5px solid rgba(0,0,0,.8);left:-10px}.has-arrow.arrow-right[_nghost-%COMP%]:before{border-left:5px solid rgba(0,0,0,.8);right:-10px}.has-arrow.arrow-bottom[_nghost-%COMP%]:before{border-top:5px solid rgba(0,0,0,.8);bottom:-10px}"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('invisible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('visible <=> invisible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms linear'))])]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    TooltipBox.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    TooltipBox.propDecorators = {
      fadeState: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
        args: ['@fade']
      }],
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tooltipHtml: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tooltipStyles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      arrow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      posTop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      posLeft: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TooltipBox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'tooltip-box',
          template: "<div class=\"tooltip-box\"\n     [attr.aria-role]=\"role\"\n     [ngStyle]=\"tooltipStyles\">\n  <div *ngIf=\"tooltipHtml; else txt\" [innerHTML]=\"tooltipHtml\"></div>\n\n  <ng-template #txt><div [innerHtml]=\"text\"></div></ng-template>\n</div>\n",
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('invisible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('visible <=> invisible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms linear'))])],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [":host{background-color:rgba(0,0,0,.8);color:#fff;display:inline-block;position:fixed;padding:15px 25px;font-size:15px;z-index:3}:host.has-arrow:before{content:\"\";border:5px solid transparent;position:absolute;width:0;height:0}:host.has-arrow.arrow-top:before{border-bottom:5px solid rgba(0,0,0,.8);top:-10px}:host.has-arrow.arrow-left:before{border-right:5px solid rgba(0,0,0,.8);left:-10px}:host.has-arrow.arrow-right:before{border-left:5px solid rgba(0,0,0,.8);right:-10px}:host.has-arrow.arrow-bottom:before{border-top:5px solid rgba(0,0,0,.8);bottom:-10px}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      }, {
        fadeState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['@fade']
        }],
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipStyles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        posTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        posLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipHtml: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TooltipController = /*#__PURE__*/function () {
      function TooltipController() {
        _classCallCheck(this, TooltipController);

        this.allowMultiple = true;
        this.activeTooltips = [];
      }
      /**
       * @param {?} instance
       * @return {?}
       */


      _createClass(TooltipController, [{
        key: "addTooltip",
        value: function addTooltip(instance) {
          if (instance.hideOthers || !this.allowMultiple && this.activeTooltips.length > 0) {
            this.hideAll();
          }

          this.activeTooltips.push(instance);
        }
        /**
         * @param {?} instance
         * @return {?}
         */

      }, {
        key: "removeTooltip",
        value: function removeTooltip(instance) {
          this.activeTooltips.splice(this.activeTooltips.indexOf(instance), 1);
        }
        /**
         * @return {?}
         */

      }, {
        key: "hideAll",
        value: function hideAll() {
          this.activeTooltips.forEach(
          /**
          * @param {?} tooltip
          * @return {?}
          */
          function (tooltip) {
            tooltip.removeTooltip();
          });
        }
      }]);

      return TooltipController;
    }();

    TooltipController.ɵfac = function TooltipController_Factory(t) {
      return new (t || TooltipController)();
    };

    TooltipController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TooltipController,
      factory: TooltipController.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    TooltipController.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function TooltipController_Factory() {
        return new TooltipController();
      },
      token: TooltipController,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TooltipController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {string} */


    var TooltipEvent = {
      CLICK: 'click',
      HOVER: 'hover',
      PRESS: 'press'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TooltipDirective = /*#__PURE__*/function () {
      /**
       * @param {?} el
       * @param {?} appRef
       * @param {?} platform
       * @param {?} cfr
       * @param {?} tooltipCtrl
       * @param {?} vcr
       */
      function TooltipDirective(el, appRef, platform, cfr, tooltipCtrl, vcr) {
        _classCallCheck(this, TooltipDirective);

        this.el = el;
        this.appRef = appRef;
        this.platform = platform;
        this.cfr = cfr;
        this.tooltipCtrl = tooltipCtrl;
        this.vcr = vcr;
        this.debounce = 0;
        this.desktopEvent = TooltipEvent.HOVER;
        this.tooltipStyles = {};
        this.duration = 3000;
        this._active = false;
        this._arrow = false;
        this._canShow = true;
        this._debouncedPromise = null;
        this._navTooltip = false;
      }
      /**
       * @param {?} val
       * @return {?}
       */


      _createClass(TooltipDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (typeof this.event === 'undefined') {
            this.event = this.platform.is('mobile') ? this.mobileEvent : this.desktopEvent;
          } // if the timer hasn't expired or active is true when the component gets destroyed, the tooltip will remain in the DOM
          // this removes it


          this.removeTooltip();
        }
        /**
         * Show the tooltip immediately after initiating view if set to
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this._active) {
            this.trigger();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._tooltipElement && typeof this._tooltipElement.destroy === 'function') {
            this._tooltipElement.destroy();
          }
        }
        /**
         * Set the canShow property
         * Ensure that tooltip is shown only if the tooltip string is not falsey
         * @param {?} show
         * @return {?}
         */

      }, {
        key: "trigger",

        /**
         * Handles the click/press event and shows a tooltip.
         * If a tooltip already exists, it will just reset it's timer.
         * @return {?}
         */
        value: function trigger() {
          if (this.canShow) {
            if (this._tooltipElement) {
              this._resetTimer();
            } else {
              this.showTooltip();
            }
          }
        }
        /**
         * Creates a new tooltip component and adjusts it's properties to show properly.
         * @return {?}
         */

      }, {
        key: "showTooltip",
        value: function showTooltip() {
          var _this2 = this;

          this._debouncedPromise = setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this2._debouncedPromise = null;

            _this2._createTooltipComponent();
            /** @type {?} */


            var tooltipComponent = _this2._tooltipElement.instance;
            tooltipComponent.role = _this2.role;
            tooltipComponent.text = _this2.tooltip;
            tooltipComponent.tooltipStyles = _this2.tooltipStyles;
            tooltipComponent.tooltipHtml = _this2.tooltipHtml;
            tooltipComponent.init.then(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var tooltipPosition = _this2._getTooltipPosition();

              tooltipComponent.posLeft = tooltipPosition.left;
              tooltipComponent.posTop = tooltipPosition.top;
              tooltipComponent.fadeState = 'visible';

              if (_this2.arrow) {
                /** @type {?} */
                var arrowPosition;

                if (_this2.positionV === 'top') {
                  arrowPosition = 'bottom';
                } else if (_this2.positionV === 'bottom') {
                  arrowPosition = 'top';
                } else if (_this2.positionH === 'left') {
                  arrowPosition = 'right';
                } else {
                  arrowPosition = 'left';
                }

                tooltipComponent.arrow = arrowPosition;
              }

              if (!_this2._active) {
                _this2._tooltipTimeout = setTimeout(_this2.removeTooltip.bind(_this2), _this2.duration);
              }
            });
          }, this.debounce);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onClick",
        value: function onClick() {
          if (this.event === TooltipEvent.CLICK) {
            this.trigger();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onPress",
        value: function onPress() {
          if (this.event === TooltipEvent.PRESS) {
            this.trigger();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          if (this.event === TooltipEvent.HOVER) {
            this.active = true;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          if (this.event === TooltipEvent.HOVER) {
            this.active = false;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createTooltipComponent",
        value: function _createTooltipComponent() {
          /** @type {?} */
          var componentFactory = this.cfr.resolveComponentFactory(TooltipBox);
          this._tooltipElement = this.vcr.createComponent(componentFactory);
          this.tooltipCtrl.addTooltip(this);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getTooltipPosition",
        value: function _getTooltipPosition() {
          /** @type {?} */
          var tooltipNativeElement = this._tooltipElement.instance.getNativeElement();
          /** @type {?} */


          var el = this.el.nativeElement;
          /** @type {?} */

          var rect = el.getBoundingClientRect();
          /** @type {?} */

          var positionLeft;
          /** @type {?} */

          var positionTop;
          /** @type {?} */

          var spacing = 10;

          if (this.navTooltip) {
            this.positionV = 'bottom';
            this.arrow = false;
            spacing = 20;
          }

          if (this.positionH === 'right') {
            positionLeft = rect.right + spacing;
          } else if (this.positionH === 'left') {
            positionLeft = rect.left - spacing - tooltipNativeElement.offsetWidth; // -79, 19
          } else if (this.navTooltip) {
            positionLeft = rect.left + el.offsetWidth / 2;
          } else {
            positionLeft = rect.left;
          }

          if (this.positionV === 'top') {
            positionTop = rect.top - spacing - tooltipNativeElement.offsetHeight;
          } else if (this.positionV === 'bottom') {
            positionTop = rect.bottom + spacing;
          } else {
            positionTop = rect.top + el.offsetHeight / 2 - tooltipNativeElement.offsetHeight / 2;
          }

          this.topOffset++;

          if (this.topOffset) {
            positionTop += +this.topOffset;
          }

          this.leftOffset++;

          if (this.leftOffset) {
            positionLeft += +this.leftOffset;
          }

          if (positionLeft + tooltipNativeElement.offsetWidth + spacing > this.platform.width()) {
            positionLeft = this.platform.width() - tooltipNativeElement.offsetWidth - spacing;
          } else if (positionLeft + tooltipNativeElement.offsetWidth - spacing < 0) {
            positionLeft = spacing;
          }

          if (positionTop + tooltipNativeElement.offsetHeight + spacing > this.platform.height()) {
            positionTop = this.platform.height() - tooltipNativeElement.offsetHeight - spacing;
          } else if (positionTop + tooltipNativeElement.offsetHeight - spacing < 0) {
            positionTop = spacing;
          }

          return {
            left: positionLeft,
            top: positionTop
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "removeTooltip",
        value: function removeTooltip() {
          var _this3 = this;

          if (this._debouncedPromise) {
            clearTimeout(this._debouncedPromise);
            this._debouncedPromise = null;
          }

          if (!this._tooltipElement) {
            this._tooltipElement = undefined;
            this._tooltipTimeout = undefined;
            return;
          }

          this._tooltipElement.instance.fadeState = 'invisible';
          this.canShow = false; // wait for animation to finish then clear everything out

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            if (_this3._tooltipElement && typeof _this3._tooltipElement.destroy === 'function') {
              _this3._tooltipElement.destroy();
            }

            _this3.tooltipCtrl.removeTooltip(_this3);

            _this3._tooltipElement = _this3._tooltipTimeout = undefined;
            _this3.canShow = true;
          }, 300);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_resetTimer",
        value: function _resetTimer() {
          var _this4 = this;

          clearTimeout(this._tooltipTimeout);
          this._tooltipTimeout = setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this4.active = false;
          }, this.duration);
        }
      }, {
        key: "navTooltip",
        set: function set(val) {
          this._navTooltip = typeof val !== 'boolean' || val !== false;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._navTooltip;
        }
        /**
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "arrow",
        set: function set(val) {
          this._arrow = typeof val !== 'boolean' || val !== false;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._arrow;
        }
        /**
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "active",
        set: function set(val) {
          this._active = typeof val !== 'boolean' || val !== false;
          this._active && this.canShow ? this.showTooltip() : this.removeTooltip();
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._active;
        }
      }, {
        key: "canShow",
        set: function set(show) {
          this._canShow = show;
        }
        /**
         * @return {?} TRUE if the tooltip can be shown
         */
        ,
        get: function get() {
          return this._canShow && (typeof this.tooltip === 'string' && this.tooltip !== '' || typeof this.tooltipHtml === 'string' && this.tooltipHtml !== '');
        }
      }]);

      return TooltipDirective;
    }();

    TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
      return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TooltipController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]));
    };

    TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: TooltipDirective,
      selectors: [["", "tooltip", ""]],
      hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TooltipDirective_click_HostBindingHandler() {
            return ctx.onClick();
          })("press", function TooltipDirective_press_HostBindingHandler() {
            return ctx.onPress();
          })("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        debounce: "debounce",
        desktopEvent: "desktopEvent",
        tooltipStyles: "tooltipStyles",
        duration: "duration",
        navTooltip: "navTooltip",
        arrow: "arrow",
        active: "active",
        event: "event",
        positionV: "positionV",
        hideOthers: "hideOthers",
        leftOffset: "leftOffset",
        mobileEvent: "mobileEvent",
        positionH: "positionH",
        role: "role",
        tooltip: "tooltip",
        tooltipHtml: "tooltipHtml",
        topOffset: "topOffset"
      }
    });
    /** @nocollapse */

    TooltipDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: TooltipController
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    TooltipDirective.propDecorators = {
      debounce: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      desktopEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      hideOthers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      leftOffset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      mobileEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      positionV: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      positionH: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tooltip: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tooltipHtml: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tooltipStyles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      topOffset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      navTooltip: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      arrow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      duration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['click']
      }],
      onPress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['press']
      }],
      onMouseEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['mouseenter']
      }],
      onMouseLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['mouseleave']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[tooltip]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: TooltipController
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }];
      }, {
        debounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        desktopEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipStyles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        navTooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click']
        }],
        onPress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['press']
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseleave']
        }],
        positionV: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hideOthers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        leftOffset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mobileEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        positionH: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipHtml: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        topOffset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TooltipsModule = /*#__PURE__*/function () {
      function TooltipsModule() {
        _classCallCheck(this, TooltipsModule);
      }

      _createClass(TooltipsModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: TooltipsModule,
            providers: [TooltipController]
          };
        }
      }]);

      return TooltipsModule;
    }();

    TooltipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TooltipsModule
    });
    TooltipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TooltipsModule_Factory(t) {
        return new (t || TooltipsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TooltipsModule, {
        declarations: function declarations() {
          return [TooltipDirective, TooltipBox];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
        },
        exports: function exports() {
          return [TooltipDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TooltipsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [TooltipDirective, TooltipBox],
          entryComponents: [TooltipBox],
          exports: [TooltipDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ionic4-tooltips.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/upload-keys/upload-keys.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/upload-keys/upload-keys.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeUploadKeysUploadKeysPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col offset-md=\"2\" size-md=\"8\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>GCP Service Account\n              <ion-icon name=\"checkmark-circle\" [ngClass]=\"uploadedKeys ? 'green' : 'red'\">\n              </ion-icon>\n\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p class=\"ion-margin-vertical\">\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ipsum esse voluptatum mollitia amet\n              dolores\n              quidem omnis repellendus dolorum, ratione odio consectetur saepe facere, harum tempore atque\n              necessitatibus\n            </p>\n\n\n\n          </ion-card-content>\n\n          <form (ngSubmit)=\"onSubmit()\">\n            <ion-item class=\"ion-no-padding ion-no-margin ion-margin-horizontal\">\n              <input type=\"file\" class=\"ion-no-padding ion-padding-vertical\" accept=\".json\" id=\"upload\" #jsonFile />\n              <ion-button slot=\"end\" class=\"ion-no-padding ion-no-margin\" block color=\"primary\" type=\"submit\">\n                Upload\n              </ion-button>\n            </ion-item>\n\n          </form>\n          <!-- <ion-item class=\"ion-no-margin ion-no-padding\"> -->\n\n          <!-- </ion-item> -->\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/home/upload-keys/upload-keys-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/home/upload-keys/upload-keys-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: UploadKeysPageRoutingModule */

  /***/
  function srcAppPagesHomeUploadKeysUploadKeysRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadKeysPageRoutingModule", function () {
      return UploadKeysPageRoutingModule;
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


    var _upload_keys_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./upload-keys.page */
    "./src/app/pages/home/upload-keys/upload-keys.page.ts");

    var routes = [{
      path: '',
      component: _upload_keys_page__WEBPACK_IMPORTED_MODULE_3__["UploadKeysPage"]
    }];

    var UploadKeysPageRoutingModule = function UploadKeysPageRoutingModule() {
      _classCallCheck(this, UploadKeysPageRoutingModule);
    };

    UploadKeysPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UploadKeysPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/upload-keys/upload-keys.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/home/upload-keys/upload-keys.module.ts ***!
    \**************************************************************/

  /*! exports provided: UploadKeysPageModule */

  /***/
  function srcAppPagesHomeUploadKeysUploadKeysModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadKeysPageModule", function () {
      return UploadKeysPageModule;
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


    var _upload_keys_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./upload-keys-routing.module */
    "./src/app/pages/home/upload-keys/upload-keys-routing.module.ts");
    /* harmony import */


    var _upload_keys_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./upload-keys.page */
    "./src/app/pages/home/upload-keys/upload-keys.page.ts");
    /* harmony import */


    var src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/header/header.module */
    "./src/app/components/header/header.module.ts");
    /* harmony import */


    var ionic4_tooltips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic4-tooltips */
    "./node_modules/ionic4-tooltips/__ivy_ngcc__/fesm2015/ionic4-tooltips.js");

    var UploadKeysPageModule = function UploadKeysPageModule() {
      _classCallCheck(this, UploadKeysPageModule);
    };

    UploadKeysPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _upload_keys_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadKeysPageRoutingModule"], src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], ionic4_tooltips__WEBPACK_IMPORTED_MODULE_8__["TooltipsModule"].forRoot()],
      declarations: [_upload_keys_page__WEBPACK_IMPORTED_MODULE_6__["UploadKeysPage"]]
    })], UploadKeysPageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/upload-keys/upload-keys.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/home/upload-keys/upload-keys.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeUploadKeysUploadKeysPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  box-shadow: none;\n}\n\nion-card-title {\n  font-size: 3em;\n  display: grid;\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n  align-items: center;\n  grid-gap: 3%;\n}\n\np {\n  font-size: 1.2em;\n}\n\nion-button {\n  width: 30%;\n  margin: auto;\n}\n\n.uploadedKeys {\n  font-size: 2em;\n  color: var(--ion-color-success);\n}\n\n.green {\n  color: var(--ion-color-success);\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmRhcmFtZXQvRG9jdW1lbnRzL2p1cHl0ZXItcnVuL3NyYy9hcHAvcGFnZXMvaG9tZS91cGxvYWQta2V5cy91cGxvYWQta2V5cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvdXBsb2FkLWtleXMvdXBsb2FkLWtleXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsK0JBQUE7QUNBSjs7QURHQTtFQUNJLCtCQUFBO0FDQUo7O0FER0E7RUFDSSw4QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS91cGxvYWQta2V5cy91cGxvYWQta2V5cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWdhcDogMyU7XG5cbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi51cGxvYWRlZEtleXMge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLnJlZCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufSIsImlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDNlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiAzJTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi51cGxvYWRlZEtleXMge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/home/upload-keys/upload-keys.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/home/upload-keys/upload-keys.page.ts ***!
    \************************************************************/

  /*! exports provided: UploadKeysPage */

  /***/
  function srcAppPagesHomeUploadKeysUploadKeysPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadKeysPage", function () {
      return UploadKeysPage;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var UploadKeysPage = /*#__PURE__*/function () {
      function UploadKeysPage(auth, afs) {
        _classCallCheck(this, UploadKeysPage);

        this.auth = auth;
        this.afs = afs;
        this.uploadedKeys = false;
        this.itemsCollection = afs.doc("service-accounts/" + String(localStorage.getItem('user_uid'))); // this.items = this.itemsCollection.valueChanges();
      }

      _createClass(UploadKeysPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.auth.isUploadedKeys().subscribe(function (res) {
            console.log(res.payload.data());

            if (res.payload.data()) {
              _this5.uploadedKeys = true;
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log("ngAfterViewInit");
        }
      }, {
        key: "getJSONFromFile",
        value: function getJSONFromFile() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var fileReader, promise;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    fileReader = new FileReader();
                    promise = new Promise(function (resolve, reject) {
                      fileReader.onload = function (e) {
                        resolve(JSON.parse(String(fileReader.result)));
                      };
                    });
                    fileReader.readAsText(this.input.nativeElement.files[0]);
                    return _context.abrupt("return", promise);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          this.getJSONFromFile().then(function (data) {
            console.log(data);

            _this6.auth.updateUserData(data);
          });
        }
      }]);

      return UploadKeysPage;
    }();

    UploadKeysPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('jsonFile')], UploadKeysPage.prototype, "input", void 0);
    UploadKeysPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upload-keys',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./upload-keys.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/upload-keys/upload-keys.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./upload-keys.page.scss */
      "./src/app/pages/home/upload-keys/upload-keys.page.scss"))["default"]]
    })], UploadKeysPage);
    /***/
  }
}]);
//# sourceMappingURL=upload-keys-upload-keys-module-es5.js.map
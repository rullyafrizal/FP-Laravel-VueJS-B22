(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Verification.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Verification.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Verification",
  components: {
    RegenerateOTP: function RegenerateOTP() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/RegenerateOTP.vue */ "./resources/js/components/RegenerateOTP.vue"));
    },
    UpdatePassword: function UpdatePassword() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/UpdatePassword.vue */ "./resources/js/components/UpdatePassword.vue"));
    }
  },
  data: function data() {
    return {
      valid: true,
      otp: null,
      otpRules: [function (v) {
        return /([0-9])+/.test(v) || 'OTP Code must be numeric';
      }, function (v) {
        return v && v.length >= 6 && v.length < 7 || 'Min & Max 6 Characters';
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    currentUser: 'auth/user',
    dialogStatus: 'dialog/status',
    currentComponent: 'dialog/component'
  })), {}, {
    dialog: {
      get: function get() {
        return this.dialogStatus;
      },
      set: function set(value) {
        this.setDialogStatus(value);
      }
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setAlert: 'alert/set',
    setDialogStatus: 'dialog/setStatus',
    setDialogComponent: 'dialog/setComponent',
    setAuth: 'auth/set'
  })), {}, {
    submit: function submit() {
      var _this = this;

      if (this.$refs.form.validate()) {
        var formData = {
          'otp': this.otp
        };
        var url = '/api/auth/verification';
        axios.post(url, formData).then(function (response) {
          var codeResponse = response.data.response_code;

          if (codeResponse == "01") {
            _this.setAlert({
              status: true,
              color: 'error',
              text: response.data.response_message
            });
          } else if (codeResponse == "00") {
            _this.setAlert({
              status: true,
              color: 'primary',
              text: 'Verifikasi Berhasil, silahkan update password anda'
            });

            _this.setDialogComponent('UpdatePassword');

            window.location.reload();
          }
        })["catch"](function (error) {
          var responses = error.response;

          _this.setAlert({
            status: true,
            text: responses.data.message,
            color: 'error'
          });
        });
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Verification.vue?vue&type=template&id=31c5393a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Verification.vue?vue&type=template&id=31c5393a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { dark: "", color: "indigo darken-4" } },
            [_c("v-toolbar-title", [_vm._v("OTP Verification")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "keep-alive",
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: {
                        "max-width": "600px",
                        transition: "dialog-bottom-transition"
                      },
                      model: {
                        value: _vm.dialog,
                        callback: function($$v) {
                          _vm.dialog = $$v
                        },
                        expression: "dialog"
                      }
                    },
                    [
                      _c(_vm.currentComponent, {
                        tag: "component",
                        on: { closed: _vm.setDialogStatus }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-form",
                {
                  ref: "form",
                  attrs: { "lazy-validation": "" },
                  model: {
                    value: _vm.valid,
                    callback: function($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid"
                  }
                },
                [
                  _c("v-text-field", {
                    staticClass: "rounded-md",
                    attrs: {
                      rules: _vm.otpRules,
                      label: "OTP",
                      required: "",
                      "append-icon": "mdi-key",
                      "solo-inverted": ""
                    },
                    model: {
                      value: _vm.otp,
                      callback: function($$v) {
                        _vm.otp = $$v
                      },
                      expression: "otp"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-xs-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "white--text",
                          attrs: {
                            color: "indigo darken-4",
                            disabled: !_vm.valid
                          },
                          on: { click: _vm.submit }
                        },
                        [
                          _vm._v(
                            "\n                        Submit\n                        "
                          ),
                          _c("v-icon", { attrs: { right: "", dark: "" } }, [
                            _vm._v("mdi-lock-open")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "white--text",
                          attrs: { color: "red darken-2" },
                          on: {
                            click: function($event) {
                              return _vm.setDialogComponent("RegenerateOTP")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Regenerate OTP\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Verification.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Verification.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Verification_vue_vue_type_template_id_31c5393a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Verification.vue?vue&type=template&id=31c5393a&scoped=true& */ "./resources/js/views/Verification.vue?vue&type=template&id=31c5393a&scoped=true&");
/* harmony import */ var _Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Verification.vue?vue&type=script&lang=js& */ "./resources/js/views/Verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Verification_vue_vue_type_template_id_31c5393a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Verification_vue_vue_type_template_id_31c5393a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31c5393a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Verification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Verification.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Verification.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Verification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Verification.vue?vue&type=template&id=31c5393a&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/Verification.vue?vue&type=template&id=31c5393a&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_template_id_31c5393a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Verification.vue?vue&type=template&id=31c5393a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Verification.vue?vue&type=template&id=31c5393a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_template_id_31c5393a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_template_id_31c5393a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
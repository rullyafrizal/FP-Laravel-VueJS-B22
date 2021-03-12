(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdatePassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdatePassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UpdatePassword",
  data: function data() {
    return {
      valid: true,
      email: '',
      emailRules: [function (v) {
        return !!v || 'Email is Required';
      }, function (v) {
        return /([a-zA-Z0-9_]{1,})(@)([a-zA-Z0-9_]{2,})+/.test(v) || 'Email must be valid';
      }],
      showPassword: false,
      password: '',
      passwordRules: [function (v) {
        return !!v || 'Password Required';
      }, function (v) {
        return v && v.length >= 6 || 'Min 6 Characters';
      }],
      passwordConfirm: '',
      passwordConfirmRules: [function (v) {
        return !!v || 'Password Required';
      }, function (v) {
        return v && v.length >= 6 || 'Min 6 Characters';
      }]
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setAlert: 'alert/set',
    setDialogStatus: 'dialog/setStatus',
    setDialogComponent: 'dialog/setComponent'
  })), {}, {
    close: function close() {
      this.$emit('closed', false);
    },
    submit: function submit() {
      var _this = this;

      if (this.$refs.form.validate()) {
        var formData = {
          'email': this.email,
          'password': this.password,
          'password_confirmation': this.passwordConfirm
        };
        var url = '/api/auth/update-password';
        axios.post(url, formData).then(function (response) {
          _this.setAlert({
            status: true,
            color: 'primary',
            text: response.data.response_message
          });

          _this.close();

          _this.$router.push({
            name: 'home'
          });

          setTimeout(function () {
            return _this.setDialogComponent('Login');
          }, 2500);
        })["catch"](function (error) {
          var responses = error.response;

          if (responses.status === 422) {
            _this.setAlert({
              status: true,
              text: responses.data.errors.password[0],
              color: 'error'
            });
          } else if (responses.status === 401) {
            _this.setAlert({
              status: true,
              text: responses.data.response_message,
              color: 'error'
            });
          }
        });
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdatePassword.vue?vue&type=template&id=0e8507af&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdatePassword.vue?vue&type=template&id=0e8507af&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "rounded-lg" },
    [
      _c(
        "v-toolbar",
        { attrs: { dark: "", color: "indigo darken-4" } },
        [_c("v-toolbar-title", [_vm._v("Update Password")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
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
                attrs: {
                  rules: _vm.emailRules,
                  label: "Email",
                  required: "",
                  "append-icon": "mdi-email",
                  "solo-inverted": ""
                },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": _vm.showPassword ? "mdi-eye" : "mdi-eye-off",
                  rules: _vm.passwordRules,
                  type: _vm.showPassword ? "text" : "password",
                  label: "Password",
                  hint: "At least 6 characters",
                  counter: "",
                  "solo-inverted": ""
                },
                on: {
                  "click:append": function($event) {
                    _vm.showPassword = !_vm.showPassword
                  }
                },
                model: {
                  value: _vm.password,
                  callback: function($$v) {
                    _vm.password = $$v
                  },
                  expression: "password"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": _vm.showPassword ? "mdi-eye" : "mdi-eye-off",
                  rules: _vm.passwordRules,
                  type: _vm.showPassword ? "text" : "password",
                  label: "Password Confirmation",
                  hint: "At least 6 characters",
                  counter: "",
                  "solo-inverted": ""
                },
                on: {
                  "click:append": function($event) {
                    _vm.showPassword = !_vm.showPassword
                  }
                },
                model: {
                  value: _vm.passwordConfirm,
                  callback: function($$v) {
                    _vm.passwordConfirm = $$v
                  },
                  expression: "passwordConfirm"
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
                      attrs: { color: "indigo darken-4", disabled: !_vm.valid },
                      on: { click: _vm.submit }
                    },
                    [
                      _vm._v(
                        "\n                    Submit\n                    "
                      ),
                      _c("v-icon", { attrs: { right: "", dark: "" } }, [
                        _vm._v("mdi-lock-open")
                      ])
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

/***/ "./resources/js/components/UpdatePassword.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/UpdatePassword.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdatePassword_vue_vue_type_template_id_0e8507af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdatePassword.vue?vue&type=template&id=0e8507af&scoped=true& */ "./resources/js/components/UpdatePassword.vue?vue&type=template&id=0e8507af&scoped=true&");
/* harmony import */ var _UpdatePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdatePassword.vue?vue&type=script&lang=js& */ "./resources/js/components/UpdatePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdatePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdatePassword_vue_vue_type_template_id_0e8507af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdatePassword_vue_vue_type_template_id_0e8507af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0e8507af",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UpdatePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UpdatePassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/UpdatePassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdatePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdatePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UpdatePassword.vue?vue&type=template&id=0e8507af&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/UpdatePassword.vue?vue&type=template&id=0e8507af&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePassword_vue_vue_type_template_id_0e8507af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdatePassword.vue?vue&type=template&id=0e8507af&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdatePassword.vue?vue&type=template&id=0e8507af&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePassword_vue_vue_type_template_id_0e8507af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePassword_vue_vue_type_template_id_0e8507af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
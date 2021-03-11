(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
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
  name: "Profile",
  components: {
    UpdateProfile: function UpdateProfile() {
      return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../components/UpdateProfile.vue */ "./resources/js/components/UpdateProfile.vue"));
    }
  },
  data: function data() {
    return {
      profile: {} //objek profile

    };
  },
  created: function created() {
    this.go();
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
    setDialogComponent: 'dialog/setComponent'
  })), {}, {
    go: function go() {
      var _this = this;

      if (this.currentUser.token.length > 0) {
        var url = '/api/profile/get-profile';
        axios.get(url, {
          headers: {
            'Authorization': "token ".concat(this.currentUser.token)
          }
        }).then(function (response) {
          var data = response.data.data;
          _this.profile = data.profile;
        })["catch"](function (error) {
          var responses = error.responses;
          console.log(responses);
        });
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        {
          staticClass: "pa-2 rounded-lg",
          attrs: { elevation: "2", "tile-outlined": "" }
        },
        [
          _c(
            "v-toolbar",
            { attrs: { dark: "", color: "indigo darken-4" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.$router.go(-1)
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-arrow-left-circle")])],
                1
              ),
              _vm._v(" "),
              _c("v-toolbar-title", [_c("strong", [_vm._v("Profile")])]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.setDialogComponent("UpdateProfile")
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-pencil-outline")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "4", md: "4" } },
                    [
                      _c("v-img", {
                        staticClass: "rounded-circle mx-auto",
                        staticStyle: { "object-fit": "cover" },
                        attrs: {
                          src: _vm.profile.photo,
                          "max-width": "225",
                          "max-height": "225"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "placeholder",
                            fn: function() {
                              return [
                                _c("v-skeleton-loader", {
                                  attrs: { type: "image" }
                                })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6", md: "8" } },
                    [
                      _c("v-simple-table", [
                        _c("tbody", [
                          _c("tr", [
                            _c(
                              "td",
                              [
                                _c("v-icon", [_vm._v("mdi-account")]),
                                _vm._v(" Nama")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.profile.name))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c(
                              "td",
                              [
                                _c("v-icon", [_vm._v("mdi-email")]),
                                _vm._v(" Email")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.profile.email))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c(
                              "td",
                              [
                                _c("v-icon", [_vm._v("mdi-home")]),
                                _vm._v(" Alamat")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.profile.address))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c(
                              "td",
                              [
                                _c("v-icon", [_vm._v("mdi-briefcase")]),
                                _vm._v(" Pekerjaan")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.profile.occupation))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c(
                              "td",
                              [
                                _c("v-icon", [_vm._v("mdi-phone")]),
                                _vm._v(" Telepon")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "blue--text" }, [
                              _vm._v(_vm._s(_vm.profile.phone))
                            ])
                          ])
                        ])
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

/***/ "./resources/js/views/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Profile.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=25b9215a&scoped=true& */ "./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "25b9215a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=25b9215a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateProfile.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdateProfile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UpdateProfile",
  data: function data() {
    return {
      valid: true,
      name: '',
      nameRules: [function (v) {
        return !!v || 'Name Required';
      }, function (v) {
        return v && v.length >= 4 || 'Min 4 Characters';
      }],
      phone: '',
      phoneRules: [function (v) {
        return !!v || 'Phone Required';
      }, function (v) {
        return /([0-9])+/.test(v) || 'Phone must be numeric';
      }, function (v) {
        return v && v.length <= 12 || 'Max 12 Characters';
      }],
      address: '',
      addressRules: [function (v) {
        return !!v || 'Address Required';
      }],
      occupation: '',
      occupationRules: [function (v) {
        return !!v || 'Occupation Required';
      }],
      photo: '',
      photoRules: [function (v) {
        return !v || !v.some(function (file) {
          return file.size > 2e6;
        }) || 'Avatar size should be less than 2 MB!';
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    currentUser: 'auth/user'
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setAlert: 'alert/set'
  })), {}, {
    close: function close() {
      this.$emit('closed', false);
    },
    onChange: function onChange(e) {
      this.photo = e.target.files[0];
      console.log(e.target.files[0]);
    },
    update: function update(e) {
      var _this = this;

      e.preventDefault();

      if (this.$refs.form.validate()) {
        var formData = new FormData();
        formData.append("name", this.name);
        formData.append("address", this.address);
        formData.append("occupation", this.occupation);
        formData.append("phone", this.phone);
        formData.append("photo", this.photo);
        var url = '/api/profile/update-profile';
        axios.post(url, formData, {
          headers: {
            'Authorization': "Bearer ".concat(this.currentUser.token)
          }
        }).then(function (response) {
          var codeResponse = response.data.response_code;

          if (codeResponse === "00") {
            _this.setAlert({
              status: true,
              color: 'primary',
              text: response.data.response_message
            });

            _this.close();

            window.location.reload();
          }
        })["catch"](function (error) {
          var responses = error.response;

          _this.setAlert({
            status: true,
            text: responses.data.message,
            color: 'error'
          });

          console.log(responses.data);
        });
      }
    }
  }),
  created: function created() {
    this.name = this.currentUser.user.name;
    this.address = this.currentUser.user.address;
    this.occupation = this.currentUser.user.occupation;
    this.phone = this.currentUser.user.phone;
    this.photo = this.currentUser.user.photo;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateProfile.vue?vue&type=template&id=915a1f76&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdateProfile.vue?vue&type=template&id=915a1f76&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-card-title",
        [
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              nativeOn: {
                click: function($event) {
                  return _vm.close($event)
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-close-circle")])],
            1
          ),
          _vm._v("\n        Update Profile\n    ")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            {
              ref: "form",
              attrs: { "lazy-validation": "" },
              on: { submit: _vm.update },
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
                  rules: _vm.nameRules,
                  label: "Name",
                  required: "",
                  "append-icon": "mdi-account",
                  "solo-inverted": ""
                },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  rules: _vm.addressRules,
                  label: "Alamat",
                  required: "",
                  "append-icon": "mdi-home",
                  "solo-inverted": ""
                },
                model: {
                  value: _vm.address,
                  callback: function($$v) {
                    _vm.address = $$v
                  },
                  expression: "address"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  rules: _vm.occupationRules,
                  label: "Pekerjaan",
                  required: "",
                  "append-icon": "mdi-briefcase",
                  "solo-inverted": ""
                },
                model: {
                  value: _vm.occupation,
                  callback: function($$v) {
                    _vm.occupation = $$v
                  },
                  expression: "occupation"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  rules: _vm.phoneRules,
                  label: "Nomor Telepon",
                  required: "",
                  "append-icon": "mdi-phone",
                  "solo-inverted": ""
                },
                model: {
                  value: _vm.phone,
                  callback: function($$v) {
                    _vm.phone = $$v
                  },
                  expression: "phone"
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "inputFileUpload" } }, [
                _vm._v("Photo Profile : ")
              ]),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "file",
                  name: "filename",
                  rules: _vm.photoRules,
                  accept: "image/*, application/json",
                  id: "inputFileUpload"
                },
                on: { change: _vm.onChange }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-xs-center" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "white--text mt-3",
                      attrs: {
                        type: "submit",
                        color: "red darken-2",
                        disabled: !_vm.valid
                      }
                    },
                    [_vm._v("\n                    Save\n                ")]
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

/***/ "./resources/js/components/UpdateProfile.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/UpdateProfile.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateProfile_vue_vue_type_template_id_915a1f76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateProfile.vue?vue&type=template&id=915a1f76&scoped=true& */ "./resources/js/components/UpdateProfile.vue?vue&type=template&id=915a1f76&scoped=true&");
/* harmony import */ var _UpdateProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/UpdateProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateProfile_vue_vue_type_template_id_915a1f76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateProfile_vue_vue_type_template_id_915a1f76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "915a1f76",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UpdateProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UpdateProfile.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/UpdateProfile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UpdateProfile.vue?vue&type=template&id=915a1f76&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/UpdateProfile.vue?vue&type=template&id=915a1f76&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_template_id_915a1f76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateProfile.vue?vue&type=template&id=915a1f76&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateProfile.vue?vue&type=template&id=915a1f76&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_template_id_915a1f76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_template_id_915a1f76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
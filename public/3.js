(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CampaignItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "campaign-item",
  props: ['campaign'],
  computed: {
    progress: function progress() {
      return Math.round(this.campaign.collected / this.campaign.required * 100);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CampaignItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/CampaignItem */ "./resources/js/components/CampaignItem.vue");
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
  components: {
    CampaignItem: _components_CampaignItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      campaigns: [],
      blogs: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get('api/campaign/random/3').then(function (response) {
      var data = response.data.data;
      _this.campaigns = data.campaigns;
    })["catch"](function (error) {
      var response = error.response;
      console.log(response);
    });
    axios.get('api/blog/random/2').then(function (response) {
      var data = response.data.data;
      _this.blogs = data.blogs;
    })["catch"](function (error) {
      var response = error.response;
      console.log(error);
    });
  },
  methods: {
    progress: function progress(campaign) {
      return Math.round(campaign.collected / campaign.required * 100);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("v-hover", {
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var hover = ref.hover
          return [
            _c(
              "v-card",
              {
                staticClass: "pa-3 mb-4 mr-5 rounded-lg",
                staticStyle: { "text-decoration": "none" },
                attrs: {
                  to: "/campaign/" + _vm.campaign.id,
                  elevation: hover ? 15 : 2,
                  "max-width": "370"
                }
              },
              [
                _c("v-img", {
                  staticClass: "rounded-lg",
                  attrs: { src: _vm.campaign.image, "max-height": "200px" },
                  scopedSlots: _vm._u(
                    [
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
                    ],
                    null,
                    true
                  )
                }),
                _vm._v(" "),
                _c("v-card-title", { staticClass: "subtitle-1" }, [
                  _c("b", [_vm._v(_vm._s(_vm.campaign.title))])
                ]),
                _vm._v(" "),
                _c(
                  "v-progress-linear",
                  {
                    staticClass: "rounded-pill",
                    attrs: {
                      color: "indigo darken-4",
                      height: "15",
                      value: _vm.progress,
                      striped: ""
                    }
                  },
                  [
                    _c("strong", { staticClass: "white--text" }, [
                      _vm._v(_vm._s(_vm.progress) + "%")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-card-text",
                  [
                    _c("v-icon", [_vm._v("mdi-cash")]),
                    _vm._v("  \n            "),
                    _c("b", [
                      _vm._v(
                        "Rp" +
                          _vm._s(_vm.campaign.required.toLocaleString("id-ID"))
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-container",
        { staticClass: "ma-0 pa-0 mx-auto", attrs: { "grid-list-sm": "" } },
        [
          _c(
            "div",
            { staticClass: "text-right" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "blue--text",
                  attrs: { small: "", text: "", to: "/campaigns" }
                },
                [
                  _vm._v("\n                All Campaigns "),
                  _c("v-icon", [_vm._v("mdi-chevron-right")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            { attrs: { wrap: "" } },
            _vm._l(_vm.campaigns, function(campaign, index) {
              return _c(
                "div",
                { key: "campaign-" + campaign.id },
                [_c("campaign-item", { attrs: { campaign: campaign } })],
                1
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "ma-0 pa-0 mx-auto", attrs: { "grid-list-sm": "" } },
        [
          _c(
            "div",
            { staticClass: "text-right" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "blue--text",
                  attrs: { small: "", text: "", to: "/blogs" }
                },
                [
                  _vm._v("\n                All Blogs "),
                  _c("v-icon", [_vm._v("mdi-chevron-right")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            { attrs: { wrap: "" } },
            [
              _c(
                "v-carousel",
                {
                  staticClass: "rounded-xl",
                  attrs: { "hide-delimiters": "", height: "250px" }
                },
                _vm._l(_vm.blogs, function(blog, i) {
                  return _c(
                    "v-carousel-item",
                    { key: "blog-" + blog.id },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "fill-height",
                          attrs: { src: blog.image }
                        },
                        [
                          _c(
                            "v-container",
                            {
                              attrs: {
                                "fill-height": "",
                                fluid: "",
                                "pa-0": "",
                                "ma-0": ""
                              }
                            },
                            [
                              _c(
                                "v-layout",
                                {
                                  attrs: { "fill-height": "", "align-end": "" }
                                },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "", "mx-2": "" } },
                                    [
                                      _c("span", {
                                        staticClass: "headline white--text",
                                        domProps: {
                                          textContent: _vm._s(blog.title)
                                        }
                                      })
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
                }),
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

/***/ "./resources/js/components/CampaignItem.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/CampaignItem.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true& */ "./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true&");
/* harmony import */ var _CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CampaignItem.vue?vue&type=script&lang=js& */ "./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c3482ae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CampaignItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/CampaignItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63cd6604",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
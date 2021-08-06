"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_MarcasView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AgregarMarcaModal",
  data: function data() {
    return {
      loading: false,
      dialog: false,
      marca: {}
    };
  },
  methods: {
    agregarMarca: function agregarMarca() {
      var _this = this;

      this.loading = true;

      if (this.marca.id) {
        //Update
        this.$http.put("marcas/".concat(this.marca.id), this.marca).then(function (response) {
          _this.loading = false;

          _this.$emit('reload');

          _this.close();
        })["catch"](function (error) {
          alert(error.response.data.message);
          _this.loading = false;
        });
      } else {
        //Insert
        this.$http.post("marcas", this.marca).then(function (response) {
          _this.loading = false;

          _this.$emit('reload');

          _this.close();
        })["catch"](function (error) {
          alert(error.response.data.message);
          _this.loading = false;
        });
      }
    },
    close: function close() {
      this.marca = {};
      this.dialog = false;
    },
    open: function open() {
      var marca = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.marca = marca;
      this.dialog = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MarcasView.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MarcasView.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Modals_AgregarMarcaModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Modals/AgregarMarcaModal */ "./resources/js/components/Modals/AgregarMarcaModal.vue");
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Marcas",
  components: {
    AgregarMarcaModal: _components_Modals_AgregarMarcaModal__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      search: '',
      pageCount: 0,
      pagination: {
        page: 1,
        itemsPerPage: 10,
        sortBy: [],
        sortDesc: [],
        groupBy: [],
        groupDesc: [],
        multiSort: false,
        mustSort: false
      },
      loading: false,
      headers: [{
        text: 'Nombre',
        value: 'nombre',
        sortable: false,
        width: '70%'
      }, {
        text: 'Referencia',
        value: 'referencia'
      }, {
        text: 'Opciones',
        value: 'opciones'
      }],
      marcas: []
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.loading = true;
      var search = this.search ? this.search : '';
      this.$http.get("/marcas?filter[search]=".concat(search, "&per_page=").concat(this.pagination.itemsPerPage, "&page=").concat(this.pagination.page)).then(function (result) {
        _this.marcas = result.data.data;
        _this.pageCount = result.data.total;
        _this.loading = false;
      })["catch"](function (error) {
        alert(error.response.data.message);
        _this.loading = false;
      });
    },
    borrarMarca: function borrarMarca(id) {
      var _this2 = this;

      this.loading = true;
      var search = this.search ? this.search : '';
      this.$http["delete"]("/marcas/".concat(id)).then(function (result) {
        _this2.getData();

        _this2.loading = false;
      })["catch"](function (error) {
        alert(error.response.data.message);
        _this2.loading = false;
      });
    },
    clearSearch: function clearSearch() {
      this.search = '';
      this.getData();
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./resources/js/components/Modals/AgregarMarcaModal.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Modals/AgregarMarcaModal.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AgregarMarcaModal_vue_vue_type_template_id_0d8d801c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgregarMarcaModal.vue?vue&type=template&id=0d8d801c&scoped=true& */ "./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=template&id=0d8d801c&scoped=true&");
/* harmony import */ var _AgregarMarcaModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgregarMarcaModal.vue?vue&type=script&lang=js& */ "./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AgregarMarcaModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AgregarMarcaModal_vue_vue_type_template_id_0d8d801c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AgregarMarcaModal_vue_vue_type_template_id_0d8d801c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0d8d801c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Modals/AgregarMarcaModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/MarcasView.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/MarcasView.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MarcasView_vue_vue_type_template_id_285e515b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarcasView.vue?vue&type=template&id=285e515b&scoped=true& */ "./resources/js/views/MarcasView.vue?vue&type=template&id=285e515b&scoped=true&");
/* harmony import */ var _MarcasView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarcasView.vue?vue&type=script&lang=js& */ "./resources/js/views/MarcasView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _MarcasView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MarcasView_vue_vue_type_template_id_285e515b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MarcasView_vue_vue_type_template_id_285e515b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "285e515b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MarcasView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarMarcaModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgregarMarcaModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarMarcaModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/MarcasView.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/MarcasView.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MarcasView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MarcasView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=template&id=0d8d801c&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=template&id=0d8d801c&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarMarcaModal_vue_vue_type_template_id_0d8d801c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarMarcaModal_vue_vue_type_template_id_0d8d801c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarMarcaModal_vue_vue_type_template_id_0d8d801c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgregarMarcaModal.vue?vue&type=template&id=0d8d801c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=template&id=0d8d801c&scoped=true&");


/***/ }),

/***/ "./resources/js/views/MarcasView.vue?vue&type=template&id=285e515b&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/MarcasView.vue?vue&type=template&id=285e515b&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasView_vue_vue_type_template_id_285e515b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasView_vue_vue_type_template_id_285e515b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasView_vue_vue_type_template_id_285e515b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MarcasView.vue?vue&type=template&id=285e515b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MarcasView.vue?vue&type=template&id=285e515b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=template&id=0d8d801c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarMarcaModal.vue?vue&type=template&id=0d8d801c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "960" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-form",
        [
          _c("ValidatorObserver", {
            ref: "obs",
            staticStyle: { width: "100%" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var invalid = ref.invalid
                  return [
                    _c(
                      "v-card",
                      [
                        _c(
                          "v-card-title",
                          { staticClass: "headline text-sm-left" },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm.marca && _vm.marca.id
                                    ? "Editar "
                                    : "Agregar"
                                ) +
                                " Marca\n                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", md: "6" } },
                                      [
                                        _c("Validator", {
                                          attrs: {
                                            rules: "required",
                                            name: "Nombre",
                                            immediate: true
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "Nombre",
                                                        name: "Nombre",
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value: _vm.marca.nombre,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.marca,
                                                            "nombre",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "marca.nombre"
                                                      }
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", md: "6" } },
                                      [
                                        _c("Validator", {
                                          attrs: {
                                            rules: "required",
                                            name: "Referencia",
                                            immediate: true
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "Referencia",
                                                        name: "Referencia",
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.marca.referencia,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.marca,
                                                            "referencia",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "marca.referencia"
                                                      }
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
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
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card-actions",
                          [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  color: "red darken-1",
                                  loading: _vm.loading,
                                  text: ""
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.close()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        Cancelar\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  color: "green darken-1",
                                  loading: _vm.loading,
                                  disabled: _vm.loading || invalid,
                                  text: ""
                                },
                                on: { click: _vm.agregarMarca }
                              },
                              [
                                _vm._v(
                                  "\n                        Agregar\n                    "
                                )
                              ]
                            )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MarcasView.vue?vue&type=template&id=285e515b&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MarcasView.vue?vue&type=template&id=285e515b&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-layout",
        [
          _c("h1", [_vm._v("Marcas")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mr-1",
              attrs: { color: "success" },
              on: {
                click: function($event) {
                  return _vm.$refs.agregarMarca.open()
                }
              }
            },
            [
              _vm._v("\n            Agregar\n            "),
              _c("v-icon", { attrs: { right: "", dark: "" } }, [
                _vm._v("\n                mdi-plus\n            ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mr-1",
              attrs: { color: "warning" },
              on: { click: _vm.getData }
            },
            [
              _vm._v("\n            Refrescar\n            "),
              _c("v-icon", { attrs: { right: "", dark: "" } }, [
                _vm._v("\n                mdi-reload\n            ")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.marcas,
          options: _vm.pagination,
          loading: _vm.loading,
          "server-items-length": _vm.pageCount,
          "item-key": "nombre"
        },
        on: {
          "update:options": function($event) {
            _vm.pagination = $event
          },
          "update:page": _vm.getData,
          "update:items-per-page": _vm.getData
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c("v-text-field", {
                  staticClass: "mx-4",
                  attrs: {
                    label: "Buscar...",
                    "single-line": "",
                    clearable: ""
                  },
                  on: {
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.getData.apply(null, arguments)
                    },
                    "click:clear": _vm.clearSearch
                  },
                  model: {
                    value: _vm.search,
                    callback: function($$v) {
                      _vm.search = $$v
                    },
                    expression: "search"
                  }
                })
              ]
            },
            proxy: true
          },
          {
            key: "item.opciones",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-btn",
                  {
                    attrs: { fab: "", icon: "" },
                    on: {
                      click: function($event) {
                        return _vm.$refs.agregarMarca.open(item)
                      }
                    }
                  },
                  [
                    _c("v-icon", { attrs: { color: "success" } }, [
                      _vm._v("mdi-pencil")
                    ])
                  ],
                  1
                ),
                _c(
                  "v-btn",
                  {
                    attrs: { fab: "", icon: "" },
                    on: {
                      click: function($event) {
                        return _vm.borrarMarca(item.id)
                      }
                    }
                  },
                  [
                    _c("v-icon", { attrs: { color: "red" } }, [
                      _vm._v("mdi-delete")
                    ])
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("AgregarMarcaModal", {
        ref: "agregarMarca",
        on: { relaod: _vm.getData }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
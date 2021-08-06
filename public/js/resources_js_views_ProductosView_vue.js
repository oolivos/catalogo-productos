"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_ProductosView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AgregarProductoModal",
  data: function data() {
    return {
      loading: false,
      dialog: false,
      producto: {},
      tipoTallas: ['S', 'M', 'L'],
      date: null,
      menuPicker: null,
      marcas: []
    };
  },
  methods: {
    agregarProducto: function agregarProducto() {
      var _this = this;

      this.loading = true;

      if (this.producto.id) {
        //Update
        this.$http.put("productos/".concat(this.producto.id), this.producto).then(function (response) {
          _this.loading = false;

          _this.$emit('reload');

          _this.close();
        })["catch"](function (error) {
          alert(error.response.data.message);
          _this.loading = false;
        });
      } else {
        //Insert
        this.$http.post("productos", this.producto).then(function (response) {
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
      this.producto = {};
      this.dialog = false;
    },
    open: function open() {
      var producto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.producto = producto;
      this.dialog = true;
    },
    complementos: function complementos() {
      var _this2 = this;

      this.$http.get('complementos/marcas').then(function (_ref) {
        var data = _ref.data;
        _this2.marcas = data;
      })["catch"](function (error) {
        alert(error.response.data.message);
      });
    }
  },
  mounted: function mounted() {
    this.complementos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductosView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductosView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Modals_AgregarProductoModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Modals/AgregarProductoModal */ "./resources/js/components/Modals/AgregarProductoModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Productos",
  components: {
    AgregarProductoModal: _components_Modals_AgregarProductoModal__WEBPACK_IMPORTED_MODULE_0__.default
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
        sortable: false
      }, {
        text: 'Talla',
        value: 'talla'
      }, {
        text: 'Marca',
        value: 'marca.nombre'
      }, {
        text: 'Cantidad',
        value: 'cantidad_inventario'
      }, {
        text: 'F Embarque',
        value: 'fecha_embarque'
      }, {
        text: 'Observaciones',
        value: 'observaciones'
      }, {
        text: 'Opciones',
        value: 'opciones'
      }],
      productos: []
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.loading = true;
      var search = this.search ? this.search : '';
      this.$http.get("/productos?filter[search]=".concat(search, "&per_page=").concat(this.pagination.itemsPerPage, "&page=").concat(this.pagination.page)).then(function (result) {
        _this.productos = result.data.data;
        _this.pageCount = result.data.total;
        _this.loading = false;
      })["catch"](function (error) {
        alert(error.response.data.message);
        _this.loading = false;
      });
    },
    borrarProducto: function borrarProducto(id) {
      var _this2 = this;

      this.loading = true;
      var search = this.search ? this.search : '';
      this.$http["delete"]("/productos/".concat(id)).then(function (result) {
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

/***/ "./resources/js/components/Modals/AgregarProductoModal.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Modals/AgregarProductoModal.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AgregarProductoModal_vue_vue_type_template_id_f07e3ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgregarProductoModal.vue?vue&type=template&id=f07e3ec8&scoped=true& */ "./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=template&id=f07e3ec8&scoped=true&");
/* harmony import */ var _AgregarProductoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgregarProductoModal.vue?vue&type=script&lang=js& */ "./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AgregarProductoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AgregarProductoModal_vue_vue_type_template_id_f07e3ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AgregarProductoModal_vue_vue_type_template_id_f07e3ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f07e3ec8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Modals/AgregarProductoModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/ProductosView.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/ProductosView.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductosView_vue_vue_type_template_id_cf70cc6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductosView.vue?vue&type=template&id=cf70cc6e&scoped=true& */ "./resources/js/views/ProductosView.vue?vue&type=template&id=cf70cc6e&scoped=true&");
/* harmony import */ var _ProductosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductosView.vue?vue&type=script&lang=js& */ "./resources/js/views/ProductosView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductosView_vue_vue_type_template_id_cf70cc6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductosView_vue_vue_type_template_id_cf70cc6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cf70cc6e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ProductosView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProductoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgregarProductoModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProductoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/ProductosView.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/ProductosView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductosView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductosView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=template&id=f07e3ec8&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=template&id=f07e3ec8&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProductoModal_vue_vue_type_template_id_f07e3ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProductoModal_vue_vue_type_template_id_f07e3ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProductoModal_vue_vue_type_template_id_f07e3ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgregarProductoModal.vue?vue&type=template&id=f07e3ec8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=template&id=f07e3ec8&scoped=true&");


/***/ }),

/***/ "./resources/js/views/ProductosView.vue?vue&type=template&id=cf70cc6e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/ProductosView.vue?vue&type=template&id=cf70cc6e&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosView_vue_vue_type_template_id_cf70cc6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosView_vue_vue_type_template_id_cf70cc6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosView_vue_vue_type_template_id_cf70cc6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductosView.vue?vue&type=template&id=cf70cc6e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductosView.vue?vue&type=template&id=cf70cc6e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=template&id=f07e3ec8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Modals/AgregarProductoModal.vue?vue&type=template&id=f07e3ec8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
                                  _vm.producto && _vm.producto.id
                                    ? "Editar "
                                    : "Agregar"
                                ) +
                                " Producto\n                "
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
                                                        value:
                                                          _vm.producto.nombre,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.producto,
                                                            "nombre",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "producto.nombre"
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
                                            name: "Marca",
                                            immediate: true
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-select", {
                                                      attrs: {
                                                        label: "Marca",
                                                        name: "Marca",
                                                        items: _vm.marcas,
                                                        "item-text": "nombre",
                                                        "item-value": "id",
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.producto.marca_id,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.producto,
                                                            "marca_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "producto.marca_id"
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
                                      { attrs: { cols: "12", md: "4" } },
                                      [
                                        _c("Validator", {
                                          attrs: {
                                            rules: "required",
                                            name: "Talla",
                                            immediate: true
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-select", {
                                                      attrs: {
                                                        label: "Talla",
                                                        name: "Talla",
                                                        items: _vm.tipoTallas,
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.producto.talla,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.producto,
                                                            "talla",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "producto.talla"
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
                                      { attrs: { cols: "12", md: "4" } },
                                      [
                                        _c("Validator", {
                                          attrs: {
                                            rules: "required|numeric",
                                            name: "Cantidad",
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
                                                        label: "Cantidad",
                                                        name: "Cantidad",
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.producto
                                                            .cantidad_inventario,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.producto,
                                                            "cantidad_inventario",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "producto.cantidad_inventario"
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
                                      { attrs: { cols: "12", md: "4" } },
                                      [
                                        _c("Validator", {
                                          attrs: {
                                            rules: "required",
                                            name: "Fecha Embarque",
                                            immediate: true
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c(
                                                      "v-menu",
                                                      {
                                                        attrs: {
                                                          "close-on-content-click": false,
                                                          "nudge-right": 40,
                                                          transition:
                                                            "scale-transition",
                                                          "offset-y": "",
                                                          "min-width": "auto"
                                                        },
                                                        scopedSlots: _vm._u(
                                                          [
                                                            {
                                                              key: "activator",
                                                              fn: function(
                                                                ref
                                                              ) {
                                                                var on = ref.on
                                                                var attrs =
                                                                  ref.attrs
                                                                return [
                                                                  _c(
                                                                    "v-text-field",
                                                                    _vm._g(
                                                                      _vm._b(
                                                                        {
                                                                          attrs: {
                                                                            label:
                                                                              "Fecha Embarque",
                                                                            "prepend-icon":
                                                                              "mdi-calendar",
                                                                            readonly:
                                                                              "",
                                                                            name:
                                                                              "Fecha Embarque",
                                                                            "error-messages": errors
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              _vm
                                                                                .producto
                                                                                .fecha_embarque,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                _vm.producto,
                                                                                "fecha_embarque",
                                                                                $$v
                                                                              )
                                                                            },
                                                                            expression:
                                                                              "producto.fecha_embarque"
                                                                          }
                                                                        },
                                                                        "v-text-field",
                                                                        attrs,
                                                                        false
                                                                      ),
                                                                      on
                                                                    )
                                                                  )
                                                                ]
                                                              }
                                                            }
                                                          ],
                                                          null,
                                                          true
                                                        ),
                                                        model: {
                                                          value: _vm.menuPicker,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.menuPicker = $$v
                                                          },
                                                          expression:
                                                            "menuPicker"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(" "),
                                                        _c("v-date-picker", {
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              _vm.menuPicker = false
                                                            }
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.producto
                                                                .fecha_embarque,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.producto,
                                                                "fecha_embarque",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "producto.fecha_embarque"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
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
                                      { attrs: { cols: "12", md: "12" } },
                                      [
                                        _c("v-textarea", {
                                          attrs: {
                                            label: "Observaciones",
                                            name: "Observaciones"
                                          },
                                          model: {
                                            value: _vm.producto.observaciones,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.producto,
                                                "observaciones",
                                                $$v
                                              )
                                            },
                                            expression: "producto.observaciones"
                                          }
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
                                on: { click: _vm.agregarProducto }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductosView.vue?vue&type=template&id=cf70cc6e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductosView.vue?vue&type=template&id=cf70cc6e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
          _c("h1", [_vm._v("Productos")]),
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
                  return _vm.$refs.agregarProducto.open()
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
          items: _vm.productos,
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
                        return _vm.$refs.agregarProducto.open(item)
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
                        return _vm.borrarProducto(item.id)
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
          },
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
          }
        ])
      }),
      _vm._v(" "),
      _c("AgregarProductoModal", {
        ref: "agregarProducto",
        on: { reload: _vm.getData }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
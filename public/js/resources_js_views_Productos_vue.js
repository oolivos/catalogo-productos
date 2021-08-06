"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Productos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Productos.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductosView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Productos",
  data: function data() {
    return {
      search: '',
      pageCount: 0,
      pagination: {
        page: 1,
        itemsPerPage: 1,
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
        console.log(error);
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

/***/ "./resources/js/views/Productos.vue":
/*!******************************************!*\
  !*** ./resources/js/views/ProductosView.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Productos_vue_vue_type_template_id_f067a8f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductosView.vue?vue&type=template&id=f067a8f8&scoped=true& */ "./resources/js/views/Productos.vue?vue&type=template&id=f067a8f8&scoped=true&");
/* harmony import */ var _Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductosView.vue?vue&type=script&lang=js& */ "./resources/js/views/Productos.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Productos_vue_vue_type_template_id_f067a8f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Productos_vue_vue_type_template_id_f067a8f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f067a8f8",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ProductosView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Productos.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/ProductosView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductosView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Productos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/views/Productos.vue?vue&type=template&id=f067a8f8&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/ProductosView.vue?vue&type=template&id=f067a8f8&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_template_id_f067a8f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_template_id_f067a8f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_template_id_f067a8f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductosView.vue?vue&type=template&id=f067a8f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Productos.vue?vue&type=template&id=f067a8f8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Productos.vue?vue&type=template&id=f067a8f8&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductosView.vue?vue&type=template&id=f067a8f8&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("h1", [_vm._v("Productos")]),
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
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);

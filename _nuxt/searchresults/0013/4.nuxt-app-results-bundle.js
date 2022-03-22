(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/.cache/nuxt/recaptcha.vue?vue&type=template&id=7c456b3b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"g-recaptcha",attrs:{"data-sitekey":_vm.siteKey || _vm.$recaptcha.siteKey,"data-size":_vm.computedDataSize,"data-theme":_vm.dataTheme,"data-badge":_vm.dataBadge,"data-tabindex":_vm.dataTabindex,"data-callback":"recaptchaSuccessCallback","data-expired-callback":"recaptchaExpiredCallback","data-error-callback":"recaptchaErrorCallback"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/.cache/nuxt/recaptcha.vue?vue&type=template&id=7c456b3b&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(84);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/.cache/nuxt/recaptcha.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var recaptchavue_type_script_lang_js_ = ({
  props: {
    siteKey: {
      type: String,
      default: ''
    },
    dataTheme: {
      default: 'light',
      type: String,
      validator: function validator(value) {
        return ['dark', 'light'].includes(value);
      }
    },
    dataSize: {
      default: null,
      type: String,
      validator: function validator(value) {
        return ['compact', 'normal', 'invisible'].includes(value);
      }
    },
    dataBadge: {
      default: 'bottomright',
      type: String,
      validator: function validator(value) {
        return ['bottomright', 'bottomleft', 'inline'].includes(value);
      }
    },
    dataTabindex: {
      default: 0,
      type: Number
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$recaptcha.destroy();
  },
  mounted: function mounted() {
    this.$recaptcha.init();
    this.$recaptcha.on('recaptcha-error', this.onError);
    this.$recaptcha.on('recaptcha-success', this.onSuccess);
    this.$recaptcha.on('recaptcha-expired', this.onExpired);
  },
  computed: {
    computedDataSize: function computedDataSize() {
      return this.dataSize || this.$recaptcha.size || 'normal';
    }
  },
  methods: {
    onError: function onError(message) {
      return this.$emit('error', message);
    },
    onSuccess: function onSuccess(token) {
      return this.$emit('success', token);
    },
    onExpired: function onExpired() {
      return this.$emit('expired');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/recaptcha.vue?vue&type=script&lang=js&
 /* harmony default export */ var nuxt_recaptchavue_type_script_lang_js_ = (recaptchavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/recaptcha.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nuxt_recaptchavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var recaptcha = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
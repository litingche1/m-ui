import { defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, normalizeClass, createVNode, mergeProps, unref, isRef, withCtx, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "index",
  props: {
    dialogVisible: {
      type: Boolean,
      value: false
    },
    isScroll: {
      type: Boolean,
      value: false
    },
    options: {
      type: Array,
      required: true
    },
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    onSuccess: {
      type: Function
    },
    onError: {
      type: Function
    },
    onProgress: {
      type: Function
    },
    onChange: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onExceed: {
      type: Function
    }
  },
  emits: ["choseDialogVisible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    let form = ref();
    let show = ref(props.dialogVisible);
    const handleClose = () => {
      show.value = false;
    };
    watch(() => props.dialogVisible, (val) => {
      show.value = val;
    });
    watch(() => show.value, (val) => {
      emits("choseDialogVisible", val);
    });
    return (_ctx, _cache) => {
      const _component_m_form = resolveComponent("m-form");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock("main", {
        class: normalizeClass({ "m-ui-el-dialog__body": __props.isScroll })
      }, [
        createVNode(_component_el_dialog, mergeProps({
          modelValue: unref(show),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(show) ? show.value = $event : show = $event),
          width: "50%"
        }, _ctx.$attrs, { "before-close": handleClose }), {
          default: withCtx(() => [
            createVNode(_component_m_form, {
              options: __props.options,
              "label-width": "120px",
              ref_key: "form",
              ref: form,
              onOnPreview: __props.onPreview,
              onOnRemove: __props.onRemove,
              onOnSuccess: __props.onSuccess,
              onOnError: __props.onError,
              onOnProgress: __props.onProgress,
              onOnChange: __props.onChange,
              onBeforeUpload: __props.beforeUpload,
              onBeforeRemove: __props.beforeRemove,
              onOnExceed: __props.onExceed
            }, {
              uploadArea: withCtx(() => [
                renderSlot(_ctx.$slots, "uploadArea")
              ]),
              uploadTip: withCtx(() => [
                renderSlot(_ctx.$slots, "uploadTip")
              ]),
              _: 3
            }, 8, ["options", "onOnPreview", "onOnRemove", "onOnSuccess", "onOnError", "onOnProgress", "onOnChange", "onBeforeUpload", "onBeforeRemove", "onOnExceed"])
          ]),
          footer: withCtx(() => [
            renderSlot(_ctx.$slots, "footerCon", { form: unref(form) })
          ]),
          _: 3
        }, 16, ["modelValue"])
      ], 2);
    };
  }
});
var index = {
  install(app) {
    app.component("m-form-dialog", _sfc_main);
  }
};
export { index as default };

import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, renderSlot, createVNode } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "index",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    max: {
      type: Number,
      default: 99
    },
    isDot: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon_bell = resolveComponent("el-icon-bell");
      const _component_el_badge = resolveComponent("el-badge");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createBlock(_component_el_popover, {
        placement: "bottom",
        width: 300,
        trigger: "click"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        reference: withCtx(() => [
          createVNode(_component_el_badge, {
            value: __props.value,
            max: __props.max,
            "is-dot": __props.isDot,
            class: "item"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_icon_bell)
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        _: 3
      });
    };
  }
});
var notice = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1214d1a5"]]);
var index = {
  install(app) {
    app.component("m-notice", notice);
  }
};
export { index as default };

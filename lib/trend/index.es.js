import { defineComponent, useSlots, computed, openBlock, createElementBlock, createElementVNode, normalizeStyle, unref, renderSlot, toDisplayString, createBlock, resolveDynamicComponent } from "vue";
const toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "trend-con-main" };
const _hoisted_2 = {
  key: 1,
  class: "text"
};
const _hoisted_3 = { class: "icons" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "index",
  props: {
    text: {
      type: String,
      default: ""
    },
    upIcon: {
      type: String,
      default: "arrowup"
    },
    downIcon: {
      type: String,
      default: "arrowdown"
    },
    upIconColor: {
      type: String,
      default: "red"
    },
    downIconColor: {
      type: String,
      default: "#58bc58"
    },
    type: {
      type: String,
      default: "up"
    },
    reverseColor: {
      type: Boolean,
      default: false
    },
    upTextColor: {
      type: String,
      default: "#58bc58"
    },
    downTextColor: {
      type: String,
      default: "rgb(0,0,0)"
    }
  },
  setup(__props) {
    const props = __props;
    let slots = useSlots();
    let textColor = computed(() => {
      return props.type === "up" ? props.upTextColor : props.downTextColor;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createElementVNode("article", {
          style: normalizeStyle({ color: unref(textColor) })
        }, [
          unref(slots).default ? renderSlot(_ctx.$slots, "default", {
            key: 0,
            class: "text"
          }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(__props.text), 1))
        ], 4),
        createElementVNode("article", _hoisted_3, [
          __props.type === "up" ? (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.upIcon)}`), {
            key: 0,
            style: normalizeStyle({ color: !__props.reverseColor ? __props.upIconColor : "#52c41a" })
          }, null, 8, ["style"])) : (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.downIcon)}`), {
            key: 1,
            style: normalizeStyle({ color: !__props.reverseColor ? __props.downIconColor : "#e6a23c" })
          }, null, 8, ["style"]))
        ])
      ]);
    };
  }
});
var trend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8899d14e"]]);
var index = {
  install(app) {
    app.component("m-trend", trend);
  }
};
export { index as default };

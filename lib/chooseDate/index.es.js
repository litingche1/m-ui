import { defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, mergeProps, unref, isRef } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "choose-date" };
const _hoisted_2 = { class: "date-l" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F"
    },
    endPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F"
    },
    disableToday: {
      type: Boolean,
      default: true
    }
  },
  emits: ["startDate", "endDate"],
  setup(__props, { emit: emits }) {
    const props = __props;
    let startDate = ref(null);
    let endDate = ref(null);
    let disableStatus = ref(true);
    let dayDate = (time) => {
      if (props.disableToday) {
        return time.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
      }
    };
    let endDateToday = (time) => {
      if (startDate.value) {
        return time.getTime() < startDate.value.getTime() + 1e3 * 60 * 60 * 24;
      }
    };
    watch(startDate, (val) => {
      if (!val) {
        disableStatus.value = true;
      } else {
        disableStatus.value = false;
        emits("startDate", val);
      }
      endDate.value = null;
    });
    watch(endDate, (val) => {
      if (val) {
        emits("endDate", {
          startDate: startDate.value,
          endDate: val
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_el_date_picker = resolveComponent("el-date-picker");
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createElementVNode("section", _hoisted_2, [
          createVNode(_component_el_date_picker, mergeProps({
            modelValue: unref(startDate),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(startDate) ? startDate.value = $event : startDate = $event),
            type: "date",
            placeholder: __props.startPlaceholder,
            "disabled-date": unref(dayDate),
            size: _ctx.size
          }, _ctx.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "disabled-date", "size"])
        ]),
        createElementVNode("section", null, [
          createVNode(_component_el_date_picker, mergeProps({
            modelValue: unref(endDate),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(endDate) ? endDate.value = $event : endDate = $event),
            type: "date",
            placeholder: __props.endPlaceholder,
            size: _ctx.size,
            disabled: unref(disableStatus),
            "disabled-date": unref(endDateToday)
          }, _ctx.$attrs.endOptions), null, 16, ["modelValue", "placeholder", "size", "disabled", "disabled-date"])
        ])
      ]);
    };
  }
});
var chooseDate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c914a3ba"]]);
var index = {
  install(app) {
    app.component("m-choose-date", chooseDate);
  }
};
export { index as default };

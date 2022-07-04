import { defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "choose-time" };
const _hoisted_2 = { class: "start-date" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"
    },
    start: {
      type: String,
      default: "08:30"
    },
    startStep: {
      type: String,
      default: "00:30"
    },
    startEndTime: {
      type: String,
      default: "24:00"
    },
    endPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4"
    },
    endStartTime: {
      type: String,
      default: "08:30"
    },
    endStep: {
      type: String,
      default: "00:30"
    },
    endEndTime: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["startTimeChang", "endTimeChang"],
  setup(__props, { emit: emits }) {
    let endStatus = ref(true);
    let startTime = ref("");
    let endTime = ref("");
    watch(startTime, (val) => {
      if (val === "") {
        endTime.value = "";
        endStatus.value = true;
      } else {
        endStatus.value = false;
        emits("startTimeChang", val);
      }
    });
    watch(endTime, (val) => {
      if (val) {
        emits("endTimeChang", {
          endTime: val,
          startTime: startTime.value
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_el_time_select = resolveComponent("el-time-select");
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createElementVNode("section", _hoisted_2, [
          createVNode(_component_el_time_select, {
            modelValue: unref(startTime),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(startTime) ? startTime.value = $event : startTime = $event),
            "max-time": unref(endTime),
            class: "mr-4",
            placeholder: __props.startPlaceholder,
            start: __props.start,
            step: __props.startStep,
            end: __props.startEndTime
          }, null, 8, ["modelValue", "max-time", "placeholder", "start", "step", "end"])
        ]),
        createElementVNode("section", null, [
          createVNode(_component_el_time_select, {
            modelValue: unref(endTime),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(endTime) ? endTime.value = $event : endTime = $event),
            "min-time": unref(startTime),
            placeholder: __props.endPlaceholder,
            start: __props.endStartTime,
            step: __props.endStep,
            end: __props.endEndTime,
            disabled: unref(endStatus)
          }, null, 8, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
});
var chooseTime = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1c71a48"]]);
var index = {
  install(app) {
    app.component("m-choose-time", chooseTime);
  }
};
export { index as default };

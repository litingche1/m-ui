import { defineComponent, ref, onMounted, resolveComponent, openBlock, createElementBlock, createVNode, mergeProps, unref } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "index",
  props: {
    percentage: {
      type: Number,
      default: 100
    },
    isAnimation: {
      type: Boolean,
      default: false
    },
    animationTime: {
      type: Number,
      default: 3e3
    }
  },
  setup(__props) {
    const props = __props;
    let p = ref(0);
    onMounted(() => {
      if (props.isAnimation) {
        let time = Math.ceil(props.animationTime / props.percentage);
        let timer = setInterval(() => {
          p.value += 1;
          if (p.value >= props.percentage) {
            p.value = props.percentage;
            clearInterval(timer);
          }
        }, time);
      } else {
        p.value = props.percentage;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_progress = resolveComponent("el-progress");
      return openBlock(), createElementBlock("main", null, [
        createVNode(_component_el_progress, mergeProps({ percentage: unref(p) }, _ctx.$attrs), null, 16, ["percentage"])
      ]);
    };
  }
});
var index = {
  install(app) {
    app.component("m-progress", _sfc_main);
  }
};
export { index as default };

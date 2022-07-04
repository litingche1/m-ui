import { defineComponent, ref, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, withCtx, Fragment, renderList, createBlock, createCommentVNode, toDisplayString, createTextVNode, normalizeClass, resolveDynamicComponent } from "vue";
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
const _hoisted_1 = ["onClick"];
const _hoisted_2 = {
  key: 0,
  class: "avatar"
};
const _hoisted_3 = { class: "content" };
const _hoisted_4 = {
  key: 0,
  class: "title"
};
const _hoisted_5 = {
  key: 1,
  class: "time"
};
const _hoisted_6 = {
  key: 2,
  class: "time"
};
const _hoisted_7 = { class: "actions" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = {
  key: 0,
  class: "a-icon"
};
const _hoisted_10 = { class: "a-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "index",
  props: {
    list: {
      type: Array,
      required: true
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(__props, { emit: emits }) {
    let activeName = ref("");
    const handleClick = () => {
    };
    let clickItem = (item, idx) => {
      emits("clickItem", { item, idx });
    };
    let clickAction = (item, idx) => {
      emits("clickAction", { item, idx });
    };
    return (_ctx, _cache) => {
      const _component_el_avatar = resolveComponent("el-avatar");
      const _component_el_tag = resolveComponent("el-tag");
      const _component_el_scrollbar = resolveComponent("el-scrollbar");
      const _component_el_tab_pane = resolveComponent("el-tab-pane");
      const _component_el_tabs = resolveComponent("el-tabs");
      return openBlock(), createElementBlock("main", null, [
        createElementVNode("section", null, [
          createVNode(_component_el_tabs, {
            modelValue: unref(activeName),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(activeName) ? activeName.value = $event : activeName = $event),
            class: "demo-tabs",
            onTabClick: handleClick
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (item, idx) => {
                return openBlock(), createBlock(_component_el_tab_pane, {
                  label: item.title,
                  name: idx
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_scrollbar, { "max-height": "300px" }, {
                      default: withCtx(() => [
                        createElementVNode("section", null, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.content, (item1, index1) => {
                            return openBlock(), createElementBlock("article", {
                              class: "container",
                              onClick: ($event) => unref(clickItem)(item1, index1),
                              key: index1
                            }, [
                              item1.avatar ? (openBlock(), createElementBlock("div", _hoisted_2, [
                                createVNode(_component_el_avatar, {
                                  size: "small",
                                  src: item1.avatar
                                }, null, 8, ["src"])
                              ])) : createCommentVNode("", true),
                              createElementVNode("div", _hoisted_3, [
                                item1.title ? (openBlock(), createElementBlock("div", _hoisted_4, [
                                  createElementVNode("div", null, toDisplayString(item1.title), 1),
                                  item1.tag ? (openBlock(), createBlock(_component_el_tag, {
                                    key: 0,
                                    size: "small",
                                    type: item1.tagType
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item1.tag), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["type"])) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true),
                                item1.desc ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(item1.desc), 1)) : createCommentVNode("", true),
                                item1.time ? (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(item1.time), 1)) : createCommentVNode("", true)
                              ])
                            ], 8, _hoisted_1);
                          }), 128)),
                          createElementVNode("article", _hoisted_7, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.actions, (action, i) => {
                              return openBlock(), createElementBlock("div", {
                                class: normalizeClass(["a-item", { "border": i !== __props.actions.length }]),
                                key: i,
                                onClick: ($event) => unref(clickAction)(action, i)
                              }, [
                                action.icon ? (openBlock(), createElementBlock("div", _hoisted_9, [
                                  (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(action.icon)}`)))
                                ])) : createCommentVNode("", true),
                                createElementVNode("div", _hoisted_10, toDisplayString(action.text), 1)
                              ], 10, _hoisted_8);
                            }), 128))
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["label", "name"]);
              }), 256))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
var list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a1e88ff"]]);
var index = {
  install(app) {
    app.component("m-list", list);
  }
};
export { index as default };

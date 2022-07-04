(function(e,t){typeof exports=="object"&&typeof module!="undefined"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,e.index=t(e.Vue))})(this,function(e){"use strict";const t=e.defineComponent({name:"index",props:{percentage:{type:Number,default:100},isAnimation:{type:Boolean,default:!1},animationTime:{type:Number,default:3e3}},setup(r){const n=r;let o=e.ref(0);return e.onMounted(()=>{if(n.isAnimation){let i=Math.ceil(n.animationTime/n.percentage),a=setInterval(()=>{o.value+=1,o.value>=n.percentage&&(o.value=n.percentage,clearInterval(a))},i)}else o.value=n.percentage}),(i,a)=>{const l=e.resolveComponent("el-progress");return e.openBlock(),e.createElementBlock("main",null,[e.createVNode(l,e.mergeProps({percentage:e.unref(o)},i.$attrs),null,16,["percentage"])])}}});var p={install(r){r.component("m-progress",t)}};return p});
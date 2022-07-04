(function(e,r){typeof exports=="object"&&typeof module!="undefined"?module.exports=r(require("vue")):typeof define=="function"&&define.amd?define(["vue"],r):(e=typeof globalThis!="undefined"?globalThis:e||self,e.index=r(e.Vue))})(this,function(e){"use strict";var r="",u=(t,s)=>{const d=t.__vccOpts||t;for(const[n,a]of s)d[n]=a;return d};const c={class:"choose-time"},f={class:"start-date"};var p=u(e.defineComponent({name:"index",props:{startPlaceholder:{type:String,default:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"},start:{type:String,default:"08:30"},startStep:{type:String,default:"00:30"},startEndTime:{type:String,default:"24:00"},endPlaceholder:{type:String,default:"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4"},endStartTime:{type:String,default:"08:30"},endStep:{type:String,default:"00:30"},endEndTime:{type:String,default:"24:00"}},emits:["startTimeChang","endTimeChang"],setup(t,{emit:s}){let d=e.ref(!0),n=e.ref(""),a=e.ref("");return e.watch(n,l=>{l===""?(a.value="",d.value=!0):(d.value=!1,s("startTimeChang",l))}),e.watch(a,l=>{l&&s("endTimeChang",{endTime:l,startTime:n.value})}),(l,o)=>{const m=e.resolveComponent("el-time-select");return e.openBlock(),e.createElementBlock("main",c,[e.createElementVNode("section",f,[e.createVNode(m,{modelValue:e.unref(n),"onUpdate:modelValue":o[0]||(o[0]=i=>e.isRef(n)?n.value=i:n=i),"max-time":e.unref(a),class:"mr-4",placeholder:t.startPlaceholder,start:t.start,step:t.startStep,end:t.startEndTime},null,8,["modelValue","max-time","placeholder","start","step","end"])]),e.createElementVNode("section",null,[e.createVNode(m,{modelValue:e.unref(a),"onUpdate:modelValue":o[1]||(o[1]=i=>e.isRef(a)?a.value=i:a=i),"min-time":e.unref(n),placeholder:t.endPlaceholder,start:t.endStartTime,step:t.endStep,end:t.endEndTime,disabled:e.unref(d)},null,8,["modelValue","min-time","placeholder","start","step","end","disabled"])])])}}}),[["__scopeId","data-v-c1c71a48"]]),h={install(t){t.component("m-choose-time",p)}};return h});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-permission-edit"],{"1e25":function(t,e,i){"use strict";var n=i("23e7"),a=i("58a8").end,r=i("c8d2"),o=r("trimEnd"),s=o?function(){return a(this)}:"".trimEnd;n({target:"String",proto:!0,forced:o},{trimEnd:s,trimRight:s})},"348c":function(t,e,i){"use strict";var n=i("bfca"),a=i.n(n);a.a},"36ba":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={permission_id:{rules:[{required:!0},{format:"string"}],label:"权限标识"},permission_name:{rules:[{required:!0},{format:"string"}],label:"权限名称"},comment:{rules:[{format:"string"}],label:"备注"}};e.default=n},"41b5":function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("4160"),i("caad"),i("b64b"),i("d3b7"),i("2532"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),r=n(i("36ba")),o=t.database(),s=(o.command,"uni-id-permissions");function l(t){var e={};for(var i in r.default)t.includes(i)&&(e[i]=r.default[i]);return e}var u={data:function(){return{formData:{permission_id:"",permission_name:"",comment:""},rules:(0,a.default)({},l(["permission_id","permission_name","comment"]))}},onLoad:function(t){var e=t.id;this.formDataId=e,this.getDetail(e)},methods:{submitForm:function(t){this.$refs.form.submit()},submit:function(t){var e=this,i=t.detail,n=i.value,a=i.errors;a||(uni.showLoading({title:"修改中...",mask:!0}),o.collection(s).doc(this.formDataId).update(n).then((function(t){uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()})))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),o.collection(s).where({_id:t}).get().then((function(t){var i=t.result.data[0];i&&(Object.keys(e.formData).forEach((function(t){e.binddata(t,i[t])})),e.formData=i)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=u}).call(this,i("a9ff")["default"])},4323:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("ebec").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-easyinput",class:{"uni-easyinput-error":t.msg},style:{color:t.inputBorder&&t.msg?"#dd524d":t.styles.color}},[i("v-uni-view",{staticClass:"uni-easyinput__content",class:{"is-input-border":t.inputBorder,"is-input-error-border":t.inputBorder&&t.msg,"is-textarea":"textarea"===t.type,"is-disabled":t.disabled},style:{"border-color":t.inputBorder&&t.msg?"#dd524d":t.styles.borderColor,"background-color":t.disabled?t.styles.disableColor:""}},[t.prefixIcon?i("uni-icons",{staticClass:"content-clear-icon",attrs:{type:t.prefixIcon,color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickIcon("prefix")}}}):t._e(),"textarea"===t.type?i("v-uni-textarea",{staticClass:"uni-easyinput__content-textarea",class:{"input-padding":t.inputBorder},attrs:{name:t.name,value:t.val,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,focus:t.focused,autoHeight:t.autoHeight},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):i("v-uni-input",{staticClass:"uni-easyinput__content-input",style:{"padding-right":"password"===t.type||t.clearable||t.prefixIcon?"":"10px","padding-left":t.prefixIcon?"":"10px"},attrs:{type:"password"===t.type?"text":t.type,name:t.name,value:t.val,password:!t.showPassword&&"password"===t.type,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,focus:t.focused,confirmType:t.confirmType},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),"password"===t.type&&t.passwordIcon?[""!=t.val?i("uni-icons",{staticClass:"content-clear-icon",class:{"is-textarea-icon":"textarea"===t.type},attrs:{type:t.showPassword?"eye-slash-filled":"eye-filled",size:18,color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onEyes.apply(void 0,arguments)}}}):t._e()]:t.suffixIcon?[t.suffixIcon?i("uni-icons",{staticClass:"content-clear-icon",attrs:{type:t.suffixIcon,color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickIcon("suffix")}}}):t._e()]:[t.clearable&&t.val&&!t.disabled?i("uni-icons",{staticClass:"content-clear-icon",class:{"is-textarea-icon":"textarea"===t.type},attrs:{type:"clear",size:t.clearSize,color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}}):t._e()],t._t("right")],2)],1)},r=[]},"6f73":function(t,e,i){"use strict";i.r(e);var n=i("c189"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"7b6b":function(t,e,i){"use strict";i.r(e);var n=i("4323"),a=i("6f73");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("348c");var o,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"0214fcd7",null,!1,n["a"],o);e["default"]=l.exports},"9d0b":function(t,e,i){"use strict";i.r(e);var n=i("41b5"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},bb4f:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniForms:i("5603").default,uniFormsItem:i("a927").default,uniEasyinput:i("7b6b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-container"},[i("uni-forms",{ref:"form",attrs:{validateTrigger:"bind",rules:t.rules},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[i("uni-forms-item",{attrs:{name:"permission_id",label:"权限标识",required:!0}},[i("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入权限标识"},model:{value:t.formData.permission_id,callback:function(e){t.$set(t.formData,"permission_id",e)},expression:"formData.permission_id"}})],1),i("uni-forms-item",{attrs:{name:"permission_name",label:"权限名称",required:!0}},[i("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入权限名称"},model:{value:t.formData.permission_name,callback:function(e){t.$set(t.formData,"permission_name",e)},expression:"formData.permission_name"}})],1),i("uni-forms-item",{attrs:{name:"comment",label:"备注"}},[i("uni-easyinput",{attrs:{type:"textarea",clearable:!1,placeholder:"请输入备注"},model:{value:t.formData.comment,callback:function(e){t.$set(t.formData,"comment",e)},expression:"formData.comment"}})],1),i("v-uni-view",{staticClass:"uni-button-group"},[i("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitForm.apply(void 0,arguments)}}},[t._v("提交")]),i("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[i("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},r=[]},bfca:function(t,e,i){var n=i("e1de");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b61320a4",n,!0,{sourceMap:!1,shadowMode:!1})},c189:function(t,e,i){"use strict";i("a9e3"),i("ac1f"),i("5319"),i("498a"),i("1e25"),i("eee7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm"],model:{prop:"modelValue",event:"update:modelValue"},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:String,placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:15},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!0},passwordIcon:{type:Boolean,default:!0},styles:{type:Object,default:function(){return{color:"#333",disableColor:"#eee",borderColor:"#e5e5e5"}}},errorMessage:{type:[String,Boolean],default:""}},data:function(){return{focused:!1,errMsg:"",val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg},inputMaxlength:function(){return Number(this.maxlength)}},watch:{value:function(t){this.errMsg&&(this.errMsg=""),this.val=t,this.form&&this.formItem&&!this.is_reset&&(this.is_reset=!1,this.formItem.setValue(t))},modelValue:function(t){this.errMsg&&(this.errMsg=""),this.val=t,this.form&&this.formItem&&!this.is_reset&&(this.is_reset=!1,this.formItem.setValue(t))},focus:function(t){var e=this;this.$nextTick((function(){e.focused=e.focus}))}},created:function(){this.value||(this.val=this.modelValue),this.modelValue||(this.val=this.value),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.is_reset||(this.is_reset=!1,this.formItem.setValue(this.val)),this.rename=this.formItem.name,this.form.inputChildrens.push(this))},mounted:function(){var t=this;this.$nextTick((function(){t.focused=t.focus}))},methods:{init:function(){},onClickIcon:function(t){this.$emit("iconClick",t)},getForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",e=this.$parent,i=e.$options.name;while(i!==t){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onEyes:function(){this.showPassword=!this.showPassword},onInput:function(t){var e=t.detail.value;this.trim&&("boolean"===typeof this.trim&&this.trim&&(e=this.trimStr(e)),"string"===typeof this.trim&&(e=this.trimStr(e,this.trim))),this.errMsg&&(this.errMsg=""),this.val=e,this.$emit("input",e),this.$emit("update:modelValue",e)},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){t.detail.value;this.$emit("blur",t)},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.val="",this.$emit("input",""),this.$emit("update:modelValue","")},fieldClick:function(){this.$emit("click")},trimStr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";return"both"===e?t.trim():"left"===e?t.trimLeft():"right"===e?t.trimRight():"start"===e?t.trimStart():"end"===e?t.trimEnd():"all"===e?t.replace(/\s+/g,""):t}}};e.default=n},e1de:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-easyinput[data-v-0214fcd7]{width:100%;flex:1;position:relative;text-align:left;color:#333;font-size:14px}.uni-easyinput__content[data-v-0214fcd7]{flex:1;width:100%;display:flex;box-sizing:border-box;min-height:36px;flex-direction:row;align-items:center}.uni-easyinput__content-input[data-v-0214fcd7]{width:auto;position:relative;overflow:hidden;flex:1;line-height:1;font-size:14px}.is-textarea[data-v-0214fcd7]{align-items:flex-start}.is-textarea-icon[data-v-0214fcd7]{margin-top:5px}.uni-easyinput__content-textarea[data-v-0214fcd7]{position:relative;overflow:hidden;flex:1;line-height:1.5;font-size:14px;padding-top:6px;padding-bottom:10px;height:80px;min-height:80px;width:auto}.input-padding[data-v-0214fcd7]{padding-left:10px}.content-clear-icon[data-v-0214fcd7]{padding:0 5px}.label-icon[data-v-0214fcd7]{margin-right:5px;margin-top:-1px}.is-input-border[data-v-0214fcd7]{display:flex;box-sizing:border-box;flex-direction:row;align-items:center;border:1px solid #c8c7cc;border-radius:4px}.is-required[data-v-0214fcd7]{color:#dd524d}.uni-error-message[data-v-0214fcd7]{position:absolute;bottom:-17px;left:0;line-height:12px;color:#dd524d;font-size:12px;text-align:left}.uni-error-msg--boeder[data-v-0214fcd7]{position:relative;bottom:0;line-height:22px}.is-input-error-border[data-v-0214fcd7]{border-color:#dd524d}.uni-easyinput--border[data-v-0214fcd7]{margin-bottom:0;padding:10px 15px;border-top:1px #eee solid}.uni-easyinput-error[data-v-0214fcd7]{padding-bottom:0}.is-first-border[data-v-0214fcd7]{border:none}.is-disabled[data-v-0214fcd7]{background-color:#eee}',""]),t.exports=e},edf2:function(t,e,i){"use strict";i.r(e);var n=i("bb4f"),a=i("9d0b");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var o,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=l.exports},eee7:function(t,e,i){"use strict";var n=i("23e7"),a=i("58a8").start,r=i("c8d2"),o=r("trimStart"),s=o?function(){return a(this)}:"".trimStart;n({target:"String",proto:!0,forced:o},{trimStart:s,trimLeft:s})}}]);
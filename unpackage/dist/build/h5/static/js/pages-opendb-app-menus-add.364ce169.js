(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-opendb-app-menus-add"],{"145b":function(e,t,a){"use strict";a.r(t);var n=a("f1e9"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"42fb":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniForms:a("5603").default,uniFormsItem:a("a927").default,uniEasyinput:a("7b6b").default,uniFilePicker:a("9bac").default,uniDataCheckbox:a("87bd").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:e.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"menu_id",label:"菜单ID",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"菜单项的ID，不可重复",trim:"both"},model:{value:e.formData.menu_id,callback:function(t){e.$set(e.formData,"menu_id",t)},expression:"formData.menu_id"}})],1),a("uni-forms-item",{attrs:{name:"name",label:"菜单名称",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"菜单名称",trim:"both"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("uni-forms-item",{attrs:{name:"icon",label:"菜单图标"}},[a("uni-easyinput",{attrs:{placeholder:"菜单图标",trim:"both"},model:{value:e.formData.icon,callback:function(t){e.$set(e.formData,"icon",t)},expression:"formData.icon"}})],1),a("uni-forms-item",{attrs:{name:"url",label:"图片列表"}},[a("uni-file-picker",{attrs:{"file-mediatype":"image",limit:1,"return-type":"object"},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),a("uni-forms-item",{attrs:{name:"sort",label:"菜单序号"}},[a("uni-easyinput",{attrs:{placeholder:"菜单序号（越大越靠后）",type:"number"},model:{value:e.formData.sort,callback:function(t){e.$set(e.formData,"sort",t)},expression:"formData.sort"}})],1),a("uni-forms-item",{attrs:{name:"parent_id",label:"父级菜单Id"}},[a("uni-easyinput",{attrs:{placeholder:"父级菜单Id"},model:{value:e.formData.parent_id,callback:function(t){e.$set(e.formData,"parent_id",t)},expression:"formData.parent_id"}})],1),a("uni-forms-item",{staticStyle:{"margin-bottom":"60px"},attrs:{name:"permission",label:"权限列表"}},[a("uni-data-checkbox",{attrs:{multiple:!0,collection:"uni-id-permissions",field:"permission_name as text, permission_id as value"},model:{value:e.formData.permission,callback:function(t){e.$set(e.formData,"permission",t)},expression:"formData.permission"}})],1),a("uni-forms-item",{attrs:{name:"enable",label:"是否开启"}},[a("v-uni-switch",{attrs:{checked:e.formData.enable},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.binddata("enable",t.detail.value)}}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[e._v("返回")])],1)],1)],1)],1)},r=[]},"6fbb":function(e,t,a){"use strict";a.r(t);var n=a("42fb"),i=a("145b");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);var o,u=a("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=s.exports},debe:function(e,t,a){"use strict";var n=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=s,t.enumConverter=t.validator=void 0;var i=n(a("3835")),r=n(a("b85c")),o={menu_id:{rules:[{required:!0},{format:"string"}]},name:{rules:[{required:!0},{format:"string"}]},icon:{rules:[{format:"string"}]},sort:{rules:[{format:"int"}]},parent_id:{rules:[{format:"string"}]},permission:{rules:[{format:"array"}]},enable:{rules:[{format:"bool"}]},url:{rules:[{format:"file",fileMediaType:"image"}],label:"图片列表"}};t.validator=o;var u={};function s(e,t){var a={};for(var n in e){var o=e[n],u=o.type,s=o.value;switch(u){case"search":"string"===typeof s&&s.length&&(a[n]=new RegExp(s));break;case"select":if(s.length){var l,f=[],c=(0,r.default)(s);try{for(c.s();!(l=c.n()).done;){var m=l.value;f.push(t.eq(m))}}catch(w){c.e(w)}finally{c.f()}a[n]=t.or(f)}break;case"range":if(s.length){var d=s[0],b=s[1];a[n]=t.and([t.gte(d),t.lte(b)])}break;case"date":if(s.length){var p=(0,i.default)(s,2),v=p[0],h=p[1],g=new Date(v),D=new Date(h);a[n]=t.and([t.gte(g),t.lte(D)])}break;case"timestamp":if(s.length){var y=(0,i.default)(s,2),k=y[0],_=y[1];a[n]=t.and([t.gte(k),t.lte(_)])}break}}return a}t.enumConverter=u},f1e9:function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("caad"),a("b64b"),a("d3b7"),a("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530")),r=a("debe"),o=e.database(),u=(o.command,"opendb-app-menus");function s(e){var t={};for(var a in r.validator)e.includes(a)&&(t[a]=r.validator[a]);return t}var l={data:function(){var e={menu_id:"",name:"",icon:"",url:"",sort:null,parent_id:"",permission:[],enable:null};return{formData:e,formOptions:{},rules:(0,i.default)({},s(Object.keys(e)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var e=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(t){e.submitForm(t)})).catch((function(){uni.hideLoading()}))},submitForm:function(e){var t=this;o.collection(u).add(e).then((function(e){uni.showToast({title:"新增成功"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};t.default=l}).call(this,a("a9ff")["default"])}}]);
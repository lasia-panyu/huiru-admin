(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-menu-add","pages-demo-icons-icons"],{"2b31":function(e,a,t){var i=t("a2347");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("47b13980",i,!0,{sourceMap:!1,shadowMode:!1})},"3fb4":function(e,a,t){"use strict";var i=t("2b31"),n=t.n(i);n.a},"5e40":function(e,a,t){"use strict";var i=t("888e"),n=t.n(i);n.a},"5ed4":function(e,a,t){"use strict";var i=t("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t("b190")),o={data:function(){return{icons:n.default}},props:{tag:{type:Boolean,default:!0},fixWindow:{type:Boolean,default:!0}},methods:{setClipboardData:function(e,a){var t="uni-icons-"+a;this.tag&&"tag"===e&&(t='<view class="'+t+'"></view>'),uni.setClipboardData({data:t,success:function(e){uni.showToast({icon:"none",title:"复制 "+t+" 成功！"})},fail:function(e){uni.showModal({content:"复制 "+t+" 失败！",showCancel:!1})}})}}};a.default=o},"61e0":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={menu_id:{rules:[{required:!0},{format:"string"}]},name:{rules:[{required:!0},{format:"string"}]},icon:{rules:[{format:"string"}]},url:{rules:[{format:"string"}]},sort:{rules:[{format:"int"}]},parent_id:{rules:[{format:"string"}]},permission:{rules:[{format:"array"}]},enable:{rules:[{format:"bool"}]}};a.default=i},"63d4":function(e,a,t){"use strict";t.r(a);var i=t("5ed4"),n=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(a,e,(function(){return i[e]}))}(o);a["default"]=n.a},"70e1":function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return i}));var i={uniForms:t("5603").default,uniFormsItem:t("a927").default,uniEasyinput:t("7b6b").default,uniLink:t("048c").default,uniDataCheckbox:t("87bd").default,uniPopup:t("6277").default},n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"uni-container"},[t("uni-forms",{ref:"form",attrs:{labelWidth:"80",rules:e.rules,validateTrigger:"bind"},on:{submit:function(a){arguments[0]=a=e.$handleEvent(a),e.submit.apply(void 0,arguments)}},model:{value:e.formData,callback:function(a){e.formData=a},expression:"formData"}},[t("uni-forms-item",{attrs:{name:"menu_id",label:"标识",required:!0}},[t("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单项的ID，不可重复"},model:{value:e.formData.menu_id,callback:function(a){e.$set(e.formData,"menu_id",a)},expression:"formData.menu_id"}})],1),t("uni-forms-item",{attrs:{name:"name",label:"显示名称",required:!0}},[t("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单名称"},model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",a)},expression:"formData.name"}})],1),t("uni-forms-item",{staticStyle:{"margin-bottom":"10px"},attrs:{name:"icon",label:"图标 class"}},[t("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单图标css样式类名"},model:{value:e.formData.icon,callback:function(a){e.$set(e.formData,"icon",a)},expression:"formData.icon"}},[t("span",{staticStyle:{color:"#007aff",cursor:"pointer","padding-right":"10px"},attrs:{slot:"right"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.showIconPopup.apply(void 0,arguments)}},slot:"right"},[e._v("内置图标")])]),t("uni-link",{staticClass:"uni-form-item-tips",attrs:{"font-size":"12",href:"https://uniapp.dcloud.net.cn/uniCloud/admin?id=icon-%e5%9b%be%e6%a0%87",text:"如何使用自定义图标？"}})],1),t("uni-forms-item",{attrs:{name:"url",label:"页面URL"}},[t("uni-easyinput",{attrs:{clearable:!1,placeholder:"URL为空代表是目录而不是叶子节点"},model:{value:e.formData.url,callback:function(a){e.$set(e.formData,"url",a)},expression:"formData.url"}})],1),t("uni-forms-item",{attrs:{name:"sort",label:"序号"}},[t("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单序号（越大越靠后）"},model:{value:e.formData.sort,callback:function(a){e.$set(e.formData,"sort",a)},expression:"formData.sort"}})],1),t("uni-forms-item",{attrs:{name:"parent_id",label:"父菜单标识"}},[t("uni-easyinput",{attrs:{disabled:!0,clearable:!1,placeholder:"新增菜单时自动填充, 一级菜单不需要填写"},model:{value:e.formData.parent_id,callback:function(a){e.$set(e.formData,"parent_id",a)},expression:"formData.parent_id"}})],1),t("uni-forms-item",{staticStyle:{"margin-bottom":"60px"},attrs:{name:"permission",label:"权限列表"}},[t("uni-data-checkbox",{attrs:{multiple:!0,collection:"uni-id-permissions",field:"permission_name as text, permission_id as value"},model:{value:e.formData.permission,callback:function(a){e.$set(e.formData,"permission",a)},expression:"formData.permission"}}),t("v-uni-view",{staticClass:"uni-form-item-tips"},[e._v("当用户拥有以上被选中的权限时，可以访问此菜单。建议仅对子菜单配置权限，父菜单会自动包含。如不选择权限，意味着仅超级管理员可访问本菜单")])],1),t("uni-forms-item",{attrs:{name:"enable",label:"是否启用"}},[t("v-uni-switch",{attrs:{checked:e.formData.enable},on:{change:function(a){arguments[0]=a=e.$handleEvent(a),e.binddata("enable",a.detail.value)}}})],1),t("v-uni-view",{staticClass:"uni-button-group"},[t("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.submitForm.apply(void 0,arguments)}}},[e._v("提交")]),t("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[t("v-uni-button",{staticClass:"uni-button",attrs:{tyle:"width: 100px;"}},[e._v("返回")])],1)],1)],1),t("uni-popup",{ref:"iconPopup",staticClass:"icon-modal-box",attrs:{type:"center"}},[t("v-uni-view",{staticClass:"icon-modal icon-modal-pc"},[t("Icons",{attrs:{tag:!1,"fix-window":!1}})],1)],1)],1)},o=[]},"888e":function(e,a,t){var i=t("cfc8");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("c8f4afa0",i,!0,{sourceMap:!1,shadowMode:!1})},"9a00":function(e,a,t){"use strict";t.r(a);var i=t("f25b"),n=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(a,e,(function(){return i[e]}))}(o);a["default"]=n.a},a2347:function(e,a,t){var i=t("24fb");a=i(!1),a.push([e.i,".icon-modal-box[data-v-41a29db3]{padding-top:var(--top-window-height)}.icon-modal[data-v-41a29db3]{width:350px;background-color:#fff;height:500px;overflow-y:scroll}@media screen and (min-width:768px){.icon-modal-pc[data-v-41a29db3]{width:600px}}",""]),e.exports=a},a7d5:function(e,a,t){"use strict";t.r(a);var i=t("e553"),n=t("63d4");for(var o in n)"default"!==o&&function(e){t.d(a,e,(function(){return n[e]}))}(o);t("5e40");var l,r=t("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"6f807903",null,!1,i["a"],l);a["default"]=s.exports},b190:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=["pulldown","refreshempty","back","forward","more","more-filled","scan","qq","weibo","weixin","pengyouquan","loop","refresh","refresh-filled","arrowthindown","arrowthinleft","arrowthinright","arrowthinup","undo-filled","undo","redo","redo-filled","bars","chatboxes","camera","chatboxes-filled","camera-filled","cart-filled","cart","checkbox-filled","checkbox","arrowleft","arrowdown","arrowright","smallcircle-filled","arrowup","circle","eye-filled","eye-slash-filled","eye-slash","eye","flag-filled","flag","gear-filled","reload","gear","hand-thumbsdown-filled","hand-thumbsdown","hand-thumbsup-filled","heart-filled","hand-thumbsup","heart","home","info","home-filled","info-filled","circle-filled","chat-filled","chat","mail-open-filled","email-filled","mail-open","email","checkmarkempty","list","locked-filled","locked","map-filled","map-pin","map-pin-ellipse","map","minus-filled","mic-filled","minus","micoff","mic","clear","smallcircle","close","closeempty","paperclip","paperplane","paperplane-filled","person-filled","contact-filled","person","contact","images-filled","phone","images","image","image-filled","location-filled","location","plus-filled","plus","plusempty","help-filled","help","navigate-filled","navigate","mic-slash-filled","search","settings","sound","sound-filled","spinner-cycle","download-filled","personadd-filled","videocam-filled","personadd","upload","upload-filled","starhalf","star-filled","star","trash","phone-filled","compose","videocam","trash-filled","download","chatbubble-filled","chatbubble","cloud-download","cloud-upload-filled","cloud-upload","cloud-download-filled","headphones","shop"];a.default=i},cfc8:function(e,a,t){var i=t("24fb");a=i(!1),a.push([e.i,"\n.icons[data-v-6f807903]{display:flex;flex-wrap:wrap}.icon-item[data-v-6f807903]{display:flex;width:16.6%;height:120px;font-size:30px;text-align:center;justify-content:center;align-items:center;flex-direction:column}.icon-item[data-v-6f807903]:hover,\n.icon-item:hover .icon-text[data-v-6f807903]{color:#007aff}.icon-text[data-v-6f807903]{color:#99a9bf;font-size:12px;text-align:center;height:1em;line-height:1em;margin-top:15px}\n@media only screen and (max-width:500px){.icon-item[data-v-6f807903]{width:33.3%}}\n",""]),e.exports=a},d1d3:function(e,a,t){"use strict";t.r(a);var i=t("70e1"),n=t("9a00");for(var o in n)"default"!==o&&function(e){t.d(a,e,(function(){return n[e]}))}(o);t("3fb4");var l,r=t("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"41a29db3",null,!1,i["a"],l);a["default"]=s.exports},e553:function(e,a,t){"use strict";var i;t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return i}));var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("v-uni-view",{staticClass:"uni-header"},[t("v-uni-view",{staticClass:"uni-group"},[t("v-uni-view",{staticClass:"uni-title"},[e._v("图标（uni-icons）")]),t("v-uni-view",{staticClass:"uni-sub-title"},[e._v("点击图标即可复制图标代码")])],1)],1),t("v-uni-view",{staticClass:"uni-container"},[t("v-uni-view",{staticClass:"icons"},e._l(e.icons,(function(a){return t("v-uni-view",{key:a,staticClass:"icon-item pointer"},[t("v-uni-view",{class:"uni-icons-"+a,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setClipboardData("tag",a)}}}),t("v-uni-text",{staticClass:"icon-text",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setClipboardData("class",a)}}},[e._v("uni-icons-"+e._s(a))])],1)})),1)],1)],1)},o=[]},f25b:function(e,a,t){"use strict";(function(e){var i=t("4ea4");t("caad"),t("d3b7"),t("2532"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t("5530")),o=i(t("61e0")),l=i(t("a7d5")),r=t("2f62"),s=e.database(),u=(s.command,"opendb-admin-menus");function c(e){var a={};for(var t in o.default)e.includes(t)&&(a[t]=o.default[t]);return a}var d={components:{Icons:l.default},data:function(){return{formData:{menu_id:"",name:"",icon:"",url:"",sort:null,parent_id:"",permission:[],enable:!0},rules:(0,n.default)({},c(["menu_id","name","icon","url","sort","parent_id","permission","enable"]))}},onLoad:function(e){e.parent_id&&(this.formData.parent_id=e.parent_id)},methods:(0,n.default)((0,n.default)({},(0,r.mapActions)({init:"app/init"})),{},{submitForm:function(){this.$refs.form.submit()},submit:function(e){var a=this,t=e.detail,i=t.value,n=t.errors;n||(uni.showLoading({title:"提交中...",mask:!0}),s.collection(u).add(i).then((function(e){uni.showToast({title:"新增成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()})))},showIconPopup:function(){this.$refs.iconPopup.open()}})};a.default=d}).call(this,t("a9ff")["default"])}}]);
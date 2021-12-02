(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-user-edit"],{"22ef":function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("caad"),a("b64b"),a("d3b7"),a("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var r=n(a("1da1")),o=n(a("5530")),i=a("5d7a"),s=e.database(),l=(s.command,"uni-id-users");function u(e){var t={};for(var a in i.validator)e.includes(a)&&(t[a]=i.validator[a]);return t}var c={data:function(){var e={username:"",gender:0,status:0,mobile:"",email:"",department_id:[],nickname:"",role:[]};return{password:"",showPassword:!1,index:0,formData:e,formOptions:{gender_localdata:[{text:"未知",value:0},{text:"男",value:1},{text:"女",value:2}],status_localdata:[{text:"正常",value:0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]},rules:(0,o.default)({},u(Object.keys(e)))}},watch:{formData:{handler:function(e,t){console.log(e),console.log(e.department_id.length),0==this.formData.department_id.length&&(console.log("line140"),this.formData.department_id="00001"),e.department_id&&e.department_id.length>1&&(this.formData.department_id=e.department_id),1==e.department_id.length&&(this.formData.department_id=e.department_id[0]),e.mobile&&(console.log(e.mobile),this.formData.mobile=e.mobile)},deep:!0}},onLoad:function(e){if(e.id){var t=e.id;this.formDataId=t,this.getDetail(t)}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var e=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(t){e.submitForm(t)})).catch((function(){uni.hideLoading()}))},trigger:function(){this.showPassword=!this.showPassword},resetPWd:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,t.$util.cloudFunction("user","resetPwd",e);case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),a)})))()},submitForm:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n={uid:t.formDataId,password:t.password},s.collection(l).doc(t.formDataId).update(e).then(function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.showPassword||!n.password){e.next=8;break}return console.log(n),e.next=4,t.resetPWd(n);case 4:r=e.sent,0!=r.code?uni.showModal({content:r.msg,showCancel:!1}):(uni.showToast({title:"更新成功！！！"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)),e.next=10;break;case 8:t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}));case 2:case"end":return a.stop()}}),a)})))()},getDetail:function(e){var t=this;uni.showLoading({mask:!0}),s.collection(l).doc(e).field("username,gender,status,mobile,email,department_id,nickname,role").get().then((function(e){var a=e.result.data[0];a&&(t.formData=a)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};t.default=c}).call(this,a("a9ff")["default"])},4385:function(e,t,a){"use strict";a.r(t);var n=a("22ef"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},"5d7a":function(e,t,a){"use strict";var n=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=l,t.enumConverter=t.validator=void 0;var r=n(a("3835")),o=n(a("b85c")),i={username:{rules:[{format:"string"}],label:"用户名"},nickname:{rules:[{format:"string"}],label:"昵称"},gender:{rules:[{format:"int"},{range:[{text:"未知",value:0},{text:"男",value:1},{text:"女",value:2}]}],defaultValue:0,label:"性别"},status:{rules:[{format:"int"},{range:[{text:"正常",value:0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]}],defaultValue:0,label:"用户状态"},mobile:{rules:[{pattern:"^\\+?[0-9-]{3,20}$"}],label:"手机号码"},email:{rules:[{format:"string"}],label:"邮箱"},role:{rules:[{format:"array"}],label:"角色"}};t.validator=i;var s={gender_valuetotext:{0:"未知",1:"男",2:"女"},status_valuetotext:{0:"正常",1:"禁用",2:"审核中",3:"审核拒绝"}};function l(e,t){var a={};for(var n in e){var i=e[n],s=i.type,l=i.value;switch(s){case"search":"string"===typeof l&&l.length&&(a[n]=new RegExp(l));break;case"select":if(l.length){var u,c=[],d=(0,o.default)(l);try{for(d.s();!(u=d.n()).done;){var f=u.value;c.push(t.eq(f))}}catch(_){d.e(_)}finally{d.f()}a[n]=t.or(c)}break;case"range":if(l.length){var m=l[0],v=l[1];a[n]=t.and([t.gte(m),t.lte(v)])}break;case"date":if(l.length){var p=(0,r.default)(l,2),h=p[0],b=p[1],g=new Date(h),w=new Date(b);a[n]=t.and([t.gte(g),t.lte(w)])}break;case"timestamp":if(l.length){var x=(0,r.default)(l,2),D=x[0],k=x[1];a[n]=t.and([t.gte(D),t.lte(k)])}break}}return a}t.enumConverter=s},"650a":function(e,t,a){"use strict";a.r(t);var n=a("9ab7"),r=a("4385");for(var o in r)"default"!==o&&function(e){a.d(t,e,(function(){return r[e]}))}(o);a("e92a");var i,s=a("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"06a79cd8",null,!1,n["a"],i);t["default"]=l.exports},"9ab7":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uniForms:a("5603").default,uniFormsItem:a("a927").default,uniDataPicker:a("70b7").default,uniEasyinput:a("7b6b").default,uniDataCheckbox:a("87bd").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:e.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"department_id",label:"部门"}},[a("uni-data-picker",{attrs:{"self-field":"_id","parent-field":"parent_id",collection:"opendb-department",orderby:"_id asc",field:"_id as value, name as text"},model:{value:e.formData.department_id,callback:function(t){e.$set(e.formData,"department_id",t)},expression:"formData.department_id"}})],1),a("uni-forms-item",{attrs:{name:"username",label:"柜员号"}},[a("uni-easyinput",{attrs:{placeholder:"柜员号，不允许重复",trim:"both"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),a("uni-forms-item",{attrs:{name:"gender",label:"性别"}},[a("uni-data-checkbox",{attrs:{localdata:e.formOptions.gender_localdata},model:{value:e.formData.gender,callback:function(t){e.$set(e.formData,"gender",t)},expression:"formData.gender"}})],1),a("uni-forms-item",{attrs:{name:"status",label:"用户状态"}},[a("uni-data-checkbox",{attrs:{localdata:e.formOptions.status_localdata},model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}})],1),a("uni-forms-item",{attrs:{name:"mobile",label:"手机号码"}},[a("uni-easyinput",{attrs:{placeholder:"手机号码",trim:"both"},model:{value:e.formData.mobile,callback:function(t){e.$set(e.formData,"mobile",t)},expression:"formData.mobile"}})],1),a("uni-forms-item",{attrs:{name:"email",label:"身份证"}},[a("uni-easyinput",{attrs:{placeholder:"身份证",trim:"both"},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1),a("uni-forms-item",{attrs:{name:"nickname",label:"用户名"}},[a("uni-easyinput",{attrs:{placeholder:"用户名",trim:"both"},model:{value:e.formData.nickname,callback:function(t){e.$set(e.formData,"nickname",t)},expression:"formData.nickname"}})],1),a("uni-forms-item",{attrs:{name:"role",label:"角色"}},[a("uni-data-checkbox",{attrs:{multiple:!0,collection:"uni-id-roles",field:"role_id as value, role_name as text"},model:{value:e.formData.role,callback:function(t){e.$set(e.formData,"role",t)},expression:"formData.role"}})],1)],1),a("uni-forms-item",{attrs:{name:e.showPassword?"password":"",label:"重置密码"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.showPassword,expression:"!showPassword"}],staticClass:"reset-password-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.trigger.apply(void 0,arguments)}}},[e._v("点击重置密码")]),a("uni-easyinput",{directives:[{name:"show",rawName:"v-show",value:e.showPassword,expression:"showPassword"}],attrs:{clearable:!1,placeholder:"请输入重置密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},[a("v-uni-view",{staticClass:"cancel-reset-password-btn",attrs:{slot:"right"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.trigger.apply(void 0,arguments)}},slot:"right"},[e._v("取消")])],1)],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[e._v("返回")])],1)],1)],1)},o=[]},bc0c:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".reset-password-btn[data-v-06a79cd8]{\n\t/* height: 100%; */line-height:36px;color:#007aff;text-decoration:underline;cursor:pointer}.cancel-reset-password-btn[data-v-06a79cd8]{color:#007aff;padding-right:10px;cursor:pointer}",""]),e.exports=t},e92a:function(e,t,a){"use strict";var n=a("f586"),r=a.n(n);r.a},f586:function(e,t,a){var n=a("bc0c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("4f06").default;r("c0f7f5d0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
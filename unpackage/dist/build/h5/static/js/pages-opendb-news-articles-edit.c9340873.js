(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-opendb-news-articles-edit"],{"5dec":function(t,e,a){"use strict";a.r(e);var n=a("bac8"),r=a("c571");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var o,l=a("f0c5"),s=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=s.exports},6136:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("caad"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1")),i=n(a("5530")),o=a("d6d3"),l=t.database(),s=(l.command,"opendb-news-articles");function u(t){var e={};for(var a in o.validator)t.includes(a)&&(e[a]=o.validator[a]);return e}var c={data:function(){var t={user_id:"",category_id:"",title:"",content:"",excerpt:"",article_status:0,comment_status:null,last_comment_user_id:"",avatar:"",publish_date:null,last_modify_date:null,mode:null};return{formData:t,formOptions:{article_status_localdata:[{value:0,text:"草稿箱"},{value:1,text:"已发布"}],comment_status_localdata:[{value:0,text:"关闭"},{value:1,text:"开放"}]},rules:(0,i.default)({},u(Object.keys(t))),style:{},flag:!0}},onLoad:function(t){if(t.id){var e=t.id;this.formDataId=e,this.getDetail(e)}},onReady:function(){this.$refs.form.setRules(this.rules)},mounted:function(){var t=this;uni.createSelectorQuery().in(this).select("#unicontainer").boundingClientRect((function(e){console.log(e.width),t.$set(t.style,"width",e.width-30+"px"),t.style={width:+(e.width-30)+"px"}})).exec(),this.flag=!1,this.flag=!0},methods:{input:function(t){this.formData.content=t[0],console.log(this.formData.content)},submit:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.showLoading({mask:!0}),t.$refs.form.validate().then((function(e){t.submitForm(e)})).catch((function(){uni.hideLoading()}));case 2:case"end":return e.stop()}}),e)})))()},submitForm:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$util.cloudFunction("uni-id-cf","getCurrentUserInfo",{});case 2:n=a.sent,t=e.$util.newsshuffle([t])[0],t.mode=t.type,t.brief={},t.brief.branch=n.userInfo.department_id[0],t.brief.name=n.userInfo.nickname,t.brief.video="",delete t.type,console.log(n),t.user_id=n.userInfo._id,l.collection(s).doc(e.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}));case 10:case"end":return a.stop()}}),a)})))()},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),l.collection(s).doc(t).field("user_id,category_id,title,content,excerpt,article_status,comment_status,last_comment_user_id,avatar,publish_date,last_modify_date,mode").get().then((function(t){var a=t.result.data[0];a&&(e.formData=a)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=c}).call(this,a("a9ff")["default"])},bac8:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uniForms:a("5603").default,uniFormsItem:a("a927").default,uniDataCheckbox:a("87bd").default,uniEasyinput:a("7b6b").default,panguEditor:a("db4f").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container",attrs:{id:"unicontainer"}},[a("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"category_id",label:"分类"}},[a("uni-data-checkbox",{attrs:{collection:"opendb-news-categories",field:"name as text, _id as value"},model:{value:t.formData.category_id,callback:function(e){t.$set(t.formData,"category_id",e)},expression:"formData.category_id"}})],1),a("uni-forms-item",{attrs:{name:"title",label:"标题",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"标题",trim:"both"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("uni-forms-item",{attrs:{name:"article_status",label:"文章状态"}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.article_status_localdata},model:{value:t.formData.article_status,callback:function(e){t.$set(t.formData,"article_status",e)},expression:"formData.article_status"}})],1),a("uni-forms-item",{attrs:{name:"comment_status",label:"开放评论"}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.comment_status_localdata},model:{value:t.formData.comment_status,callback:function(e){t.$set(t.formData,"comment_status",e)},expression:"formData.comment_status"}})],1),a("uni-forms-item",{attrs:{name:"content",label:"文章内容",labelPosition:"top",required:!0}},[a("pangu-editor",{style:t.style,attrs:{newscontent:t.formData.content,"v-show":t.flag},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.input(arguments)}}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},i=[]},c571:function(t,e,a){"use strict";a.r(e);var n=a("6136"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},d6d3:function(t,e,a){"use strict";var n=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.filterToWhere=s,e.enumConverter=e.validator=void 0;var r=n(a("3835")),i=n(a("b85c")),o={user_id:{rules:[{required:!0},{format:"string"}],defaultValue:{$env:"uid"}},category_id:{rules:[{format:"string"}],label:"分类"},title:{rules:[{required:!0},{format:"string"}],label:"标题"},content:{rules:[{required:!0},{format:"string"}],label:"文章内容"},excerpt:{rules:[{format:"string"}],label:"摘要"},article_status:{rules:[{format:"int"},{range:[{value:0,text:"草稿箱"},{value:1,text:"已发布"}]}],defaultValue:0,label:"文章状态"},comment_status:{rules:[{format:"int"},{range:[{value:0,text:"关闭"},{value:1,text:"开放"}]}],label:"开放评论"},last_comment_user_id:{rules:[{format:"string"}]},avatar:{rules:[{format:"string"}],label:"封面大图"},publish_date:{rules:[{format:"timestamp"}],defaultValue:{$env:"now"},label:"发表时间"},last_modify_date:{rules:[{format:"timestamp"}],defaultValue:{$env:"now"},label:"最后修改时间"},mode:{rules:[{format:"number"}],label:"排版显示模式"},is_sticky:{rules:[{format:"bool"}],label:"是否置顶"},is_essence:{rules:[{format:"bool"}],label:"阅读加精"}};e.validator=o;var l={article_status_valuetotext:{0:"草稿箱",1:"已发布"},comment_status_valuetotext:{0:"关闭",1:"开放"}};function s(t,e){var a={};for(var n in t){var o=t[n],l=o.type,s=o.value;switch(l){case"search":"string"===typeof s&&s.length&&(a[n]=new RegExp(s));break;case"select":if(s.length){var u,c=[],f=(0,i.default)(s);try{for(f.s();!(u=f.n()).done;){var d=u.value;c.push(e.eq(d))}}catch(D){f.e(D)}finally{f.f()}a[n]=e.or(c)}break;case"range":if(s.length){var m=s[0],v=s[1];a[n]=e.and([e.gte(m),e.lte(v)])}break;case"date":if(s.length){var b=(0,r.default)(s,2),h=b[0],_=b[1],p=new Date(h),g=new Date(_);a[n]=e.and([e.gte(p),e.lte(g)])}break;case"timestamp":if(s.length){var w=(0,r.default)(s,2),y=w[0],x=w[1];a[n]=e.and([e.gte(y),e.lte(x)])}break}}return a}e.enumConverter=l}}]);
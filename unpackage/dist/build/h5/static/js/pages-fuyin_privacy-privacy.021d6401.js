(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fuyin_privacy-privacy"],{"11d2":function(t,e,n){"use strict";n.r(e);var i=n("9b17"),o=n("9a4a"),a=n("52fd"),r=n("e0e4"),c=n("68f3");e["default"]={en:i,es:o,fr:a,"zh-Hans":r,"zh-Hant":c}},"3c64":function(t,e,n){"use strict";n.r(e);var i=n("6673"),o=n("d4ce");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,c=n("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"68d7dbcd",null,!1,i["a"],r);e["default"]=s.exports},"4af1":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("4160"),n("c975"),n("fb6a"),n("a434"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("2909")),a=n("37dc"),r=i(n("11d2")),c=(0,a.initVueI18n)(r.default),s=c.t,u={load:"load",error:"error"},l={add:"add",replace:"replace"},d={auto:"auto",onready:"onready",manual:"manual"},h=["pageCurrent","pageSize","spaceInfo","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],f={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},spaceInfo:{type:Object,default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1},mainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var t=JSON.parse(JSON.stringify(this.collection[0]));return t.$db[0].$param[0]}},created:function(){var t=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var e=[];return h.forEach((function(n){e.push(t[n])})),e}),(function(e,n){if(t.paginationInternal.size=t.pageSize,e[0]!==n[0]&&(t.paginationInternal.current=t.pageCurrent),t.loadtime!==d.manual){for(var i=!1,o=2;o<e.length;o++)if(e[o]!==n[o]){i=!0;break}i&&(t.clear(),t.reset()),t._execLoadData()}})),this.manual||this.loadtime!==d.auto||this.loadData()},beforeDestroy:function(){},methods:{loadData:function(t,e){var n=null,i=!1;"object"===typeof t?(t.clear&&(this.pageData===l.replace?this.clear():i=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof e&&(n=e)):"function"===typeof t&&(n=t),this._execLoadData(n,i)},loadMore:function(){this._isEnded||this.loading||(this.pageData===l.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,o=n.showToast,a=void 0===o||o,r=n.toastTitle,c=n.success,u=n.fail,l=n.complete,d=n.needConfirm,h=void 0===d||d,f=n.needLoading,p=void 0===f||f,g=n.loadingTitle,v=void 0===g?"":g;p&&uni.showLoading({title:v});var m=t.database(this.spaceInfo);i&&(m=m.action(i)),m.collection(this.mainCollection).add(e).then((function(t){c&&c(t),a&&uni.showToast({title:r||s("uniCloud.component.add.success")})})).catch((function(t){u&&u(t),h&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){p&&uni.hideLoading(),l&&l()}))},remove:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,o=n.success,a=n.fail,r=n.complete,c=n.confirmTitle,u=n.confirmContent,l=n.needConfirm,d=void 0===l||l,h=n.needLoading,f=void 0===h||h,p=n.loadingTitle,g=void 0===p?"":p;t&&t.length&&(d?uni.showModal({title:c||s("uniCloud.component.remove.showModal.title"),content:u||s("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(n){n.confirm&&e._execRemove(t,i,o,a,r,d,f,g)}}):this._execRemove(t,i,o,a,r,d,f,g))},update:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.action,a=i.showToast,r=void 0===a||a,c=i.toastTitle,u=i.success,l=i.fail,d=i.complete,h=i.needConfirm,f=void 0===h||h,p=i.needLoading,g=void 0===p||p,v=i.loadingTitle,m=void 0===v?"":v;g&&uni.showLoading({title:m});var y=t.database(this.spaceInfo);return o&&(y=y.action(o)),y.collection(this.mainCollection).doc(e).update(n).then((function(t){u&&u(t),r&&uni.showToast({title:c||s("uniCloud.component.update.success")})})).catch((function(t){l&&l(t),f&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){g&&uni.hideLoading(),d&&d()}))},getTemp:function(){var e,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=t.database(this.spaceInfo);this.action&&(i=i.action(this.action)),i=(e=i).collection.apply(e,(0,o.default)(this.collectionArgs)),this.where&&Object.keys(this.where).length&&(i=i.where(this.where)),this.field&&(i=i.field(this.field)),this.foreignKey&&(i=i.foreignKey(this.foreignKey)),this.groupby&&(i=i.groupBy(this.groupby)),this.groupField&&(i=i.groupField(this.groupField)),!0===this.distinct&&(i=i.distinct()),this.orderby&&(i=i.orderBy(this.orderby));var a=this.paginationInternal,r=a.current,c=a.size,s={};this.getcount&&(s.getCount=this.getcount);var u={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(s.getTree=u),this.gettreepath&&(s.getTreePath=u),i=i.skip(c*(r-1)).limit(c),n?(i=i.getTemp(s),i.udb=this):i=i.get(s),i},setResult:function(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData:function(t,e){var n=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(i){n.loading=!1,n._execLoadDataSuccess(i.result,t,e)})).catch((function(e){n.loading=!1,n._execLoadDataFail(e,t)})))},_execLoadDataSuccess:function(t,e,n){var i=t.data,a=t.count;this._isEnded=void 0!==a?this.paginationInternal.current*this.paginationInternal.size>=a:i.length<this.pageSize,this.hasMore=!this._isEnded;var r,c=this.getone?i.length?i[0]:void 0:i;(this.getcount&&(this.paginationInternal.count=a),e&&e(c,this._isEnded,this.paginationInternal),this._dispatchEvent(u.load,c),this.getone||this.pageData===l.replace)?this.dataList=c:n?this.dataList=c:(r=this.dataList).push.apply(r,(0,o.default)(c))},_execLoadDataFail:function(t,e){this.errorMessage=t,e&&e(),this.$emit(u.error,t)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(e,n,i,o,a,r,c,s){var u=this;if(this.collection&&e){var d=Array.isArray(e)?e:[e];if(d.length){c&&uni.showLoading({mask:!0,title:s});var h=t.database(this.spaceInfo),f=h.command,p=h;n&&(p=p.action(n)),p.collection(this.mainCollection).where({_id:f.in(d)}).remove().then((function(t){i&&i(t.result),u.pageData===l.replace?u.refresh():u.removeData(d)})).catch((function(t){o&&o(t),r&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){c&&uni.hideLoading(),a&&a()}))}}},removeData:function(t){for(var e=t.slice(0),n=this.dataList,i=n.length-1;i>=0;i--){var o=e.indexOf(n[i]._id);o>=0&&(n.splice(i,1),e.splice(o,1))}},_dispatchEvent:function(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}};e.default=f}).call(this,n("a9ff")["default"])},"52fd":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},6673:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={unicloudDb:n("960d").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("unicloud-db",{ref:"udb",attrs:{collection:"fuyin_privacy",where:"_id=='"+t.privacyid+"'"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data;e.pagination,e.loading,e.hasMore,e.error,e.options;return[n("v-uni-view",{staticStyle:{"text-align":"center","margin-bottom":"30px","margin-top":"20px"}},[t._v(t._s(i[0].title))]),n("hr"),n("v-uni-rich-text",{attrs:{nodes:i[0].content}})]}}])})],1)},a=[]},"68f3":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否刪除數據"}')},"848e":function(t,e,n){"use strict";n.r(e);var i=n("4af1"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},9253:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{privacyid:""}},onLoad:function(t){console.log(t),this.privacyid=t.id},onReady:function(){this.$refs.udb.loadData()}};e.default=i},"960d":function(t,e,n){"use strict";n.r(e);var i=n("ea9b"),o=n("848e");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,c=n("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=s.exports},"9a4a":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"9b17":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"Success","uniCloud.component.update.success":"Success","uniCloud.component.remove.showModal.title":"Tips","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},d4ce:function(t,e,n){"use strict";n.r(e);var i=n("9253"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},e0e4:function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},ea9b:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._t("default",null,{options:t.options,data:t.dataList,pagination:t.paginationInternal,loading:t.loading,hasMore:t.hasMore,error:t.errorMessage})],2)},a=[]}}]);
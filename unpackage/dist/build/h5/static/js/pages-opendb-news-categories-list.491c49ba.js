(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-opendb-news-categories-list"],{"0e5e":function(e,t,n){"use strict";n.r(t);var a=n("9668"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"1bb7":function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("99af"),n("4de4"),n("d81d"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("b85c")),r=a(n("5530")),o=n("9f84"),s=(e.database(),""),u=[],c=20,l=1,d={ascending:"asc",descending:"desc"},f={data:function(){return{query:"",where:"",orderby:s,orderByFieldName:"",selectedIndexs:[],options:(0,r.default)({pageSize:c,pageCurrent:l,filterData:{}},o.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"opendb-news-categories.xls",type:"xls",fields:{"名称":"name","描述":"description","图标地址":"icon","排序":"sort",article_count:"article_count",create_date:"create_date"}},exportExcelData:[]}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},methods:{onqueryload:function(e){this.exportExcelData=e},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return u.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this.getWhere();this.where=e,this.loadData()},loadData:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$nextTick((function(){e.$refs.udb.loadData({clear:t})}))},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){this.$refs.udb.remove(this.selectedItems())},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){this.$refs.udb.remove(e)},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+d[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=[];for(var r in this._filter){var o=this._filter[r],s=o.type,u=o.value;switch(s){case"search":"string"===typeof u&&u.length&&a.push("/".concat(u,"/.test(").concat(r,")"));break;case"select":if(u.length){var c,l=[],d=(0,i.default)(u);try{for(d.s();!(c=d.n()).done;){var f=c.value;l.push("'".concat(r,"'==").concat(f))}}catch(p){d.e(p)}finally{d.f()}a.push("("+l.join(" || ")+")")}break;case"range":if(u.length){var h=u[0],v=u[1];a.push("('".concat(t,"'>=").concat(h," && '").concat(t,"'<=").concat(v,")"))}break}}a.length?this.where=a.join(" && "):this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=f}).call(this,n("a9ff")["default"])},"505d":function(e,t,n){"use strict";n.r(t);var a=n("1bb7"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"5a03":function(e,t,n){"use strict";n.r(t);var a=n("dfe2"),i=n("505d");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"34acadac",null,!1,a["a"],o);t["default"]=u.exports},9668:function(e,t,n){"use strict";n("a9e3"),n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("9b03"),i={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,a.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var e=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){e.refresh()}),parseInt(this.refreshRate)))}}};t.default=i},"9b14":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",[e._v(e._s(e.dateShow))])},r=[]},"9f84":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=t.validator=void 0;var a={name:{rules:[{required:!0},{format:"string"}],label:"名称"},description:{rules:[{format:"string"}],label:"描述"},icon:{rules:[{format:"string"},{pattern:"^(http://|https://|/|./|@/)\\S"}],label:"图标地址"},sort:{rules:[{format:"int"}],label:"排序"},article_count:{rules:[{format:"int"}]},create_date:{rules:[{format:"timestamp"}]}};t.validator=a;var i={};t.enumConverter=i},dfe2:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("ff58").default,unicloudDb:n("960d").default,uniTable:n("fad7").default,uniTr:n("9d8b").default,uniTh:n("c8a6").default,uniTd:n("69cb").default,uniDateformat:n("f03d").default,uniPagination:n("c663").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v("新增")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"opendb-news-categories",field:"name,description,icon,sort,article_count,create_date",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,o=t.error;t.options;return[n("uni-table",{ref:"table",attrs:{loading:r,emptyText:o.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"name")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"name")}}},[e._v("名称")]),n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"create_date")}}},[e._v("创建日期")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.name))]),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:t.create_date}})],1),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v("修改")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v("删除")])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},f03d:function(e,t,n){"use strict";n.r(t);var a=n("9b14"),i=n("0e5e");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"690ab064",null,!1,a["a"],o);t["default"]=u.exports}}]);
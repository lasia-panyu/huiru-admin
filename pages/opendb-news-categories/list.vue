<template>
  <view>
    <view class="uni-header">
      <view class="uni-group">
        <view class="uni-title"></view>
        <view class="uni-sub-title"></view>
      </view>
      <view class="uni-group">
        <input class="uni-search" type="text" v-model="query" @confirm="search" placeholder="请输入搜索内容" />
        <button class="uni-button" type="default" size="mini" @click="search">搜索</button>
        <button class="uni-button" type="default" size="mini" @click="navigateTo('./add')">新增</button>
        <button class="uni-button" type="default" size="mini" :disabled="!selectedIndexs.length" @click="delTable">批量删除</button>
        <download-excel class="hide-on-phone" :fields="exportExcel.fields" :data="exportExcelData" :type="exportExcel.type" :name="exportExcel.filename">
          <button class="uni-button" type="primary" size="mini">导出 Excel</button>
        </download-excel>
      </view>
    </view>
    <view class="uni-container">
      <unicloud-db ref="udb" collection="opendb-news-categories" field="name,description,icon,sort,article_count,create_date" :where="where" page-data="replace"
        :orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
        v-slot:default="{data,pagination,loading,error,options}" :options="options" loadtime="manual" @load="onqueryload">
        <uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection" @selection-change="selectionChange">
          <uni-tr>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'name')" sortable @sort-change="sortChange($event, 'name')">名称</uni-th>
<!--            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'description')" sortable @sort-change="sortChange($event, 'description')">描述</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'icon')" sortable @sort-change="sortChange($event, 'icon')">图标地址</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'sort')" sortable @sort-change="sortChange($event, 'sort')">排序</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'article_count')" sortable @sort-change="sortChange($event, 'article_count')">article_count</uni-th> -->
            <uni-th align="center" sortable @sort-change="sortChange($event, 'create_date')">创建日期</uni-th>
            <uni-th align="center">操作</uni-th>
          </uni-tr>
          <uni-tr v-for="(item,index) in data" :key="index">
            <uni-td align="center">{{item.name}}</uni-td>
<!--            <uni-td align="center">{{item.description}}</uni-td>
            <uni-td align="center">{{item.icon}}</uni-td>
            <uni-td align="center">{{item.sort}}</uni-td>
            <uni-td align="center">{{item.article_count}}</uni-td> -->
            <uni-td align="center">
              <uni-dateformat :threshold="[0, 0]" :date="item.create_date"></uni-dateformat>
            </uni-td>
            <uni-td align="center">
              <view class="uni-group">
                <button @click="navigateTo('./edit?id='+item._id, false)" class="uni-button" size="mini" type="primary">修改</button>
                <button @click="confirmDelete(item._id)" class="uni-button" size="mini" type="warn">删除</button>
              </view>
            </uni-td>
          </uni-tr>
        </uni-table>
        <view class="uni-pagination-box">
          <uni-pagination show-icon :page-size="pagination.size" v-model="pagination.current" :total="pagination.count" @change="onPageChanged" />
        </view>
      </unicloud-db>
    </view>
  </view>
</template>

<script>
  import { enumConverter } from '../../js_sdk/validator/opendb-news-categories.js';

  const db = uniCloud.database()
  // 表查询配置
  const dbOrderBy = '' // 排序字段
  const dbSearchFields = [] // 模糊搜索字段，支持模糊搜索的字段列表
  // 分页配置
  const pageSize = 20
  const pageCurrent = 1

  const orderByMapping = {
    "ascending": "asc",
    "descending": "desc"
  }

  export default {
    data() {
      return {
        query: '',
        where: '',
        orderby: dbOrderBy,
        orderByFieldName: "",
        selectedIndexs: [],
        options: {
          pageSize,
          pageCurrent,
          filterData: {},
          ...enumConverter
        },
        imageStyles: {
          width: 64,
          height: 64
        },
        exportExcel: {
          "filename": "opendb-news-categories.xls",
          "type": "xls",
          "fields": {
            "名称": "name",
            "描述": "description",
            "图标地址": "icon",
            "排序": "sort",
            "article_count": "article_count",
            "create_date": "create_date"
          }
        },
        exportExcelData: []
      }
    },
    onLoad() {
      this._filter = {}
    },
    onReady() {
      this.$refs.udb.loadData()
    },
    methods: {
      onqueryload(data) {
        this.exportExcelData = data
      },
      getWhere() {
        const query = this.query.trim()
        if (!query) {
          return ''
        }
        const queryRe = new RegExp(query, 'i')
        return dbSearchFields.map(name => queryRe + '.test(' + name + ')').join(' || ')
      },
      search() {
        const newWhere = this.getWhere();
        this.where = newWhere
        this.loadData()
      },
      loadData(clear = true) {
        this.$nextTick(()=>{
            this.$refs.udb.loadData({
              clear
            })  
        })  
      },
      onPageChanged(e) {
        this.selectedIndexs.length = 0
        this.$refs.table.clearSelection()
        this.$refs.udb.loadData({
          current: e.current
        })
      },
      navigateTo(url, clear) {
        // clear 表示刷新列表时是否清除页码，true 表示刷新并回到列表第 1 页，默认为 true
        uni.navigateTo({
          url,
          events: {
            refreshData: () => {
              this.loadData(clear)
            }
          }
        })
      },
      // 多选处理
      selectedItems() {
        var dataList = this.$refs.udb.dataList
        return this.selectedIndexs.map(i => dataList[i]._id)
      },
      // 批量删除
      delTable() {
        this.$refs.udb.remove(this.selectedItems())
      },
      // 多选
      selectionChange(e) {
        this.selectedIndexs = e.detail.index
      },
      confirmDelete(id) {
        this.$refs.udb.remove(id)
      },
      sortChange(e, name) {
        this.orderByFieldName = name;
        if (e.order) {
          this.orderby = name + ' ' + orderByMapping[e.order]
        } else {
          this.orderby = ''
        }
        this.$refs.table.clearSelection()
        this.$nextTick(() => {
          this.$refs.udb.loadData()
        })
      },
      filterChange(e, name) {
        this._filter[name] = {
          type: e.filterType,
          value: e.filter
        }
        let whereArray = []
        for (let var1 in this._filter) {
          let { type, value } = this._filter[var1]
          switch (type) {
            case "search":
              if (typeof value === 'string' && value.length) {
                whereArray.push(`/${value}/.test(${var1})`)
              }
              break;
            case "select":
              if (value.length) {
                let list = []
                for (let s of value) {
                  list.push(`'${var1}'==${s}`)
                }
                whereArray.push("(" + list.join(' || ') + ")")
              }
              break;
            case "range":
              if (value.length) {
                  let gt = value[0]
                  let lt = value[1]
                  whereArray.push(`('${name}'>=${gt} && '${name}'<=${lt})`)
              }
              break;
          }
        }
        if (whereArray.length) {
          this.where = whereArray.join(' && ')
        } else {
          this.where = ''
        }
        this.$nextTick(() => {
          this.$refs.udb.loadData()
        })
      }
    }
  }
</script>
<style>
</style>

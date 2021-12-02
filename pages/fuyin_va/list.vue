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
      <unicloud-db ref="udb" collection="fuyin_va" field="name,mobile,idcard_type,from_abroad,department_id,address_home_type,address_home,address_work_type,address_work,vaccine_status,status,comment,idcard,create_time" :where="where" page-data="replace"
        :orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
        v-slot:default="{data,pagination,loading,error,options}" :options="options" loadtime="manual" @load="onqueryload">
        <uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection" @selection-change="selectionChange">
          <uni-tr>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'name')" sortable @sort-change="sortChange($event, 'name')">姓名</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'mobile')" sortable @sort-change="sortChange($event, 'mobile')">手机号码</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.idcard_type_localdata" @filter-change="filterChange($event, 'idcard_type')">证件类型</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.from_abroad_localdata" @filter-change="filterChange($event, 'from_abroad')">户籍</uni-th>
            <uni-th align="center">部门</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.address_home_type_localdata" @filter-change="filterChange($event, 'address_home_type')">现居住地</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'address_home')" sortable @sort-change="sortChange($event, 'address_home')">现居住地详细地址</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.address_work_type_localdata" @filter-change="filterChange($event, 'address_work_type')">现工作地</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'address_work')" sortable @sort-change="sortChange($event, 'address_work')">工作地详细地址</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.vaccine_status_localdata" @filter-change="filterChange($event, 'vaccine_status')">接种疫苗状态</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.status_localdata" @filter-change="filterChange($event, 'status')">预约记录状态</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'comment')" sortable @sort-change="sortChange($event, 'comment')">备注</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'idcard')" sortable @sort-change="sortChange($event, 'idcard')">证件号码</uni-th>
            <uni-th align="center" filter-type="timestamp" @filter-change="filterChange($event, 'create_time')" sortable @sort-change="sortChange($event, 'create_time')">创建时间</uni-th>
            <uni-th align="center">操作</uni-th>
          </uni-tr>
          <uni-tr v-for="(item,index) in data" :key="index">
            <uni-td align="center">{{item.name}}</uni-td>
            <uni-td align="center">{{item.mobile}}</uni-td>
            <uni-td align="center">{{options.idcard_type_valuetotext[item.idcard_type]}}</uni-td>
            <uni-td align="center">{{options.from_abroad_valuetotext[item.from_abroad]}}</uni-td>
            <uni-td align="center">{{ item.department_id[0]}}</uni-td>
            <uni-td align="center">{{options.address_home_type_valuetotext[item.address_home_type]}}</uni-td>
            <uni-td align="center">{{item.address_home}}</uni-td>
            <uni-td align="center">{{options.address_work_type_valuetotext[item.address_work_type]}}</uni-td>
            <uni-td align="center">{{item.address_work}}</uni-td>
            <uni-td align="center">{{options.vaccine_status_valuetotext[item.vaccine_status]}}</uni-td>
            <uni-td align="center">{{options.status_valuetotext[item.status]}}</uni-td>
            <uni-td align="center">{{item.comment}}</uni-td>
            <uni-td align="center">{{item.idcard}}</uni-td>
            <uni-td align="center">
              <uni-dateformat :threshold="[0, 0]" :date="item.create_time"></uni-dateformat>
            </uni-td>
            <uni-td align="center">
              <view class="uni-group">
                <button @click="navigateTo('./edit?id='+item._id, false)" class="uni-button" size="mini" type="primary">审核</button>
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
  import { enumConverter, filterToWhere } from '../../js_sdk/validator/fuyin_va.js';

  const db = uniCloud.database()
  // 表查询配置
  const dbOrderBy = '' // 排序字段
  const dbSearchFields = ['name','mobile'] // 模糊搜索字段，支持模糊搜索的字段列表
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
          filterData: {
            "idcard_type_localdata": [
              {
                "text": "身份证",
                "value": 0
              },
              {
                "text": "护照",
                "value": 1
              },
              {
                "text": "军官证",
                "value": 2
              },
              {
                "text": "港澳身份证",
                "value": 3
              }
            ],
            "from_abroad_localdata": [
              {
                "text": "本市户籍",
                "value": 0
              },
              {
                "text": "外省户籍",
                "value": 1
              },
              {
                "text": "港澳台",
                "value": 2
              },
              {
                "text": "外国籍",
                "value": 3
              }
            ],
            "address_home_type_localdata": [
              {
                "text": "本区",
                "value": 0
              },
              {
                "text": "外区",
                "value": 1
              }
            ],
            "address_work_type_localdata": [
              {
                "text": "本区",
                "value": 0
              },
              {
                "text": "外区",
                "value": 1
              }
            ],
            "vaccine_status_localdata": [
              {
                "text": "未接种过新冠疫苗",
                "value": 0
              },
              {
                "text": "已接种第一针新冠疫苗",
                "value": 1
              },
              {
                "text": "已接种第二针新冠疫苗",
                "value": 2
              }
            ],
            "status_localdata": [
              {
                "text": "已预约",
                "value": 0
              },
              {
                "text": "已通知",
                "value": 1
              },
              {
                "text": "已失效",
                "value": 2
              }
            ]
          },
          ...enumConverter
        },
        imageStyles: {
          width: 64,
          height: 64
        },
        exportExcel: {
          "filename": "fuyin_va.xls",
          "type": "xls",
          "fields": {
            "姓名": "name",
            "手机号码": "mobile",
            "证件类型": "idcard_type",
            "户籍": "from_abroad",
            "部门": "department_id",
            "现居住地": "address_home_type",
            "现居住地详细地址": "address_home",
            "现工作地": "address_work_type",
            "工作地详细地址": "address_work",
            "接种疫苗状态": "vaccine_status",
            "预约记录状态": "status",
            "备注": "comment",
            "证件号码": "idcard",
            "创建时间": "create_time"
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
        const newWhere = this.getWhere()
        this.where = newWhere
        this.$nextTick(() => {
          this.loadData()
        })
      },
      loadData(clear = true) {
        this.$refs.udb.loadData({
          clear
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
        this.$refs.udb.remove(this.selectedItems(), {
          success:(res) => {
            this.$refs.table.clearSelection()
          }
        })
      },
      // 多选
      selectionChange(e) {
        this.selectedIndexs = e.detail.index
      },
      confirmDelete(id) {
        this.$refs.udb.remove(id, {
          success:(res) => {
            this.$refs.table.clearSelection()
          }
        })
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
        let newWhere = filterToWhere(this._filter, db.command)
        if (Object.keys(newWhere).length) {
          this.where = newWhere
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

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
      <unicloud-db ref="udb" collection="fuyin_returnees,opendb-city-china" field="name,mobile,idcard_type,idcard,address,from_abroad,province_code,city_code,area_code{name},from_address,transport,transport_no,status,comment,Health_code,na_test_time,na_test_result,temperature,cough" :where="where" page-data="replace"
        :orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
        v-slot:default="{data,pagination,loading,error,options}" :options="options" loadtime="manual" @load="onqueryload">
        <uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection" @selection-change="selectionChange">
          <uni-tr>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'name')" sortable @sort-change="sortChange($event, 'name')">姓名</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'mobile')" sortable @sort-change="sortChange($event, 'mobile')">手机号码</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.idcard_type_localdata" @filter-change="filterChange($event, 'idcard_type')">证件类型</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'idcard')" sortable @sort-change="sortChange($event, 'idcard')">证件号码</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'address')" sortable @sort-change="sortChange($event, 'address')">本地住址</uni-th>
            <uni-th align="center" sortable @sort-change="sortChange($event, 'from_abroad')">是否来自国外</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'province_code')" sortable @sort-change="sortChange($event, 'province_code')">province_code</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'city_code')" sortable @sort-change="sortChange($event, 'city_code')">city_code</uni-th>
            <uni-th align="center">来源地省市区</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'from_address')" sortable @sort-change="sortChange($event, 'from_address')">来源地地址</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.transport_localdata" @filter-change="filterChange($event, 'transport')">交通工具类型</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'transport_no')" sortable @sort-change="sortChange($event, 'transport_no')">交通工具班次</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.status_localdata" @filter-change="filterChange($event, 'status')">状态</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'comment')" sortable @sort-change="sortChange($event, 'comment')">备注</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.Health_code_localdata" @filter-change="filterChange($event, 'Health_code')">健康码颜色</uni-th>
            <uni-th align="center" filter-type="timestamp" @filter-change="filterChange($event, 'na_test_time')" sortable @sort-change="sortChange($event, 'na_test_time')">核酸检测时间</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.na_test_result_localdata" @filter-change="filterChange($event, 'na_test_result')">核酸检测结果</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'temperature')" sortable @sort-change="sortChange($event, 'temperature')">体温</uni-th>
            <uni-th align="center" sortable @sort-change="sortChange($event, 'cough')">是否咳嗽</uni-th>
            <uni-th align="center">操作</uni-th>
          </uni-tr>
          <uni-tr v-for="(item,index) in data" :key="index">
            <uni-td align="center">{{item.name}}</uni-td>
            <uni-td align="center">{{item.mobile}}</uni-td>
            <uni-td align="center">{{options.idcard_type_valuetotext[item.idcard_type]}}</uni-td>
            <uni-td align="center">{{item.idcard}}</uni-td>
            <uni-td align="center">{{item.address}}</uni-td>
            <uni-td align="center">{{item.from_abroad == true ? '✅' : '❌'}}</uni-td>
            <uni-td align="center">{{item.province_code}}</uni-td>
            <uni-td align="center">{{item.city_code}}</uni-td>
            <uni-td align="center">{{item.area_code && item.area_code[0] && item.area_code[0].name}}</uni-td>
            <uni-td align="center">{{item.from_address}}</uni-td>
            <uni-td align="center">{{options.transport_valuetotext[item.transport]}}</uni-td>
            <uni-td align="center">{{item.transport_no}}</uni-td>
            <uni-td align="center">{{options.status_valuetotext[item.status]}}</uni-td>
            <uni-td align="center">{{item.comment}}</uni-td>
            <uni-td align="center">{{options.Health_code_valuetotext[item.Health_code]}}</uni-td>
            <uni-td align="center">
              <uni-dateformat :threshold="[0, 0]" :date="item.na_test_time"></uni-dateformat>
            </uni-td>
            <uni-td align="center">{{options.na_test_result_valuetotext[item.na_test_result]}}</uni-td>
            <uni-td align="center">{{item.temperature}}</uni-td>
            <uni-td align="center">{{item.cough == true ? '✅' : '❌'}}</uni-td>
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
  import { enumConverter, filterToWhere } from '../../js_sdk/validator/fuyin_returnees.js';

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
            "transport_localdata": [
              {
                "text": "飞机",
                "value": 0
              },
              {
                "text": "火车",
                "value": 1
              },
              {
                "text": "长途汽车",
                "value": 2
              },
              {
                "text": "自驾",
                "value": 3
              },
              {
                "text": "轮船",
                "value": 4
              }
            ],
            "status_localdata": [
              {
                "text": "居家隔离",
                "value": 0
              },
              {
                "text": "集中隔离",
                "value": 1
              },
              {
                "text": "解除隔离",
                "value": 2
              },
              {
                "text": "送医",
                "value": 3
              },
              {
                "text": "出院居家隔离",
                "value": 4
              },
              {
                "text": "康复",
                "value": 5
              },
              {
                "text": "死亡",
                "value": 6
              }
            ],
            "Health_code_localdata": [
              {
                "text": "绿色",
                "value": 0
              },
              {
                "text": "黄色",
                "value": 1
              },
              {
                "text": "红色",
                "value": 2
              }
            ],
            "na_test_result_localdata": [
              {
                "text": "阴性",
                "value": 0
              },
              {
                "text": "阳性",
                "value": 1
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
          "filename": "fuyin_returnees.xls",
          "type": "xls",
          "fields": {
            "姓名": "name",
            "手机号码": "mobile",
            "证件类型": "idcard_type",
            "证件号码": "idcard",
            "本地住址": "address",
            "是否来自国外": "from_abroad",
            "province_code": "province_code",
            "city_code": "city_code",
            "来源地省市区": "area_code",
            "来源地地址": "from_address",
            "交通工具类型": "transport",
            "交通工具班次": "transport_no",
            "状态": "status",
            "备注": "comment",
            "健康码颜色": "Health_code",
            "核酸检测时间": "na_test_time",
            "核酸检测结果": "na_test_result",
            "体温": "temperature",
            "是否咳嗽": "cough"
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

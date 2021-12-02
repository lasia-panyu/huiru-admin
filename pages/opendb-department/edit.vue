<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="parent_id" label="上级机构号" required>
        <uni-easyinput placeholder="上级机构号" v-model="formData.parent_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="name" label="部门名称" required>
        <uni-easyinput placeholder="部门名称" v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="level" label="机构级别" required>
        <uni-easyinput placeholder="机构级别" type="number" v-model="formData.level"></uni-easyinput>
      </uni-forms-item>
 <!--     <uni-forms-item name="sort" label="显示顺序">
        <uni-easyinput placeholder="部门在当前层级下的顺序，由小到大" type="number" v-model="formData.sort"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="manager_uid" label="">
        <uni-easyinput placeholder="部门主管的userid， 参考`uni-id-users` 表" v-model="formData.manager_uid"></uni-easyinput>
      </uni-forms-item> -->
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
            <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/opendb-department.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'opendb-department';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        result[key] = validator[key]
      }
    }
    return result
  }

  export default {
    data() {
      let formData = {
        "parent_id": "",
        "name": "",
        "level": null,
        "sort": null,
        "manager_uid": ""
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onLoad(e) {
      if (e.id) {
        const id = e.id
        this.formDataId = id
        this.getDetail(id)
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      /**
       * 触发表单提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          this.submitForm(res)
        }).catch(() => {
          uni.hideLoading()
        })
      },

      submitForm(value) {
        // 使用 clientDB 提交数据
        db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
          uni.showToast({
            title: '修改成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 获取表单数据
       * @param {Object} id
       */
      getDetail(id) {
        uni.showLoading({
          mask: true
        })
        db.collection(dbCollectionName).doc(id).field("parent_id,name,level,sort,manager_uid").get().then((res) => {
          const data = res.result.data[0]
          if (data) {
            this.formData = data
          }
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      }
    }
  }
</script>

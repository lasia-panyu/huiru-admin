<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="username" label="用户名">
        <uni-easyinput placeholder="用户名，不允许重复" v-model="formData.username" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="nickname" label="昵称">
        <uni-easyinput placeholder="用户昵称" v-model="formData.nickname" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="gender" label="性别">
        <uni-data-checkbox v-model="formData.gender" :localdata="formOptions.gender_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="status" label="用户状态">
        <uni-data-checkbox v-model="formData.status" :localdata="formOptions.status_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="mobile" label="手机号码">
        <uni-easyinput placeholder="手机号码" v-model="formData.mobile" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="email" label="邮箱">
        <uni-easyinput placeholder="邮箱地址" v-model="formData.email" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="role" label="角色">
        <uni-data-checkbox :multiple="true" v-model="formData.role" collection="uni-id-roles" field="role_id as value, role_name as text"></uni-data-checkbox>
      </uni-forms-item>
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
  import { validator } from '../../js_sdk/validator/uni-id-users.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'uni-id-users';

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
        "username": "",
        "nickname": "",
        "gender": 0,
        "status": 0,
        "mobile": "",
        "email": "",
        "role": []
      }
      return {
        formData,
        formOptions: {
          "gender_localdata": [
            {
              "text": "未知",
              "value": 0
            },
            {
              "text": "男",
              "value": 1
            },
            {
              "text": "女",
              "value": 2
            }
          ],
          "status_localdata": [
            {
              "text": "正常",
              "value": 0
            },
            {
              "text": "禁用",
              "value": 1
            },
            {
              "text": "审核中",
              "value": 2
            },
            {
              "text": "审核拒绝",
              "value": 3
            }
          ]
        },
        rules: {
          ...getValidator(Object.keys(formData))
        }
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
        db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            title: '新增成功'
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
      }
    }
  }
</script>

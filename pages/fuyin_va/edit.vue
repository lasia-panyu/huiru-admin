<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="name" label="姓名" required>
        <uni-easyinput v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="mobile" label="手机号码" required>
        <uni-easyinput v-model="formData.mobile" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="idcard_type" label="证件类型" required>
        <uni-data-checkbox v-model="formData.idcard_type" :localdata="formOptions.idcard_type_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="from_abroad" label="户籍" required>
        <uni-data-checkbox v-model="formData.from_abroad" :localdata="formOptions.from_abroad_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="department_id" label="部门" required>
        <uni-data-picker self-field="_id" parent-field="parent_id" v-model="formData.department_id" collection="opendb-department" orderby="_id asc" field="_id as value, name as text"></uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="address_home_type" label="现居住地">
        <uni-data-checkbox v-model="formData.address_home_type" :localdata="formOptions.address_home_type_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="address_home" label="现居住地详细地址">
        <uni-easyinput v-model="formData.address_home" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="address_work_type" label="现工作地">
        <uni-data-checkbox v-model="formData.address_work_type" :localdata="formOptions.address_work_type_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="address_work" label="工作地详细地址">
        <uni-easyinput v-model="formData.address_work" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="vaccine_status" label="接种疫苗状态">
        <uni-data-checkbox v-model="formData.vaccine_status" :localdata="formOptions.vaccine_status_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="status" label="预约记录状态" required>
        <uni-data-checkbox v-model="formData.status" :localdata="formOptions.status_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="comment" label="备注">
        <textarea @input="binddata('comment', $event.detail.value)" class="uni-textarea-border" v-model="formData.comment" trim="both"></textarea>
      </uni-forms-item>
      <uni-forms-item name="idcard" label="证件号码" required>
        <uni-easyinput v-model="formData.idcard" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="create_time" label="创建时间">
        <uni-datetime-picker return-type="timestamp" v-model="formData.create_time"></uni-datetime-picker>
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
  import { validator } from '../../js_sdk/validator/fuyin_va.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'fuyin_va';

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
        "name": "",
        "mobile": "",
        "idcard_type": 0,
        "from_abroad": null,
        "department_id": [],
        "address_home_type": null,
        "address_home": "",
        "address_work_type": null,
        "address_work": "",
        "vaccine_status": null,
        "status": 0,
        "comment": "",
        "idcard": "",
        "create_time": null
      }
      return {
        formData,
        formOptions: {
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
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
     watch:{
         formData:{//深度监听，可监听到对象、数组的变化
             handler(val, oldVal){				 
				 console.log(val)
				 if(typeof(val.department_id) != "object"){
					 this.formData.department_id=[val.department_id];
				 }
             },
             deep:true //true 深度监听
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
        db.collection(dbCollectionName).doc(id).field("name,mobile,idcard_type,from_abroad,department_id,address_home_type,address_home,address_work_type,address_work,vaccine_status,status,comment,idcard,create_time").get().then((res) => {
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

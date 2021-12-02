<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
	  <uni-forms-item name="_id" label="机构号" required>
		  <uni-easyinput placeholder="机构号" v-model="formData._id"></uni-easyinput>
	  </uni-forms-item>
      <uni-forms-item name="parent_id" label="上级机构号" required>
        <uni-easyinput placeholder="父级部门ID" v-model="formData.parent_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="name" label="部门名称" required>
        <uni-easyinput placeholder="部门名称" v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="level" label="机构级别" required>
        <uni-easyinput placeholder="机构级别" type="number" v-model="formData.level"></uni-easyinput>
      </uni-forms-item>
<!--      <uni-forms-item name="sort" label="显示顺序">
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
        _id:"",  
        formData,
        formOptions: {},
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
        uni.showLoading();
        this.$refs.form.validate().then((res) => {
		  console.log(res)
          this.submitForm(res)		 
        }).catch(() => {
          uni.hideLoading()
        })
      },

      async submitForm(value) {
        // 使用 clientDB 提交数据
		let result=await this.$util.cloudFunction("user","addBranch",value);
		console.log(result);
		uni.hideLoading();
		if(result){
			      uni.showToast({
			        title: '新增成功'
			      })
				  	console.log(value)
			      this.getOpenerEventChannel().emit('refreshData')
			      setTimeout(() => uni.navigateBack(), 500)
		}else{
			      uni.showModal({
			        content: err.message || '请求服务失败',
			        showCancel: false
			      })
		}
	  }
    //     db.collection(dbCollectionName).doc(this.formData._id).set(value).then((res) => {
    //       uni.showToast({
    //         title: '新增成功'
    //       })
		  // 	console.log(value)
    //       this.getOpenerEventChannel().emit('refreshData')
    //       setTimeout(() => uni.navigateBack(), 500)
    //     }).catch((err) => {
		  // console.log(err)
    //       uni.showModal({
    //         content: err.message || '请求服务失败',
    //         showCancel: false
    //       })
    //     }).finally(() => {
		  // console.log(value)
    //       uni.hideLoading()
    //     })
    //   }
    }
  }
</script>

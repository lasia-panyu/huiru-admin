<template>
  <view class="uni-container" id="unicontainer">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="title" label="标题" required>
        <uni-easyinput placeholder="标题" v-model="formData.title" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="content" label="文章内容" required>
         <pangu-editor v-on:input='input(arguments)' :newscontent="formData.content" :style="style"  :v-show="flag"></pangu-editor>       
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
  import { validator } from '../../js_sdk/validator/fuyin_privacy.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'fuyin_privacy';

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
        "title": "",
        "content": ""
      }
      return {
		style: {},
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
	mounted(){
	  uni.createSelectorQuery().in(this).select("#unicontainer").boundingClientRect(
	  	data => {
	  		console.log(data.width);
	  		this.$set(this.style,"width",(data.width * 0.8) + "px")
	  		this.style = {
	  			"width": +(data.width * 0.8) + "px"
	  		};
	  }).exec();
	  this.flag=false;
	  this.flag=true;
	},
    methods: {
		input(option){
			this.formData.content=option[0];
			console.log(this.formData.content);
		},
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
        db.collection(dbCollectionName).doc(id).field("title,content").get().then((res) => {
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

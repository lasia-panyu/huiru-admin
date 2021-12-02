<template>
  <view class="uni-container" id="unicontainer">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
  <!--    <uni-forms-item name="user_id" label="" required>
        <uni-easyinput placeholder="文章作者ID， 参考`uni-id-users` 表" v-model="formData.user_id"></uni-easyinput>
      </uni-forms-item> -->
      <uni-forms-item name="category_id" label="分类">
        <uni-data-checkbox v-model="formData.category_id" collection="opendb-news-categories" field="name as text, _id as value"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="title" label="标题" required>
        <uni-easyinput placeholder="标题" v-model="formData.title" trim="both"></uni-easyinput>
      </uni-forms-item>
  <!--    <uni-forms-item name="excerpt" label="文章摘录">
        <uni-easyinput placeholder="文章摘录" v-model="formData.excerpt" trim="both"></uni-easyinput>
      </uni-forms-item> -->
      <uni-forms-item name="article_status" label="文章状态">
        <uni-data-checkbox v-model="formData.article_status" :localdata="formOptions.article_status_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="comment_status" label="开放评论">
        <uni-data-checkbox v-model="formData.comment_status" :localdata="formOptions.comment_status_localdata"></uni-data-checkbox>
      </uni-forms-item>
    <!--  <uni-forms-item name="last_comment_user_id" label="">
        <uni-easyinput placeholder="最后回复用户 id，参考`uni-id-users` 表" v-model="formData.last_comment_user_id"></uni-easyinput>
      </uni-forms-item> -->
    <!--  <uni-forms-item name="avatar" label="封面大图">
        <uni-easyinput placeholder="缩略图地址" v-model="formData.avatar" trim="both"></uni-easyinput>
      </uni-forms-item> -->
    <!--  <uni-forms-item name="publish_date" label="发表时间">
        <uni-datetime-picker return-type="timestamp"  v-model="formData.publish_date"></uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item name="last_modify_date" label="最后修改时间">
        <uni-datetime-picker return-type="timestamp" v-model="formData.last_modify_date"></uni-datetime-picker>
      </uni-forms-item> -->
  <!--    <uni-forms-item name="mode" label="排版显示模式">
        <undefined v-model="formData.mode"></undefined>
      </uni-forms-item> -->
	  <uni-forms-item name="content" label="文章内容" labelPosition="top"  required>
	   <!-- <uni-easyinput placeholder="文章内容" v-model="formData.content" trim="right"></uni-easyinput> -->
	   
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
  import { validator } from '../../js_sdk/validator/opendb-news-articles.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'opendb-news-articles';

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
        "user_id": "",
        "category_id": "",
        "title": "",
        "content": "",
        "excerpt": "",
        "article_status": 0,
        "comment_status": null,
        "last_comment_user_id": "",
        "avatar": "",
        "publish_date": null,
        "last_modify_date": null,
        "mode": null,
      }
      return {
        formData,
        formOptions: {
          "article_status_localdata": [
            {
              "value": 0,
              "text": "草稿箱"
            },
            {
              "value": 1,
              "text": "已发布"
            }
          ],
          "comment_status_localdata": [
            {
              "value": 0,
              "text": "关闭"
            },
            {
              "value": 1,
              "text": "开放"
            }
          ]
        },
        rules: {
          ...getValidator(Object.keys(formData))
        },
		style: {},
		flag:true,
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
	  		this.$set(this.style,"width",(data.width - 30) + "px")
	  		this.style = {
	  			"width": +(data.width - 30) + "px"
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
      async submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          this.submitForm(res)
        }).catch(() => {
          uni.hideLoading()
        })
      },

      async submitForm(value) {
		let result=await this.$util.cloudFunction("uni-id-cf",'getCurrentUserInfo',{});
		value=this.$util.newsshuffle([value])[0];
		value.mode=value.type;
		value.brief={};
		value.brief.branch= result.userInfo.department_id[0],
		value.brief.name=result.userInfo.nickname,
		value.brief.video="",
		delete value.type
		console.log(result);
		value.user_id=result.userInfo._id;  
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
        db.collection(dbCollectionName).doc(id).field("user_id,category_id,title,content,excerpt,article_status,comment_status,last_comment_user_id,avatar,publish_date,last_modify_date,mode").get().then((res) => {
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

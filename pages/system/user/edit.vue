<template>
	<view class="uni-container">
		<uni-forms ref="form" :value="formData" validateTrigger="bind">
			<uni-forms-item name="department_id" label="部门">
				<uni-data-picker self-field="_id" parent-field="parent_id" v-model="formData.department_id"
					collection="opendb-department" orderby="_id asc" field="_id as value, name as text">
				</uni-data-picker>
			</uni-forms-item>
			<uni-forms-item name="username" label="柜员号">
				<uni-easyinput placeholder="柜员号，不允许重复" v-model="formData.username" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="gender" label="性别">
				<uni-data-checkbox v-model="formData.gender" :localdata="formOptions.gender_localdata">
				</uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item name="status" label="用户状态">
				<uni-data-checkbox v-model="formData.status" :localdata="formOptions.status_localdata">
				</uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item name="mobile" label="手机号码">
				<uni-easyinput placeholder="手机号码" v-model="formData.mobile" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="email" label="身份证">
				<uni-easyinput placeholder="身份证" v-model="formData.email" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="nickname" label="用户名">
				<uni-easyinput placeholder="用户名" v-model="formData.nickname" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="role" label="角色">
			  <uni-data-checkbox :multiple="true" v-model="formData.role" collection="uni-id-roles" field="role_id as value, role_name as text"></uni-data-checkbox>
			</uni-forms-item>

		</uni-forms>
		<uni-forms-item :name="showPassword ? 'password' : ''" label="重置密码">
			<span v-show="!showPassword" class="reset-password-btn" @click="trigger">点击重置密码</span>
			<uni-easyinput v-show="showPassword" v-model="password" :clearable="false" placeholder="请输入重置密码">
				<view slot="right" class="cancel-reset-password-btn" @click="trigger">取消</view>
			</uni-easyinput>
		</uni-forms-item>
		<view class="uni-button-group">
			<button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
			<navigator open-type="navigateBack" style="margin-left: 15px;">
				<button class="uni-button" style="width: 100px;">返回</button>
			</navigator>
		</view>
	</view>
</template>

<script>
	import {
		validator
	} from '../../../js_sdk/validator/uni-id-users.js';

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
				"gender": 0,
				"status": 0,
				"mobile": "",
				"email": "",
				"department_id": [],
				"nickname": "",
				"role": []
			}
			return {
				password: "",
				showPassword: false,
				index: 0,
				formData,
				formOptions: {
					"gender_localdata": [{
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
					"status_localdata": [{
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
		watch: {
			formData: { //深度监听，可监听到对象、数组的变化
				handler(val, oldVal) {
					console.log(val);
					console.log(val.department_id.length);
					if (this.formData.department_id.length == 0) {
						console.log("line140");
						this.formData.department_id = "00001"
					}
					if (val.department_id && val.department_id.length > 1) {
						this.formData.department_id = val.department_id;
					}
					if(val.department_id.length == 1){
						this.formData.department_id = val.department_id[0];
					}
					if(val.mobile){
						console.log(val.mobile)
						this.formData.mobile=val.mobile
					}
				},
				deep: true //true 深度监听
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
			this.$refs.form.setRules(this.rules);
		},
		onShow(){
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
			trigger() {
				this.showPassword = !this.showPassword
			},
			async resetPWd(resetData) {
				console.log(resetData)
				let result=await this.$util.cloudFunction("user","resetPwd",resetData);
				return result
				;
				// this.$request('system/user/resetPwd', resetData)
				// 	.then((res)=>{
				// 		console.log(res)
				// 	}).catch(err => {
				// 		console.log(err)
				// 		uni.showModal({
				// 			content: err.message || '请求服务失败',
				// 			showCancel: false
				// 		})
				// 	}).finally()
			},
			async submitForm(value) {
				let resetData = {
					uid: this.formDataId,
					password: this.password
				}
				// 使用 clientDB 提交数据
				db.collection(dbCollectionName).doc(this.formDataId).update(value).then(async(res) => {
					if (this.showPassword && resetData.password) {
						console.log(resetData);
						let result = await this.resetPWd(resetData);
						if (result.code!=0){
							uni.showModal({
								content: result.msg ,
								showCancel: false
							})
						}else{
							uni.showToast({
								title: "更新成功！！！"
							})
							this.getOpenerEventChannel().emit('refreshData')
							setTimeout(() => uni.navigateBack(), 500)
						}
					}else{
						this.getOpenerEventChannel().emit('refreshData')
						setTimeout(() => uni.navigateBack(), 500)
					}			
					
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
				db.collection(dbCollectionName).doc(id).field("username,gender,status,mobile,email,department_id,nickname,role")
					.get().then((res) => {
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
<style>
	.reset-password-btn {
		/* height: 100%; */
		line-height: 36px;
		color: #007AFF;
		text-decoration: underline;
		cursor: pointer;
	}

	.cancel-reset-password-btn {
		color: #007AFF;
		padding-right: 10px;
		cursor: pointer;
	}
</style>

<template>
	<view >
        <unicloud-db ref="udb" v-slot:default="{data, pagination, loading, hasMore, error, options}"
        	collection="fuyin_privacy" :where="`_id=='${privacyid}'`" >
			<view  style="text-align: center;margin-bottom: 30px;margin-top: 20px;">{{data[0].title}}</view>
			
			<hr/>
			<rich-text :nodes="data[0].content"></rich-text>
			
        </unicloud-db>				
	</view>
</template>

<script>
	export default {
		data() {
			return {
				privacyid:""
			};
		},
		onLoad(option){
			console.log(option);
			this.privacyid=option.id;
			
		},
		onReady() {
			this.$refs.udb.loadData();
		}
	};
</script>
<style lang='scss'>
</style>

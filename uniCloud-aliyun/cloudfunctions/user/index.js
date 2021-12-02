'use strict';
const uniID = require('uni-id')
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)

	if (event.action == "resetPwd") {
		const payload = await uniID.checkToken(event.uniIdToken)
		if (payload.code) {
			return payload
		}
		if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/.test(event.param.password)){
		    return {
		      code: 401,
		      msg: '密码至少包含大写字母，小写字母，数字，且不少于6位'
		    }
        }
		const res = await uniID.resetPwd(event.param)
		return res
	}
	
	if (event.action == "add") {
		if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/.test(event.param.password)){
		    return {
		      code: 401,
		      msg: '密码至少包含大写字母，小写字母，数字，且不少于6位'
		    }
	    }
		const res = await uniID.register(event.param)
		return res
	}
	if(event.action=="addBranch"){
		   let collection = db.collection('opendb-department');
		   let id=event.param._id;
		   delete event.param._id
		   let result=await collection.doc(id).set(event.param);
		   console.log(result);
		   return result;
		
	}
	//返回数据给客户端
	return event
};

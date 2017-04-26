var co = require('co');
var OSS = require('ali-oss');
var client = new OSS({
  region: 'oss-cn-shanghai',
  accessKeyId: 'LTAIQOSGGZcTplJQ',
  accessKeySecret: 'wbqjEwf76dQ4XBSD0vPvcXLrct0Xkk'
});


// co(function* () {
//   var result = yield client.listBuckets();
//   console.log(result);
// }).catch(function (err) {
//   console.log(err);
// });



// co(function* () {
//   client.useBucket('huchsite');
//   var result = yield client.list({
//     'max-keys': 5
//   });
//   console.log(result);
// }).catch(function (err) {
//   console.log(err);
// });

function aliup(name,path,callback){
	var aliresult;
	co(function* () {
	  client.useBucket('huchsite');
	  var result = yield client.put(name, path);
	  aliresult =  result;
	  callback(aliresult)
	}).then(function(resurt){
		console.log(resurt,"gogogooogogogooggo")
	}).catch(function (err) {
	  console.log(err);
	});
	console.log(aliresult)
	return aliresult

}

module.exports=aliup;




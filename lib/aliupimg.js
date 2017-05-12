var co = require('co');
var OSS = require('ali-oss');

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

// co(function* () {
//   client.useBucket('huchsite');
//   var result = yield client.list({
//     'max-keys': 5
//   });
//   console.log(result);
// }).catch(function (err) {
//   console.log(err);
// });


// co(function* () {
// 	  client.useBucket('huchsite');
// 	  var result = yield client.put("银河护卫队字体变形", 'lib/yhzt2.zip');
// 	  aliresult =  result;
// 	  callback(aliresult)
// 	}).then(function(resurt){
// 		console.log(resurt,"gogogooogogogooggo")
// 	}).catch(function (err) {
// 	  console.log(err);
// 	});




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




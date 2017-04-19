
var qiniu = require("qiniu");


qiniu.conf.ACCESS_KEY = 'YlvRbO3ufTDyOEm5rdPKQbyjDpeheIV22QQQcKMT';
qiniu.conf.SECRET_KEY = 'eU0gZN7YfNAja5zH3s7M1T-MCzwxmPK5eS-Ftikp';


bucket = 'ershaoye';
//上传到七牛后保存的文件名
key = 'my-nodejs.jpg';


function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  // putPolicy.callbackUrl = 'http://your.domain.com/callback';
  // putPolicy.callbackBody = 'filename=$(fname)&filesize=$(fsize)';
  return putPolicy.token();
}



// /生成上传 Token
token = uptoken(bucket, key);

console.log(token)
//要上传文件的本地路径
filePath = '12.jpg'
//构造上传函数
function uploadFile(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        console.log(123124123124123)
        console.log(ret.hash, ret.key, ret.persistentId);       
      } else {
        // 上传失败， 处理返回代码
        console.log(err);
      }
  });
}
//调用uploadFile上传
uploadFile(token, key, filePath);
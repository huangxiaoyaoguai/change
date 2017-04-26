
var express = require('express');
var app = express();

var callfile = require('child_process'); 

var multiparty = require('multiparty');
var formidable = require('formidable');
var compression = require('compression')


var aliUpimg = require('./aliupimg.js');

var co = require('co');
var path = require('path')
var connetsql = require('./mysql.js')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))


app.set("view engine","ejs");
app.set('views', './public');

app.use(compression()) //gzip


app.use('/dist', express.static('./dist/src'));
app.use('/common', express.static('./common'));
app.use('/common',express.static('common'));

app.use('/client', express.static('./dist/client'));

app.use('/', express.static('./dist/client'));

app.get('/',function(req,res){
	res.sendfile('public/index.html')
})

app.get('/add',function(req,res){
    res.sendfile('public/index.html')
})

app.get('/detail/*',function(req,res){
    res.sendfile('public/index.html')
})




app.get('/api/getlist',function(req,res){
	var obj = {};
	obj.id=0;
	connetsql(obj,'find',function(sqres){
		var resresult = {};
		if(sqres.length){
			resresult.code=0;
			var clentarr = [];
			sqres.map(function(ele,i){
				var obj = {};
				obj.tags = ele.tag.split(',');
				obj.title=ele.title;
				obj.desc = ele.desc;
				obj.id = ele.id;
				obj.creat_time=ele.creat_time;
				clentarr.push(obj)
			})
			resresult.data = clentarr;
		}else{
			resresult.code=-1;
			resresult.msg="无此结果"
			resresult.data = sqres;
		}
		res.send(resresult)
		res.end();
	})
})


app.get('/api/getDetail',function(req,res){
	connetsql(req.query,'find',function(sqres){
		var resresult = {};
		if(sqres.length){
			resresult.code=0;
			resresult.data = sqres[0];
			resresult.data.tags = resresult.data.tag.split(',')
		}else{
			resresult.code=-1;
			resresult.msg="无此结果"
			resresult.data = sqres[0];
		}
		res.send(resresult)
		res.end();
	})
})



app.post('/api/add',function(req,res){
	connetsql(req.body,'add',function(sqres){
		res.send(sqres)
		res.end();
	})
})


app.get('/getapi',function(req,res){
	res.send('sdasfasda,hhahha,新的来了,sdasdasfa,asdas')

})

app.all('/gitpull',function(req,res){
	res.send('我不想备案,asdasda,asda1231231')
	callfile.exec('git pull',function(err,data){
	    if(err){
	    	console.log(err)
	    	return
	    }
	    callfile.exec('pm2 restart lib/app.js',function(err,data){
	    	if(err){
	    		console.log(err,'err')
	    	}
	    })

	  })
})


app.post('/upimage',function(req, res, next){

	var form = new multiparty.Form();

	form.parse(req, function(err, fields, files) {
		if(err){
        console.log('parse error: ' + err);
      }
	      var imgpath = files.upload[0].path;
	      var name = files.upload[0].originalFilename
	      console.log(name)

	      	var data
	      	var result = aliUpimg(name,imgpath,function(imgres){
	      		var url = imgres.url.replace('http','https');
	      		res.send(url)
	      		res.end();

	      	});
	      

	})
})




app.listen(6600,function(req,res){

	console.log("localhost:6000")
})


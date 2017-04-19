
var express = require('express');
var app = express();

var callfile = require('child_process'); 

var multiparty = require('multiparty');

// var aliUpimg = require('./aliupimg.js');

var co = require('co');
var path = require('path')




app.set("view engine","ejs");
app.set('views', './public');

console.log(__dirname)


app.use('/dist', express.static('./dist/src'));
app.use('/common', express.static('./common'));

app.use('/client', express.static('./dist/client'));

app.use('/', express.static('./dist/client'));





app.get('/',function(req,res){
	res.sendfile('public/index.html')

	// res.render('index', {js:'/common/res.js'}, function(err, html) {
 //            res.send(html);
 //        });

})

app.get('/home',function(req,res){
    // res.sendfile('index.html')

    res.render('index', {js:'/common/res.js'}, function(err, html) {
            res.send(html);
        });

})

// app.get('/manifest.*',function(req,res){

//     console.log(req.url)
//     res.sendfile('./dist/client'+req.url)
//     // res.render('index', {js:'/common/res.js'}, function(err, html) {
//     //         res.send(html);
//     //     });

// })
// app.get('/vendor.*',function(req,res){

//     console.log(req.url)
//     res.sendfile('./dist/client'+req.url)
//     // res.render('index', {js:'/common/res.js'}, function(err, html) {
//     //         res.send(html);
//     //     });

// })
// app.get('/bundle.*',function(req,res){

//     console.log(req.url)
//     res.sendfile('./dist/client'+req.url)
//     // res.render('index', {js:'/common/res.js'}, function(err, html) {
//     //         res.send(html);
//     //     });

// })


app.get('/chunk.*',function(req,res){

    console.log(req.url)
    res.sendfile('./dist/client'+req.url)
    // res.render('index', {js:'/common/res.js'}, function(err, html) {
    //         res.send(html);
    //     });

})

// app.get('/chunk.add.js',function(req,res){

//     console.log(1231241231,'laskdjalksjdl')
//     res.sendfile('./dist/client/chunk.add.js')
//     // res.render('index', {js:'/common/res.js'}, function(err, html) {
//     //         res.send(html);
//     //     });

// })


app.get('/add',function(req,res){
    // res.sendfile('index.html')
    res.sendfile('public/index.html')
    

    // res.render('index', {js:'/common/res.js'}, function(err, html) {
    //         res.send(html);
    //     });

})


app.get('/getapi',function(req,res){
	res.send('sdasfasda,hhahha,新的来了,sdasdasfa,asdas')

})


app.use('/common',express.static('common'));

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
	// console.log(req);
	var form = new multiparty.Form();
	form.encoding = 'utf-8';
	// form.uploadDir = "image/";
	form.parse(req, function(err, fields, files) {
		if(err){
        console.log('parse error: ' + err);
      }
		console.log(files.upload[0]);
      // console.log(files.path);
      var imgpath = files.upload[0].path;
      console.log(imgpath)

      	var result = aliUpimg('fenli',imgpath);
      	console.log('*********************************************************')

      console.log(result,'resultresult')


	})

})




app.listen(6600,function(req,res){

	console.log("localhost:6000")
})


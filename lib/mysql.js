var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'hc000000',
  database : 'huchsite'
});

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
 
//   console.log('connected as id ' + connection.threadId);
// });
 
// connection.query('select * from `xinjian`', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].name);
// });
 
// connection.end();
	// connection.connect();
	// 	var sqlState = 'SELECT * FROM `home` WHERE id = ' + connection.escape(2);
	// 	connection.query(sqlState, function (error, results, fields) {
	//   if (error) throw error;
	//   // console.log('The solution is: ', results);
	//   // callback(results)
	//   console.log(results)

	// });

	var pool;


module.exports=function(obj,type,callback){
	if(!pool){
		pool  = mysql.createPool({
			  connectionLimit : 10,
			  host            : 'localhost',
			  user            : 'root',
			  password        : 'hc000000',
			  database        : 'huchsite'
		});
	}else{


	}

	var sqlState = "";

	if(type=="add"){
		sqlState = 'INSERT INTO `home` SET ?';
		var post = {};
		post.title = obj.title;
		post.tag = obj.tag;
		post.data = obj.text;
		post.creat_time = +obj.time;
		post.desc = obj.desc;
		post.imgpath = obj.imgpath;
		pool.getConnection(function(err,connection){
			connection.query( sqlState,post,function(err, rows) {
				    if(err){
				    	callback(err)
				    }
				    callback(rows)
				    connection.release();
				    // Don't use the connection here, it has been returned to the pool.
			});

		})

	}
	if(type=="del"){
		
	}
	if(type=="upset"){
		
	}
	if(type=="find"){
		var id = obj.id;

		if(id==0){
			sqlState = 'SELECT * FROM `home`'
		}else{
			sqlState = 'SELECT * FROM `home` WHERE id = ' + connection.escape(id);
		}
		pool.getConnection(function(err,connection){
			connection.query( sqlState, function(err, rows) {
			    if(err){
			    	callback(rows)
			    }
			    callback(rows)
			    connection.release();
			    // Don't use the connection here, it has been returned to the pool.
			 });

		})

	}

}
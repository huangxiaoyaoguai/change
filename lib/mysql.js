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
 
connection.connect();
 
connection.query('select * from `xinjian`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].name);
});
 
connection.end();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	__webpack_require__(1);

	var express = __webpack_require__(2);
	var app = express();

	var callfile = __webpack_require__(3);

	var multiparty = __webpack_require__(4);
	var formidable = __webpack_require__(5);
	var compression = __webpack_require__(6);

	var aliUpimg = __webpack_require__(7);

	var co = __webpack_require__(8);
	var path = __webpack_require__(10);
	var connetsql = __webpack_require__(11);

	var bodyParser = __webpack_require__(13);
	app.use(bodyParser.urlencoded({ extended: false }));

	app.set("view engine", "ejs");
	app.set('views', './public');

	app.use(compression()); //gzip


	app.use('/dist', express.static('./dist/src'));
	app.use('/common', express.static('./common'));
	app.use('/common', express.static('common'));

	app.use('/client', express.static('./dist/client'));

	app.use('/', express.static('./dist/client'));

	app.get('/', function (req, res) {
		res.sendFile(path.resolve(__dirname, '../public/index.html'));
	});

	app.get('/add', function (req, res) {
		res.sendFile(path.resolve(__dirname, '../public/index.html'));
	});

	app.get('/detail/*', function (req, res) {
		res.sendFile(path.resolve(__dirname, '../public/index.html'));
	});

	function gettime(time) {
		var timedetail = new Date(+time);
		var timeresult = timedetail.getFullYear() + '.' + (timedetail.getMonth() + 1) + '.' + timedetail.getDate() + '.  ' + (timedetail.getHours() + 1) + ':' + (timedetail.getMinutes() + 1);
		return timeresult;
	}

	app.get('/api/getlist', function (req, res) {
		var obj = {};
		obj.id = 0;
		connetsql(obj, 'find', function (sqres) {
			var resresult = {};
			if (sqres.length) {
				resresult.code = 0;
				var clentarr = [];
				sqres.map(function (ele, i) {
					var obj = {};
					obj.tags = ele.tag.split(',');
					obj.title = ele.title;
					obj.desc = ele.desc;
					obj.id = ele.id;
					obj.creat_time = gettime(ele.creat_time);
					clentarr.push(obj);
				});
				resresult.data = clentarr.reverse();
			} else {
				resresult.code = -1;
				resresult.msg = "无此结果";
				resresult.data = sqres;
			}
			res.send(resresult);
			res.end();
		});
	});

	app.get('/api/getDetail', function (req, res) {
		connetsql(req.query, 'find', function (sqres) {
			var resresult = {};
			if (sqres.length) {
				resresult.code = 0;
				resresult.data = sqres[0];
				resresult.data.tags = resresult.data.tag.split(',');
				resresult.data.creat_time = gettime(resresult.data.creat_time);
			} else {
				resresult.code = -1;
				resresult.msg = "无此结果";
				resresult.data = sqres[0];
			}
			res.send(resresult);
			res.end();
		});
	});

	app.post('/api/add', function (req, res) {
		connetsql(req.body, 'add', function (sqres) {
			var obj = {};
			obj.code = 0;
			res.send(obj);
			res.end();
		}, function (file) {
			var obj = {};
			obj.code = -1;
			obj.msg = "保存失败";
			res.send(obj);
			res.send();
		});
	});

	app.get('/getapi', function (req, res) {
		res.send('sdasfasda,hhahha,新的来了,sdasdasfa,asdas');
	});

	app.all('/gitpull', function (req, res) {
		res.send('我不想备案,asdasda,asda1231231');
		callfile.exec('git pull', function (err, data) {
			if (err) {
				console.log(err);
				return;
			}
			callfile.exec('pm2 restart dist/server/app.js', function (err, data) {
				if (err) {
					console.log(err, 'err');
				}
			});
		});
	});

	app.post('/upimage', function (req, res, next) {

		var form = new multiparty.Form();

		form.parse(req, function (err, fields, files) {
			if (err) {
				console.log('parse error: ' + err);
			}
			var imgpath = files.upload[0].path;
			var name = files.upload[0].originalFilename;
			var data;
			var result = aliUpimg(name, imgpath, function (imgres) {
				var url = imgres.url.replace('http', 'https');
				res.send(url);
				res.end();
			});
		});
	});

	app.listen(6600, function (req, res) {

		console.log("localhost:6000");
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "lib"))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("child_process");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("multiparty");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("formidable");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("compression");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var co = __webpack_require__(8);
	var OSS = __webpack_require__(9);

	var client = new OSS({
		region: 'oss-cn-shanghai',
		accessKeyId: 'LTAIQOSGGZcTplJQ',
		accessKeySecret: 'wbqjEwf76dQ4XBSD0vPvcXLrct0Xkk'
	});

	function aliup(name, path, callback) {
		var aliresult;
		co(regeneratorRuntime.mark(function _callee() {
			var result;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							client.useBucket('huchsite');
							_context.next = 3;
							return client.put(name, path);

						case 3:
							result = _context.sent;

							aliresult = result;
							callback(aliresult);

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		})).then(function (resurt) {
			console.log(resurt, "gogogooogogogooggo");
		}).catch(function (err) {
			console.log(err);
		});
		console.log(aliresult);
		return aliresult;
	}

	module.exports = aliup;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("co");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("ali-oss");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var mysql = __webpack_require__(12);
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'hc000000',
		database: 'huchsite'
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

	module.exports = function (obj, type, callback, file) {
		if (!pool) {
			pool = mysql.createPool({
				connectionLimit: 10,
				host: 'localhost',
				user: 'root',
				password: 'hc000000',
				database: 'huchsite'
			});
		} else {}

		var sqlState = "";

		if (type == "add") {
			sqlState = 'INSERT INTO `home` SET ?';
			var post = {};
			post.title = obj.title;
			post.tag = obj.tag;
			post.data = obj.text;
			post.creat_time = +obj.time;
			post.desc = obj.desc;
			post.imgpath = obj.imgpath;
			pool.getConnection(function (err, connection) {
				connection.query(sqlState, post, function (err, rows) {
					if (err) {
						file(err);
					}
					callback(rows);
					connection.release();
					// Don't use the connection here, it has been returned to the pool.
				});
			});
		}
		if (type == "del") {}
		if (type == "upset") {}
		if (type == "find") {
			var id = obj.id;

			if (id == 0) {
				sqlState = 'SELECT * FROM `home`';
			} else {
				sqlState = 'SELECT * FROM `home` WHERE id = ' + connection.escape(id);
			}
			pool.getConnection(function (err, connection) {
				connection.query(sqlState, function (err, rows) {
					if (err) {
						callback(rows);
					}
					callback(rows);
					connection.release();
					// Don't use the connection here, it has been returned to the pool.
				});
			});
		}
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("mysql");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("body-parser");

/***/ })
/******/ ]);
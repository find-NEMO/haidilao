// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const cors=require("cors");
const history = require('connect-history-api-fallback');
//引入路由模块
var index = require('./routes/index');
var menu = require('./routes/menu');
var member=require("./routes/member")
var cart = require('./routes/cart');
var user = require('./routes/user');
//创建服务器
var app = express();
app.use(cors({
    origin:['http://localhost:4000',"http://localhost:8080", "http://121.36.9.253"], credentials: true
  }))
var server = app.listen(4000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},//过期时间ms
  resave:false,
  saveUninitialized:true
}));//将服务器的session，放在req.session中

// 引入静态页面
app.use(express.static(path.join(__dirname,"images")));
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/product",menu);
app.use("/member",member);
app.use("/cart",cart);
app.use("/user",user);

app.use(function(req, res, next) {
    next(createError(404));
  });
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json(err);
  });
  
  module.exports = app; 

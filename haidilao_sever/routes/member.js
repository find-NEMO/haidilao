const express=require("express");
var router=express.Router();
var pool=require("../pool");
console.log(111);

// 127.0.0.1:4000/member/mcarousel

// 未登录------>第二部分跳转 8个  /mto
router.get("/mto",(req,res)=>{
    console.log("跳转");
    var sql="SELECT tpic_n,ttitle FROM member_tiaozhuan";
    pool.query(sql,[],(err,result)=>{
      if(err) throw err;
      console.log(result);
      res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
      res.write(JSON.stringify(result));
      res.end();
    })
  });
// 已登录------->第二部分跳转
router.get("/mtoto",(req,res)=>{
    console.log("已登录的跳转");
    var sql="SELECT tpic_y,ttitle,tsubtitle0,tpic0 FROM member_tiaozhuan";
    pool.query(sql,[],(err,result)=>{
      if(err) throw err;
      console.log(result);
      res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
      res.write(JSON.stringify(result));
      res.end();
    })
  });
// 实现跳转到达Jump   /jump
router.get("/jump",(req,res)=>{
    console.log("已成功跳转到jump");
    var sql="SELECT ttitle,tsubtitle1,tsubtitle2,tsubtitle3,tsubtitle4 FROM member_tiaozhuan";
    pool.query(sql,[],(err,result)=>{
      if(err) throw err;
      console.log(result);
      res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
      res.write(JSON.stringify(result));
      res.end();
    })
  });

// 轮播图  /mcarousel
router.get("/mcarousel",(req,res)=>{
  console.log("会员");
  var sql="SELECT cpic FROM member_carousel";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
    res.write(JSON.stringify(result));
    res.end();
  })
});

console.log(222);
module.exports=router;
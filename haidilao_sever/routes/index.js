const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/carousel1",(req,res, next)=>{
  console.log(111);
  var sql="SELECT * FROM index_carousel1";
  pool.query(sql,[],(err,result)=>{
    if(err) return next(err);
    console.log(result);
    res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
    res.write(JSON.stringify(result));
    res.end();
  })
});
router.get("/topic",(req,res, next)=>{
  console.log(111);
  var sql="SELECT * FROM index_topic";
  pool.query(sql,[],(err,result)=>{
    if(err) return next(err);
    console.log(result);
    res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
    res.write(JSON.stringify(result));
    res.end();
  })
});
router.get("/goods",(req,res, next)=>{
  console.log(111);
  var sql="SELECT * FROM index_goods";
  pool.query(sql,[],(err,result)=>{
    if(err) return next(err);
    console.log(result);
    res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
    res.write(JSON.stringify(result));
    res.end();
  })
});
module.exports=router;

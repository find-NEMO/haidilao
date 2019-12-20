const express=require("express");
var router=express.Router();
var pool=require("../pool");
//功能一：商品类别显示
router.get("/type",(req,res, next)=>{
    var sql = " SELECT tname FROM hdl_ptype";
    pool.query(sql,(err,result)=>{
      if(err)return next(err);
      res.send({code:1,msg:"查询成功",data:result})
    })
    //x:json
  })
  //测试
  //启动服务器  node hdlapp.js
  //打开浏览器  
  //http://127.0.0.1:4000/product/type
  //http://127.0.0.1:4000/product/type?tid=2
  //http://127.0.0.1:4000/product/type?tid=3
  
  //功能二：商品显示
  router.get("/list",(req,res, next)=>{
    //1:参数  页码  一页几行
    var tno = req.query.tno;
    //x:sql
    var sql = " SELECT cid,ctitle,cpic,soutitle,price FROM hdl_cai WHERE tno=?";
    pool.query(sql,[tno],(err,result)=>{
      if(err)return next(err);
      res.send({code:1,msg:"查询成功",data:result})
    })
    //x:json
  })
  //测试
  //启动服务器  node hdlapp.js
  //打开浏览器  
  //http://127.0.0.1:4000/product/list
  //http://127.0.0.1:4000/product/list?tno=2
  //http://127.0.0.1:4000/product/list?tno=3
  
  //功能三：商品详情显示
  router.get("/detail/:cid",(req,res, next)=>{
    //1:参数  页码  一页几行
    var cid = req.params.cid;
    //x:sql
    var sql = " SELECT ctitle,cpic,soutitle,price,details FROM hdl_cai WHERE cid=?";
    pool.query(sql,[cid],(err,result)=>{
      if(err)return next(err);
      res.send({code:1,msg:"查询成功",data:result})
    })
    //x:json
  })
  //测试
  //启动服务器  node hdlapp.js
  //打开浏览器  
  //http://127.0.0.1:4000/product/detail
  //http://127.0.0.1:4000/product/detail/2
  //http://127.0.0.1:4000/product/detail/3
  
module.exports=router;

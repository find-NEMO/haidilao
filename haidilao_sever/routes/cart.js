const express=require("express");
var router=express.Router();
var pool=require("../pool");
// 功能一 添加购物车
// 1. get /addcart
router.get("/add",(req,res)=>{
    // 获取当前登录用户的uid
    var uid=1;
    // var uid=req.session.uid;
    // 如果用户没登录，返回错误信息
    // if(!uid){
    //   res.send({code:-2,msg:"请登录"});
    //   return;
    // }
    // 获取参数
    var cid=req.query.cid;
    var cname=req.query.cname;
    var price=req.query.price;
    var tid=req.query.tid;
    var cnt=req.query.cnt;
    // 查询用户是否购买过此商品
    var sql="SELECT id FROM hdl_cart WHERE uid=? AND cid=?";
    pool.query(sql,[uid,cid],(err,result)=>{
      if (err) throw err;
      if(result.length==0){
        // 如果没加购，添加产品
        var sql=`INSERT INTO hdl_cart VALUES (null,${cid},${price},1,'${cname}','${tid}',${uid})`;
      }else{
        // 加购了，更新数量
        if(cnt>0){
          var sql=`UPDATE hdl_cart SET count=count+${cnt} WHERE uid=${uid} AND cid=${cid}`;
        }else{
          cnt=0-cnt;
          var sql=`UPDATE hdl_cart SET count=count-${cnt} WHERE uid=${uid} AND cid=${cid}`;
        }
      }
      pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"修改成功"});
      })
    })
  })
  
  //测试
  //添加
  // http://127.0.0.1:4000/cart/add?cid=1&cname="5"&price=5&tid=1&cnt=1
  // 登录
  //http://127.0.0.1:4000/login?uname=tom&upwd=123
  // 再次添加
  // http://127.0.0.1:4000/addcart?lid=1&price=99&lname=apple

// 功能二 查询当前登录用户购物车信息
router.get("/list",(req,res)=>{
  // // 获取凭证的uid
  // var uid=req.session.uid;
  // if(!uid){
  //   res.send({code:-2,msg:"请登录"});
  //   return;
  // }
  // pool.query("DELETE FROM hdl_cart WHERE count=0",(err,result)=>{})
  var sql="SELECT id,cid,cname,price,count,tid FROM hdl_cart WHERE uid=1"
  pool.query(sql,(err,result)=>{
    if (err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
// 测试
// http://127.0.0.1:4000/cart/list
// 登录
//http://127.0.0.1:4000/login?uname=tom&upwd=123
// 再次查询
// http://127.0.0.1:4000/findcart?uid=1

// 功能三 删除一条记录
router.get("/del",(req,res)=>{
  // // 判断是否登录
  // if(!req.session.uid){
  //   res.send({code:-2,msg:"请登录"});
  // }
  var sql='DELETE FROM hdl_cart WHERE id=?';
  pool.query(sql,[req.query.id],(err,result)=>{
    if (err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"});
    }else{
      res.send({code:-1,msg:"删除失败"});
    }
  })
})

// 测试
// http://127.0.0.1:4000/cart/del?id=1
// 登录
//http://127.0.0.1:4000/login?uname=tom&upwd=123
// 再次删除
// http://127.0.0.1:4000/del?id=1


module.exports=router;



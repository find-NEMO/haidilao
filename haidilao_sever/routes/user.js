const express=require("express");
var router=express.Router();
var pool=require("../pool");
//用户账号密码验证
router.get("/loginp",(req,res)=>{
    //1:获取参数 uname upwd
    var phone = req.query.phone;
    var upwd = req.query.upwd;
    console.log(phone,upwd);
    //2:创建sql
    var sql =" SELECT id FROM haidilao_user WHERE phone = ? AND upwd = md5(?)";
    //3:发送sql并且结果返回脚手架
    pool.query(sql,[phone,upwd],(err,result)=>{
       //4:如果发生严重错误抛出
       if(err)throw err;
       //5:登录成功用户名密码有错
       console.log(result);
       if(result.length==0){
         res.send({code:-1,msg:"用户名或密码有误"})
       }else{
         //6:登录成功
         //7:将登录成功用户id保存
         //session对象作为登录成功凭据
         //result=[{id:1}]
         //不写req.session.id error
         //req.session.uid=result[0].id;
         res.send({code:1,msg:"登录成功"});
       }
    })
  })
  module.exports=router;
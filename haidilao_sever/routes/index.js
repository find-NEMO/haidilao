const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/carousel1",(req,res)=>{
  console.log(111);
  var sql="SELECT * FROM index_carousel1";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
    res.write(JSON.stringify(result));
    res.end();
  })
});

module.exports=router;

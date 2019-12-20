<template>
    <div>
        <div class="top">
            <router-link to="/enrollpage">
                <img src="../../../public/icon/icon_back.webp" alt="">
            </router-link>
            <span>我的捞币</span>
            <a class="tiaozhuan" href="">捞币规则</a>
         </div>
         <div class="border-1">
             <div class="ok">
                <span class="number">0</span>
                <span class="text-1">可用</span>
             </div>
             <div class="mx">
                 <a href="">捞币明细</a>
                 <img src="../../../public/icon/arrows.png" alt="">
             </div>
         </div>
         <div class="bq">
             <p>热兑好货</p>
             <div class="bq-1">
                 <span>去商城</span>
                 <img src="../../../public/icon/more_arrows.png" alt="">
             </div>
         </div>
         <div class="details">
             <div class="left">
                 <img src="../../../public/icon/bgm_test3.webp" alt="">
                 <span>海底捞口袋坚果1盒375克</span>
                 <div class="two-bi">
                    <img class="bi" src="../../../public/icon/coin_icon.png" alt="">
                    <span class="s1">1380</span>
                    <span class="s2">月兑6940笔</span>
                 </div>
             </div>
             <div class="right">
                 <p>去兑换</p>
             </div>
         </div>
         <div class="details">
             <div class="left">
                 <img src="../../../public/icon/bgm_test3.webp" alt="">
                 <span>海底捞口袋坚果1盒375克</span>
                 <div class="two-bi two-bi-2">
                    <img class="bi" src="../../../public/icon/coin_icon.png" alt="">
                    <span class="s1">1380</span>
                    <span class="s2">月兑6940笔</span>
                 </div>
             </div>
             <div class="right">
                 <p>去兑换</p>
             </div>
         </div>
         <div class="details">
             <div class="left">
                 <img src="../../../public/icon/bgm_test3.webp" alt="">
                 <span>海底捞口袋坚果1盒375克</span>
                 <div class="two-bi two-bi-3">
                    <img class="bi" src="../../../public/icon/coin_icon.png" alt="">
                    <span class="s1">1380</span>
                    <span class="s2">月兑6940笔</span>
                 </div>
             </div>
             <div class="right">
                 <p>去兑换</p>
             </div>
         </div>
         <div class="details">
             <div class="left">
                 <img src="../../../public/icon/bgm_test3.webp" alt="">
                 <span>海底捞口袋坚果1盒375克</span>
                 <div class="two-bi two-bi-4">
                    <img class="bi" src="../../../public/icon/coin_icon.png" alt="">
                    <span class="s1">1380</span>
                    <span class="s2">月兑6940笔</span>
                 </div>
             </div>
             <div class="right">
                 <p>去兑换</p>
             </div>
         </div>
    </div>
</template>
<style scoped>
.details{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    margin:15px 15px 0px 15px;
    border-bottom: 1px solid rgb(207, 207, 207);
}
.left>span{
    margin-left: 10px;
    font-size: 14px;
    line-height: 25px;
    vertical-align: top;
}
.right>p{
    color:white;
    border-radius: 1rem;
    width:70px;
    padding:3px 0px 3px 0px;
    background:linear-gradient(to right,#f42421,#fea651)
}
.two-bi{
   position: absolute;
   top:43%;
   left:24%;
}
.two-bi-2{
   top:55%;
}
.two-bi-3{
   top:67%;
}
.two-bi-4{
   top:80%;
}
.bi{
    width:20px;
    height:20px;
}
.two-bi>.s1{
    font-size: 13px;
    color:red;
}
.two-bi>.s2{
    margin-left:15px;
    font-size: 13px;
    color:grey;
}
.left>img{
    width:70px;
    height:50px;
}
.bq{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 15px;
    border-bottom: 1px solid rgb(207, 207, 207);
}
.bq-1>span{
    font-size: 14px;
     margin-right:5px;
}
.bq-1>img{
    width:6px;
}
.border-1{
    height:135px;
    background-image: url("../../../public/icon/coin_banner.png");
    background-repeat: no-repeat;
    background-size:100%;
    display: flex;
    justify-content: space-between;
    padding:0 40px 0 40px;
    align-items: center;
    
}
.ok{
    line-height:20px;
}
.text-1{
    padding:0px 0px 0px 10px;
    text-align: start;
}
.mx>a{
    color:white;
    font-size: 14px;
    text-decoration: none;
    margin-right:5px;
}
.mx>img{
    width:6px;
}
.number{
    font-size: 40px;
    font-weight: bold;
    color:white;
    vertical-align:top;
}
.text-1{
    color:white;
    font-size: 14px;
}
p{
    text-align: center;
    font-size: 14px;
    color:grey;
    margin-top:15px;
}
.top{
    padding:8px 20px 8px 20px;
    border-bottom:1px solid rgb(216, 216, 216);
}
.top>span{
    font-weight: bold;
    padding-left:33%;
    line-height: 26px;
    vertical-align: middle;
}
.top>a{
    color:#212529;
    font-size: 14px;
}
.top>.tiaozhuan{
    margin-left:74px;
    text-decoration: none;
}
.top>a>img{
    width:30px;
    height:30px;
}
</style>
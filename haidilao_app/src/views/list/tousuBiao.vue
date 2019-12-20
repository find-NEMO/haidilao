<template>
    <div>
        <div class="top">
            <router-link to="/enrollpage">
                <img src="../../../public/icon/icon_back.webp" alt="">
            </router-link>
            <span>我的投诉表扬</span>
         </div>
         <div class="span-2">
             <span><a href="">表扬</a></span>
             <span><a href="">投诉</a></span>
         </div>
         <div class="image-1">
             <img src="../../../public/icon/coin_empty.png" alt="">
         </div>
         <p>还没有任何表扬记录</p>
    </div>
</template>
<style scoped>
.image-1>img{
    width:100px;
    height:110px;
    margin-left:37%;
    margin-top:40%;
}
p{
    text-align: center;
    font-size: 14px;
    color:grey;
    margin-top:15px;
}
.span-2{
    text-align: center;
    background: white;
    line-height: 40px;
}
.span-2>span{
    padding:0px 40px;
    font-size: 14px;
}
.span-2>span a{
    color: #212529;
    text-decoration: none;
}
.top{
    padding:8px 20px 8px 20px;
    border-bottom:1px solid rgb(216, 216, 216);
}
.top>span{
    font-weight: bold;
    padding-left:27%;
    line-height: 26px;
    vertical-align: middle;
}
.top>a{
    color:#212529;
    font-size: 14px;
}
.top>a>img{
    width:30px;
    height:30px;
}
</style>
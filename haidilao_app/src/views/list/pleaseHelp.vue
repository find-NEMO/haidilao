<template>
    <div class="bg">
        <div class="top">
            <router-link to="/enrollpage">
                <img src="../../../public/icon/icon_back.webp" alt="">
            </router-link>
            <span>寻求帮助</span>
         </div>
         <div class="image-1">
             <img src="../../../public/icon/coin_empty_coin.png" alt="">
         </div>
         <p>暂无内容~</p>
    </div>
</template>
<style scoped>
.image-1>img{
    width:100px;
    height:110px;
    margin-left:35%;
    margin-top:30%;
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
    background: white;
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
.top>a>img{
    width:30px;
    height:30px;
}
.bg{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:#f0f0f0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
</style>
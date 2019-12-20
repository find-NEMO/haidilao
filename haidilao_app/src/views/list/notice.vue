<template>
    <div class="bg">
        <div class="top">
            <router-link to="/enrollpage">
                <img src="../../../public/icon/icon_back.webp" alt="">
            </router-link>
            <span>公告</span>
         </div>
         <div class="border-1">
             <p>海底捞餐饮有限责任公司征求合作伙伴</p>
             <p class="p1">2018-09-26 15:30:45</p>
         </div>
         <div class="border-1">
             <p>搬迁公告</p>
             <p class="p1">2018-08-16 13:59:47</p>
         </div>
         <div class="border-1">
             <p>关于我公司不加盟的声明</p>
             <p class="p1">2018-08-16 13:59:21</p>
         </div>
         <div class="border-1">
             <p>停业翻新公告</p>
             <p class="p1">2018-08-06 10:45:12</p>
         </div>
         <div class="border-1">
             <p>海底捞会员积分到期提醒</p>
             <p class="p1">2018-08-06 10:41:21</p>
         </div>
    </div>
</template>
<style scoped>
.border-1{
    margin:10px 15px;
    background:white;
    border-radius: 0.5rem;
    padding:10px;
}
.image-1>img{
    width:100px;
    height:110px;
    margin-left:35%;
    margin-top:30%;
}
.p1{
    font-size: 12px;
    color:#4d4d4d;
}
p{
    font-size: 14px;
    margin:5px 0px 5px 0px;
}
.top{
    padding:8px 20px 8px 20px;
    border-bottom:1px solid rgb(216, 216, 216);
    background: white;
}
.top>span{
    font-weight: bold;
    padding-left:38%;
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
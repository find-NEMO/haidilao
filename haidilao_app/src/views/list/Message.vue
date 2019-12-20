<template>
    <div>
        <div class="top">
            <router-link to="/enrollpage">
                <img src="../../../public/icon/icon_back.webp" alt="">
            </router-link>
            <span>消息</span>
         </div>
    </div>
</template>
<style scoped>
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
.top>a>img{
    width:30px;
    height:30px;
}
</style>
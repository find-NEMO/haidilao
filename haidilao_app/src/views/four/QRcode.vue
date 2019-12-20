<template>
    <div class="bg">
        <div class="top">
            <div class="head-image">
                <img src="../../../public/icon/my_pan_header.png" alt="">
            </div>
            <router-link to="/enrollpage">
                <img src="../../../public/icon/icon_back.webp" alt="">
            </router-link>
            <span>会员码</span>
        </div>
        <div class="border-1">
            <img src="../../../public/icon/test_qrcode.png" alt="">
            <p>二维码每60秒更新一次</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.head-image>img{
    z-index: 110;
    position:absolute;
    top:16%;
    right:40%;
    width:75px;
    height:75px;
}
.border-1>img{
    width:200px;
    height:200px;
    display:inline-block;
    margin-top:20%;
}
p{
    margin-top:14%;
    margin-bottom:0px;
    color:rgb(90, 90, 90);
    font-size: 14px;
}
.border-1{ 
    text-align: center;
    width:80%;
    height:55%;
    background:white;
    border-radius: 0.5rem;
    margin:100px auto;
    box-shadow:0px 0px 6px 6px rgba(0, 0, 0, 0.055);
}
.top{
    padding:8px 20px 8px 20px;
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
    background-image: url("../../../public/icon/public_qrcode_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
</style>
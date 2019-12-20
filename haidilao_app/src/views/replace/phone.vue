<template>
    <div class="bg">
        <div class="top">
            <router-link to="/replace">
                <img src="../../../public/icon/icon_back.webp" alt="">
            </router-link>
            <span>重新绑定</span>
        </div>
        <p>验证原手机号：</p>
        <div class="span-2">
            <span class="s1">+86</span>
            <span class="s2">18682383861</span>
        </div>
        <input type="text" placeholder="请输入验证码">
        <span class="s3"><a href="">获取验证码</a></span>
        <button>确定</button>
    </div>
</template>
<style scoped>
.s3>a{
    text-decoration: none;
    color:rgb(216, 54, 48);
    font-size: 14px;
}
.s3{
    position:absolute;
    top:110px;
    right:20px;
}
.span-2{
    margin:5px 0px 0px 20px;
}
.span-2>.s1{
    margin-right:20px;
    font-size: 14px;
    color:#6c7175;
}
.top{
    padding:8px 20px 8px 20px;
    border-bottom:1px solid #ebebeb;
}
.top>a{
    color:#212529;
    font-size: 14px;
}
.top>a>img{
    width:30px;
    height:30px;
}
.top>span{
    font-weight: bold;
    padding-left:30%;
    line-height: 26px;
    vertical-align: middle;
}
input{
    border:0px;
    width:100%;
    padding:18px 20px 12px 20px;
    font-size: 14px;
    border-bottom:1px solid #ebebeb;
    margin-bottom: 40px;
}
p{
    color:#212529;
    font-size: 12px;
    margin:5px 0px 0px 20px;
}
button{
    display: block;
    width:90%;
    color:white;
    margin: 0 auto;
    border: 0px;
    background: red;
    border-radius: 0.5rem;
    padding:8px;
    font-size: 14px;
}
</style>
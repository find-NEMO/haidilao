<template>
    <div>
        <div class="">
        <div class="top">
            <router-link to="/replace">取消</router-link>
            <span>个性签名</span>
        </div>
        <input type="text" placeholder="一句话介绍自己的兴趣爱好">
        <p>0</p>
        <button>确定</button>
    </div>
    </div>
</template>
<style scoped>
.top{
    padding:8px 20px 8px 20px;
    border-bottom:1px solid #ebebeb;
    background: white;
}
.top>a{
    color:#212529;
    font-size: 14px;
}
.top>span{
    font-weight: bold;
    padding-left:33%;
}
input{
    border:0px;
    width:100%;
    padding:8px 20px 40px 20px;
    font-size: 14px;
    margin-bottom: 40px;
}
p{
    position: absolute;
    right:20px;
    top:85px;
    color:#737373;
    font-size: 12px;
    text-align: center;

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
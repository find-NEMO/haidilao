<template>
    <div class="bg">
        <div class="top">
            <router-link to="/replace">取消</router-link>
            <span>修改用户名</span>
        </div>
        <input type="text" value="张张张">
        <p>1-25字符，仅支持中英文，数字或"_"，首位须为中英文或数字</p>
        <button>确定</button>
    </div>
</template>
<style scoped>
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
    padding-left:30%;
}
input{
    border:0px;
    width:100%;
    padding:8px 20px 8px 20px;
    font-size: 14px;
}
p{
    color:#737373;
    font-size: 12px;
    text-align: center;
    margin:5px 0px 50px 0px;
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
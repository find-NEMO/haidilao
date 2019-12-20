<template>
    <div class="bg">
        <div class="top">
            <router-link to="/replace">取消</router-link>
            <span>修改真实姓名</span>
        </div>
        <input type="text" placeholder="请输入真实姓名">
        <button>确定</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
          
        }
    }
}
</script>
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
    padding-left:30%;
}
input{
    border:0px;
    width:100%;
    padding:8px 20px 8px 20px;
    font-size: 14px;
    margin-bottom: 50px;
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
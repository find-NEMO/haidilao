<template>
    <div class="bg">
        <div class="top">
            <router-link to="/enrollpage">
                <img src="../../../public/icon/icon_back.webp" alt="">
            </router-link>
            <span>收藏夹</span>
         </div>
         <div class="span-2">
             <span><a href="">内容</a></span>
             <span><a href="">门店</a></span>
         </div>
         <div class="image-1">
             <img src="../../../public/icon/coin_empty.png" alt="">
         </div>
         <p>暂无收藏内容</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>
<style scoped>
.image-1>img{
    width:100px;
    height:110px;
    margin-left:35%;
    margin-top:50%;
}
p{
    text-align: center;
    font-size: 14px;
    color:grey;
    margin-top:15px;
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
    background: white;
}
.top>span{
    font-weight: bold;
    padding-left:34%;
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
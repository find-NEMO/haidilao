// 会员页 子组件 负责显示数据 Son
<template>
    <div>
        <div class="bg_img">
            <div class="flex1">
                <span class="haidilao">海底捞会员</span>
                <a href="" class="login">登录/注册</a>
            </div>
            <p class="more">登录享受多种权益</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        props:{
            leftTitle:"",
            button:"",
            bottomTitle:""
        }
    }
}
</script>

<style scoped>
    /* 海底捞会员 背景图片 */
    .bg_img{
        width:100%;height:200px;
        background-image:url(../assets/member/bg.png);
        background-size:contain;
        background-repeat:no-repeat;
        margin-top:30px;
    }
    /* 海底捞会员 文字 */
    .flex1{
        display:flex;
        justify-content:space-between;
    }
    .haidilao{
        margin:32px;
        color:#fff;
        font-weight:600;
    }
    .login{
        width:80px;height:25px;
        background:#fff;
        margin:32px;
        color:#f00;
        font-size:12px;
        text-align:center;
        line-height:25px;
        border-radius:25px;
    }
    .more{
        margin:-20px 30px;
        color:#fff;
        font-size:9px;
    }
</style>
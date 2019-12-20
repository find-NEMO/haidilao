<template>
    <div class="clearfixed">
        <table></table>
        <ul class="bg">
            <li class="shichong">失宠</li>
            <li class="wh">
                <img src="" alt="">
                <span>我的会员码</span>
            </li>
            <li class="left">
                <span class="size1">0</span>
                <span class="size2">捞币</span>
                <img src="" alt="">
            </li>
            <li class="right">NO.8620191216018780</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .clearfixed{
        /* margin-top:30px; */
    }
    .bg{
        background-image:url(../../assets/member/bg_login.png);
        width:100%;height:200px;
        background-repeat:no-repeat;
        background-size:contain;
        margin-top:30px;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
    }
    /* 上面左边 */
    .shichong{
        color:#fff;
        margin:38px 40px;
    }
    /* 上面右边 */
    .wh{
        width:110px;height:30px;
        text-align: center;
        line-height:30px;
        background:#fff;
        color:#f00;
        font-size:12px;
        margin:40px 30px 0 90px;
        border-radius:25px;
    }
    /* 下面字体 */
    .left{
        color:#fff;
        margin:-25px 0 13px 40px;
    }
    .size1{
        font-size:24px;
    }
    .size2{
        font-size:14px;
        margin-left:5px;
    }
    .right{
        color:#fff;
        font-size:13px;
        margin:-15px 30px 5px 0;
    }
</style>
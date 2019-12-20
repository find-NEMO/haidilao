<template>
    <div>
        <!-- 头 -->
        <div class="top">
            <router-link to=""><img src="../assets/member/member_details/left.png"></router-link>
            <p>消息</p>
        </div>
        <!-- 提示 -->
        <ul class="open" v-show="isShow">
            <li>
                <span>开启通知，避免错过排队进展、好友互动等重要信息。</span>
                <span>开启</span>
            </li>
            <li @click="quxiao">
                <img src="../assets/member/cha.png">
            </li>
        </ul>
        <!-- 主体 -->
        <ul class="container">
            <li class="one">
                <img src="../assets/member/tongzhi.png" alt="">
                <span>通知</span>
                <img class="img" src="../assets/member/right.png" alt="">
            </li>
            <li class="two">
                <img src="../assets/member/dianzan.png" alt="">
                <span>点赞</span>
                <img class="img" src="../assets/member/right.png" alt="">
            </li>
            <li class="three">
                <img src="../assets/member/pinglun.png" alt="">
                <span>评论</span>
                <img class="img" src="../assets/member/right.png" alt="">
            </li>
            <li  class="four">
                <img src="../assets/member/guanzhu.png" alt="">
                <span>关注</span>
                <img class="img" src="../assets/member/right.png" alt="">
            </li>
            <li>
                <img src="../assets/member/sixin.png" alt="">
                <span>私信</span>
                <img class="img" src="../assets/member/right.png" alt="">
            </li>
            <li>
                <img src="../assets/member/xiaoren.png" alt="">
                <span>客服</span>
                <img class="img" src="../assets/member/right.png" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:true
        }
    },
    methods:{
        quxiao(){
            this.isShow=false
        }
    }
}
</script>
<style scoped>
    /* 头 */
    .top{
        width:100%;height:50px;
        background:#fff;
        position:fixed;
        top:0;
    }
    .top img{
        width:10%;
        float:left;
        margin-top:8px;
    }
    .top p{
        margin-left:170px;
    }
    /* 提示 */
    .open{
        width:100%;height:30px;
        background:rgba(252, 137, 99, 0.137);
        clear:both;
        margin-top:50px;
        font-size:10px;
        color:#f00;
        line-height:30px;
        display:flex;
        justify-content:space-between;
    }
    .open li span:nth-child(1){
        margin-left:5px;
    }
    .open li span:nth-child(2){
        border:1px solid #f00;
        padding:0 5px;
    }
    .open li:last-child{
        display:flex;
        justify-content:center;
        align-items: center;
    }
    .open li img{
        width:45%;height:65%;
    }
    /* 主体 */
    .container li{
        width:96%;height:50px;
        border-bottom:1px solid rgba(228, 226, 226, 0.582);
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        align-items: center;
    }
    .container li img:first-child{
        width:10%;
    }
    .container li span{
        margin-left:-255px;
        font-size:14px;
    }
    .img{
        width:10px;height:12px;
        float:right;
        margin-right:8px;
    }
</style>
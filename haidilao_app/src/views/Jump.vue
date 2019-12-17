<template>
    <div>
        <table></table>
        <!-- 头 会员权益 -->
        <div class="top">
            <img src="../assets/member/member_details/left.png">
            <span>会员权益</span>
        </div>
        <!-- 中 图片 -->
        <div class="center">
            <img src="../assets/member/member_details/img12.png">
            <span>捞币换礼</span>
        </div>
        <!-- 下 -->
        <div>
            <!-- 特权介绍 -->
            <div class="b1">
                <p>
                    <img src="../assets/member/member_details/pic1.png">
                    <span>特权介绍</span>
                </p>
                <p class="p1">会员可在捞币商城中兑换产品</p>
            </div>
            <!-- 使用人群 -->
            <div  class="b1">
                <p>
                    <img src="../assets/member/member_details/pic2.png">
                    <span>特权介绍</span>
                </p>
                <p class="p1">会员可在捞币商城中兑换产品</p>
            </div>
            <!-- 使用方法 -->
            <div  class="b1">
                <p>
                    <img src="../assets/member/member_details/pic3.png">
                    <span>特权介绍</span>
                </p>
                <p class="p1">会员可在捞币商城中兑换产品</p>
            </div>
            <!-- 其他 -->
            <div  class="b1">
                <p>
                    <img src="../assets/member/member_details/pic4.png">
                    <span>特权介绍</span>
                </p>
                <p class="p1">会员可在捞币商城中兑换产品</p>
            </div>
        </div>
    </div>
</template>
<script>
import Jump01 from '../components/Jump01'
export default {
    components:{
        // 注册子组件
        "Jump01":Jump01,
    }
}
</script>
<style scoped>
    /* 上 */
    .top{
        border-bottom:1px solid #ccc;
        padding-bottom:38px;
    }
    .top img{
        width:10%;
        float:left;
    }
    .top span{
        float:left;
        margin:-30px 40%;
    }
    /* 中 */
    .center img{
        width:90%;
        margin:10px 10px;
        float:left;
    }
    .center span{
        float:left;
        margin:-100px 0 0 25px;
        color:#fff;
        font-size:20px;
        font-weight:700;
    }
    /* 下 */
    .b1{
        border-bottom:1px solid #ccc;
        width:90%;
        margin:0 10px;
    }
    .b1 p img{
        width:5%;
        vertical-align:middle;
    }
    .b1 p span{
        font-size:14px;
        font-weight:700;
        margin-left:5px;
    }
    .p1{
        font-size:10px;
        margin-left:20px;
    }
</style>
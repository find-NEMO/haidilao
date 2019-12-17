// 捞币可兑换多种大礼
<template>
    <div>
        <h4 class="h4">捞币可兑多种大礼</h4>
        <ul class="flex">
            <li class="bg1">
                <p>代金券</p>
                <p>抵用现金就餐更优惠</p>
            </li>
            <li class="bg2">
                <p>菜品类</p>
                <p>门店推荐菜品免费换</p>
            </li>
            <li class="bg3">
                <p>商品类</p>
                <p>更多好物任你兑</p>
            </li>
            <li class="bg4">
                <p>黑海专区</p>
                <p>专属礼品等你发现</p>
            </li>
        </ul>
        <div class="hengxian"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .h4{
        font-size:15px;
        margin-left:15px;
        margin-top:30px;
        }
    .flex{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        margin:0 10px;
        color:#fff;
    }
    .bg1{
        width:170px;height:82px;
        background-image:url(../assets/member/img001.png);
        background-size:contain;
        margin-right:10px;
    }
    .bg2{
        width:170px;height:82px;
        background-image:url(../assets/member/img0002.png);
        background-size:contain;
    }
    .bg3{
        width:170px;height:82px;
        background-image:url(../assets/member/img0003.png);
        background-size:contain;
        margin:15px 10px 0 0;
    }
    .bg4{
        width:170px;height:82px;
        background-image:url(../assets/member/img0004.png);
        background-size:contain;
        margin-top:15px;
    }
    p{
        font-size:15px;
        margin-bottom:-10px;
        margin-left:10px;
    }
    .hengxian{
        width:100%;height:5px;
        background:rgb(241,239,239);
        margin-top:15px;
    }
</style>
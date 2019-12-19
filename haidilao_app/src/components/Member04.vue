<template>
    <div class="clear">
        <ul>
            <li class="li1">
                <span>成长值 0</span>
                <span>含奖励成长值0</span>
            </li>
            <li class="li2">
                <span>等级规则</span>
                <img src="../assets/member/go.png">
            </li>
        </ul>
        <p class="p1">
            <span>当前等级：</span>
            <span>红海</span>
            <span>(持续享受到店服务可获得成长值)</span>
        </p>
        <!-- 滑块 -->
        <div class="d1"><img src="../assets/member/img_close.png" alt=""></div>
        <p class="d2">下月生效0</p>
        <!-- 文字 -->
        <p class="p2">本月成长值计算周期：2019年06月01日-2019年11月30日</p>
        <p class="p3">下月成长值计算周期：2019年07月01日-2019年12月31日</p>
        <div class="hengxian"></div>
    </div>
</template>
<style scoped>
    .clear{clear:both;}
    ul{
        margin:30px 15px;
        display:flex;
        justify-content:space-between;
    }
    .li1 span:first-child{
        font-size:17px;
        font-weight:600;
    }
    .li1 span:last-child{
        /* width:40px;height:8px; */
        background:#f00;
        font-size:8px;
        color:#fff;
        margin-left:5px;
        border-radius:25px 25px 25px 0;
    }
    .li2 span{
        font-size:9px;
        color:rgb(114, 105, 105);
    }
    .li2 img{
        width:6px;
        margin-left:5px;
    }
    .p1{
        margin:-20px 15px;
        font-size:9px;
        color:rgb(114, 105, 105);
    }
    .p1 span:nth-child(2){
        color:#000;
    }
    .p1 span:last-child{
        font-size:6px;
        margin-left:5px;
    }
    .d1{
        width:95%;height:10px;
        background:#ffbb53;
        margin-top:40px;
        border-radius:25px;
        margin:40px auto 0 auto;
    }
    .d1 img{
        width:25px;
        margin:-6px auto 0 170px;
    }
    .d2{
        width:60px;height:18px;
        color:#fff;
        background:#ffbb53;
        font-size:10px;
        border-radius:25px 0 25px 25px;
        margin-left:305px;
    }
    .p2,.p3{
        font-size:9px;
        margin-left:15px;
        color:rgb(114, 105, 105);
    }
    .p2{
        margin-top:20px;
        margin-bottom:-8px
    }
    .hengxian{
        width:100%;height:5px;
        background:rgb(241,239,239);
        margin-top:15px;
    }
</style>
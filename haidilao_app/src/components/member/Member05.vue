<template>
    <div>
        <ul>
            <li class="li1">
                <router-link to="/laobi">
                    <span>捞币 0</span>
                    <span>击败0%的用户</span>
                </router-link>
            </li>
            <li class="li2">
                <span>更多兑换</span>
                <img src="../../assets/member/go.png">
            </li>
        </ul>
        <!--  -->
        <ul class="flex">
            <li class="li11">
                <router-link to="/lunboDetail/2">
                    <img src="../../assets/member/food1.png" alt="">
                    <p>小龙虾一盒套装</p>
                    <p>
                        <span>999捞币</span>
                        <span>兑换677</span>
                    </p>
                </router-link>
            </li>
            <li class="li12">
                <img src="../../assets/member/food2.png" alt="">
                <p>海底捞口袋坚果</p>
                <p>
                    <span>1380捞币</span>
                    <span>兑换6411</span>
                </p>
            </li>
            <li class="li13">
                <img src="../../assets/member/food3.png" alt="">
                <p>海底捞 捞派虾滑</p>
                <p>
                    <span>1180捞币</span>
                    <span>兑换18</span>
                </p>
            </li>
        </ul>
        <!-- 分隔 -->
        <div class="hengxian"></div>
    </div>
</template>
<style scoped>
    div ul:first-child{
        margin:30px 15px;
        display:flex;
        justify-content:space-between;
    }
    .li1 span:first-child{
        font-size:17px;
        font-weight:600;
        color:#000;
    }
    .li1 span:last-child{
        font-size:8px;
        color:rgb(114, 105, 105);
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
    .flex{
        display:flex;
        justify-content:space-around;
    }
    .flex li{
        width:33.3%;
        
    }
    .flex li img{
        width:100%;
    }
    .flex li p:nth-child(2){
        font-size:14px;
        color:#000;
    }
    .flex li p:last-child{
        font-size:10px;
        margin-top:-10px;
        color:#000;
    }
    .flex li p:last-child span:first-child{
        color:#d8942e;
        margin-right:10px;
    }
    .li13{
        margin-top:10px;
    }
    .hengxian{
        width:100%;height:5px;
        background:rgb(241,239,239);
        margin-top:15px;
    }

</style>
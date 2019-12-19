<template>
    <div>
        <ul class="menuList">
            <li v-for="(cai,i) of rows" :key="i">
                <a href="">
                    <img :src="require(`../assets/menu/${cai.cpic}`)" alt="">
                </a>
                <p class="caiTitle">{{cai.ctitle}}</p>
                <!-- <van-icon name="add-o" color="#f00" class="iconPlus" size="3rem" /> -->
                <change-count class="count"></change-count>
                <p class="caiDes">
                    <span class="caitext">{{cai.soutitle}}</span>
                    <span class="price">¥{{cai.price}}</span>
                </p>
            </li>
        </ul>

    </div>
</template>
<script>
import changeCount from "./changeCount";
export default {
    components:{
        "change-count":changeCount
    },
    data() {
        return {
            rows:[
                {ctitle:"番茄火锅",cpic:"guodi/fanqie.jpg",soutitle:"一定要喝汤的番茄锅",price:72},
                {ctitle:"三鲜火锅",cpic:"guodi/sanxian.jpg",soutitle:"口感鲜香浓郁",price:72},
                {ctitle:"菌汤火锅",cpic:"guodi/juntang.jpg",soutitle:"菌菇慢火熬煮2小时",price:79},
                {ctitle:"清油麻辣火锅",cpic:"guodi/mala.jpg",soutitle:"香辣浓郁不油腻",price:82},
                {ctitle:"牛油麻辣火锅",cpic:"guodi/niuyou.jpg",soutitle:"慢火熬煮4小时",price:112},
            ]
        }
    },

    
}
</script>
<style scoped>
.menuList{
    display: flex;
    flex-wrap: wrap;
}
.menuList>li{
    width: 20rem;height: 20rem;
    position: relative;
    box-shadow: 0.3rem -0.3rem 1rem 0.2rem #333;
    border-radius: 1rem;
    margin: 1rem 1rem;
    overflow: hidden;
}
.menuList>li img{
    width: 100%;
    border-radius: 1rem;
}
.caiTitle{
    position: absolute;
    top: 1rem;left: 1rem;
    background: url("../assets/menu/icon/2019071617360947323.png") no-repeat 0 center;
    font-size: 1.2rem;
    color: #fff;
    line-height: 45px;
    padding-left: 1rem;
    margin: 0;
}

.caiDes{
    position: absolute;
    bottom: 0;
    width: 100%;
    /* background: #e60012; */
    background-image:-webkit-linear-gradient(bottom,#e60012 0%,#e60012 80%,rgba(0,0,0,0) 100%);
    color: #e60012;
    font-size: 1rem;
    margin: 0;
    display: flex;
    justify-content: space-around;
}
.caitext{
    /* background: #fff; */
    background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,0) 0%,#fff 20%,#fff 70%,rgba(0,0,0,0) 100%);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin: 0.5rem 0;
}
.price{
    color: #fff;
    font-size: 2.5rem;
}
.count{
    position: absolute;
    top: 1rem; right: 1rem;
    width: 35%;
}
</style>
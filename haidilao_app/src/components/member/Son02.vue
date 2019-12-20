<template>
    <div id="list">
        <ul class="flex">
            <li v-for="(p,i) of list" :key="i">
                <router-link to="/Jump">
                    <a href=""><img :src="axios.defaults.baseURL+p.tpic" alt=""></a>
                    <p><a href="">{{p.ttitle}}</a></p>
                </router-link>
            </li>
            <!-- <li>
                <router-link to="/Jump">
                    <a href=""><img src="../assets/member/img2.png" alt=""></a>
                    <p><a href="">生日赠礼</a></p>
                </router-link>
            </li>
            <li>
                <router-link to="/Jump">
                    <a href=""><img src="../assets/member/img3.png" alt=""></a>
                    <p><a href="">升级礼遇</a></p>
                </router-link>
            </li>
            <li>
                <router-link to="/Jump">
                    <a href=""><img src="../assets/member/img4.png" alt=""></a>
                    <p><a href="">线下活动</a></p>
                </router-link>
            </li>
            <li>
                <router-link to="/Jump">
                    <a href=""><img src="../assets/member/img5.png" alt=""></a>
                    <p><a href="">VIP专享</a></p>
                </router-link>
            </li>
            <li>
                <router-link to="/Jump">
                    <a href=""><img src="../assets/member/img6.png" alt=""></a>
                    <p><a href="">包间会议</a></p>
                </router-link>
            </li>
            <li>
                <router-link to="/Jump">
                    <a href=""><img src="../assets/member/img7.png" alt=""></a>
                    <p><a href="">黑海通道</a></p>
                </router-link>
            </li>
            <li>
                <a href=""><img src="../assets/member/img8.png" alt=""></a>
                <p><a href="">期待更多</a></p>
            </li> -->
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        var url = "member/mto";
        console.log(1);
        this.axios.get(url)
        .then(res=>{
            console.log(res.data);
            this.list=res.data;
        })
        .catch(err=>{console.log(err)})
    },
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
    .flex{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
    }
    img{
        width:50px;
        margin:0 15px;
    }
    p a{
        display:flex;
        justify-content:space-around;
        font-size:13px;
        color:#000;
        margin-top:-15px;
    }
</style>
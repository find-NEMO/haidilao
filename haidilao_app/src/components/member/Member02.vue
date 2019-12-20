<template>
    <div>
        <ul class="flex">
            <!-- <div id="list1"> -->
                <li v-for="(p1,i) of list1" :key="i">
                    <router-link :to="`/Jump/${p1.tid}`">
                        <img :src="axios.defaults.baseURL+p1.tpic_y" alt="">
                        <p><a href="">{{p1.ttitle}}</a></p>
                        <p class="close" v-show="i>1&&i<8">
                            <img :src="axios.defaults.baseURL+p1.tpic0">
                            <span>{{p1.tsubtitle0}}</span>
                        </p>
                    </router-link>
                </li>
            <!-- <li>
                <router-link to="/Jump">
                    <img src="../assets/member/img2.png" alt="">
                    <p><a href="">生日赠礼</a></p>
                </router-link>               
            </li> -->
            <!-- </div> -->
            
            <!-- <div id="list2"> -->
                <!-- <li v-for="(p2,i) of list2" :key="i">
                    <router-link to="/Jump">
                        <a href=""><img :src="axios.defaults.baseURL+p2.tpic_y" alt=""></a>
                        <p><a href="">{{p2.ttitle}}</a></p>
                        <p class="close">
                            <img :src="axios.defaults.baseURL+p2.tpic0">
                            <span>{{p2.tsubtitle0}}</span>
                        </p>
                    </router-link>
                </li> -->
            <!-- </div> -->
            <!-- <li>
                <a href=""><img src="../assets/member/img44.png" alt=""></a>
                <p><a href="">线下活动</a></p>
                <p class="close">
                    <img src="../assets/member/close.png">
                    <span>银海解锁</span>
                </p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img55.png" alt=""></a>
                <p><a href="">VIP专享</a></p>
                <p class="close">
                    <img src="../assets/member/close.png">
                    <span>银海解锁</span>
                </p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img66.png" alt=""></a>
                <p><a href="">包间会议</a></p>
                <p class="close">
                    <img src="../assets/member/close.png">
                    <span>银海解锁</span>
                </p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img77.png" alt=""></a>
                <p><a href="">黑海通道</a></p>
                <p class="close">
                    <img src="../assets/member/close.png">
                    <span>银海解锁</span>
                </p>
            </li> -->
            <!-- <li id="list3">
                <a href=""><img :src="axios.defaults.baseURL+list3.tpic_y" alt=""></a>
                <p><a href="">{{list3.ttitle}}</a></p>
            </li> -->
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list1:[]
        }
    },
    created(){
        var url = "member/mtoto";
        console.log(1);
        this.axios.get(url)
        .then(res=>{
            console.log(res.data);
            this.list1=res.data;
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
        float:left;
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
    .close{
        margin-top:-15px;
    }
    .close img{
        width:7px;
        margin:0;
        margin-left:10px;
    }
    .close span{
        font-size:5px;
        color:#ccc;
        margin-left:4px;
    }
</style>
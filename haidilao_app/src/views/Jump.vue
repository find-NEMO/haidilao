<template>
    <div id="list">
        <table></table>
        <!-- 头 会员权益 -->
        <div class="top">
            <router-link to="/Member">
                <img src="../assets/member/member_details/left.png">
            </router-link>
            <span>会员权益</span>
        </div>
        <div v-for="(p,i) of list" :key="i">
            <!-- 中 图片 -->
            <div class="center">
                <img src="../assets/member/member_details/img12.png">
                <span>{{p.ttitle}}</span>
            </div>
            <!-- 下 -->
            <div>
                <!-- 特权介绍 -->
                <div class="b1">
                    <p>
                        <img src="../assets/member/member_details/pic1.png">
                        <span>特权介绍</span>
                    </p>
                    <p class="p1">{{p.tsubtitle1}}</p>
                </div>
                <!-- 使用人群 -->
                <div  class="b1">
                    <p>
                        <img src="../assets/member/member_details/pic2.png">
                        <span>适用人群</span>
                    </p>
                    <p class="p1">{{p.tsubtitle2}}</p>
                </div>
                <!-- 使用方法 -->
                <div  class="b1">
                    <p>
                        <img src="../assets/member/member_details/pic3.png">
                        <span>使用方法</span>
                    </p>
                    <p class="p1">{{p.tsubtitle3}}</p>
                </div>
                <!-- 其他 -->
                <div  class="b1">
                    <p>
                        <img src="../assets/member/member_details/pic4.png">
                        <span>其他</span>
                    </p>
                    <p class="p1">{{p.tsubtitle4}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Jump01 from '../components/Jump01'
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        var url = "member/jump";
        console.log(1);
        this.axios.get(url)
        .then(res=>{
            console.log(res.data);
            this.list=res.data.slice(0,7);
        })
        .catch(err=>{console.log(err)})
    },
    methods:{

    },
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
        margin:10px 19px;
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
        margin:0 18px;
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
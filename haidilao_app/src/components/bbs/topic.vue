<template>

    <!-- 社区推荐页面组件容器 -->
    <div class='bbsRecommend'>

        <!-- 轮播导航 -->
        <mt-swipe class='bbsRC' :auto="2000">
            <mt-swipe-item v-for="(item,index) of carousellist" :key="index">
                <router-link :to='item.href'>
                    <img :src="item.img">
                </router-link>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 选项卡导航 -->
        <div class="otherbar">
            <div class="othercontainer">
                <div v-for="(item,index) of list" :key="index" class="otheritem">
                    <img :src="item.img">
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>

        <!-- 动态组件 -->
        <bbsmessage></bbsmessage>
    </div>

</template>
<script>

import bbsmessage from './bbsmessage'

export default {
    data(){
        return{
            active:'tab2',
            carousellist:[
                {href:'',img:require("../../assets/bbs/bbs_cimg0.png")},
                {href:'',img:require("../../assets/bbs/bbs_cimg1.png")},
                {href:'',img:require("../../assets/bbs/bbs_cimg2.png")},
                {href:'',img:require("../../assets/bbs/bbs_cimg3.png")},
                {href:'',img:require("../../assets/bbs/bbs_cimg4.png")},
                {href:'',img:require("../../assets/bbs/bbs_cimg5.png")}
            ],
            list:[
                {img:require("../../assets/bbs/bbs_icon01.png"),title:"海捞天地"},
                {img:require("../../assets/bbs/bbs_icon02.png"),title:"讨论专区"},
                {img:require("../../assets/bbs/bbs_icon03.png"),title:"投诉表扬"},
                {img:require("../../assets/bbs/bbs_icon04.png"),title:"最新活动"},
                {img:require("../../assets/bbs/bbs_icon05.png"),title:"短视频"},
                {img:require("../../assets/bbs/bbs_icon06.png"),title:"互助专区"},
            ],            
            topic:['/topic1','/topic1','/topic1','/topic1','/topic1','/topic1']
        }
    },
    methods:{},
    components:{
        "bbsmessage":bbsmessage
    }
}
</script>
<style scoped>

    /* 8个轮播导航 */
    .bbsRC{height:9rem;}
    .bbsRC img{height:9rem;}

    /* 其他 8个讨论导航 */
    .otherbar{padding:1rem 0.4rem;width:100%;}
    .othercontainer{display:flex;justify-content: space-between;width:130%;}
    .otheritem{display:flex;flex-direction: column;justify-content: center;align-items: center;width:100%;}
    .otheritem img{width:4rem;}
    .otheritem {font-size:0.8rem;color:#333333;}

</style>
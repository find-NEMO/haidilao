<template>
    <div>
        <div class='topbt'> <!--社区推荐导航第 1 行-->
            <b> <img src="../assets/bbs/map_search_search.webp"></b>
            <span>社区</span>            
            <b> <img class='top_act' src="../assets/bbs/icon_fb_xj.webp"></b>
        </div>

        <mt-navbar v-model='active' class='page-part'>
            <mt-tab-item id='tab1'>关注</mt-tab-item>
            <mt-tab-item id='tab2'>推荐</mt-tab-item>
            <mt-tab-item id='tab3'>杂烩</mt-tab-item>
            <mt-tab-item id='tab4'>达人</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model='active'>

            <mt-tab-container-item id='tab1'>
                <follow></follow>
            </mt-tab-container-item>

            <mt-tab-container-item id='tab2'>
                <topic></topic>
            </mt-tab-container-item>

            <mt-tab-container-item id='tab3'>
                <other></other>
            </mt-tab-container-item>

            <mt-tab-container-item id='tab4'>
                <expert></expert>
            </mt-tab-container-item>

        </mt-tab-container>    

<!--        
        <ul>                社区推荐导航第 2 行
            <li v-for='(item,index) of tlist' :key='index'
                @click='sel(index)' :class='{topActive:current==index}'
            >{{item.name}}</li>
        </ul>
-->
    </div>
</template>
<script>

import follow from '../components/bbs/follow'
import topic from '../components/bbs/topic'
import other from '../components/bbs/other'
import expert from '../components/bbs/expert'


export default {
    data(){
        return{
            active:'tab2'
        }
    },
    components:{
        "follow":follow,
        "topic":topic,
        "other":other,
        "expert":expert
    }
}
</script>
<style scoped>
    *{margin:0;padding:0;list-style: none;}

    /* 第 1行导航样式 */
    .topbt{display:flex;padding:3%;justify-content:space-between;align-items: center;}
    .topbt img{width:1.6rem;}
    span{font-size: 1.6rem;font-weight: bolder;}

    .mint-navbar .mint-tab-item {
        padding: 0.5rem 0;
        font-size: 15px;
        margin-bottom: 0.5rem;
    }

    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 0.09rem solid #e60012;
        color: #e60012;
        margin-bottom: 0.5rem;
    }
</style>
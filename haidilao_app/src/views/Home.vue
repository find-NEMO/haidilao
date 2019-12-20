<template>
    <div>
        
        <mt-tab-container v-model="active">
            <mt-tab-container-item id='tab1'>
                <index></index>
            </mt-tab-container-item>
            <mt-tab-container-item id='tab2'>
                <bbs></bbs>
            </mt-tab-container-item>
            <mt-tab-container-item id='tab3'>
                <member></member>
            </mt-tab-container-item>
            <mt-tab-container-item id='tab4'>
                <enrollpage></enrollpage>
            </mt-tab-container-item>
        </mt-tab-container>

        <mt-tabbar v-model='active' fixed>
            <mt-tab-item id='tab1' @click.native="changeSelect(0)">
                <tabbar
                :focused='currentIdx[0].isSelect'
                :selectedImage="require('../assets/bbs/main_navbar_home_select.webp')"
                :normalImage="require('../assets/bbs/main_navbar_home_normal.webp')"
                ></tabbar>
                首页
            </mt-tab-item>
            <mt-tab-item id='tab2' @click.native="changeSelect(1)">
                <tabbar
                :focused='currentIdx[1].isSelect'
                :selectedImage="require('../assets/bbs/main_navbar_explore_select.webp')"
                :normalImage="require('../assets/bbs/main_navbar_explore_normal.webp')"
                ></tabbar>
                社区
            </mt-tab-item>
            <mt-tab-item id='tab3' @click.native="changeSelect(2)">
                <tabbar
                :focused='currentIdx[2].isSelect'
                :selectedImage="require('../assets/bbs/main_navbar_associator_select.webp')"
                :normalImage="require('../assets/bbs/main_navbar_associator_normal.webp')"
                ></tabbar>
                会员
            </mt-tab-item>
            <mt-tab-item id='tab4' @click.native="changeSelect(3)">
                <tabbar
                :focused='currentIdx[3].isSelect'
                :selectedImage="require('../assets/bbs/main_navbar_mine_select.webp')"
                :normalImage="require('../assets/bbs/main_navbar_mine_normal.webp')"
                ></tabbar>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import bbs from './BBS'
import tabbar from '../components/bbs/tabbar'
import index from './Index'
import member from './Member'
import Enrollpage from './four/Enrollpage'
export default {
    data(){
        return{
            active:'tab1',
            currentIdx:[    //下标状态
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false},
            ]
        }
    },
    methods:{
        changeSelect(idx){
            for(var i=0;i<this.currentIdx.length;i++){
                if(i==idx){
                    this.currentIdx[i].isSelect=true;
                }else{
                    this.currentIdx[i].isSelect=false;
                }
            }
        }
    },
    components:{
        "bbs":bbs,
        "tabbar":tabbar,
        "index":index,
        "member":member,
        "enrollpage":Enrollpage
    }
}
</script>
<style scoped>
    .mint-tabbar > .mint-tab-item.is-selected {
        background-color: #eaeaea;
        color: #e60012;
    }
    .mint-tabbar > .mint-tab-item {
        background-color: #eaeaea;
        color: #999999;
    }
</style>
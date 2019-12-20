// 轮播图
<template>
    <div id="carousel">
        <mt-swipe :show-indicators="false">
            <mt-swipe-item v-for="(p,i) of carousel" :key="i">
                <img :src="axios.defaults.baseURL + p.cpic">
            </mt-swipe-item>
            <!-- <mt-swipe-item>
                <img src="../assets/member/lunbotu2.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/member/lunbotu3.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/member/lunbotu4.jpg">
            </mt-swipe-item> -->
        </mt-swipe>
        <div class="hengxian"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            carousel:[]
        }
    },
    methods:{
        
    },
    created(){
        var url = "member/mcarousel";
        console.log(1);
        this.axios.get(url)
        .then(res=>{
            console.log(res.data);
            this.carousel=res.data;
        })
        .catch(err=>{console.log(err)})
    }
}
</script>
<style scoped>
    #carousel{clear:both;}
    div{
        width:100%;
        height:100px;  
    }
    img{
        width:96%;
        margin:10px 8px;
    }
    .hengxian{
        width:100%;height:5px;
        background:rgb(241,239,239);
        margin-top:15px;
    }
</style>
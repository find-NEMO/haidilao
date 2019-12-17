// 轮播图
<template>
    <div>
        <mt-swipe :show-indicators="false">
            <mt-swipe-item>
                <img src="../assets/member/lunbotu1.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/member/lunbotu2.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/member/lunbotu3.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/member/lunbotu4.jpg">
            </mt-swipe-item>
        </mt-swipe>
        <div class="hengxian"></div>
    </div>
</template>
<script>
export default {
    methods:{
        
    }
}
</script>
<style scoped>
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
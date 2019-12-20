<template>
    <div class="bg">
        <div class="top">
            <router-link to="/enrollpage">
                <img src="../../../public/icon/icon_back.webp" alt="">
            </router-link>
            <span>公司简介</span>
         </div>
         <div class="image-1">
             <img src="../../../public/icon/my_about_logo.png" alt="">
         </div>
         <div class="border-1">
             <p>海底捞品牌创建于1994年，历经二十多年的发展，海底捞国际控股有限公司已经成长为国际知名的餐饮企业。</p>
             <p>截止2019年6月30日，海底捞已在中国（含香港、台湾地区）118个城市，以及新加坡、韩国、日本、美国、加拿大、英国、越南、马来西亚、澳大利亚等国家经营593家直营门店，拥有4380万会员</p>
             <p>海底捞多年来历经市场和顾客的检验，成功地打造出信誉度高，融汇各地火锅特色于一体的优质火锅品牌。作为一个业务涉及全球的大型连锁餐饮企业，海底捞秉承诚信经营的理念，以提升食品质量的稳定性和安全性为前提条件， 为广大消费者提供更贴心的服务，更健康、更安全、更营养和更放心的食品。</p>
         </div>
    </div>
</template>
<style scoped>
.border-1{
    background: white;
    border-radius: 0.5rem;
    box-shadow:0 0 10px rgb(216, 216, 216);
    width:90%;
    margin:0 auto;
    padding:20px 10px 10px 10px;
}
.image-1>img{
    width:85px;
}
.bg{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:#f0f0f0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
.image-1{
    text-align: center;
    margin:15px 0;
}
.top{
    padding:8px 20px 8px 20px;
    border-bottom:1px solid rgb(216, 216, 216);
    background: white;
}
.top>span{
    font-weight: bold;
    padding-left:33%;
    line-height: 26px;
    vertical-align: middle;
}
.top>a{
    color:#212529;
    font-size: 14px;
}
.top>a>img{
    width:30px;
    height:30px;
}
p{
    font-size: 14px;
}
</style>

<template>
    <div class="container">
        <router-link to="/qrcode" class="qr-code">
            <img src="../../../public/icon/erweima.png" alt="">
        </router-link>
        <div class="back-image">
            <img src="../../../public/icon/my_red_he_bg.png" alt="">
        </div> 
        <div class="head-image">
            <img src="../../../public/icon/my_pan_header.png" alt="">
        </div>
        <div class="user_view">
            <router-link to="/replace">
                <img src="../../../public/icon/my_editprofile.png" alt="">
            </router-link>
            <div class="vipname">
                <strong>{{name}}</strong>
                <div>
                    <img src="../../../public/icon/my_vip_red.png" alt="">
                </div>
            </div>
            <div class="laobi">
                <router-link to="/laobi">
                    0<span>捞币</span>
                </router-link>
                <router-link to="">
                    0<span>券</span>
                </router-link>
            </div>
        </div>
        <p>我的订单</p>
        <div class="one">
            <div class="testdiv">
                <router-link to="">
                    <img src="../../../public/icon/my_row_num_order.png" alt="">
                    <p>排号</p>
                </router-link>
            </div>
            <div class="testdiv">
                <router-link to="">
                    <img src="../../../public/icon/my_reserve_order.png" alt="">
                    <p>预定</p>
                </router-link>
            </div>
            <div class="testdiv">
                <router-link to="">
                    <img src="../../../public/icon/my_order_list.png" alt="">
                    <p>点餐</p>
                </router-link>
            </div>
            <div class="testdiv">
                <router-link to="">
                    <img src="../../../public/icon/my_deliver_order.png" alt="">
                    <p>外卖</p>
                </router-link>
            </div>
            <div class="testdiv">
                <router-link to="">
                    <img src="../../../public/icon/my_exchange_order.png" alt="">
                    <p>购物</p>
                </router-link>
            </div>       
        </div>
        <p>我的动态</p>
        <div class="two">
            <div class="icon icon1" @click="collect()">
                <div class="icon-left">
                    <img src="../../../public/icon/my_collect.png" alt="">
                    <router-link to="../list/collect">收藏夹</router-link>
                </div>
                <div class="icon-right">
                    <img src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
            <div class="icon" @click="pleasehelp()">
                <div class="icon-left">
                    <img src="../../../public/icon/my_community.png" alt="">
                    <router-link to="">社区</router-link>
                </div>
                <div class="icon-right">
                    <img src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
            <div class="icon" @click="message()">
                <div class="icon-left">
                    <img src="../../../public/icon/my_message.png" alt="">
                    <router-link to="../list/message">消息</router-link>
                </div>
                <div class="icon-right">
                    <img src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
        </div>
        <p>我的服务</p>
        <div class="three">
            <div class="icon icon1" @click="pleasehelp()">
                <div class="icon-left">
                    <img src="../../../public/icon/my_help.png" alt="">
                    <router-link to="../list/pleasehelp">寻求帮助</router-link>
                </div>
                <div class="icon-right">
                    <img src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
            <div class="icon" @click="tousubiao()">
                <div class="icon-left">
                    <img src="../../../public/icon/my_complained.png" alt="">
                    <router-link to="../list/tousubiao">投诉表扬</router-link>
                </div>
                <div class="icon-right">
                    <img src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
            <div class="icon">
                <div class="icon-left">
                    <img src="../../../public/icon/my_misslao.png" alt="">
                    <router-link to="">捞小秘</router-link>
                </div>
                <div class="icon-right">
                    <img src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
        </div>
        <p>关于海底捞</p>
        <div class="four">
            <div class="icon icon1" @click="haixuan()">
                <div class="icon-left">
                    <img src="../../../public/icon/my_zhengji.png" alt="">
                    <router-link to="">海选征集</router-link>
                </div>
                <div class="icon-right">
                    <img src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
            <div class="icon" @click="aboutqy()">
                <div class="icon-left">
                    <img src="../../../public/icon/my_about.png" alt="">
                    <router-link to="">关于企业</router-link>
                </div>
                <div class="icon-right">
                    <img src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
            <div class="icon" @click="notice()">
                <div class="icon-left">
                    <img src="../../../public/icon/my_news.png" alt="">
                    <router-link to="">公告</router-link>
                </div>
                <div class="icon-right">
                    <img src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
        </div>
        <div class="five" @click="aboutqy()">
            <div class="icon">
                <div class="icon-left">
                    <img src="../../../public/icon/my_setting.png" alt="">
                    <router-link to="">设置</router-link>
                </div>
                <div class="icon-right">
                    <img src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:"张张张"
        }
    },
    methods: {
        pleasehelp(){
            this.$router.push("/pleasehelp")
        },
        tousubiao(){
            this.$router.push("/tousubiao")
        },
        collect(){
            this.$router.push("/collect")
        },
        notice(){
            this.$router.push("/notice")
        },
        message(){
            this.$router.push("/message")
        },
        haixuan(){
            this.$router.push("/haixuan")
        },
        aboutqy(){
            this.$router.push("/aboutqy")
        }
    },
}
</script>
<style scoped>
.container{
    background: rgb(243, 243, 243);
    padding:0px;
}
.container>p{
    font-size: 14px;
    padding-left:15px;
    margin-bottom: 10px;
}
.icon>.icon-left>a{
    text-decoration: none;
}
.container>.user_view{
    margin:-110px 15px 0px 15px;
    /* padding:55px 15px 55px 15px; */
    margin-bottom:10px;
} 
.testdiv img{
    width:25px;
    height:25px;
}
.testdiv{
    margin:auto;
    text-align: center;
    font-size: 12px;
}
.testdiv>a{
    text-decoration: none;
    color:#212529;
}
.testdiv p{
    margin-top:4px;
    margin-bottom: 0px;
}
.one{
    display: flex;
    justify-content: center;
    width:100%;
    height:150px;
    background: white;
}
.one>span{
    font-size: 14px;
    display: inline-block;
    padding:0 20px 0 0;

}
.one{
    width:100%;
    height:80px;
    background: white;
    margin-bottom:10px;
}
.qr-code>img{
    z-index: 120;
    position: absolute;
    right:20px;
    top:20px;
    width:30px;
    height:30px;
} 
.user_view{
    background: rgba(255, 255, 255, 0.938);
    box-shadow:0 0 10px rgb(136, 136, 136);
    border-radius: 0.5rem;
    z-index: 100;
    position: relative;
    
}
.user_view>.laobi{
    border-top:1px solid rgb(224, 223, 223);
    display: flex;
    justify-content: space-between;
}
.user_view>.laobi>a{
    color: red;
    font-weight: bold;
    text-decoration: none;
    margin:0 50px;
    padding: 18px 0px 17px 0px;
}
.user_view>.laobi>a span{
    margin-left:5px;
    font-size: 13px;
    font-weight: normal;
    color: grey;
}
.user_view>a img{
    width:15px;
    height:15px;
    position: absolute;
    top:10px;
    right:20px;
}
.vipname{
    padding:50px 0px 15px 0px;
    text-align: center;
}
.vipname>strong{
    font-size: 18px;
}
.user_view>.vipname img{
    width:55px;
    height:18px;
    position: absolute;
    top:36%;
    right:25%;
}
.back-image>img{
    width:100%;
    height:200px;
    z-index: 10; 
}
.user_view>button{
    border:1px solid rgb(197, 10, 10);
    border-radius: 1.5rem;
    padding:8px 17px;
    background: transparent;
    color:rgb(197, 10, 10);
    font-weight: bold;
    display: block;
    margin:0 auto;
    justify-content: center;
}
.head-image>img{
    z-index: 110;
    position:absolute;
    top:55px;
    right:40%;
    width:75px;
    height:75px;
}
.two{
    width:100%;
    height:131px;
    background: white;
    margin-bottom:10px;
}
.icon>.icon-left img{
    width:22px;
    height:22px;
}
.icon-left a{
    font-size: 14px;
    padding-left:15px;
    color:#212529;
    line-height:1px;
    vertical-align:middle;
}
.icon>.icon-right img{
    width:10px;
    height:15px;
}
.icon{
    display: flex;
    justify-content: space-between;
    margin-left:15px;
    padding:8px 10px 10px 0px;
    border-top:1px solid rgb(216, 216, 216);
}
.icon1{
    border-top:0px;
}
.three{
    width:100%;
    height:131px;
    background: white;
    margin-bottom:10px;
}
.four{
    width:100%;
    height:131px;
    background: white;
    margin-bottom: 10px;
}
.five{
    width:100%;
    height:44px;
    background: white;
}
.five>.icon{
    border: 0px;
}
</style>
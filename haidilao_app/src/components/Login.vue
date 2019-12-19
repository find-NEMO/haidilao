<template>
<div class="bg">
    <div class="goback" @click="goback">
        <img src="../../public/img/go_back.png">
    </div>
    <div class="login">
        <div class="top">
            <img src="../../public/img/login_logo_img.png" class="img_1">
            <p class="p1">欢迎登陆海底捞</p>
            <p class="p2">
                <img src="../../public/img/red_box.png" class="img_2"><span>成为会员尊享更多权益</span>
            </p>
        </div>
        <div class="middle">
            <span>+86</span> <input class="i_1" type="text" placeholder="请输入手机号码" v-model="phone">
            
            <p>未注册的用户将直接创建账户</p>
            <input class="i_2" type="button" value="获取短信验证码"><br>
            <div>
                <router-link class="a" to="/loginp">密码登陆</router-link>
            </div>
        </div>
        <div class="bottom">
            <ul>
                <li>
                    <a href="">
                        <img src="../../public/img/public_wx_share.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../public/img/public_weibo.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../public/img/qq_icon.png" alt="">
                    </a>
                </li>
            </ul>
            <p>
                登陆注册表示同意<a href="">用户可使用协议、隐私政策</a>
            </p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            phone:""
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .bg{position:absolute;top:0;left:0; width:100%;height:100%;background:url('../../public/img/login_bg_img.png');background-repeat:no-repeat ;background-size:100% 100%;
    background-attachment: fixed;}
    .login{padding-left:19%;padding-top:20%;}
    .top>.p1{font-size: 18px;margin:0;margin-top:10px;}
    .img_1{width:55px;height:55px;}
    .img_2{width:17px;margin-top:5px;margin:0;margin-bottom:3px;}
    .top>.p2{font-size:12px;margin:7px 0 20px 0;}

    .middle>.i_1{border:0;padding-left:5px;font-size: 15px;height:40px;}
    .middle>p{border-top:1px solid #f4f4f4;width:250px;font-size:12px;color:#8d8d8d;margin-bottom: 40px;}
    .middle>.i_2{width: 240px;height: 45px;border-radius:20px;outline-style: none;border:0;font-size: 14px;color:#fefefe;}
    .middle>div{margin:15px 0 50px 85px;}
    .middle>div>.a{font-size:14px;color:#c6313d;}
    
    .bottom>ul{display:flex;justify-content: space-between;padding-right: 50px;}
    .bottom>ul>li>a>img{width:45px;height:45px;}
    .bottom>p{margin-top:30px;font-size: 12px;color:#6a6a6a;}
    .bottom>p>a{color:#db1721;}
    .goback>img{
    width:40px;
    height:40px;
    margin-bottom: -40px;
}
</style>
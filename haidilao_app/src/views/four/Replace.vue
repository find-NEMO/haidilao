<template>
    <div class="bg">
        <div class="">
            <div class="top">
                <router-link to="/enrollpage">
                    <img src="../../../public/icon/icon_back.webp" alt="">
                </router-link>
                <span>个人资料</span>
            </div>
        </div>
        <div class="text text1" @click="replaceHead()">
            <div>
                <p>头像</p>
            </div>
            <div class="img-two">
                <img class="img-1" src="../../../public/icon/my_pan_header.png" alt="">
                <img class="img-2" src="../../../public/icon/icongo_unevaluate.webp" alt="">
            </div>
        </div>
        <div class="text" @click="userName()">
            <div>
                <p>用户名</p>
            </div>
            <div>
                <p>张张张</p>
            </div>
        </div>
        <div class="text" @click="trueName()">
            <div>
                <p>真实姓名</p>
            </div>
            <div>
                <p>请填写</p>
            </div>
        </div>
        <div class="text" @click="sex()">
            <div>
                <p>性别</p>
            </div>
            <div>
                <p>请填写</p>
            </div>
        </div>
        <div class="text" @click="pleaseSelect()">
            <div>
                <p>收入范围</p>
            </div>
            <div>
                <p>请选择</p>
            </div>
        </div>
        <div class="text" @click="please()">
            <div>
                <p>活动范围</p>
            </div>
            <div>
                <p>请选择</p>
            </div>
        </div>
        <div class="text" @click="birthday()">
            <div>
                <p>生日</p>
            </div>
            <div>
                <p>请填写</p>
            </div>
        </div>
        <div class="text" @click="styleSign()">
            <div>
                <p>个性签名</p>
            </div>
            <div>
                <p>请填写</p>
            </div>
        </div>
        <div class="text-2">
            <div class="text" @click="phone()">
                <div>
                    <p>手机号码</p>
                </div>
                <div class="img-two">
                    <p></p>
                    <img class="img-2" src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
            <div class="text" @click="Emall()">
                <div>
                    <p>邮箱</p>
                </div>
                <div>
                    <p>请填写</p>
                </div>
            </div>
            <div class="text" @click="reviseUpwd()">
                <div>
                    <p>修改密码</p>
                </div>
                <div class="img-two">
                    <img class="img-2" src="../../../public/icon/icongo_unevaluate.webp" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        // replaceHead(){
        //     this.$router.push("")
        // },
        userName(){
            this.$router.push("/username")
        },
        Emall(){
            this.$router.push("/emall")
        },
        styleSign(){
            this.$router.push("/stylesign")
        },
        trueName(){
            this.$router.push("/truename")
        },
        phone(){
            this.$router.push("/phone")
        }
    },
}
</script>
<style scoped>
.text-2{
    margin-top:20px;
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
.text{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 10px 10px 10px;
    border-top:1px solid rgb(216, 216, 216);
    background: white;
}
.text1{
    border:0px;
}
.text p{
    font-size: 14px;
    margin:0px;
}
.img-two>.img-1{
    margin-right: 10px;
    width:40px;
    height:40px;
}
.img-two>.img-2{
    width:10px;
    height:15px;
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
</style>
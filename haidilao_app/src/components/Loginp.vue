<template>
  <div class="bg">
    <div class="goback" @click="goback">
        <img src="../../public/img/go_back.png">
    </div>
    <div class="login">
      <div class="top">
        <img src="../../public/img/login_logo_img.png" class="img_1" />
        <p class="p1">欢迎登陆海底捞</p>
        <p class="p2">
          <img src="../../public/img/red_box.png" class="img_2" />
          <span>成为会员尊享更多权益</span>
        </p>
      </div>
      <div class="middle">
        <span>+86</span>
        <input class="i_1" type="text" placeholder="请输入手机号码" 
        v-model="phone" />

        <input class="i_12" :type="this.registration_data.pwdType" placeholder="请输入密码" v-model="upwd"/>
        <img :src="this.registration_data.src" @click="changeType()" />
        <input :class="i" type="button" value="登陆" @click="login"/>
        <br />
        <div>
          <router-link class="router-link" to="/login">验证码登陆</router-link>
          <router-link class="router-link" to="/findpwd">忘记密码</router-link>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <a href>
              <img src="../../public/img/public_wx_share.png" alt />
            </a>
          </li>
          <li>
            <a href>
              <img src="../../public/img/public_weibo.png" alt />
            </a>
          </li>
          <li>
            <a href>
              <img src="../../public/img/qq_icon.png" alt />
            </a>
          </li>
        </ul>
        <p>
          登陆注册表示同意
          <a href>用户可使用协议、隐私政策</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registration_data: {
        pwdType: "password",
        src: require("../../public/img/close_password.png"),
      },
      phone:"",
      upwd:"",
      i:{
        i_2:true,
        i_3:false
      }
    };
  },
  methods: {
    changeType() {
      this.registration_data.pwdType =
        this.registration_data.pwdType === "password" ? "text" : "password";
      this.registration_data.src =
        this.registration_data.src == require("../../public/img/close_password.png")
          ? require("../../public/img/open_password.png")
          : require("../../public/img/close_password.png");
    },
    goback() {
        this.$router.go(-1)
    },
    login(){
      var reg1 = /^[1]([3-9])[0-9]{9}$/;
      var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      var phone = this.phone;
      var upwd = this.upwd;
      if(!reg1.test(phone)){
        this.$messagebox("信息","手机号格式不正确");
        return;
      }
      if(!reg2.test(upwd)){
        this.$messagebox("信息","密码格式不正确");
        return;
      }
      var url = "/user/loginp"
      var obj = {phone:phone,upwd:upwd}
      this.axios.get(url,{params:obj}).then(res=>{
        if(res.data.code==-1){
          this.$messagebox("消息","用户名或密码有误")
        }else{
          console.log(111);
          this.$router.push("/")}
      })
    },
    watch:{
      
    }
  }
};
</script>
<style scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../../public/img/login_bg_img.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
}
.login {
  padding-left: 19%;
  padding-top: 20%;
}
.top > .p1 {
  font-size: 18px;
  margin: 0;
  margin-top: 10px;
}
.img_1 {
  width: 55px;
  height: 55px;
}
.img_2 {
  width: 17px;
  margin-top: 5px;
  margin: 0;
  margin-bottom: 3px;
}
.top > .p2 {
  font-size: 12px;
  margin: 7px 0 20px 0;
}

.middle > .i_1 {
  border: 0;
  padding-left: 5px;
  font-size: 15px;
  width: 160px;
}
.middle > .i_12 {
  border: 0;
  padding-left: 5px;
  font-size: 15px;
  width: 200px;
  border-top: 1px solid #f4f4f4;
  margin-bottom: 40px;
  border-bottom: 1px solid #f4f4f4;
  margin-top: 5px;
  height: 45px;
  background:transparent;
}
.middle > img {
  width: 32px;
  height: 32px;
  margin-left:-20px;
}
.middle > .i_2 {
  width: 240px;
  height: 45px;
  border-radius: 20px;
  outline-style: none;
  border: 0;
  font-size: 14px;
  color: #fefefe;
}
.middle > .i_3 {
  width: 240px;
  height: 45px;
  border-radius: 20px;
  outline-style: none;
  border: 0;
  font-size: 14px;
  color: #fefefe;
  background-color:#f43b21;
}
.middle > div {
  margin: 15px 0px 50px 0px;
}
.middle > div > .router-link:first-child {
  font-size: 13px;
  color: #c6313d;
  margin-left: 4px;
}
.middle > div > .router-link:last-child {
  font-size: 13px;
  color: #888888;
  margin-left: 110px;
}

.bottom > ul {
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
}
.bottom > ul > li > a > img {
  width: 45px;
  height: 45px;
}
.bottom > p {
  margin-top: 30px;
  font-size: 12px;
  color: #6a6a6a;
}
.bottom > p > a {
  color: #db1721;
}
.goback>img{
    width:40px;
    height:40px;
    margin-bottom: -40px;
}
</style>
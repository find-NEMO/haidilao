<template>
  <div class="bg">
    <div class="goback" @click="goback">
        <img src="../../public/img/go_back.png">
    </div>
    <div class="findpwd">
      <p>找回密码</p>
      <span>+86</span>
      <input type="text" placeholder="请输入手机号码" />
      <br />
      <input type="text" placeholder="请输入验证码" />
      <br />
      <input type="text" placeholder="请输入新密码" />
      <br />
      <input :type="this.registration_data1.pwdType1" placeholder="请再次输入新密码" />
      <img class="i_1" :src="this.registration_data1.src" @click="changeType1()" />
      <br />
      <input :type="this.registration_data2.pwdType2" placeholder="确认修改" />
      <img class="i_1" :src="this.registration_data2.src" @click="changeType2()" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registration_data1: {
        pwdType1: "password",
        src: require("../../public/img/close_password.png")
      },
      registration_data2: {
        pwdType2: "password",
        src: require("../../public/img/close_password.png")
      }
    };
  },
  methods: {
    changeType1() {
      this.registration_data1.pwdType1 =
        this.registration_data1.pwdType1 === "password" ? "text" : "password";
      this.registration_data1.src =
        this.registration_data1.src ==
        require("../../public/img/close_password.png")
          ? require("../../public/img/open_password.png")
          : require("../../public/img/close_password.png");
    },
    changeType2() {
      this.registration_data2.pwdType2 =
        this.registration_data2.pwdType2 === "password" ? "text" : "password";
      this.registration_data2.src =
        this.registration_data2.src ==
        require("../../public/img/close_password.png")
          ? require("../../public/img/open_password.png")
          : require("../../public/img/close_password.png");
    },
    goback() {
      this.$router.go(-1)
  }
  },
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
  background-size: 100% 100%;
  background-attachment: fixed;
}
input {
  outline-style: none;
  border: 0;
  background-color: transparent;
  font-size: 14px;
  color: #9a9a9a;
  height: 50px;
  border-bottom: 1px solid #f4f4f4;
  width: 210px;
}
.findpwd {
  padding-left: 19%;
  padding-top: 38%;
}
.findpwd > p {
  font-size: 20px;
  color: #222222;
  margin-bottom: 33px;
}
.findpwd > span {
  margin-right: 10px;
  display: inline-block;
}
.findpwd > input:last-child {
  background-color: #cdcdcd;
  text-align: center;
  border-radius: 30px;
  margin-top: 40px;
}
.findpwd > input:last-child::-webkit-input-placeholder {
  color: #ffffff;
}
.i_1{
    width: 32px;
    height: 32px;
    margin-left:-20px;
}
.goback>img{
    width:40px;
    height:40px;
    margin-bottom: -40px;
}
</style>
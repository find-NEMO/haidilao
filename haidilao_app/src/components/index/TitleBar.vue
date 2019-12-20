<template>
  <div>
    <div id="bg">
      <div class="one">
        <router-link to="/IndexMessage"> <img src="../../assets/index/no_message_white.png" alt=""></router-link>
        <p> <input type="text" placeholder="搜索门店·内容·用户">
        <a href=""><img src="../../assets/index/laoxiaomi_icon.png" alt=""></a></p>
        <a href=""><img src="../../assets/index/laoxiaomi_kefu.png" alt=""></a>
        <a href=""><img src="../../assets/index/more_big.png" alt=""></a>
      </div>
      <div class="two">
        成为会员尊享更多权益
        <a href=""><img src="../../assets/index/sign_in.png" alt=""></a>
      </div>
      <div class="three">
        <button @click="login">登录/注册</button>
      </div>
      <!-- <div class="two0">
        <img src="../../assets/index/my_vip_red.png" alt="">
        <a href=""><img src="../../assets/index/sign_in.png" alt=""></a>
      </div>
      <div class="three0">
        <p><span>0</span>捞币</p>
        <p><span>0</span>券</p>
        <p>去兑换<img src="../../assets/index/coin_arrows_white.png" alt=""> </p>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  
  data(){
    return {

    }
  },
  methods:{
    login(){
      this.$router.push("/Login");
    }
  }
}
</script>
<style scoped>
 *{
  padding:0;
  margin:0;
}
#bg{
  background-image:url("../../assets/index/header_bg.png"); 
  background-size:100% 100%;
  padding:5px;
  font-size:14px;
  font-family: "Microsoft YaHei";
}
.one{
  display:flex;
  justify-content: space-around;
}
.one p{
  display:inline-block;
  width:195px;
  height:28px;
  background:url("../../assets/index/search_line_bg.png");
  background-size:100%;
  position: relative;
  border-radius:15px;
  top:10px;
  left:20px;
  margin-right:35px;
}
.one img{
  width:45px;
}
.one input{
  border:none;
  height:28px;
  padding-left:10px;
  background:rgba(0,0,0,0);
}
.one input+a img{
 position:absolute;
 width:25px;
 left:164px;
 top:3px;
}
input::-webkit-input-placeholder{
          color:#fd898c;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
          color:#fd898c;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
          color:#fd898c;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
          color:#fd898c;
}
.two{
  color:#fff;
  font-size:18px;
  padding-left:10px;
  font-weight: bold;
}
.two img{
  width:50px;
  position: relative;
  right:-110px;
  vertical-align: middle;
}
.three{
  margin-bottom:50px;
  padding-left:10px;
  padding-top:10px;
}
.three button{
  border:none;
  outline: 0;
  background:#fff;
  border-radius:15px;
  width:100px;
  height:30px;
  color:red;
  font-weight: bold;
}
.two0{
  display: flex;
  justify-content: space-around;
}
.two0>img:first-child{
  margin-left:10px;
  margin-right:238px;
  height:25px;
}
.two0 a>img{
  width:40px;
  vertical-align: bottom;
}
.three0{
  display:flex;
  justify-content: space-around;
  margin-bottom:50px;
  margin-top:20px;
  color:#fff;
  font-weight:bold;
}
.three0 span{
  font-size:30px;
}
.three0>p img{
  width:6px;
  margin:5px;
  vertical-align: middle;
}
.three0>p:last-child{
  margin-top:15px;
}
</style>

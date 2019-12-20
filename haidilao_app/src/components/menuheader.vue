<template>
    <div class="head">
        <van-icon :name="iconN" size="3rem" color="#fff" @click="toIndex"/>
        <img src="../assets/menu/icon/public_icon_300_300.png" alt="">
    </div>
</template>
<script>
export default {
    created() {
        this.changeIcon();
    },
    data() {
        return {
            iconN:"wap-home-o",
            toURL:"/home"
        }
    },
    methods: {
        toIndex(){
            this.$router.push(this.toURL);
        },
        changeIcon(){
            var arr=window.location.href.split("/");
            var url=arr[arr.length-1];
            console.log(url);
            if(url=="menu"){
                this.iconN="wap-home-o";
                this.toURL="/index";
            }
            if(url=="cart"){
                this.iconN="arrow-left";
                this.toURL="/menu";
            }

        }
    },
}
</script>
<style scoped>
.head{
    background: url("../assets/menu/icon/redeem_dish.png") no-repeat;
    background-size:cover;
    width: 100%; height:3rem;
    display: flex;
    justify-content: space-between;
    
}
.head img{height: 100%;}
</style>
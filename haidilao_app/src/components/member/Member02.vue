<template>
    <div class="clear">
        <ul class="flex">
                <li v-for="(p1,i) of list1" :key="i">
                    <router-link :to="`/Jump/${p1.tid}`">
                        <img class="img1" :src="axios.defaults.baseURL+p1.tpic_y">
                        <p><a href="">{{p1.ttitle}}</a></p>
                        <p class="close" v-show="i>1&&i<7">
                            <img :src="axios.defaults.baseURL+p1.tpic0">
                            <span>{{p1.tsubtitle0}}</span>
                        </p>
                    </router-link>
                </li> 
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list1:[]
        }
    },
    created(){
        var url = "member/mtoto";
        console.log(1);
        this.axios.get(url)
        .then(res=>{
            console.log(res.data);
            this.list1=res.data;
        })
        .catch(err=>{console.log(err)})
    },
    props:{
        props:{
            leftTitle:"",
            button:"",
            bottomTitle:""
        }
    }
}
</script>
<style scoped>
    .clear{clear:both;}
    .flex{
        clear:right;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
    }
    .img1{
        width:50px;
        margin:0 15px;
    }
    p a{
        display:flex;
        justify-content:space-around;
        font-size:13px;
        color:#000;
    }
    .close{
        clear:right;
        margin-top:-15px;
    }
    .close img{
        width:10px;
        /* margin:0 13px; */
        /* margin-left:-30px;  */
        /* padding-left:-20px; */
        /* margin-right:18px; */
    }
    .close span{
        font-size:5px;
        color:#ccc;
        
        
    }
</style>
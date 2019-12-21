<template>
    <div class="topic">
        <!-- title -->
        <div class="title">
            <h4>热门话题</h4>
            <a>更多话题<img src="../../assets/index/coin_go_black.png" alt=""> </a>
        </div>
        <!-- lunbo -->
        <div id="lunbo">
        <div :show-indicators="false">
            <div v-for="(item,i) of topic" :key="i"><a href=""><img :src="axios.defaults.baseURL + item.img_url" :alt="axios.defaults.baseURL">
                <p><span>{{item.b_title}}</span><span><img src="../../assets/index/topic_count.png" alt="">&nbsp;{{item.topic_count}}</span></p>
                <p>{{item.s_title}}</p>
            </a></div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      topic:[]
    }
  },
  created(){
    var url = "index/topic";
    console.log(2);
    this.axios.get(url).then(res=>{
      console.log(res.data);
      this.topic=res.data;
    })
  }
}
</script>
<style scoped>
    a{
      text-decoration: none;
    }
    .topic{
        height:400px;
        padding:5px;
        margin-top:15px;
    }
    .title{
        display:flex;
        justify-content: space-between;
        padding:0 5px;
    }
    h4{
        margin-bottom:10px;
    }
    .title a{
        margin-top:10px;
        font-size:12px;
    }
    .title img{
        width:5px;
        margin-left:5px;
    }
    #lunbo>div{
        width:300%;
        display:flex;
    }
    #lunbo>div>div{
        width:80%;
        margin-right:15px;
    }
    #lunbo a{
        display:block;
        background:#ddd;
    }
   #lunbo a img{
       width:100%;
   }
   #lunbo a p{
       margin:0;
       padding:0;
       padding:0 20px;
   }
   #lunbo a p:nth-child(2){
       color:#000;
       display:flex;
       justify-content: space-between;
       padding-top:10px;
   }
   #lunbo a p:nth-child(2) img{
       width:12px;
       height:14px;
       vertical-align:text-top;
   }
   #lunbo a p:nth-child(2) span:last-child,#lunbo a p:last-child{
       color:#666;
       font-size: 12px;
   }
  #lunbo a p:last-child{
      padding-bottom:15px;
  }
</style>

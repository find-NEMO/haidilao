<template>
    <div class="topic">
        <!-- title -->
        <div class="title">
            <h4>热门话题</h4>
            <a>更多话题<img src="../../assets/index/coin_go_black.png" alt=""> </a>
        </div>
        <!-- lunbo -->
        <div id="lunbo">
        <mt-swipe :show-indicators="false">
            <mt-swipe-item><a href=""><img src="../../assets/index/topic1.png" alt="">
                <p><span>#一句话总结2019#</span><span><img src="../../assets/index/topic_count.png" alt="">&nbsp;309</span></p>
                <p>年度总结大全</p>
            </a></mt-swipe-item>
            <mt-swipe-item><a href=""><img src="../../assets/index/topic2.png" alt="">
                <p><span>#一直瞒着妈妈的事#</span><span><img src="../../assets/index/topic_count.png" alt="">&nbsp;122</span></p>
                <p>有些事绝对不能跟妈妈说</p>
            </a></mt-swipe-item>
            <mt-swipe-item><a href=""><img src="../../assets/index/topic3.png" alt="">
                <p><span>#解辣应该喝什么#</span><span><img src="../../assets/index/topic_count.png" alt="">&nbsp;371</span></p>
                <p>又讲互动：你觉得哪个饮料跟火锅最配</p>
            </a></mt-swipe-item>
            <mt-swipe-item><a href=""><img src="../../assets/index/topic4.png" alt="">
                <p><span>#最想实现的新年愿#</span><span><img src="../../assets/index/topic_count.png" alt="">&nbsp;402</span></p>
                <p>转锦鲤不如我捞你啊</p>
            </a></mt-swipe-item>
        </mt-swipe>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>
<style scoped>
    .topic{
        height:300px;
        padding:5px;
    }
    .title{
        display:flex;
        justify-content: space-between;
        padding:0 10px;
    }
    h4{
        margin-bottom:10px;
    }
    .title a{
        margin-top:20px;
        font-size:12px;
    }
    .title img{
        width:5px;
        margin-left:5px;
    }
    #lunbo{
        height:380px;
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

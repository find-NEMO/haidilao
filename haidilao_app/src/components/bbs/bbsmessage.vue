<template>
    <!-- 动态 -->
    <div>

        <!-- 动态 个人信息 -->
        <div class='bbs-msg'>
            <div class='bbs-msg-icon'>   <!-- 左侧  头像 -->
                <img src="../../assets/bbs/bbs-msg-icon.png">
            </div>
            <div class='bbs-msg-right'>   <!-- 右侧 -->
                <div class='msg-top'>   <!-- 上层 -->
                    <div class="msg-name-div">   <!-- 上层左侧 -->
                        <p>bulingbuling</p>   <!-- 用户名 -->
                        <img src="../../assets/bbs/vip_1.png">
                    </div>
                    <div class='msg-share-div'>   <!-- 上层右侧 -->
                        <p>＋关注</p>
                        <p>···</p>
                    </div>
                </div>
                <p>签名</p> <!-- 下层 签名 -->
            </div>
        </div>

        <!-- 动态 内容 -->
        <div class='share-content'>
            <div class="share-text">   <!-- 动态 文字 -->
                <span>#大爷进来玩呀#</span>
                <span>海底总大队</span>
            </div>

            <div class='share-img'>   <!-- 动态 图片 -->
                <div>
                    <img src="../../assets/bbs/food-1.jpg">
                </div>
                <div>
                    <img src="../../assets/bbs/food-2.jpg">
                </div>
                <div>
                    <img src="../../assets/bbs/food-3.jpg">
                </div>
                <div>
                    <img src="../../assets/bbs/food-4.jpg">
                </div>
            </div>

            <!-- 动态 状态 -->

                
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    *{padding:0;margin:0;}

    /* 消息 个人信息 */
    .bbs-msg{padding:1%;display:flex;justify-content: space-between;}

    .bbs-msg-icon{width:12%;border:1px solid #e60012;border-radius: 50%;}
    .bbs-msg-icon img{width:100%;}

    .msg-top{display:flex;justify-content: space-between}

    .bbs-msg-right{width:85%;}
    .msg-name-div{display:flex;align-items: center;width:65%;overflow: hidden;flex-wrap:nowrap;}
    .msg-name-div img{width:12%;}

    .msg-share-div{display:flex;align-items: center;color:#e60012;}
    .msg-share-div p:first-child{border:0.05rem solid #e60012;border-radius: 1rem;padding:0.2rem 0.6rem;font-size: 0.8rem;}
    .msg-share-div p:last-child{font-weight: bolder;padding-left:0.2rem;font-size: 0.8rem;}

    .bbs-msg-right>p{font-size: 0.7rem;color:#888888;width:85%;overflow: hidden;}

    /* 信息 动态内容 */
    .share-content{width:100%;padding:1%;}
    .share-text{padding:0.1rem;}
    .share-text>span:first-child{color:#e60012;font-size: 0.8rem;}
    .share-text>span:last-child{color:#555;font-size: 0.8rem;}
    
    .share-img{ width:100%;}
    .share-img>div{     /* 设置图片的父元素 根据父元素的百分比宽度设置本身宽高相等 */
        float:left;
        width:31.33333333%;height:0;padding-bottom:31.33333333%;margin-top:1.5%;
        z-index: 1;
        position: relative;overflow: hidden;margin:1%;
    }
    .share-img img{position:absolute;top:0px;left:0px;margin-top:-50%;margin-left:-50%;     width:300%
    }

    /* 动态 状态 */
</style>
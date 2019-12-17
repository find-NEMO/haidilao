<template>
    <div>
        <ul class="flex">
            <li>
                <a href=""><img src="../assets/member/img1.png" alt=""></a>
                <p><a href="">捞币换礼</a></p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img2.png" alt=""></a>
                <p><a href="">生日赠礼</a></p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img33.png" alt=""></a>
                <p><a href="">升级礼遇</a></p>
                <p class="close">
                    <img src="../assets/member/close.png">
                    <span>银海解锁</span>
                </p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img44.png" alt=""></a>
                <p><a href="">线下活动</a></p>
                <p class="close">
                    <img src="../assets/member/close.png">
                    <span>银海解锁</span>
                </p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img55.png" alt=""></a>
                <p><a href="">VIP专享</a></p>
                <p class="close">
                    <img src="../assets/member/close.png">
                    <span>银海解锁</span>
                </p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img66.png" alt=""></a>
                <p><a href="">包间会议</a></p>
                <p class="close">
                    <img src="../assets/member/close.png">
                    <span>银海解锁</span>
                </p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img77.png" alt=""></a>
                <p><a href="">黑海通道</a></p>
                <p class="close">
                    <img src="../assets/member/close.png">
                    <span>银海解锁</span>
                </p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img8.png" alt=""></a>
                <p><a href="">期待更多</a></p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
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
    .flex{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
    }
    img{
        width:50px;
        margin:0 15px;
    }
    p a{
        display:flex;
        justify-content:space-around;
        font-size:13px;
        color:#000;
        margin-top:-15px;
    }
    .close{
        margin-top:-15px;
    }
    .close img{
        width:7px;
        margin:0;
        margin-left:10px;
    }
    .close span{
        font-size:5px;
        color:#ccc;
        margin-left:4px;
    }
</style>
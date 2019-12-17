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
                <a href=""><img src="../assets/member/img3.png" alt=""></a>
                <p><a href="">升级礼遇</a></p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img4.png" alt=""></a>
                <p><a href="">线下活动</a></p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img5.png" alt=""></a>
                <p><a href="">VIP专享</a></p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img6.png" alt=""></a>
                <p><a href="">包间会议</a></p>
            </li>
            <li>
                <a href=""><img src="../assets/member/img7.png" alt=""></a>
                <p><a href="">黑海通道</a></p>
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
</style>
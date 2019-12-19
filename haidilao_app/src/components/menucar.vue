<template>
    <main>
        <div class="carhead">
            <h3>购物车</h3>
            <a href="">
                <van-icon name="delete" />
                清空购物车
            </a>
        </div>
        <div class="carlist">
            <p>全锅底</p>
            <div>
                <p class="price">¥72</p>
                <p>
                    <a href="">－</a>
                    <span>1</span>
                    <a href="">＋</a>
                </p>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    main{width: 100%;}
    .carhead,.carlist,.carlist>div{
        display: flex;
        justify-content: space-between;
    }
    .carhead{background: #eee}
    .carhead>a{
        color: #9391a6;
        line-height: 62.75px;
    }
    .carlist>div{width: 40%;}
    .carlist .price{
        color: #f00;
        font-weight: bold;
    }
</style>
<template>
    <div class="count">
        <div v-show="count>0">
            <a href="javascript:;" @click="changeCount(-1)" class="del">-</a>
            <p>{{count}}</p>
        </div>
        <!-- <a href="javascript:;" @click="changeCount(1)" class="plus">+</a> -->
        <van-icon name="add" @click="changeCount(1)" class="plus" color="#f00" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            count:0
        }
    },
    methods: {
        changeCount(i){this.count+=i}
    }
    
}
</script>
<style scoped>
    .count{
        display: flex;
        justify-content: flex-end;
        font-size: 2rem;
        color: #fff;
    }
    .del{
        color: #f00;
        background:transparent;
        border:1px solid #f00;
        width: 25px;height: 25px;
        margin-top: 7.5px;
        border-radius: 50%;
        line-height: 25px;
        text-align: center;
    }
    .plus{
        border-radius: 50%;
        margin-top:5px;
    }
    .count p{
        margin: 0;
        text-align: center;
    }
    .count>div{
        display: flex;
    }

</style>
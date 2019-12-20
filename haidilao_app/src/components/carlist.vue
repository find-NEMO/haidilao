<template>
    <div class="body">
        <h3>确认订单</h3>
        <div class="carbox">
            <div v-for="(item,i) of $store.getters.getcarlist" :key="i" class="carlist">
                <p>{{item.cname}}</p>
                <p>{{item.count}}</p>
                <p class="price">¥{{item.count*item.price}}</p>
            </div>
        </div>
        <van-submit-bar
          :price="$store.getters.gettotalprice*100"
          button-text="提交订单"
          @submit="onSubmit"
        />
    </div>
</template>
<script>
export default {
    created() {
        this.$store.commit("showlist");
    },
    methods: {
        onSubmit(){}
    },
}
</script>
<style scoped>

    h3{
        margin: 1rem 1rem;
        padding:0 1rem;
    }
    .carbox{
        margin: 1rem 1rem;
        padding: 1rem;
        border:1px solid #ddd;
        height: 30rem;
        overflow: auto;
        border-radius: 1rem;
    }
    .carlist{
        border-bottom: 1px solid #9391a6;
        display: flex;
        justify-content: space-between;
        line-height: 41px;
        margin: auto;
    }
    .carlist>p{
        margin: 0;padding: 0;
    }
    .carlist>p:first-child{
        width: 45%;
    }

</style>
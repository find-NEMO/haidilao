<template>
    <div>
        <van-sidebar v-model="activeKey">
            <van-sidebar-item v-for="(tab,i) of tabs" :key="i" :title="tab" info="1">
            </van-sidebar-item>   
        </van-sidebar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeKey:0,
            tabs:["锅底","涮素菜","荤菜","小吃","甜品","特色饮品"]
        }
    },
}
</script>
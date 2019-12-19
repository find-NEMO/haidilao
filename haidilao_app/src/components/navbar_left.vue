<template>
    <div>
        <van-sidebar v-model="activeKey">
            <van-sidebar-item v-for="(tab,i) of tabs" :key="i" :title="tab" @click="show(i)">
            </van-sidebar-item>   
        </van-sidebar>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeKey:0,
            tabs:["锅底","捞派特色","肉类","海鲜","丸子","蔬菜","菌菇豆制","小吃甜品","特色饮品"],
            rows:[]
        }
    },
    methods: {
        show(i){
            var url="product/list";
            var obj={tno:i+1};
            this.axios.get(url,{params:obj})
            .then((res)=>{
                this.rows=res.data.data;
                console.log(this.rows);
            })

        }
    },
}

</script>

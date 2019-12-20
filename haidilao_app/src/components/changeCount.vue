<template>
    <div class="count" @click="changeCount">
        <div v-show="count>0">
            <a href="javascript:;" class="del">-</a>
            <p>0</p>
        </div>
        <van-icon name="add" class="plus" color="#f00" @click="addcart()"/>
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
        changeCount(e){
            var p;
            var i;
            if(e.target.className=="plus van-icon van-icon-add")
            {
                p=e.target.previousElementSibling.children[1];
                i=1;
            // }else if(e.target.className=="del"){
            //     p=e.target.nextElementSibling;
            //     i=-1;
            //     console.log(p.innerText);
            // }
            var url;
            var data;
            if(p.innerText==1){
                url="/cart/del",
                data={cid:this.cid}
            }else if(p.innerText==0){
                url="/cart/add";
                data={
                    cid:this.cid,
                    cname:this.cname,
                    price:this.price,
                    tid:this.tid,
                    cnt:i
                }
            }
            console.log(url,data);
            this.axios.get(url,{params:data})
            .then((res)=>{
                this.$store.commit("showlist");
            })
            }
        },
        addcart(){

        }
    },
    props:["cid","cname","price","tid"]
    
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
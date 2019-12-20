<template>
    <div>
        <p class="p_b">
            <span>会员须知</span>
            <img src="../../assets/member/right.png">
        </p>
        <p>
            <span>常见问题</span>
            <img src="../../assets/member/right.png">
        </p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    p{
        display:flex;
        justify-content:space-between;
        margin:10px 10px;
        font-size:14px;
    }
    img{
        width:10px;height:14px;
        margin-top:4px;
    }
    .p_b{
        border-bottom:1px solid rgb(226, 221, 221);
        padding-bottom:10px;
    }
</style>
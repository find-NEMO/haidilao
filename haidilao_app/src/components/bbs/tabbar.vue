<template>
    <div>   <!-- 根元素 -->
        <img :src="focused?selectedImage:normalImage" class="imgStyle">
    </div>
</template>
<script>
export default {
    props:{
        focused:false,
        selectedImage:{default:''},
        normalImage:{default:''}
    }
}
</script>
<style scoped>
    .imgStyle{width:2rem;height:2rem;}
</style>
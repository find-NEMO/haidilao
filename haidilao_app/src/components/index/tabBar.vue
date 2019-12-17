<template>
  <div>
    <h3>底部导航条</h3>
   <!-- <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle"/> -->
  </div>
</template>
<script>
export default {
  props:{
    focused:false,
    selectedImage:{default:""},
    normalImage:{default:""}
  }
}
</script>
<style scoped>
 .imgstyle{
   width:30px;
   height:30px;
 }
</style>

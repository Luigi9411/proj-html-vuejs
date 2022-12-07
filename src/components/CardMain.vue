<template>
   <div class="card-main">
    <img :src="article.src" :alt="article.src" class="photo-max img-fluid">
   </div>
</template>

<script>
export default {
  name: 'CardMain',
  props: {
    article: Object,
  },
};
</script>
<style lang="scss" scoped>
   .card-main{
    .photo-max{
       width: 100%;
    }
   }
</style>

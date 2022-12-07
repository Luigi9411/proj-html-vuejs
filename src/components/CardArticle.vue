<template>
  <div class="card">
    <img class="img-fluid" :src="article.src" :alt="article.src">
    <div>
      <h6><span class="fw-bold">{{article.button}}</span></h6>
      <h3>{{article.title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardArticle',
  props: {
    article: Object,
  },
};
</script>

<style lang="scss" scoped>
   .card{
    img{
      position: relative;
      width: 100%;
      filter: brightness(0.55);
    }
    div{
      position: absolute;
      left: 0;
      bottom: .5em;
      padding: 0 1em;
      h6{
        position: relative;
        span{
          background-color: #0088CC;
          color: white;
          padding: .4em .8em;
          font-size: .6em;
          border-radius: 2px;
          margin-bottom: 1em;
        }
      }
      h3{
        position: relative;
        font-size: .921em;
        font-weight: bold;
        color: white;
      }
    }
   }
</style>

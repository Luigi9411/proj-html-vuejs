<template>
  <div class="card-posts">
    <img class="img-fluid" :src="posts.src" :alt="posts.src">
    <div>
      <h6 class="fw-normal">{{posts.title}}</h6>
      <p class="fw-lighter">{{posts.date}}</p>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'CardPosts',
  props: {
    posts: Object,
  },
};
</script>

<style lang="scss" scoped>
    .card-posts{
      display: flex;
      margin-top: 1em;
      border-bottom: 1px solid #F1F1F1;
      img{
        position: relative;
        width: 13%;
        height: 2.5em;
        margin-right: .8em;
        margin-bottom: .8em;
      }
      div{
        h6{
          font-size: .7em;
          line-height: .3em;
          margin-top: .6em;
          color: black;
        }
        p{
        font-size: .6em;
        color: gray;
      }
    }
   }
   div:last-child{border-bottom:none;}
</style>

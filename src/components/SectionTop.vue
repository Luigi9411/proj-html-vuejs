<template>
   <section>
    <div class="container3">
      <CardArticle
          v-for="objArticle in arrArticle"
          :key="objArticle.title"
          class="card-article"
          :article="objArticle"
        />
    </div>
   </section>
</template>

<script>
import CardArticle from '@/components/CardArticle.vue';

export default {
  name: 'SectionTop',
  components: {
    CardArticle,
  },
  data() {
    return {
      arrArticle: [
        {
          src: 'images/blog-46.jpg',
          button: 'PHOTOGRAFY',
          title: 'How To Take Better Concert  Pictures in 30 Seconds',
        },
        {
          src: 'images/blog-47.jpg',
          button: 'GADGETS',
          title: 'Gadgets That Make Your Smartphone Even Smarter',
        },
        {
          src: 'images/blog-48.jpg',
          button: 'TRAVEL',
          title: '20 Top-Rated Tourist Attractions in Manhattan',
        },
        {
          src: 'images/blog-49.jpg',
          button: 'LIFESTYLE',
          title: 'The Best Way to Ride a Motorcycle',
        },
        {
          src: 'images/blog-50.jpg',
          button: 'TRAVEL',
          title: '5 Fun Things to Do at the Beach',
        },
        {
          src: 'images/blog-51.jpg',
          button: 'RECIPES',
          title: 'Amazingly Fresh Fruit And Herb Drinks For Summer',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
    section{
       background-color: #F7F7F7;
       height: 460px;
       .container3{
        margin: 0 auto;
        width: 1000px;
        display: flex;
        flex-wrap: wrap;
        padding: 2.5em 0;
        gap:1.5em;
        .card-article{
         flex: 1 0 30%;
        }
       }
    }
</style>

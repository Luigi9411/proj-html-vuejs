<template>
   <section class="container4">
      <div class="list">
          <div class="popular">
            <h5 class="fw-bold">POPULAR POSTS</h5>
            <CardPosts
              v-for="objPosts in arrPosts"
              :key="objPosts.title"
              :posts="objPosts"
             />
          </div>
          <div class="recent">
            <h5 class="fw-bold">RECENT POSTS</h5>
            <CardPosts
              v-for="objPosts in arrRecent"
              :key="objPosts.title"
              :posts="objPosts"
             />
          </div>
          <div class="featured">
            <h5 class="fw-bold pb-4">FEATURED POSTS</h5>
            <CardArticle
            v-for="objArticle in arrArticle"
            :key="objArticle.title"
            class="card-article"
            :article="objArticle"
            />
            <h5 class="fw-bold mt-4 pb-3">FEATURED AUTHOR</h5>
            <div>
              <img class="img-fluid" src="../../public/images/avatar.jpg" alt="">
              <div>
                <h6 class="fw-bold mt-2 mb-3">John Doe</h6>
                <p class="fw-lighter">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                  Nam viverra euismod odio,gravida pelle,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
      </div>
   </section>
</template>

<script>
import CardPosts from '@/components/CardPosts.vue';
import CardArticle from '@/components/CardArticle.vue';

export default {
  name: 'SectionBottom',
  components: {
    CardPosts,
    CardArticle,
  },
  data() {
    return {
      arrPosts: [
        {
          src: 'images/blog-55.jpg',
          title: 'Simply Ways to Have a Pretty Face',
          date: 'January 12,2019',
        },
        {
          src: 'images/blog-56.jpg',
          title: 'Ranking the greatest players in basketball',
          date: 'January 12,2019',
        },
        {
          src: 'images/blog-57.jpg',
          title: '4 Ways to Look Cool in Glasses',
          date: 'January 12,2019',
        },
        {
          src: 'images/blog-58.jpg',
          title: 'Top Camper Trailer Towing Tips',
          date: 'January 12,2019',
        },
        {
          src: 'images/blog-59.jpg',
          title: '5 Lovely Walks in New York',
          date: 'January 12,2019',
        },
      ],
      arrRecent: [
        {
          src: 'images/blog-65.jpg',
          title: 'Main Reasons To Stop Texting And Driving',
          date: 'January 12,2019',
        },
        {
          src: 'images/blog-661.jpg',
          title: 'Tips to Help You Quickly Prepare your Lunch',
          date: 'January 12,2019',
        },
        {
          src: 'images/blog-67.jpg',
          title: 'Why Should I buy  smartwatch?',
          date: 'January 12,2019',
        },
        {
          src: 'images/blog-68.jpg',
          title: 'The best augmented reality smartglasses',
          date: 'January 12,2019',
        },
        {
          src: 'images/blog-69.jpg',
          title: '12 Healthiest Foods to Eat for Breakfast',
          date: 'January 12,2019',
        },
      ],
      arrArticle: [
        {
          src: 'images/blog-66.jpg',
          button: 'RECIPES',
          title: 'Tips to Help You Quickly Prepare your Lunch',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
        .container4{
        height: 420px;
        margin: .3em auto;
        margin-bottom: 2em;
        width: 1000px;
        padding: 2.5em 0;
        .list{
         gap:1.5em;
         display: flex;
         .popular{
           flex: 1 0 25%;
           h5{
            font-size: .7em;
           }
         }
         .recent{
          flex: 1 0 25%;
          h5{
            font-size: .7em;
           }
         }
         .featured{
          flex: 1 0 25%;
          h5{
            font-size: .7em;
           }
           div{
           display: flex;
            .img-fluid{
               width: 32%;
               height: 6.5em;
               margin-right: 1em;
             }
             div{
              flex-direction: column;
              p{
                font-size: .54em;
                line-height: 2em;
              }
             }
           }
         }
        }
       }
</style>

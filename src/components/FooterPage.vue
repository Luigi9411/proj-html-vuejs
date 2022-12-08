<template>
  <footer>
     <ul>
        <li>
            <h5 class="footer-title fw-bold">ABOUT THE BLOG</h5>
            <p class="footer-paragrafy">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Donec eu <br> pulvinar magna semper scelerique.
            </p>
            <p class="footer-paragrafy">Praesent venenatis turpis vitae purus semper,
                eget sagittis velit <br> venenatis ptent taciti sociosqu ad litora...
            </p>
            <h6 class="view">VIEW MORE  <font-awesome-icon icon="fa-solid fa-chevron-right" /></h6>
        </li>
        <li>
            <h5 class="footer-title fw-bold">RECENT POSTS</h5>
            <CardFooterPosts
            v-for="objFooter in arrFooter"
            :key="objFooter.date"
            :office="objFooter"
            />
        </li>
        <li>
            <h5 class="footer-title fw-bold">RECENT COMMENTS</h5>
            <CardComments
            v-for="objComments in arrComments"
            :key="objComments.date"
            :comments="objComments"
            />
        </li>
        <li>
            <h5 class="footer-title fw-bold">CATEGORIES</h5>
            <ul class="categories">
              <li class="fw-bold list">GADGETS</li>
              <li class="fw-bold list">PHOTOGRAPHY</li>
              <li class="fw-bold list">LIFESTYLE</li>
              <li class="fw-bold list">FASHION</li>
              <li class="fw-bold list">RECIPES</li>
              <li class="fw-bold list">TRAVEL</li>
              <li class="fw-bold list">BUSINESS</li>
              <li class="fw-bold list">ARCHITECTURE</li>
              <li class="fw-bold list">REVIEWS</li>
              <li class="fw-bold list">SPORTS</li>
              <li class="fw-bold list">VIDEOS</li>
              <li class="fw-bold list">TECHNOLOGY</li>
              <li class="fw-bold list">DESIGN</li>
            </ul>
        </li>
     </ul>
  </footer>
</template>

<script>
import CardFooterPosts from '@/components/CardFooterPosts.vue';
import CardComments from '@/components/CardComments.vue';

export default {
  name: 'FooterPage',
  components: {
    CardFooterPosts,
    CardComments,
  },
  data() {
    return {
      arrFooter: [
        {
          src: 'images/our-office-4-square.jpg',
          paragrafy: 'Lorem ipsum dolor sit, consecteur adipiscing elit.',
          date: ' 12:53 AM Dec 19th',
        },
        {
          src: 'images/our-office-5-square.jpg',
          paragrafy: 'Lorem ipsum dolor sit, consecteur adipiscing elit.',
          date: ' 12:53 AM Dec 19th',
        },
      ],
      arrComments: [
        {
          name: ' John Doe ',
          commented: ' commented on ',
          paragrafy: ' lorem ipsum dolor sit amet. ',
          date: ' 12:55 AM Dec 19th',
        },
        {
          name: ' John Doe ',
          commented: ' commented on ',
          paragrafy: ' lorem ipsum dolor sit amet. ',
          date: ' 12:55 AM Dec 19th',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
    footer{

        min-width:90px;
        background: linear-gradient(to bottom,#212529 80%, #1C2023 20% 100%);
        ul{
            padding: 3em 0;
            padding-bottom: 5em;
            width: 1000px;
            margin: 0 auto;
            list-style: none;
            display: flex;
            justify-content: start;
            gap:1em;
            li{
              .footer-title{
                  color: white;
                    font-size: .7em;
                }
                .footer-paragrafy{
                  width: 310px;
                  font-size: .6em;
                  line-height: 2em;
                  color: #656667;
                }
                .view{
                  color: white;
                  font-size: .6em;
                }
                .categories{
                    color: white;
                    display: flex;
                    flex-wrap: wrap;
                    width: 140px;
                    gap:.2em;
                    margin-top: -2.5em;
                    .list{
                        background-color: black;
                        color: white;
                        padding: .6em .8em;
                        font-size: .4em;
                        margin-bottom: 1em;
                    }
                }
            }

        }
    }
</style>

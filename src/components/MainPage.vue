<template>
  <main>
      <div class="container6 row row-cols-2">
         <div class="col-9 max-photo">
           <div>
            <CardMain
            v-for="objMain in arrMain"
            :key="objMain.title"
            :article="objMain"
            />
            <div class="traveling">
                <img class="best-travel" src="../../public/images/blog-13.jpg" alt="error">
                <img class="best-travel" src="../../public/images/blog-16.jpg" alt="error">
                <img class="best-travel" src="../../public/images/blog-20.jpg" alt="error">
                <img class="best-travel" src="../../public/images/blog-23.jpg" alt="error">
                <img class="best-travel" src="../../public/images/blog-29.jpg" alt="error">
                <img class="best-travel" src="../../public/images/blog-40.jpg" alt="error">
            </div>
            <CardMain
            class="traveling-card"
            v-for="objMain in arrMain2"
            :key="objMain.title"
            :article="objMain"
            />
           </div>
           <ul>
            <li><font-awesome-icon class="icons-two" icon="fa-solid fa-chevron-left" /></li>
            <li class="number-white">1</li>
            <li class="number-blue">2</li>
            <li class="number-blue">3</li>
            <li><font-awesome-icon class="icons-two" icon="fa-solid fa-chevron-right" /></li>
           </ul>
         </div>
         <div class="col-3 min-photo">
          <h5 class="fw-bold">LATEST FROM TWITTER</h5>
          <div class="d-flex twitter-top">
            <font-awesome-icon class="twitter" icon="fa-brands fa-twitter" />
            <div>
              <p class="fw-lighter">if you have any suggestions
                                    for the next updates, let us know.</p>
              <div class="link-blue"> 01:05 PM Sep 18th</div>
            </div>
          </div>
          <div class="d-flex twitter-bottom">
            <font-awesome-icon class="twitter" icon="fa-brands fa-twitter" />
            <div>
              <p class="fw-lighter">We have just updated Porto Admin.
                                   Check the changelog for more information.
              </p>
              <div class="link-blue"> 01:04 PM Sep 18th</div>
            </div>
          </div>
          <h5 class="fw-bold mt-4">PHOTOS FROM INSTAGRAM</h5>
          <div class="img-istagram">
            <img
             class="istagram"
             src="../../public/images/29739607_2020680068220520_4509928046932787200_n.jpg"
             alt="error">
             <img
            class="istagram"
             src="../../public/images/30087804_253872848488989_8792603541668626432_n.jpg"
             alt="error">
             <img
            class="istagram"
             src="../../public/images/29415620_196477127626244_3250318472361541632_n.jpg"
             alt="error">
             <img
            class="img-fluid istagram"
             src="../../public/images/30078414_1274410412703843_8290935809419247616_n.jpg"
             alt="error">
             <img
            class="img-fluid istagram"
             src="../../public/images/30077195_2066750973610181_3733150062893596672_n.jpg"
             alt="error">
             <img
            class="img-fluid istagram"
             src="../../public/images/29415304_166583630713703_1032667922171953152_n.jpg"
             alt="error">
          </div>
          <h5 class="fw-bold mt-4">TAGS</h5>
          <ul class="ul-tags">
            <li class="fw-bold">DESING</li>
            <li class="fw-bold">BRANDS</li>
            <li class="fw-bold">VIDEO</li>
            <li class="fw-bold">BUSINESS</li>
            <li class="fw-bold">TRAVEL</li>
          </ul>
          <h5 class="fw-bold mt-4">FIND US ON FACEBOOK</h5>
          <div class="text-name">Okler Themes</div>
         </div>
      </div>
  </main>
</template>

<script>
import CardMain from '@/components/CardMain.vue';

export default {
  name: 'MainPage',
  components: {
    CardMain,
  },
  data() {
    return {
      arrMain: [
        {
          src: 'images/blog-54.jpg',
          date: '12',
          title: 'How To Make Friends as a Grown-Up',
          paragrafy: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisi, eu ornare mauris tincidunt vitae. [_]',
          utent: 'John Doe',
          folder: 'Lifestyle, Travel',
          comments: '12 Comments',
          button: 'READ MORE',
        },
        {
          src: 'images/blog-551.jpg',
          date: '12',
          title: 'Simple Ways to Have a Pretty Face',
          paragrafy: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisi, eu ornare mauris tincidunt vitae. [_]',
          utent: 'John Doe',
          folder: 'Lifestyle, Travel',
          comments: '12 Comments',
          button: 'READ MORE',
        },
        {
          src: 'images/blog-561.jpg',
          date: '12',
          title: 'Ranking the greatest players in basketball',
          paragrafy: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisi, eu ornare mauris tincidunt vitae. [_]',
          utent: 'John Doe',
          folder: 'Lifestyle, Travel',
          comments: '12 Comments',
          button: 'READ MORE',
        },
        {
          src: 'images/blog-581.jpg',
          date: '12',
          title: 'Top Camper Trailer Towing Tips',
          paragrafy: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisi, eu ornare mauris tincidunt vitae. [_]',
          utent: 'John Doe',
          folder: ' Travel, Lifestyle ',
          comments: ' 12 Comments ',
          button: 'READ MORE',
        },
      ],
      arrMain2: [
        {
          date: '8',
          title: '10 Best Travel Tips After 5 Years Traveling The World',
          paragrafy: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisi, eu ornare mauris tincidunt vitae. [_]',
          utent: 'John Doe',
          folder: ' Travel, Lifestyle ',
          comments: '12 Comments',
          button: 'READ MORE',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
      .container6{
        width: 1000px;
        height: 100px;
        margin: 0 auto;
        .max-photo{
           padding: 0 0;
           .traveling{
            display: flex;
            flex-wrap: wrap;
            margin-top: 3em;
            .best-travel{
              flex: 1 0 30%;
              max-width: 33.3%;
            }
           }
           .traveling-card{
            margin-top:-1.5em;
            margin-bottom: 2.5em;
           }
           ul{
            list-style: none;
            display: flex;
            justify-content: end;
            margin-bottom: 3.5em;
            li{
              cursor: pointer;
              padding: .3em .8em;
              border: .05em solid lightgray;
              font-size: .7em;
              .icons-two{
                color: #169de1;
                font-size: .7em;
              }
            }
            .number-white{
              color: white;
              background-color: #169de1;
            }
            .number-blue{
              color: #169de1;
            }
           }
        }
        .min-photo{
          margin-top: 3em;
          padding-left: 1.2em;
          padding-right: 0;
          height: 100px;
          h5{
            font-size: .7em;
            padding-bottom: .5em;
          }
          .twitter-top{
            .twitter{
              margin-top: .3em
            }
            p{
              font-size: .66em;
              line-height: 2em;
              margin-left: .8em;
            }
            .link-blue{
              font-size: .66em;
              color: #169de1;
              margin-top: -1.4em;
              padding-left: .8em;
              margin-bottom: 1.5em;
            }
          }
          .twitter-bottom{
            .twitter{
              margin-top: .3em
            }
            p{
              font-size: .66em;
              line-height: 2em;
              margin-left: .8em;
            }
            .link-blue{
              font-size: .66em;
              color: #169de1;
              margin-top: -1.4em;
              padding-left: .8em;
              margin-bottom: 1.5em;
            }
          }
          .img-istagram{
            display: flex;
            flex-wrap: wrap;
            .istagram{
              flex: 1 0 30%;
              max-width: 33.3%;
            }
          }
          .ul-tags{
            list-style-type: none;
            display: flex;
            padding: 0;
            li{
              background-color: black;
              color: white;
              padding: .2em .6em;
              font-size: .48em;
              border-radius: 12px;
              margin-right: .6em;
              margin-bottom: 5em;
            }
          }
          .text-name{
              color: #169de1;
              font-size: .8em;
              border-left: 4px solid #EEEEEE;
              padding: .6em 1em;
          }
        }
      }
</style>

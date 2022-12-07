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
           </div>
         </div>
         <div class="col-3 min-photo">
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
          date: '12 JAN',
          title: 'How To Make Friends as a Grown-Up',
          paragrafy: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisi, eu ornare mauris tincidunt vitae. [_]',
          utent: 'John Doe',
          folder: 'Lifestyle, Travel',
          comments: '12 Comments',
          button: 'READ MORE',
        },
        {
          src: 'images/blog-551.jpg',
          date: '12 JAN',
          title: 'How To Make Friends as a Grown-Up',
          paragrafy: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisi, eu ornare mauris tincidunt vitae. [_]',
          utent: 'John Doe',
          folder: 'Lifestyle, Travel',
          comments: '12 Comments',
          button: 'READ MORE',
        },
        {
          src: 'images/blog-561.jpg',
          date: '12 JAN',
          title: 'How To Make Friends as a Grown-Up',
          paragrafy: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisi, eu ornare mauris tincidunt vitae. [_]',
          utent: 'John Doe',
          folder: 'Lifestyle, Travel',
          comments: '12 Comments',
          button: 'READ MORE',
        },
        {
          src: 'images/blog-581.jpg',
          date: '12 JAN',
          title: 'How To Make Friends as a Grown-Up',
          paragrafy: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisi, eu ornare mauris tincidunt vitae. [_]',
          utent: 'John Doe',
          folder: 'Lifestyle, Travel',
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
        }
        .min-photo{
          background-color: blue;
          height: 100px;
        }
      }
</style>

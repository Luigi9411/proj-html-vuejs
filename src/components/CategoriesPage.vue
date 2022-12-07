<template>
  <div>
     <div class="containers5">
          <font-awesome-icon class="icons"
           icon="fa-solid fa-chevron-left" @click="removeActiveIndex()"  />
          <div v-for="(obj,i) in arrCategories" :key="obj.title"
           v-show="(i>activeIndex && i<=activeIndex+6)">
           <div>
             <h3 class="texts-categories">{{obj.title}}</h3>
           </div>
          </div>
          <font-awesome-icon class="icons"
          icon="fa-solid fa-chevron-right" @click="addActiveIndex()" />
     </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesPage',
  data() {
    return {
      activeIndex: 0,
      arrCategories: [
        {},
        {
          title: 'GADGETS',
        },
        {
          title: 'PHOTOGRAPHY',
        },
        {
          title: 'LIFESTYLE',
        },
        {
          title: 'FASHION',
        },
        {
          title: 'RECIPES',
        },
        {
          title: 'TRAVEL',
        },
        {
          title: 'DESIGN',
        },
        {
          title: 'BRANDS',
        },
        {
          title: 'VIDEO',
        },
        {
          title: 'BUSINESS',
        },
        {
          title: 'TECHNOLOGY',
        },
        {
          title: 'SPORTS',
        },
      ],
    };
  },
  methods: {
    addActiveIndex() {
      if (this.activeIndex >= 0 && this.activeIndex <= 5) {
        this.activeIndex += 1;
      }
    },
    removeActiveIndex() {
      if (this.activeIndex >= 1 && this.activeIndex < 13) {
        this.activeIndex -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
     div{
       background-color: #0088CC;
       height: 110px;
       .containers5{
        width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
          display: flex;
          align-items: center;
          height: 110px;
          cursor: pointer;
          .texts-categories{
              font-size: .8em;
              color: white;
              background-color: #212529;
              padding: 1em 2.5em;
              margin-top: .6em;
            }
        }
        .icons{
          font-size: .9em;
        }
       }
      }
</style>

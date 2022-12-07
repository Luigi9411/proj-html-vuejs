<template>
  <div>
     <div class="containers5">
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
          <div v-for="((obj,i)) in arrCategories" :key="obj.title">
            <h3>{{obj.title}}</h3>

          </div>

          <font-awesome-icon icon="fa-solid fa-chevron-right" />
     </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesPage',
  data() {
    return {
      activeIndex: 0,
      arrContain: [''],
      arrCategories: [
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
          title: 'GADGETS',
        },
        {
          title: 'SPORTS',
        },
      ],
    };
  },
  methods: {
    addObject(){
       this.arrCategories[this.activeIndex].title.push({
         if ()
       });
    }
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
        align-items: center;
        justify-content: space-between;
       }
      }
</style>

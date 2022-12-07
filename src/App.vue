<template>
  <div>
    <HeaderPage />
    <NavPage />
    <sectionTop />
    <sectionBottom />
    <CategoriesPage />
  </div>
</template>

<script>

import HeaderPage from '@/components/HeaderPage.vue';
import NavPage from '@/components/NavPage.vue';
import SectionTop from '@/components/SectionTop.vue';
import SectionBottom from '@/components/SectionBottom.vue';
import CategoriesPage from '@/components/CategoriesPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    NavPage,
    SectionTop,
    SectionBottom,
    CategoriesPage,
  },
};
</script>

<style lang="scss">
   @import "../node_modules/bootstrap/scss/bootstrap";
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
    }
    h3 {
      font-family: 'Roboto', sans-serif;
    }
</style>

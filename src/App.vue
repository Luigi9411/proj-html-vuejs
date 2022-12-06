<template>
  <div>
    <HeaderPage />
    <NavPage />
    <sectionOne />
  </div>
</template>

<script>

import HeaderPage from '@/components/HeaderPage.vue';
import NavPage from '@/components/NavPage.vue';
import SectionOne from '@/components/SectionOne.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    NavPage,
    SectionOne,
  },
};
</script>

<style lang="scss">
   @import "../node_modules/bootstrap/scss/bootstrap";
   @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
    }
    body {
      font-family: 'Roboto', sans-serif;
    }
</style>

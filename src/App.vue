<template>
  <div>
    <HeaderPage />
    <NavPage />
  </div>
</template>

<script>

import HeaderPage from '@/components/HeaderPage.vue';

import NavPage from '@/components/NavPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    NavPage,
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

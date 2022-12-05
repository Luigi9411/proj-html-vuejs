<template>
  <div>
    <HeaderPage />
  </div>
</template>

<script>

import HeaderPage from '@/components/HeaderPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
  },
};
</script>

<style lang="scss">
   @import "../node_modules/bootstrap/scss/bootstrap";
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
</style>

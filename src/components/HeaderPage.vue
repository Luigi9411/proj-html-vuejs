<template>
   <header>
      <div class="container1">
         <ul>
          <li>Everything about Lifestyle, Travel and Godgets!</li>
          <li>SIGN IN</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>BUY NOW</li>
         </ul>
      </div>
      <div class="logo">
            <img
            class="img-fluid"
             src="img/logo-default-slim.png"
             alt="">
      </div>
   </header>
</template>

<script>
export default {
  name: 'HeaderPage',
};
</script>

<style lang="scss" scoped>
  header{
    .container1{
      background-color: #0088CC;
      ul{
        width: 1100px;
        margin: 0 auto;
        display: flex;
        height: 5vh;
        gap: 1em;
        align-items: center;
        list-style-type: none;
        color: white;
        font-size: .6em;
        li{
           cursor: pointer;
        }
      }
    }
    .logo{
      height: 15vh;

    }
  }
</style>

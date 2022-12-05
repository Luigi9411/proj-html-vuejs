<template>
   <header>
      <div class="container">
         <ul>
          <li>Everything about Lifestyle, Travel and Godgets!</li>
          <li>SIGN IN</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>BUY NOW</li>
         </ul>
      </div>
      <div class="logo">

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
    .container{
      width: 1100px;
      margin: 0 auto;
      background-color: #0088CC;
      height: 5vh;
      ul{
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

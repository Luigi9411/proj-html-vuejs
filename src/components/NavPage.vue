<template>
  <nav>
    <div class="container2">
        <ul>
         <li class="blu-color">HOME</li>
         <li>ELEMENTS</li>
         <li>FEATURES</li>
         <li>PAGES</li>
         <li>PORTFOLIO</li>
         <li>BLOG</li>
         <li>SHOP</li>
        </ul>
        <div><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavPage',
};
</script>

<style lang="scss" scoped>
   nav{
     border-top: 1px solid lightgray;
     .container2{
       width: 1000px;
       margin: 0 auto;
       display: flex;
       justify-content: space-between;
       height: 6vh;
       ul{
        display: flex;
        height: 6vh;
        gap: 3em;
        align-items: center;
        list-style-type: none;
        font-size: .8em;
        font-weight: bold;
        padding-left: 0;
        .blu-color{
          color: #0088CC;
        }
       li:hover{
          color: #0088CC;
          cursor: pointer;
       }
     }
     div{
        align-self: center;
        font-size: .8em;
     }
     div:hover{
          color: #0088CC;
          cursor: pointer;
       }
    }
   }
</style>

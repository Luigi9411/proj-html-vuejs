<template>
   <div>
    <img class="img-fluid" :src="office.src" :alt="office.src">
    <div class="cont-paragrafy">
      <p>{{office.paragrafy}}</p>
      <div class="footer-dates">{{office.date}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFooterPosts',
  props: {
    office: Object,
  },
};
</script>

<style lang="scss" scoped>
    div{
        display: flex;
        img{
            border-radius: 100%;
            width: 22%;
            height: 22%;
            padding: 0.5em 0;
        }
        .cont-paragrafy{
            flex-direction: column;
            padding-left: 1em;
            p{
                color: #ADAFB0;
                font-size: .6em;
                width: 159px;
                padding-top: .5em;
            }
            .footer-dates{
               color: #656667;
               font-size: .5em;
               margin-top: -1em;
            }
        }
    }
</style>

<template>
    <div>
        <div class="text-paragrafy">
          <font-awesome-icon class="chevron" icon="fa-solid fa-chevron-right" />
          <span class="name fw-bold">{{comments.name}}</span>
          <span class="commented">{{comments.commented}}</span>
          <span class="paragrafy fw-bold">{{comments.paragrafy}}</span>
        </div>
        <div class="date">{{comments.date}}</div>
   </div>
 </template>

<script>
export default {
  name: 'CardComments',
  props: {
    comments: Object,
  },
};
</script>

 <style lang="scss" scoped>
     div{
         margin-bottom: 1.5em;
         .text-paragrafy{
           font-size: .6em;
           width: 240px;
              .chevron{
                color: #169de1;
                font-size: .7em;
              }
              .name{
                color: #C5C6C7;
              }
              .commented{
                color: #ADAFB0;
                line-height: 3em;
              }
              .paragrafy{
                color: #169de1;
              }
            }
            .date{
               color: #656667;
               font-size: .6em;
               margin-top: -1em;
            }
     }
 </style>

<template>
   <div class="card-main">
    <img :src="article.src" :alt="article.src" class="photo-max img-fluid">
    <div class="d-flex">
      <div class="date">
         <h3 class="number-date">{{article.date}}</h3>
         <div class="month">JAN</div>
      </div>
      <div>
        <h2>{{article.title}}</h2>
        <p class="paragrafy fw-lighter">{{article.paragrafy}}</p>
        <div class="d-flex text-link">
          <div class="user">
          <font-awesome-icon class="fa-users" icon="fa-regular fa-user" />
          <span class="fw-lighter text-by"> By </span>
          <span class="text-utent"> {{ article.utent }} </span>
          </div>
          <div class="folder">
           <font-awesome-icon class="fa-folder" icon="fa-regular fa-folder" />
           <span class="text-folder"> {{ article.folder }} </span>
          </div>
          <div class="comments">
           <font-awesome-icon class="fa-comments" icon="fa-regular fa-comments" />
           <span class="text-comments">{{ article.comments }}</span>
          </div>
          <h3> {{ article.button }}</h3>
         </div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'CardMain',
  props: {
    article: Object,
  },
};
</script>
<style lang="scss" scoped>
   .card-main{
      margin-top: 3em;
    .photo-max{
       width: 100%;
    }
    div{
      .date{
         flex-direction: column;
         margin-right: 1.5em;
         margin-top: 1em;
         height: 3.8em;
         width: 2.4em;
         background: linear-gradient(to bottom,#F7F7F7 70%, #212529 30% 100%);
         .number-date{
            text-align: center;
            font-size: .8em;
            padding: 0 .8em;
            padding-top: 1.2em;
         }
         .month{
            color: white;
            font-size: .6em;
            padding: .6em .8em;
         }
      }
      div{
           h2{
             margin-top: .8em;
             font-size: 1.3em;
           }
           .paragrafy{
             font-size: .66em;
             line-height: 2em;
             margin-top: 1.6em;
           }
           .text-link{
              position: relative;
              border-bottom: 1px solid #F1F1F1;
              padding-bottom: 1.5em;
             .user{
                .fa-users{
                  font-size: .7em;
                  color: gray ;
                }
                .text-by{
                  font-size: .7em;
                }
                .text-utent{
                  font-size: .7em;
                  color: #169de1;
                  cursor: pointer;
                  padding-right: 1em;
                }
             }
             .folder{
                .fa-folder{
                  font-size: .7em;
                  color: gray ;
                }
                .text-folder{
                  font-size: .7em;
                  color: #169de1;
                  cursor: pointer;
                  padding-right: 1em;
                }
             }
             .comments{
                .fa-comments{
                  font-size: .7em;
                  color: gray ;
                  padding-right: .3em;
                }
                .text-comments{
                  font-size: .7em;
                  color: #169de1;
                  cursor: pointer;
                  padding-right: 1em;
                }
             }
             h3{
               position: absolute;
               top: 1em;
               right: 0;
               font-size: .5em;
               padding: .5em .5em;
               border: 1px solid lightgrey;
               border-radius: 3px;
               color: rgb(182, 182, 182);
               cursor: pointer;
             }
           }
      }
    }
   }
</style>

<template>
  <div class="tagFoto">
      <router-link :to="{name: 'Profil'}">
        <div class="tilbageKnap">
          <i class="fas fa-arrow-left"></i> TILBAGE
        </div>
      </router-link>
      <div class="tag-foto-div">
       Tag foto her!
      </div>
    </div>
</template>

<script>
  export default {
    name: 'TagFoto',
    data() {
      return {
  
      }
    },
    methods: {
      tagEtFoto() {
        console.log("Tag et foto");
      }
    },
    created() {
  
    }
  }
</script>

<style lang="scss">
@import "./src/styles/main.scss";

  .tagFoto {
    width: 100vw;
    height: 100vh;
    background-color: #D67AD3;
    background-image: linear-gradient(#D67AD3, #9769D4);
    position: relative;
  
   .tilbageKnap {
    font-family: 'Montserrat';
    font-weight: 700;
    @include buttonSize(.2);
    letter-spacing: 2px;
    text-align: left;
    color: white;
    border-radius: 25px;
    width: 31vw;
    padding: 4px 4px;
    margin: 2vh;
    position: absolute;
  }
   .tag-foto-div{
   @include flexCenter();
    color: white;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 15px;
  }
  .fa-backward {
    color: white;
  }
  
   a {
    text-decoration: none;
  }
   }

</style>